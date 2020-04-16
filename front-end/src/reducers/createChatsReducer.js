export default (state = {}, action) => {
    switch (action.type) {
        case 'CREATE_CHATS':
            return action.payload;
        default:
            return state;
    }
};