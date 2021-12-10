import * as React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { Setup } from '../Setup'

interface interfaceState {
  budget: number
  surface: number
  typology: number
  exposures: (string | null)[]
}
const initialState: interfaceState = {
  budget: 0,
  surface: 0,
  typology: 0,
  exposures: [],
} // OK

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'updateBudget':
      return { ...state, budget: action.budget }
    case 'updateExposures':
      return { ...state, exposures: action.exposures }
    case 'updateSurface':
      return { ...state, surface: action.surface }
    case 'updateTypology':
      return { ...state, typology: action.typology }
    default:
      return state
  }
}

const store = createStore(reducer)

export const SetupProvider = () => {
  return (
    <Provider store={store}>
      <Setup />
    </Provider>
  )
}
