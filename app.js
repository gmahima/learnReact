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
const Counter = (props) => {
  return (
    <div className = 'counter'>
      <button className='counter-action increment'>+</button>
      <span className= 'counter-score'>{props.score}</span>
      <button className= 'counter-action decrement'>-</button>
    </div>
  )
}
const Player = (props) => {
  return (
    <div className="player">
      <span className='player-name'>
        {props.name}
      </span>
      <Counter score={props.score}></Counter>
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
                    score = {player.score}
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
