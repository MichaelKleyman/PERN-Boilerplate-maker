const {db} = require('./server/db/models');
const app = require('./server/server.js');

const PORT = process.env.PORT || 3000;
const init = async () => {
  try {
    await db.sync();
    app.listen(PORT, () =>
      console.log(`
            Listening on port ${PORT}
            http://localhost:${PORT}/
        `),
    );
  } catch (err) {
    console.log(`There was an error starting up!`, err);
  }
};

init();
