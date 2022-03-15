const messages = [
  "Lucas",
  "Santiago",
  "Juancarlo",
  "Nora",
  "Daniel",
  "Tamnora",
  "OtroNombre",
  "Esto es un simple mensaje random",
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { randomMsg };
