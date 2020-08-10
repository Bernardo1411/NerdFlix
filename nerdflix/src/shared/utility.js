export const updateObject = (currentState, update) => {
    return {
        ...currentState,
        ...update
    }
}