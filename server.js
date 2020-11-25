  const express = require('express');
  const path = require('path');
  const app = express();

  //app.use(express.static('./dist/romeropryangular'));
  /*app.use(express.static(__dirname + '/dist'));

  app.get('/*', (req, res) =>
      const index = path.join(__dirname, 'build', 'index.html');
      res.sendFile(index);
  );
*/
  app.use(express.static(__dirname + '/dist/romero-pry-angular'));

  app.get('/*', function(req,res) {
      res.sendFile(path.join(__dirname+'/dist/romero-pry-angular/index.html'));
  });

  app.listen(process.env.PORT || 8080);
