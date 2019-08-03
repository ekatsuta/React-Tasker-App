import React from 'react'
import ToDoList from './ToDoList'

class ToDoCard extends React.Component {

  state = {
    input: ''
  }

  handleListInput = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  handleListSubmit = (event) => {
    event.preventDefault()
    this.props.addList(this.props.card.id, this.state.input)
    this.setState({
      input: ''
    })
  }

  renderLists(){
    return this.props.card.lists.map(list => {
      return <ToDoList key={list.id} handleClickList={this.props.handleClickList} cardId={this.props.card.id} list={list}/>
    })
  }

  render(){
    return (
      <div className="to-do-card">
        <h4>{this.props.card.title}</h4>
        <form onSubmit={this.handleListSubmit}>
          <input onChange={this.handleListInput} type="text" value ={this.state.input} />
        </form>
        {this.renderLists()}
      </div>
    )
  }
}


export default ToDoCard
