import {db} from "@/service/firebase";
import app from "@/App.vue";

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
