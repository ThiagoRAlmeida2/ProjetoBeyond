const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// Configuração do Firebase Admin SDK
const serviceAccount = require('./serviceAccontKey.json');
const firebase = require("firebase/compat");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://console.firebase.google.com/u/0/project/forum-bayond/authentication/users?hl=pt-br&fb_utm_campaign=latam-BR-all-pt-dr-SKWS-all-all-trial-e-dr-1707800-LUAC0008679&fb_utm_content=text-ad-none-any-DEV_c-CRE_429626774316-ADGP_Hybrid%20%7C%20SKWS%20-%20EXA%20%7C%20Txt_Compute-Firebase-KWID_43700066431125567-kwd-312330826250&fb_utm_medium=cpc&fb_utm_source=google&fb_utm_term=KW_firebase-ST_Firebase'
});

const db = admin.firestore();

// Rota para criar um novo usuário
app.post('/createLogin', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send('Email e senha são obrigatórios');
    }

    try {
        const userRecord = await admin.auth().createUser({
            email: email,
            password: password
        });
        await db.collection('users').doc(userRecord.uid).set({
            email: email
        });

        res.status(201).send('Usuário registrado com sucesso');
    } catch (error) {
        res.status(400).send('Erro ao registrar usuário: ' + error.message);
    }
});

// Rota para obter informações de um usuário pelo UID
app.get('/createLogin/:uid', async (req, res) => {
    const { uid } = req.params;

    try {
        const userDoc = await db.collection('users').doc(uid).get();
        if (!userDoc.exists) {
            return res.status(404).send('Usuário não encontrado');
        }
        res.status(200).json(userDoc.data());
    } catch (error) {
        res.status(400).send('Erro ao obter informações do usuário: ' + error.message);
    }
});

// Rota para login de usuário
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send('Email e senha são obrigatórios');
    }

    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        res.status(200).send('Login realizado com sucesso');
    } catch (error) {
        res.status(401).send('Credenciais inválidas: ' + error.message);
    }
});

// Rota para criar uma nova comunidade
app.post('/communities', async (req, res) => {
    try {
        const newCommunity = req.body;
        await db.collection('communities').add(newCommunity);
        res.status(201).send('Comunidade criada com sucesso');
    } catch (error) {
        res.status(400).send('Erro ao criar comunidade: ' + error.message);
    }
});

// Rota para obter todas as comunidades
app.get('/communities', async (req, res) => {
    try {
        const snapshot = await db.collection('communities').get();
        const communities = [];
        snapshot.forEach(doc => {
            communities.push({ id: doc.id, ...doc.data() });
        });
        res.status(200).json(communities);
    } catch (error) {
        res.status(400).send('Erro ao obter comunidades: ' + error.message);
    }
});

// Rota para deletar uma comunidade por ID
app.delete('/communities/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await db.collection('communities').doc(id).delete();
        res.status(200).send('Comunidade deletada com sucesso');
    } catch (error) {
        res.status(400).send('Erro ao deletar comunidade: ' + error.message);
    }
});

// iniciando o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});