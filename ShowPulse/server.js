import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const SECRET_KEY =
  "3d1c512a14ceaa060bdad7f92349986edef0bbad45f2f600c3319ba9331d2836";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware para verificar o token JWT
const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ message: "Token is required" });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
};

// Leitura dos usuários do arquivo JSON
const users = JSON.parse(
  fs.readFileSync(path.join(__dirname, "data", "users.json"))
);

app.use(cors());

// Middleware para interpretar JSON
app.use(bodyParser.json());

// Servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static("public"));

// Rota inicial que serve a página de login
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "pages", "login", "index.html"));
});

// Rota para realizar o login
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "2h" });
    res.json({ token });
  } else {
    res.status(403).json({ message: "Invalid credentials" });
  }
});

// Rota protegida - API de shows (apenas acessível após login)
app.get("/api/shows", authenticateToken, (req, res) => {
  const shows = JSON.parse(
    fs.readFileSync(path.join(__dirname, "data", "shows.json"))
  );

  // Verifica se foi passado um nome de show como parâmetro na query string
  const showName = req.query.name;

  if (showName) {
    // Filtra os shows pelo nome fornecido
    const filteredShows = shows.filter((show) =>
      show.name.toLowerCase().includes(showName.toLowerCase())
    );

    // Se nenhum show for encontrado, retorna uma mensagem de aviso
    if (filteredShows.length === 0) {
      return res.json({ message: `Nenhum show encontrado para "${showName}"` });
    }

    return res.json(filteredShows);
  }

  // Se nenhum nome for fornecido, retorna todos os shows
  res.json(shows);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
