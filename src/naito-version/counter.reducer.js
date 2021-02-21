import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice(
    {
        name:"Counter",
        initialState:{
            value:0
        },
        reducers:
        {
            increment: (counterState)=>
            {
                counterState.value+=1
            },
            decrement: (counterState)=>
            {
                counterState.value-=1
            },
            increaseSpecific:(counterState,action)=>
            {
                counterState.value+=action.payload
            }
        }
    }
)

//Export actions, which were handled in slice
export const {increment,decrement,increaseSpecific} = counterSlice.actions;

export const increaseAsync = (amount)=>dispatch=>
{
    setTimeout(()=>
    {
        console.log('Short-hand',amount)
        dispatch(increaseSpecific(amount))
    }, 1000)
}

export function asyncLongHand(amount)
{
    return function dispatcher(dispatch)
    {
        setTimeout(() => 
        {
            console.log('Long-hand',amount)
            dispatch(increaseSpecific(amount))
        }, 1000);
    }
}


export default counterSlice.reducer;