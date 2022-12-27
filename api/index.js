
const server = require("./src/app.js");
const {getInfo} = require("./src/controllers/contUsers.js");
const { conn } = require("./src/db.js");


// Syncing all the models at once.


conn.sync({ force: false }).then(() => {
  server.listen(3001, async() => {
    await getInfo();
    console.log("Listening at 3001"); // eslint-disable-line no-console
  });
});