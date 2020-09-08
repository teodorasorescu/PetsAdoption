const initialState = 0;
export default function counter(state = initialState, action) {
    if(action.type === 'addFav') {
        return state + 1;
    } else {
        return state;
    }
    
}