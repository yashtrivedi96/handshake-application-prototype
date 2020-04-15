
export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_COMPANY_JOBS':
            return action.payload;
        default:
            return state;
    }
};