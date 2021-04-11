import React, { Component } from 'react'
import 'antd/dist/antd.css';
import TodoListUI from './TodoListUI';
import {
    getInputChangeAction, 
    getDeleteAction, 
    getAddItemAction,
    getInitList
} from './store/actionCreators';
import store from './store';
class TodoList extends Component {
    constructor(props){
        super(props);
        this.state=store.getState();
        this.handleChangeValue=this.handleChangeValue.bind(this);
        this.handleLisenter=this.handleLisenter.bind(this);
        this.handleClickValue=this.handleClickValue.bind(this);
        this.handleItemDelete=this.handleItemDelete.bind(this);
        store.subscribe(this.handleLisenter)
    }

    render() {
        return <TodoListUI 
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleChangeValue={this.handleChangeValue}
        handleClickValue={this.handleClickValue}
        handleItemDelete={this.handleItemDelete}
        />
    }
     componentDidMount(){
         const action =getInitList();
         store.dispatch(action);
     }

    handleChangeValue(e){
        store.dispatch(getInputChangeAction(e.target.value))
    }
    handleLisenter(){
        this.setState(store.getState());
    }
    handleClickValue(){
        store.dispatch(getAddItemAction())
    }
    handleItemDelete(index){
       store.dispatch(getDeleteAction(index))
    }
}
export default TodoList;
