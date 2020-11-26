const authorMiddleware = (req, res, next) => {
    res.author = {
      name: 'Kevin',
      lastname: 'Enei'
    };
    next();
  };
  
  module.exports = authorMiddleware;