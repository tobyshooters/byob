module.exports = function(app, db) {
  // Users
  app.get('/api/users/:id', (req, res) => {
    res.send('Hello'); 
  });
  app.get('/api/users/:id/points', (req, res) => {
    res.send('Hello'); 
  });
  app.get('/api/users/:id/points/company/:companyId', (req, res) => {
    res.send('Hello'); 
  });
  app.put('/api/users/', (req, res) => {
    res.send('Hello'); 
  });

  // Companies
  app.get('/api/companies', (req, res) => {
    res.send('Hello'); 
  });
  app.get('/api/companies/:id', (req, res) => {
    res.send('Hello'); 
  });

  // Products
  app.get('/api/products/:id', (req, res) => {
    res.send('Hello'); 
  });
  app.put('/api/products', (req, res) => {
    res.send('Hello'); 
  });

  // Acquisitions
  app.get('/api/acquisitions/:id', (req, res) => {
    res.send('Hello'); 
  });
  app.put('/api/acquisitions', (req, res) => {
    res.send('Hello'); 
  });

  // Rewards
  app.get('/api/rewards/:userId', (req, res) => {
    res.send('Hello'); 
  });

  // Redeemed Rewards
  app.get('/api/reedemeed_rewards/:userId', (req, res) => {
    res.send('Hello'); 
  });
  app.put('/api/reedemeed_rewards/:userId/reward/:id', (req, res) => {
    res.send('Hello'); 
  });
};
