import express from "express";
import cors from "cors";
import { pool } from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", async (req, res) => {
  try {
    
    const r = await pool.query("SELECT 1");
    res.json({ ok: true, db: r?.rows?.length === 1 ? "up" : "unknown" });
  } catch {
    res.status(500).json({ ok: false, db: "down" });
  }
});

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
