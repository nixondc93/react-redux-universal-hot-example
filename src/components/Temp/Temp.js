import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findTemp} from 'redux/modules/weather';


@connect(
    state => ({info: state.info.data}),
    dispatch => bindActionCreators(weatherActions, dispatch))

export default class Temp extends Component {
    // let {temp, findTemp} = this.props; // eslint-disable-line no-shadow
    render(){
        return (
         <div>
             <h1>Find Temperature</h1>
            <form >
                <input type="text"></input>
                <input type="submit" onClick={findTemp}> </input>
            </form>
            <p>
                {temp && "No Temp"}
            </p>
        </div>
        );   
    }
}