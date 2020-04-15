
export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_COMPANY_EVENTS':
            return action.payload;
        default:
            return state;
    }
};