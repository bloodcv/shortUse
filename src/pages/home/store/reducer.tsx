let defaultState:Array<any>=[]

const todolist=(state:Array<any>=defaultState,action:any)=>{
    const newState=[...state]
    switch(action.type){
        case 'ADD_DATA':
                newState.push(action.value)
            return newState
        case 'DEL_DATA':
                newState.splice(action.value,1)
            return newState
        default:return state
    }
}
export default todolist