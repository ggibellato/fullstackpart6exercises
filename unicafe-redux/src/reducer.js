const initialState = {
  good: 0,
  ok: 0,
  bad: 0,
  all: 0,
  average: 0,
  positive: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  let newState = {...state}
  switch (action.type) {
    case 'GOOD':
      newState.good++
      break
    case 'OK':
      newState.ok++
      break
    case 'BAD':
      newState.bad++
      break
    case 'ZERO':
      newState = initialState
      break
  }
  newState.all = newState.good + newState.ok + newState.bad
  newState.average = newState.all > 0 ? (newState.good - newState.bad) / newState.all : 0
  newState.positive = newState.all > 0 ? newState.good / newState.all * 100 : 0

  return newState
}

export default counterReducer