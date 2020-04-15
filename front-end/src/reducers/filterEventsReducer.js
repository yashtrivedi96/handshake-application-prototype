export default (state = [], action) => {
    switch (action.type) {
        case 'FILTER_EVENTS':
            return action.payload;
        default:
            return state;
    }
};