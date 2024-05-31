const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const admin = require("firebase-admin");

// Inicializar o Firebase Admin SDK
const serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rota para obter os conteúdos
app.get("/conteudos", async (req, res) => {
    try {
        const snapshot = await db.collection("Conteudo").get();
        const conteudos = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        res.status(200).json(conteudos);
    } catch (error) {
        res.status(500).json({ error: "Erro ao obter conteúdos" });
    }
});

// Rota para adicionar um conteúdo
app.post("/conteudos", async (req, res) => {
    try {
        const data = req.body;
        const docRef = await db.collection("Conteudo").add(data);
        res.status(201).json({ id: docRef.id });
    } catch (error) {
        res.status(500).json({ error: "Erro ao adicionar conteúdo" });
    }
});

// Rota para atualizar um conteúdo
app.put("/conteudos/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        await db.collection("Conteudo").doc(id).update(data);
        res.status(200).json({ message: "Conteúdo atualizado com sucesso" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar conteúdo" });
    }
});

// Rota para deletar um conteúdo
app.delete("/conteudos/:id", async (req, res) => {
    try {
        const id = req.params.id;
        await db.collection("Conteudo").doc(id).delete();
        res.status(200).json({ message: "Conteúdo deletado com sucesso" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar conteúdo" });
    }
});

// Rota para adicionar uma comunidade
app.post('/communities', async (req, res) => {
    try {
        const newCommunity = req.body;
        if (!newCommunity.name || !newCommunity.description || !newCommunity.ageGroup) {
            return res.status(400).json({ error: "Campos obrigatórios faltando" });
        }
        const docRef = await db.collection('communities').add(newCommunity);
        res.status(201).json({ id: docRef.id, message: 'Comunidade criada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar comunidade: ' + error.message });
    }
});

// Rota para obter todas as comunidades
app.get('/communities', async (req, res) => {
    try {
        const snapshot = await db.collection('communities').get();
        const communities = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        res.status(200).json(communities);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter comunidades: ' + error.message });
    }
});

// Rota para deletar uma comunidade por ID
app.delete('/communities/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await db.collection('communities').doc(id).delete();
        res.status(200).json({ message: 'Comunidade deletada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar comunidade: ' + error.message });
    }
});