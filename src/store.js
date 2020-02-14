import {createStore} from "redux" 

let initialState ={
    name: '',
    category: '',
    firstname: '',
    lastname: '',
    ingredients: [],
    instructions: [],
    recipes: []
}
export const update_name = "update_name"
export const update_category = "update_category"
export const update_firstname = "update_firstname"
export const update_lastname = "update_lastname"
export const update_ingredients = 'update_ingredients'
export const add_instruction = 'add_instruction'
export const update_recipelist = 'update_recipelist'

function reducer(state=initialState, action){
    const {type, payload} = action;
    switch(type){
        case update_name:
            return{
                ...state,
                name: payload
            }
        case update_category:
            return{
                ...state,
                category: payload
            }
        case update_firstname:
            return{
                ...state,
                firstname: payload
            }
        case update_lastname:
            return{
                ...state,
                lastname: payload
            }
        case update_ingredients:
            const inputs = [...state.ingredients, payload]
            return{
                ...state,
                ingredients: inputs
            }
        case add_instruction:
            const inst = [...state.instructions, payload]
            return{
                ...state,
                instructions: inst
            }
        case update_recipelist:
            const { name, category, firstname, lastname, ingredients, instructions} = state
            const recipe = { name, category, firstname, lastname, ingredients, instructions}
            const newRecipes = [...state.recipes, recipe]
            return{
                ...state, recipes: newRecipes
            }
        default:
            return state;
    }
}

export default createStore(reducer)