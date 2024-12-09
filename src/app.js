import express from "express";
import path from "path";
import router from "./routes/fight.router";

const app = express();

// Permitir envío de información mediante formularios y JSON
app.use(express.urlencoded({ extended: true })); // Middleware para parsear datos de formularios
app.use(express.json()); // Middleware para parsear datos JSON
app.use(express.static(path.join(__dirname, '../public')));

// Rutas
app.use("/api/fight", router);

// Configurar puerto y escuchar conexiones
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
