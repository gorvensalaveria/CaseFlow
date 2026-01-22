// index.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { pool } = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "CaseFlow API is running" });
});

// GET /api/cases - list all cases with client info
app.get("/api/cases", async (req, res) => {
  try {
    const result = await pool.query(
      `
      SELECT
        c.id,
        c.title,
        c.status,
        c.type,
        c.created_at,
        c.updated_at,
        cl.full_name AS client_name,
        cl.email AS client_email
      FROM cases c
      JOIN clients cl ON c.client_id = cl.id
      ORDER BY c.updated_at DESC;
      `
    );

    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching cases:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// GET /api/cases/:id - single case with activities
app.get("/api/cases/:id", async (req, res) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({ message: "Invalid case id" });
  }

  try {
    const caseResult = await pool.query(
      `
      SELECT
        c.id,
        c.title,
        c.status,
        c.type,
        c.created_at,
        c.updated_at,
        cl.full_name AS client_name,
        cl.email AS client_email,
        cl.phone AS client_phone
      FROM cases c
      JOIN clients cl ON c.client_id = cl.id
      WHERE c.id = $1;
      `,
      [id]
    );

    if (caseResult.rows.length === 0) {
      return res.status(404).json({ message: "Case not found" });
    }

    const activitiesResult = await pool.query(
      `
      SELECT id, message, created_at
      FROM activities
      WHERE case_id = $1
      ORDER BY created_at DESC;
      `,
      [id]
    );

    res.json({
      ...caseResult.rows[0],
      activities: activitiesResult.rows,
    });
  } catch (err) {
    console.error("Error fetching case:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/api/cases/:id/activities", async (req, res) => {
  try {
    const caseId = Number(req.params.id);
    const { message } = req.body;

    if (!caseId || Number.isNaN(caseId)) {
      return res.status(400).json({ message: "Invalid case id"});
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return res.status(400).json({ message: "Activity message is required"})
    }

    const insert = await pool.query(
      `INSERT INTO activities (case_id, message)
       VALUES ($1, $2)
       RETURNING id, case_id, message, created_at
      `,
      [caseId, message.trim()]
    );

    return res.status(201).json(insert.rows[0]);
    
  } catch (err) {
    console.error("Error creating activity:", err);
    return res.status(500).json({error: "Internal server error"});
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`API server listening on http://localhost:${PORT}`);
});
