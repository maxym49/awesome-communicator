import React, {Component} from 'react';
import {connect} from "react-redux";
import Wrapper from "./components/wrapper/Wrapper";
import './App.css'


class App extends Component {

    render() {
        return (
            <div className={'appFrame'}>
              <Wrapper />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todo: state.todo
    }
};

export default connect(mapStateToProps)(App);

