var router = require('express').Router()
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var ReactRouter = require('react-router');

router.get('*', function(req, res) {
  var props = {title: 'React Component Bla Bla Bla'};
  ReactRouter.match({
    routes: require('./routes.jsx'),
    location: req.url
  }, function(err, redirectLocation, renderProps) {
    if (renderProps) {
      var html = ReactDOMServer.renderToString(
        <ReactRouter.RouterContext {...renderProps}
          createElement={function(Component, renderProps) {
            return <Component {...renderProps} {...props} />
          }}
        />
      )
      res.send(html);
    } else {
      res.status(404).send('Not Found')
    }
  })
});

module.exports = router;
