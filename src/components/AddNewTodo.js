import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions.js";

class AddNewTodo extends Component {
    render() {
        return (
            <div>
                <input type="text" value={this.props.addTodoValue} onChange={this.props.addTodoChanged} placeholder="Add New Todo" />
                <button className="add" onClick={this.props.saveNewTodo}>➕</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        addTodoChanged: state.addTodoChanged,
        saveNewTodo: state.saveNewTodo,
        addTodoValue: state.addTodoValue
    };
};

function mapDispatchToProps(dispatch){
    return {
        saveNewTodo: () => dispatch(actions.saveNewList()),
        addTodoChanged: (e) => dispatch(actions.addNewItem(e.target.value))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewTodo);