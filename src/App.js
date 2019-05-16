import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Result from './Containers/Result'

const houses = ['Serpentard', 'Griffondor', 'Serdaigle', 'Puffsoufle']
const reducer = (state, action) => ({
  houses,
  selectedHouses: houses[Math.floor(Math.random() * 4)],
})
const store = createStore(reducer)
const App = () => {
  return (
    <Provider store={store}>
      <Result />
    </Provider>
  )
}

export default App
