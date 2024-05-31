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

// iniciando o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});