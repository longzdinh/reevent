import React, { Component } from "react";
import { connect } from "react-redux";

class TestPage extends Component {
  render() {
    return (
      <div>
        <h1>this is test page</h1>
        <h3>The answer is: </h3> {this.props.data}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.test.data
});

export default connect(mapStateToProps)(TestPage);
