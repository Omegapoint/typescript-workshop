import React = require("react");
import ReactDOM = require("react-dom");

import Layout = require("./components/Layout");
import Counter = require("./components/Counter");

require("./main.less");

const page =
  <Layout>
    <div className="row">
      <div className="col-md-12">
        <img src={require("./what-is-webpack.png")} style={{width: "100%"}}/>
      </div>
    </div>
    <div className="row">
      <div className="col-md-3">
        <Counter/>
      </div>
    </div>
  </Layout>;

ReactDOM.render(page, document.getElementById("container"));
