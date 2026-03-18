import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const cards = [["Start", "Press to start game :)"],
  ["Which player has scored the most points in NBA history?","LeBron James"],
    ["Which team has won the most NBA championships?","Boston Celtics"],
    ["Who is the only player to win MVP unanimously?","Stephen Curry"],
    ["Which player scored 100 points in a single NBA game?","Wilt Chamberlain"],
    ["What team drafted Michael Jordan in 1984?","Chicago Bulls"],
    ["Which NBA player is known as “The Greek Freak”? ","Giannis Antetokounmpo"],
    ["Which team completed the only 73-win regular season in NBA history?","Golden State Warriors (2015–16)"],
    ["Who holds the record for the most career assists in the NBA?","Who holds the record for the most career assists in the NBA?"],
    ["Which player won six NBA championships with the Chicago Bulls in the 1990s?", "Michael Jordan"],
    ["Which player is known as “King James”?", "LeBron James"]
  ];
  const [pos1, setPos1] = useState(0);
  const [pos2, setPos2] = useState(0);
  const [display, setDisplay] = useState(cards[0][0]);
  const [curr, setCurr] = useState(0);
  const [longest, setLongest] = useState(0);
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState("");


  function Show(){
    if(pos2 === 0){
      setPos2(1);
      setDisplay(cards[pos1][1]);
    }
    else{
      setPos2(0);
      setDisplay(cards[pos1][0]);
    }
  }
  function handleClickForward(){
    if (pos1 < cards.length - 1){
      const nextPos = pos1 + 1;
      setPos1(nextPos);
      setDisplay(cards[nextPos][0]);
    }
  }
  function handleClickBackwards(){
    if (pos1 > 0){
      const nextPos = pos1 - 1;
      setPos1(nextPos);
      setDisplay(cards[nextPos][0]);
    }
  }

  function handleInput(e){
    e.preventDefault();
    setAnswer(e.target.value);
  }
  function onSubmit(e){
    e.preventDefault();
    if (answer === cards[pos1][1]){
      setCurr(prev =>{
        const newCurr = curr + 1;
        if (newCurr > longest){
          setLongest(newCurr);
        }
        return newCurr;
      });
      setStatus("correct");
    }
    else {
      setCurr(0);
      setStatus("incorrect");
    }
  }
  
  return (
    <>
    <div className='flashcards'>
    <div className='header'>
      <h1>NBA Trivia</h1>
      <h3>Let's test your basketball knowledge</h3>
      <p>Number of Cards: 10</p>
      <div className='streak'>
        <p>Current Streak: {curr} </p>
        <p>Longest Streak: {longest} </p>
      </div>
    </div>
    <div className='content'>
      <div className='display' onClick={Show}>
        {display}
      </div>
      <div className='answer'>
      <label htmlFor="answer">Guess the answer here: </label>
        <input type="text" 
        placeholder='Place your answer here' 
        id='answer' 
        onChange={handleInput}
        className={`answerInput ${status}`}
        />
        <button onClick={onSubmit}>Submit Guess</button>
      </div>
      <div>
      <button onClick={handleClickBackwards}>←</button>
      <button onClick={handleClickForward}>→</button>
      </div>
      
    </div>
    </div>
   
     
    </>
  )
}

export default App
