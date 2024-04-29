const server = require("./src/app.js");
require("dotenv").config();
const PORT = process.env.PORT || 3002;
server.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
