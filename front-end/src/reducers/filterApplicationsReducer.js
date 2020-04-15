export default (state = [], action) => {
    switch (action.type) {
        case 'FILTER_APPLICATIONS':
            return action.payload;
        default:
            return state;
    }
};