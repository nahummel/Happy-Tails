const userQuestReducer = (state = {}, action) => {
    switch (action.type) {
        case 'STORE_ANWSERS':
            return action.payload;
        case 'RESET_ANWSERS':
            return {};
        default:
            return state;
    }
};

export default userQuestReducer;