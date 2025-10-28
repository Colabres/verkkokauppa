import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const products = [
  { id: 1, name: "Keyboard", price: 29.9, description: "Wired USB keyboard" },
  { id: 2, name: "Mouse", price: 19.9, description: "Optical mouse" },
  { id: 3, name: "Monitor", price: 149.0, description: "24-inch IPS" },
];

app.get("/api/products", (req, res) => res.json(products));
app.get("/api/products/:id", (req, res) => {
  const p = products.find(x => x.id === Number(req.params.id));
  if (!p) return res.status(404).json({ error: "Not found" });
  res.json(p);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API listening on  http://localhost:${PORT}`));
