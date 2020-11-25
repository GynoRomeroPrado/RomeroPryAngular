  const express = require('express');

  const app = express();

  app.use(express.static('./dist/angular-heroku'));

  app.get('/*', (req, res) =>
      res.sendFile('index.html', { root: 'dist/romero-pry-angular/' }),
  );

  app.listen(process.env.PORT || 8080);