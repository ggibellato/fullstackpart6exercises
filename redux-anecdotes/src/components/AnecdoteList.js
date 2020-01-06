import React from 'react'
import { connect } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) =>{

  const voteAnecdote = (event, id, anectode) => {
    event.preventDefault()
    props.vote(id)
    props.setNotification(`you voted '${anectode}'`, 5)
  }

  return (
    <div>
      {props.visibleAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={(event) => voteAnecdote(event, anecdote.id, anecdote.content)}>vote</button>
          </div>
        </div>)}
    </div>
  )
}

const anecdotesToShow = (anecdotes, filter) => {
  return anecdotes
    .filter(a => !filter || a.content.toUpperCase().includes(filter.toUpperCase()))
    .sort((a, b) => b.votes - a.votes)
}


const mapStateToProps = (state) => {
  return {
    visibleAnecdotes: anecdotesToShow(state.anecdote, state.filter),
  }
}

const mapDispatchToProps = {
  vote,
  setNotification,
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)