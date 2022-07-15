import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { activeCity } from "../actions";

class City extends Component {
  handleClick = () => {
    this.props.activeCity(this.props.city);
  };

  render() {
    let containerClasses = "list-group-item";
    console.log(this.props.activeCity);
    if (this.props.city === this.props.activeCity) {
      containerClasses += " selected";
    }
    return (
      <li className={containerClasses} onClick={this.handleClick} role="link" tabIndex={this.props.tabIndex + 1}>
        {this.props.city.name}
      </li>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ activeCity }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(City);

