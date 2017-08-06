module.exports = function(app, db) {
  app.get('/api/users', (req, res) => {
    db.users.find({}, (err, docs) => {
      res.send(docs);
    });
  });

  app.put('/api/users', (req, res) => {
    db.users.insert(req.body, (err, newDoc) => {
      res.send(newDoc);
    });
  });

  app.get('/api/users/:id', (req, res) => {
    let query = { id: Number(req.params.id) };

    db.users.find(query, (err, docs) => {
      res.send(docs);
    });
  });

  app.get('/api/users/:id/points', (req, res) => {
    let query = { id: Number(req.params.id) };

    let chs = db.users.find(query)[0].challenges;
    let points = chs.reduce((a, c) =>{
      a += c.value; 
    }, 0);
    
    res.send(points);
  });

  app.get('/api/users/:id/friends', (req, res) => {
    let query1 = { id: Number(req.params.id) };
    let friendIds = db.users.find(query1)[0].friends;

    let query2 = { friends: { $in: friends } }
    let friends = db.users.find(query2);

    res.send(friends);
  });
}
