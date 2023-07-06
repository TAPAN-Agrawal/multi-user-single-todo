
interface Action {
    type: string,
    payload: {
        name: string,
        password: string,
        date: string,
        gender: string,
        address: string,
    }
    
}
interface Arr {
    id: number,
    Title: string,
    subTitle: string,
    status?: string
}
export interface U {

    name: string,
    password: string,
    date: string,
    gender: string,
    address: string,
}

export interface StateInterface {
    users : U[]
    arr: Arr[]
}




const initialState: StateInterface = {

        
   users:[],
    arr: []
}
export const todos = (state: StateInterface = initialState, action: Action) => {
    switch (action.type) {


        case 'ADD_USER_CREDENTIALS':
            const newv={
                name: action.payload.name,
            password: action.payload.password,
            date: action.payload.date,
            gender: action.payload.gender,
            address: action.payload.address,
            }
            return {
                ...state,
                users:[...state.users,newv]

            }


        case 'SET-DATA':
            return {
                ...state,
                arr: action.payload
            }

            



        default:
            return state
    }
}