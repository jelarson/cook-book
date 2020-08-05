import React, { useReducer } from 'react'

export default function useRecipeStateHook() {
  // const [recipeState, setRecipeState] = useState({
  //   instructions: [],
  //   ingredients: [],
  // })

  const initialState = {
    title: '',
    category: '',
    instructions: [],
    ingredients: [],
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'ingredients':
      case 'instructions':
        return {
          ...state,
          [action.type]: [...state[action.type], action.payload],
        }
      case 'title':
      case 'category':
        return {
          ...state,
          [state.type]: action.payload,
        }
      default:
        console.log('no matches for case')
    }
  }

  const [recipeState, dispatch] = useReducer(reducer, initialState)

  const updateInstructions = (value) => {
    dispatch({ type: 'instructions', payload: value })
  }
  // const updateInstructions = useCallback((value) => {
  //   dispatch({ type: 'instructions', payload: value })
  // }, [])

  // const recipeState = {
  //   // title: '',
  //   // category: '',
  //   instructions: [],
  //   ingredients: [],
  // }

  // const updateInstructions = (instruction) => {
  //   // recipeState.ingredients.push(ingredient)
  //   setRecipeState((prevState) => {
  //     return {
  //       ...prevState,
  //       instructions: [...prevState.instructions, instruction],
  //     }
  //   })
  // }

  // const updateIngredients = (ingredient) => {
  //   // recipeState.instructions.push(instruction)
  //   setRecipeState((prevState) => {
  //     return {
  //       ...prevState,
  //       ingredients: [...prevState.ingredients, ingredient],
  //     }
  //   })
  // }

  // const updateRecipeState = (property, value) => {
  //   setRecipeState((prevState) => {
  //     return {
  //       ...prevState,
  //       [property]: [...prevState[property], value],
  //     }
  //   })
  // }

  // const updateRecipeState = (property, value) => {
  //   switch(porperty){
  //     case 'ingredients':
  //     case 'instructions':
  //       setRecipeState((prevState) => {
  //         return {
  //           ...prevState,
  //           [property]: [...prevState[property], value],
  //         }
  //       })
  //       break
  //     case 'title':
  //     case 'category':
  //   }
  // }

  // const updateTitle = (inputTitle) => {
  //   recipeState.title = inputTitle
  // }

  // const updateCategory = (inputCategory) => {
  //   recipeState.category = inputCategory
  // }

  // return { recipeState, updateIngredients, updateInstructions, updateTitle, updateCategory }
  // return { recipeState, updateIngredients, updateInstructions }
  return { recipeState, updateInstructions }
}

// function myComponent(){
//   const {myState, updateIngredients, updateInstructions} = myAwesomeHook()
//   return {
//     <Form {...recipeState}/>
//     <LivePreview {...recipeState}/>
//   }
// }

// function Form({updateInstructions, updateIngredients}){
//   return "stuff"
//   <button onclick={updateInstructions}/>
// }

// function LivePreview({myState}){
//   const {instructions, ingredients} = myState
//   return "stuff"
// }
