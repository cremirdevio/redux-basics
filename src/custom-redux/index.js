function createStore(reducer) {
    let state;
    let listeners = []

    function getState() {
        return state;
    }

    function dispatch(action) {
        // call the reducer to get the new state
        state = reducer(state, action)
        // notify subscribers
        listeners.forEach(notify => {
            notify()
        });
    }

    function subscribe(listener) {
        listeners.push(listener)
    }

    return {
        getState,
        dispatch,
        subscribe
    }
    
}

export default createStore;