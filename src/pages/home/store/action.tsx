export const ADD_DATA='ADD_DATA';  // 增加数据
export const DEL_DATA='DEL_DATA';  // 删除数据

// 改变state的action
export  const changeData=(data:any)=>{
    if(data.action==='ADD'){
        return{
            type:ADD_DATA,
            value:data.value
        }
    }else{
        return{
            type:DEL_DATA,
            value:data.value
        }
    }
}