import React = require("react");

class Layout extends React.Component<React.Props<Layout>, {}> {
  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h1>TypeScript and webpack demo (feat. React)</h1>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export = Layout;