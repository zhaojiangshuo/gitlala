import * as Types from "../action-types";
let initState = {todo:["要上班","要谈恋爱"]};
// createStore 中的state ：{counter:{},todo:{todo:[]}}
function reducer(state=initState,action) {
    switch(action.stype){
        case Types.ME_HEHE:
        return {todo:state.todo+action.m}
    }
    return state;
}
export default reducer;
