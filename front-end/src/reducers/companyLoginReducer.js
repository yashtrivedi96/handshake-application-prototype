
export default (state = {}, action) => {
    switch (action.type) {
        case 'COMPANY_LOGIN':
            return action.payload;
        default:
            return state;
    }
};  