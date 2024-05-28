const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// Configuração do Firebase Admin SDK
const serviceAccount = require('./serviceAccountKey.json');
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

// iniciando o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});