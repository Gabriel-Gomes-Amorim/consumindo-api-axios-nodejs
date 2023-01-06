const axios = require("axios");
const express = require("express");
const app = express();
app.use(express.json());

app.get("/mensagens", async (req, res) => {
  try {
    const { data } = await axios.get("https://api.adviceslip.com/advice");
    return res.send({ message: data.slip.advice });
  } catch (error) {
    res.send({ error: error.message });
  }
});

app.listen(3333, () => {
  console.log("Servidor rodando na porta 3333")
});
