import { createSlice } from "@reduxjs/toolkit";

const initialState={
    productData:[],
    userInfo:null,
}

export const DesiVibesSlice=createSlice({
    name:"DesiVibes",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
    const item=state.productData.find((item)=>item._id===action.payload._id
    );
    if(item){
     item.quantity +=action.payload.quantity;
    }
    else
    {
        state.productData.push(action.payload);
    }
        },
        deLeteItem:(state,action)=>{
            state.productData=state.productData.filter(
                (item)=>item._id!==action.payload
            );
        },
        resetCart:(state)=>{
       state.productData=[];
        },
      incrementQuantity:(state,action)=>{
        const item =state.productData.find(
      (item)=>item._id===action.payload._id
        );
        if(item)
        {
            item.quantity++;
        }
      },
      decrementQuantity:(state,action)=>{
        const item =state.productData.find(
      (item)=>item._id===action.payload._id
        );
        if(item.quantity===1)
        {
            item.quantity=1;
        }
        else
        {
            item.quantity--;
        }
      },
      // user start here
      addUser:(state,action)=>{
        state.userInfo=action.payload;
      },
      removeUser:(state)=>{
        state.userInfo=null;
      },
      //user End here
    },
});
export const
{    
    addToCart,
    deLeteItem,
    resetCart,
    incrementQuantity,
    decrementQuantity,
    addUser,
    removeUser,
}=DesiVibesSlice.actions;
export default DesiVibesSlice.reducer;