const viewDogReducer = (state = [], action) => {
    switch (action.type) {
        case 'STORE_DOG':
            return action.payload;
        default:
            return state;
    }
};


export default viewDogReducer;