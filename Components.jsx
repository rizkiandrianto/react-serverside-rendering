var React = require('react');

module.exports = React.createClass({
  _handleClick : function(){
    alert('test');
  },
  render: function() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
          <div>
            <h1>{this.props.title}</h1>
            <p>Server Rendering Lesson</p>
            <button onClick={this._handleClick}>Click Me!</button>
          </div>
          <script dangerouslySetInnerHTML={{
              __html: 'window.PROPS=' + JSON.stringify(this.props)
          }} />
          <script src="/bundle.js" />
        </body>
      </html>
    )
  }
})
