module.exports = function(app, db) {
  app.put('/api/users', (req, res) => {

  });

  app.get('/api/users/:id', (req, res) => {

  });

  app.get('/api/users/:id/points', (req, res) => {
    res.send('Hello'); 
  });

  app.get('/api/users/:id/friends', (req, res) => {
    res.send('Hello'); 
  });
}
