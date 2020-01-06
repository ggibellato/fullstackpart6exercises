import anecdoteService from '../services/anecdote'

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE':
      const toChange = state.find(a => a.id === action.data.id)
      const changed = { 
        ...toChange, 
        votes: action.data.votes
      }            
      return state
        .map(a =>a.id !== action.data.id ? a : changed)
    case 'NEW':
      return [...state, action.data]
    case 'INIT':
      return action.data
    default:
      break;
  }
  return state
}

export const vote = (id) => {
  return async dispatch => {
    const anectode = await anecdoteService.incrementVotes(id);
    dispatch({
      type: 'VOTE',
      data: anectode
    })
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW',
      data: newAnecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT',
      data: anecdotes
    })
  }
}

export default reducer