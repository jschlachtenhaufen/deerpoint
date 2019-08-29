export const ActionTypes = {
    DUMMY_ACTION: 'DUMMY_ACTION',
};

export function dummyFunction() {
    return (dispatch) => {
        // Do some function here, then dispatch state change
        dispatch({ type: ActionTypes.DUMMY_ACTION, payload: { dummyState: 'changed by action' } });
    };
}
