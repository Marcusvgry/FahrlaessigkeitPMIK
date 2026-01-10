// app.js
import express from "express";
import bodyParser from "body-parser";
import { randomBytes } from "crypto";
import fs from "fs";
import path from "path";

// (Nur für ESM) __filename und __dirname definieren
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function generateRandomID(length = 15) {
  return randomBytes(length).toString("hex").slice(0, length);
}

// ================================
//  Express App
// ================================
const app = express();

const distPath = path.join(__dirname, "dist");
const publicPath = path.join(__dirname, "public");
const staticRoot = fs.existsSync(distPath) ? distPath : publicPath;

// Statische Verzeichnisse (dist bevorzugt)
app.use(express.static(staticRoot));
app.use("/assets", express.static(path.join(publicPath, "assets")));

app.use(express.json({ limit: "10000kb" }));

app.use(
  bodyParser.text({
    type: ["text/csv", "text/plain"],
    limit: "10000kb",
  })
);

// ================================
//  Routen
// ================================

app.get("/", (_req, res) => {
  res.sendFile(path.join(staticRoot, "index.html"));
});

// POST: experiment-data (CSV)
app.post("/experiment-data", (req, res) => {
  const experimentCSV = req.body;
  const subject_id = generateRandomID();
  const filename = `${subject_id}.csv`;

  const dataDir = path.join(__dirname, "data");
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
  }
  const filePath = path.join(dataDir, filename);
  fs.writeFile(filePath, experimentCSV, (err) => {
    if (err) {
      return res.status(500).send("Fehler beim Speichern der Experiment-Daten");
    }
    return res.status(200).send("Experiment-Daten erfolgreich gespeichert");
  });
});

// POST: mail-data (CSV)
app.post("/mail-data", (req, res) => {
  const MAIL_CSV = req.body;
  const subject_id = generateRandomID();
  const filename = `${subject_id}.csv`;

  const mailDir = path.join(__dirname, "mails");
  if (!fs.existsSync(mailDir)) {
    fs.mkdirSync(mailDir);
  }

  const filePath = path.join(mailDir, filename);
  fs.writeFile(filePath, MAIL_CSV, (err) => {
    if (err) {
      return res.status(500).send("Fehler beim Speichern der Mail-Daten");
    }
    return res.status(200).send("Mail-Daten erfolgreich gespeichert");
  });
});

// ================================
//  Serverstart
// ================================
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`[INFO] Server listening on port ${PORT}`);
});
