var players = [
  {
  name: "Guil",
  score: 50,
  id: 1
},
{
  name: "Treasure",
  score: 85,
  id: 2
},
{
  name: "Ashley",
  score: 95,
  id: 3
},
{
  name: "James",
  score: 80,
  id: 4
}
]
function Header (props) {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className='stats'>players: {props.totalPlayers}</span>
    </header>
  )
}
class Counter extends React.Component {
  state = {
    score: 0
  }
  incrementScore = () => {
    this.setState({
      score: this.state.score +1
    })
    console.log(this)
  }
  decrementScore = () =>{
    this.setState({
      score: this.state.score -1
    })
    console.log(this)
  }



  render() {
    return (
      <div className = 'counter'>
        <button className= 'counter-action decrement' onClick={this.decrementScore}>-</button>
        <span className= 'counter-score'>{this.state.score}</span>
        <button className='counter-action increment' onClick={this.incrementScore}>+</button>
      </div>
    )
  }
}
const Player = (props) => {
  return (
    <div className="player">
      <span className='player-name'>
        {props.name}
      </span>
      <Counter></Counter>
    </div>
  )
}
const App = (props) =>{
  return (
    <div className='scoreboard'>
      <Header title = 'score' totalPlayers={props.initialPlayers.length} />
      {
        props.initialPlayers.map(
          player => {
            return  <Player
                    name = {player.name}
                    key = {player.id.toString()}
                  />
          }
        )
      }
    </div>
  )
}

ReactDOM.render(
  <App initialPlayers = {players}/>
  ,
  document.getElementById('root')
)
