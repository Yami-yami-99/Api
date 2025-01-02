// Importation des modules nécessaires
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware pour analyser le corps des requêtes en JSON
app.use(express.json());

// Définition de l'endpoint POST /api
app.post('/api', (req, res) => {
    const { prompt, apikey, name, id } = req.body;

    // Vérification de la clé API
    if (apikey !== 'TaCléAPI') {
        return res.status(401).json({ error: "Clé API invalide." });
    }

    // Simuler une réponse
    const response = `Salut ${name}, tu as demandé : ${prompt}`;

    // Retourner la réponse dans le format JSON
    res.json({ result: response });
});

// Lancer le serveur et écouter sur le port 8080
app.listen(PORT, () => {
    console.log(`API en cours d'exécution sur le port ${PORT}`);
});
