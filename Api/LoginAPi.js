import firebase from "firebase/compat";
import app from "@/App.vue";

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