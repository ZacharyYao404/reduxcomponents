import { CHANGE_INPUT_VALUE, CHANGE_CLICK_VALUE, CHANGE_DELETE_VALUE,INIT_LIST_ACTION, GET_INIT_LIST} from "./actionTypes";


export const getInputChangeAction =(value)=>({
  type:CHANGE_INPUT_VALUE,
  value
})
export const getAddItemAction=()=>({
    type:CHANGE_CLICK_VALUE
})
export const getDeleteAction=(index)=>({
    type:CHANGE_DELETE_VALUE,
    index
})
export const initListAction=(data)=>({
    type:INIT_LIST_ACTION,
    data
})
export const getInitList=()=>({
    type:GET_INIT_LIST,
})