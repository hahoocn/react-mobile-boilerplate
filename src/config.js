module.exports = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 8080,
  devPort: process.env.DEV_PORT || 3001,
  hotLoadPort: process.env.HOT_LOAD_PORT || 3000,
  app: {
    title: 'My App'
  }
};
