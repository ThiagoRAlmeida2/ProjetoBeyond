const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const app = express();

app.use(express.json());
app.use(cors());

// Configuração do Firebase Admin SDK
const serviceAccount = require('Api/serviceAccontKey.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'your-firebase-project-id.appspot.com'
});

const db = admin.firestore();
const bucket = admin.storage().bucket();

// Configurar o multer para lidar com uploads de arquivos
const upload = multer({
    storage: multer.memoryStorage()
});

// Rota para criar um novo post
app.post('/posts', upload.single('image'), async (req, res) => {
    try {
        const { title, text } = req.body;
        const id = uuidv4();

        let imageUrl = '';
        if (req.file) {
            const blob = bucket.file(`images/${id}`);
            const blobStream = blob.createWriteStream({
                metadata: {
                    contentType: req.file.mimetype
                }
            });

            blobStream.on('error', (err) => {
                res.status(500).send({ error: err.message });
            });

            blobStream.on('finish', async () => {
                imageUrl = await blob.getSignedUrl({
                    action: 'read',
                    expires: '03-01-2500'
                });

                const post = {
                    id,
                    title,
                    text,
                    image: imageUrl[0]
                };

                await db.collection('posts').doc(id).set(post);
                res.status(201).json(post);
            });

            blobStream.end(req.file.buffer);
        } else {
            const post = {
                id,
                title,
                text,
                image: ''
            };

            await db.collection('posts').doc(id).set(post);
            res.status(201).json(post);
        }
    } catch (error) {
        res.status(400).send('Erro ao criar post: ' + error.message);
    }
});

// Rota para obter todos os posts
app.get('/posts', async (req, res) => {
    try {
        const snapshot = await db.collection('posts').get();
        const posts = [];
        snapshot.forEach(doc => {
            posts.push(doc.data());
        });
        res.status(200).json(posts);
    } catch (error) {
        res.status(400).send('Erro ao obter posts: ' + error.message);
    }
});

// Rota para deletar um post pelo ID
app.delete('/posts/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await db.collection('posts').doc(id).delete();
        res.status(200).send('Post deletado com sucesso');
    } catch (error) {
        res.status(400).send('Erro ao deletar post: ' + error.message);
    }
});

// Iniciando o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});
