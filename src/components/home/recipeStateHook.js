import React, { useReducer } from 'react'

export default function useRecipeStateHook() {
  // const [recipeState, setRecipeState] = useState({
  //   instructions: [],
  //   ingredients: [],
  // })

  const initialState = {
    title: '',
    category: '',
    imageUrl: '',
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
      case 'delete_ingredient':
        return {
          ...state,
          ingredients: [
            ...state.ingredients.slice(0, state.ingredients.indexOf(action.payload)),
            ...state.ingredients.slice(state.ingredients.indexOf(action.payload) + 1, state.ingredients.length),
          ],
        }
      case 'delete_instruction':
        return {
          ...state,
          instructions: [
            ...state.instructions.slice(0, state.instructions.indexOf(action.payload)),
            ...state.instructions.slice(state.instructions.indexOf(action.payload) + 1, state.ingstructions.length),
          ],
        }
      case 'title':
      case 'category':
      case 'imageUrl':
        return {
          ...state,
          [action.type]: action.payload,
        }
      case 'clear':
        return {
          ...state,
          title: '',
          category: '',
          imageUrl: '',
          instructions: [],
          ingredients: [],
        }
      default:
        console.log('no matches for case')
    }
  }

  const [recipeState, dispatch] = useReducer(reducer, initialState)

  const updateInstructions = (value) => {
    dispatch({ type: 'instructions', payload: value })
  }

  const updateIngredients = (value) => {
    dispatch({ type: 'ingredients', payload: value })
  }

  const updateTitle = (value) => {
    dispatch({ type: 'title', payload: value })
  }

  const updateCategory = (value) => {
    dispatch({ type: 'category', payload: value })
  }

  const updateImageUrl = (value) => {
    dispatch({ type: 'imageUrl', payload: value })
  }

  const deleteIngredient = (value) => {
    dispatch({ type: 'delete_ingredient', payload: value })
  }

  const deleteInstruction = (value) => {
    dispatch({ type: 'delete_instruction', payload: value })
  }

  const clearRecipe = () => {
    dispatch({ type: 'clear' })
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

  const actions = {
    updateIngredients,
    updateInstructions,
    updateTitle,
    updateCategory,
    updateImageUrl,
    deleteIngredient,
    deleteInstruction,
    clearRecipe,
  }

  // return { recipeState, updateIngredients, updateInstructions, updateTitle, updateCategory }
  // return { recipeState, updateIngredients, updateInstructions }
  return { recipeState, actions }
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
