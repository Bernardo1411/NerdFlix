export const updateObject = (currentState, update) => {
    return {
        ...currentState,
        ...update
    }
}

export const checkValidity = (currentValue, rules) => {
    let isValid = true
    if(!rules){
        return true
    }

    if(rules.minLength){
        isValid = currentValue.length >= rules.minLength && isValid
    }

    if(rules.isEmail){
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(currentValue) && isValid 
    }

    return isValid
}