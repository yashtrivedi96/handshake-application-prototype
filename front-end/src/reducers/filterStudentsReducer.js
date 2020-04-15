export default (state = [], action) => {
    switch (action.type) {
        case 'FILTER_STUDENTS':
            return action.payload;
        default:
            return state;
    }
};