import app from "@/App.vue";
import * as admin from "firebase-admin";
import {db} from "@/service/firebase";

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