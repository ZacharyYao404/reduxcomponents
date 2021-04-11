import {
    CHANGE_INPUT_VALUE,
    CHANGE_CLICK_VALUE,
    CHANGE_DELETE_VALUE,
    INIT_LIST_ACTION
} from './actionTypes'
const defaultValue={
   inputValue:'123',
   list:['1','2']
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (state=defaultValue,action)=>{
    if(action.type===CHANGE_INPUT_VALUE){
        const newState=JSON.parse(JSON.stringify(state))
        newState.inputValue=action.value;
        return newState;
    }
    if(action.type===CHANGE_CLICK_VALUE){
        const newState=JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue);
        newState.inputValue='';
        return newState;
    }
    if(action.type===CHANGE_DELETE_VALUE){
        const newState=JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState;
    }
    if(action.type===INIT_LIST_ACTION){
        const newState=JSON.parse(JSON.stringify(state))
        newState.list=action.data;
        return newState;
    }
    return state;
}
    
