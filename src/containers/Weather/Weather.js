import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Temp } from 'components';
// import {findTemp} from 'redux/modules/weather';

// @connect(
//     state => ({temp: state.temp}),
//     dispatch => bindActionCreators({findTemp}, dispatch))


// const findTemp =  function(e){
//     console.log("getting temp");
//     client.get('/getweather');
// }

export default class Weather extends Component {
    handleClick() {
    console.log('this is:', this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <button onClick={(e) => {this.handleClick(e).bind(this)}}>
        Click me
      </button>
    );
  }
}