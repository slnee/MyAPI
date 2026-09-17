import express from "express";
import { readFileSync } from "fs";

const app = express();
const PORT = 3000;

const phobies = JSON.parse( //pour prochaine amelioration, changer en fetch
  readFileSync("./phobie.json", "utf-8")
);

const PAR_PAGE = 20;

app.get("/api/phobies", (req, res) => {
  const page = parseInt(req.query.page) || 1;

  if (page < 1) {
    return res.status(400).json({
      erreur: "La page doit être supérieure ou égale à 1"
    });
  }

  const debut = (page - 1) * PAR_PAGE;
  const fin = debut + PAR_PAGE;

  const resultats = phobies.slice(debut, fin);

  res.json({
    page: page,
    phobies: resultats
  });
});

app.listen(PORT, () => {
  console.log("API lancée, voir http://localhost:3000/api/phobies?page=1");
});
