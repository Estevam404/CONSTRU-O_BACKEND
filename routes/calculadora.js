const express = require('express');
const router = express.Router();

// Soma
router.get('/somar', (req, res) => {
  const numA = Number(req.query.numA);
  const numB = Number(req.query.numB);
  res.json({ resultado: numA + numB });
});

// Subtração
router.get('/subtrair', (req, res) => {
  const numA = Number(req.query.numA);
  const numB = Number(req.query.numB);
  res.json({ resultado: numA - numB });
});

// Multiplicação
router.get('/multiplicar', (req, res) => {
  const numA = Number(req.query.numA);
  const numB = Number(req.query.numB);
  res.json({ resultado: numA * numB });
});

// Divisão
router.get('/dividir', (req, res) => {
  const numA = Number(req.query.numA);
  const numB = Number(req.query.numB);

  if (numB === 0) {
    return res.status(400).json({ erro: 'Divisão por zero não permitida!' });
  }

  res.json({ resultado: numA / numB });
});

// Ao Quadrado
router.get('/aoQuadrado', (req, res) => {
  const num = Number(req.query.num);
  res.json({ resultado: num ** 2 });
});

// Raiz Quadrada
router.get('/raizQuadrada', (req, res) => {
  const num = Number(req.query.num);

  if (num < 0) {
    return res.status(400).json({ erro: 'Não é possível calcular a raiz de número negativo!' });
  }

  res.json({ resultado: Math.sqrt(num) });
});

module.exports = router;
