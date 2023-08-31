const path = require('path');

module.exports = (app) =>
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );


  import { openDB, deleteDB, wrap, unwrap } from 'idb';

  async function doDatabaseStuff() {
    const db = await openDB();
  }