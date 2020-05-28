const userInfoReducer = (state = {}, action) => {
    switch (action.type) {
        case 'STORE_INFO':
            return action.payload;
        case 'RESET_INFO':
            return {};
        default:
            return state;
    }
};

export default userInfoReducer;