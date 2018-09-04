import React, { Component } from "react";
import { connect } from "react-redux";
import Script from "react-load-script";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { openModal } from "../features/modals/modalActions";

class TestPage extends Component {
  state = {
    address: "",
    scriptLoaded: false
  };

  handleScriptLoad = () => this.setState({ scriptLoaded: true });

  handleFormSubmit = event => {
    event.preventDefault();

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log("Success", latLng))
      .catch(error => console.error("Error", error));
  };

  onChange = address => this.setState({ address });

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange
    };
    const { openModal } = this.props;
    return (
      <div>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyA6tCPc-2XyI5HCZ43Zvhi50dHRTTEGOpg&libraries=places"
          onLoad={this.handleScriptLoad}
        />
        <h1>this is test page</h1>
        <h3>The answer is: </h3> {this.props.data}
        <form onSubmit={this.handleFormSubmit}>
          {this.state.scriptLoaded && (
            <PlacesAutocomplete inputProps={inputProps} />
          )}
          <button type="submit">Submit</button>
          <button onClick={() => openModal("TestModal", { data: 43 })}>
            Open Modal
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.test.data
});
const actions = {
  openModal
};

export default connect(
  mapStateToProps,
  actions
)(TestPage);
