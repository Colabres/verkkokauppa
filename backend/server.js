import express from "express";
import cors from "cors";
import { pool } from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

// const products = [
//   { id: 1, name: "Keyboard", price: 29.9, description: "Wired USB keyboard" },
//   { id: 2, name: "Mouse", price: 19.9, description: "Optical mouse" },
//   { id: 3, name: "Monitor", price: 149.0, description: "24-inch IPS" },
// ];
app.get("/api/products", async (req, res) => {
  try {
    const { rows } = await pool.query(
      "SELECT id, name, price, description FROM products ORDER BY id"
    );
    res.json(rows);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "DB error" });
  }
});

// app.get("/api/products", (req, res) => res.json(products));
// app.get("/api/products/:id", (req, res) => {
//   const p = products.find(x => x.id === Number(req.params.id));
//   if (!p) return res.status(404).json({ error: "Not found" });
//   res.json(p);
// });

app.get("/api/products/:id", async (req, res) => {
  try {
    const { rows } = await pool.query(
      "SELECT id, name, price, description FROM products WHERE id = $1",
      [Number(req.params.id)]
    );
    if (rows.length === 0) return res.status(404).json({ error: "Not found" });
    res.json(rows[0]);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "DB error" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API listening on  http://localhost:${PORT}`));
