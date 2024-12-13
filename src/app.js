import express from "express";
import router from "./routes/fight.router.js";
import cors from 'cors';

const app = express();

// Configuración básica para permitir solicitudes desde cualquier origen
app.use(cors());

// Permitir envío de información mediante formularios y JSON
app.use(express.urlencoded({ extended: true })); // Middleware para parsear datos de formularios
app.use(express.json()); // Middleware para parsear datos JSON

// Rutas
app.use("/api/fight", router);

// Configurar puerto y escuchar conexiones
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
