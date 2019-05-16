import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Message from '../Components/Message'

const Result = ({ houses, selectedHouses, dispatch }) => {
  const action = {
    type: 'UPDATE_CHOICE_WITH_MY_INDEX',
    indexSelected: Math.floor(Math.random() * 4),
  }
  useEffect(() => setInterval(() => dispatch(action), 1000), [])

  return (
    <div>
      <ul>
        {houses.map(house => (
          <li key={house}>{house}</li>
        ))}
      </ul>
      <Message message={selectedHouses} />
    </div>
  )
}

export default connect(store => store)(Result)
