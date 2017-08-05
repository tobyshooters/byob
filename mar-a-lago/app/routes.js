module.exports = function(app, db) {
  app.get('/home', (req, res) => {
    res.send('Hello'); 
  });
};
