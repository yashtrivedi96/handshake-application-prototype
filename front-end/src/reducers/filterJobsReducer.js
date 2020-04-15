export default (state = [], action) => {
    switch (action.type) {
        case 'FILTER_JOBS':
            return action.payload;
        default:
            return state;
    }
};