import React, {Component} from 'react';
import {connect} from "react-redux";

class App extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.todo} - Your List</h1>
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

