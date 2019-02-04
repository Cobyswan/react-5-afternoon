const INITIAL_STATE ={
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: "false",
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
}

function reducer(state = INITIAL_STATE, action){
    switch(action.type){
        case 'UPDATE_LOAN_TYPE':
            console.log(action)    
            return Object.assign({}, state, {loanType: action.payload})
        
        case 'UPDATE_PROPERTY_TYPE':
            console.log(action)
            return Object.assign({}, state, {propertyType: action.payload})
       
        case 'UPDATE_CITY':
            console.log(action)
            return Object.assign({}, state, {city: action.payload})
        
        case 'UPDATE_PROP':
            console.log(action)
            return Object.assign({}, state, {propToBeUsedOn: action.payload})
        
        case 'UPDATE_FOUND':
            console.log(action)
            return Object.assign({}, state, {found: action.payload})
        
        case 'UPDATE_AGENT_FOUND':
            console.log(action)
            return Object.assign({}, state, {realEstateAgent: action.payload})
        
        case 'UPDATE_COST':
            console.log(action)
            return Object.assign({}, state, {cost: action.payload})
        
        case 'UPDATE_DOWNPAYMENT':
            console.log(action)
            return Object.assign({}, state, {downPayment: action.payload})
        
        case 'UPDATE_CREDIT':
            console.log(action)
            return Object.assign({}, state, {credit: action.payload})
        
        case 'UPDATE_HISTORY':
            console.log(action)
            return Object.assign({}, state, {history: action.payload})
        
        case 'UPDATE_ADDRESS_ONE':
            console.log(action)
            return Object.assign({}, state, {addressOne: action.payload})
        
        case 'UPDATE_ADDRESS_TWO':
            console.log(action)
            return Object.assign({}, state, {addressTwo: action.payload})
        
        case 'UPDATE_ADDRESS_THREE':
            console.log(action)
            return Object.assign({}, state, {addressThree: action.payload})
        
        case 'UPDATE_FIRSTNAME':
            console.log(action)
            return Object.assign({}, state, {firstName: action.payload})
        
        case 'UPDATE_LASTNAME':
            console.log(action)
            return Object.assign({}, state, {lastName: action.payload})
        
        case 'UPDATE_EMAIL':
            console.log(action)
            return Object.assign({}, state, {email: action.payload})
        
        default: 
            return state;
    }
}

export function updateLoanType(loanType){
    return {
        type: 'UPDATE_LOAN_TYPE',
        payload: loanType
    }
}

export function updatePropertyType(property){
    return {
        type: 'UPDATE_PROPERTY_TYPE',
        payload: property
    }
}

export function updateCity(city){
    return {
        type: 'UPDATE_CITY',
        payload: city
    }
}

export function updateProp(propToBeUsedOn){
    return {
        type: 'UPDATE_PROP',
        payload: propToBeUsedOn
    }
}

export function updateFound(found){
    return {
        type: 'UPDATE_FOUND',
        payload: found
    }
}

export function realEstateAgentFound(found){
    return {
        type: 'UPDATE_AGENT_FOUND',
        payload: found
    }
}

export function updateCost(cost){
    return {
        type: 'UPDATE_COST',
        payload: cost
    }
}

export function updateDownPayment(downPayment){
    return {
        type: 'UPDATE_DOWNPAYMENT',
        payload: downPayment
    }
}

export function updateCredit(credit){
    return{
        type: 'UPDATE_CREDIT',
        payload: credit
    }
}

export function updateHistory(history){
    return{
        type: 'UPDATE_HISTORY',
        payload: history
    }
}

export function updateAddressOne(addressOne){
    return{
        type: 'UPDATE_ADDRESS_ONE',
        payload: addressOne
    }
}

export function updateAddressTwo(addressTwo){
    return{
        type: 'UPDATE_ADDRESS_TWO',
        payload: addressTwo
    }
}

export function updateAddressThree(addressThree){
    return{
        type: 'UPDATE_ADDRESS_THREE',
        payload: addressThree
    }
}

export function updateFirstName(firstName){
    return {
        type: 'UPDATE_FIRSTNAME',
        payload: firstName
    }
}

export function updateLastName(lastName){
    return {
        type: 'UPDATE_LASTNAME',
        payload: lastName
    }
}

export function updateEmail(email){
    return {
        type: 'UPDATE_EMAIL',
        payload: email
    }
}

export default reducer;