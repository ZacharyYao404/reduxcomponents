import React from 'react';
import { Input, Button, List } from 'antd';

const TodoListUI=(props)=>{
return (
    <div style={{marginTop:'10px',marginLeft:'10px'}}>
    <div>
        <Input 
        value={props.inputValue}
        onChange={props.handleChangeValue}
        placeholder='todo info'
        style={{width:'300px',marginRight:'10px'}}
        />
        <Button type="primary"
        onClick={props.handleClickValue}
        >提交</Button>
    </div>
    <List
    style={{marginTop:'10px',width:'300px'}}
     bordered
     dataSource={props.list}
     renderItem={(item,index)=>(<List.Item onClick={()=>{props.handleItemDelete(index)}}
     >{item}</List.Item>)}
    ></List>
</div>
)
}
/*
 class TodoListUI extends Component {
    render() {
        return (
            <div style={{marginTop:'10px',marginLeft:'10px'}}>
                <div>
                    <Input 
                    value={this.props.inputValue}
                    onChange={this.props.handleChangeValue}
                    placeholder='todo info'
                    style={{width:'300px',marginRight:'10px'}}
                    />
                    <Button type="primary"
                    onClick={this.props.handleClickValue}
                    >提交</Button>
                </div>
                <List
                style={{marginTop:'10px',width:'300px'}}
                 bordered
                 dataSource={this.props.list}
                 renderItem={(item,index)=>(<List.Item
                 onClick={(index)=>{this.props.handleItemDelete(index)}}
                 >{item}</List.Item>)}
                ></List>
            </div>
        )
    }
}
*/
export default TodoListUI;