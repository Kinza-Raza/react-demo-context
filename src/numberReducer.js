
const numberReducer = (state, action) => {
    switch (action.type) {
        case "Increment":
            return state + action.value
        case "Decrement":
            return state - 1
        case "Double":
            return state*2
    }
}

export default numberReducer;