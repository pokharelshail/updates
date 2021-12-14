import './App.css';
import React,{ useState } from 'react';
import {db} from './firebase.js';
import { collection, addDoc, query, getDocs, orderBy, limit } from "firebase/firestore";

const Show=({word,state})=>{
  let words = word.split(" ");
  if (state === true){
    return (
      <div>
        {
          words.map((word, i) => (
          <div className="row" key={i}>
            {
              [...word].map(letter=> (
                <p className="letterBorder1">
                  {letter}
                </p>
              ))
            }
            {
              i === words.length-1 ? null : <p className="whitespaceBorder"></p>
            }
          </div>
        ))}
      </div>
    );
  }
  else{
    return (
      <div>
        {
          words.map((word, i) => (
          <div className="row" key={i}>
            {
              [...word].map(letter=> (
                <p className="letterBorder">
                  {letter}
                </p>
              ))
            }
            {
              i === words.length-1 ? null : <p className="whitespaceBorder"></p>
            }
          </div>
        ))}
      </div>
    );
  }
  
}

const Hinter =({state1,state2,state3,state4,hint1,hint2,hint3,hint4})=>{
  if(state1 === false){
    return(<p>Hint: {hint1}</p>)
  }
  else if (state2 === false){
    return(<p>Hint: {hint2}</p>)
  }
  else if (state3 === false){
    return(<p>Hint: {hint3}</p>)
  }
  else{
    return(<p>Hint: {hint4}</p>)
  }
  
}


const Leader =()=>{
  return(
    <div>
    <p>Hi 100</p>
    <p> Hello 200</p>
    </div>
  )
}









const App =()=>{

  const Login=()=>{
    return(
      <div style={{textAlign: 'center'}}>
      <h1 style={{fontSize:"5rem"}}>SECRET WORDS</h1>
      <br></br>
      <button onClick={login} style ={{width:"30rem", height:"5rem", fontSize:"4rem", backgroundColor:"#70CF98",marginTop:"14rem",marginLeft:"10rem"}}>Login</button>
      </div>
    )
  }
  const Nav =()=>{
    return(
    <div class="topnav">
    <a class="active" href="#home" onClick={unactiveLeaderboard}>Home</a>
    <a href="#Leaderboards" onClick={activeLeaderboard}>Leaderboards</a>
    <a href="#Sign Out"onClick={logout}>Sign Out</a>
    </div>
    )
  }

  const [logIn,setlogIn] = useState(false)
  const login = () =>{
    console.log('Login clicked')
    setlogIn(true)
  }
  const logout = () =>{
    console.log('Login clicked')
    setlogIn(false)
  }

  
  //LEVEL 1 RESOURCES
  const l1imagelink="https://lh5.googleusercontent.com/Dmu7NcZoZej4PYKgWl_ylA457HkORxOKu2A6biOtJSKLQonkFlV5dIqSvwpyNWnSdXnVuhg58jJBirgl3aSbeaLLvXE0qzBOrumVu5wG032xEXXYUom0g2jZhM0XnSkcsnG7SmY"
  const l1word1 = "mountain"
  const l1word2 = "mug"
  const l1word3 = "bird"
  const l1word4 = "cloud"
  const l1hint1 = "niatmoun"
  const l1hint2 = "gsumz"
  const l1hint3 = "dirbys"
  const l1hint4 = "dlocup "

  const [l1word1s,setl1word1] = useState(false)
  const [l1word2s,setl1word2] = useState(false)
  const [l1word3s,setl1word3] = useState(false)
  const [l1word4s,setl1word4] = useState(false)
  //######################################################################################################################################################################################################

  //LEVEL 2 RESOURCES
  const l2imagelink="https://lh6.googleusercontent.com/qNJbjG2GRmLtRi1ULQr5GcZ86OLZvmdu9i05J-9uPHLVNFR68XQmksneepM-GRBxgdwDVIdvih6iNRO0_Lbn3w1ZhpxVBGYbMhNHnUgDtrdU7YR26VqI1xl-mlM0t2Xh0n-iQvg"
  const l2word1 = "bicycle"
  const l2word2 = "jacket"
  const l2word3 = "umbrella"
  const l2word4 = "pedestrian"
  const l2hint1 = "yclebic"
  const l2hint2 = "teackajau"
  const l2hint3 = "llaumbpper"
  const l2hint4 = "pnustriuianed "

  const [l2word1s,setl2word1] = useState(false)
  const [l2word2s,setl2word2] = useState(false)
  const [l2word3s,setl2word3] = useState(false)
  const [l2word4s,setl2word4] = useState(false)
  //######################################################################################################################################################################################################
  
  //LEVEL 3 RESOURCES
  const l3imagelink="https://lh3.googleusercontent.com/FEBLffzWw8qd8tsGPY3swsU8uAVWGkcQd7KHrSUxq1GGnA7FH9j6RpIXwdYvRBVVXrOkXAOYo5BI-pDLf9Nm82k05U8bXNZk_1-OzDjEXqUFTm4M3D1X_Vz_5wxTnX5c2OC00Ec"
  const l3word1 = "dance"
  const l3word2 = "crowd"
  const l3word3 = "glove"
  const l3word4 = "shoes"
  const l3hint1 = "anahcedu"
  const l3hint2 = "crshjowdhd"
  const l3hint3 = "luvsoveg"
  const l3hint4 = "huosse"

  const [l3word1s,setl3word1] = useState(false)
  const [l3word2s,setl3word2] = useState(false)
  const [l3word3s,setl3word3] = useState(false)
  const [l3word4s,setl3word4] = useState(false)
  //######################################################################################################################################################################################################

  //LEVEL 4 RESOURCES
  const l4imagelink="https://lh6.googleusercontent.com/HjVA5i4yce9KBHGuKM8gyCAZDwsZEwDb6IGsNIaG_43ijpJQKij3hrVsj0UvBxqAvX9_ndA8ZdkUNDAbIVq7JykcZQbEGWC2RD7234URbmpRvrD7KYuWUQzTLLVF5rvlEMAH1DU"
  const l4word1 = "graffiti"
  const l4word2 = "eye"
  const l4word3 = "mask"
  const l4word4 = "wall"
  const l4hint1 = "ifftigrag"
  const l4hint2 = "yeei"
  const l4hint3 = "ksamu"
  const l4hint4 = "lliaw"

  const [l4word1s,setl4word1] = useState(false)
  const [l4word2s,setl4word2] = useState(false)
  const [l4word3s,setl4word3] = useState(false)
  const [l4word4s,setl4word4] = useState(false)
  //######################################################################################################################################################################################################


  //LEVEL 5 RESOURCES
  const l5imagelink="https://lh5.googleusercontent.com/z3C6RUIhAZKElwBNBnjJCvX1hkwTTOjXU75MGIX4BjjnS0HCRxudQRnp2y61BexoAfamUhhHb79a0GUfyb9wkNOZgQxNs_HpL0wdxyFonqFrVE5SutMOtyOqVZOjPPPDH10AopU"
  const l5word1 = "kiss"
  const l5word2 = "mother"
  const l5word3 = "hay"
  const l5word4 = "son"
  const l5hint1 = "siksj"
  const l5hint2 = "rethomu"
  const l5hint3 = "yham"
  const l5hint4 = "nuios"

  const [l5word1s,setl5word1] = useState(false)
  const [l5word2s,setl5word2] = useState(false)
  const [l5word3s,setl5word3] = useState(false)
  const [l5word4s,setl5word4] = useState(false)
  //######################################################################################################################################################################################################
  const[score,setScore] = useState(0)

  const[leader,setleader] = useState(false)

  const activeLeaderboard =()=>{
    setleader(true)
    console.log('woo')
  }

  const unactiveLeaderboard =()=>{
    setleader(false)
    console.log('woo')
  }
  const [answerInput,setAnswerInput] = useState('')

  const inputChange =(event)=>{
    setAnswerInput(()=>event.target.value)
    console.log(event.target.value)
  }

  const onSubmit =(event)=>{
    event.preventDefault()
    console.log('clicked')
    setAnswerInput(()=>"")
   
    if (score <400 && answerInput.toUpperCase() === l1word1.toUpperCase()){
      setl1word1(()=>true)
      setScore(()=>score+100)
    }
    else if (score <400 && answerInput.toUpperCase() === l1word2.toUpperCase()){
      setl1word2(()=>true)
      setScore(()=>score+100)
    }
    else if (score <400 && answerInput.toUpperCase() === l1word3.toUpperCase()){
      setl1word3(()=>true)
      setScore(()=>score+100)
    }
    else if (score <400 && answerInput.toUpperCase() === l1word4.toUpperCase()){
      setl1word4(()=>true)
      setScore(()=>score+100)
    }  
    else if (score>=400 && score <800 && answerInput.toUpperCase() ==l2word1.toUpperCase()){
      setl2word1(()=>true)
      setScore(()=>score+100)
    }
    else if (score>=400 && score <800 && answerInput.toUpperCase() ==l2word2.toUpperCase()){
      setl2word2(()=>true)
      setScore(()=>score+100)
    }
    else if (score>=400 && score <800 && answerInput.toUpperCase() ==l2word3.toUpperCase()){
      setl2word3(()=>true)
      setScore(()=>score+100)
    }
    else if (score>=400 && score <800 && answerInput.toUpperCase() ==l2word4.toUpperCase()){
      setl2word4(()=>true)
      setScore(()=>score+100)
    }
    else if (score>=800 && score <1200 && answerInput.toUpperCase() ==l3word1.toUpperCase()){
      setl3word1(()=>true)
      setScore(()=>score+100)
    }
    else if (score>=800 && score <1200 && answerInput.toUpperCase() ==l3word2.toUpperCase()){
      setl3word2(()=>true)
      setScore(()=>score+100)
    }
    else if (score>=800 && score <1200 && answerInput.toUpperCase() ==l3word3.toUpperCase()){
      setl3word3(()=>true)
      setScore(()=>score+100)
    }
    else if (score>=800 && score <1200 && answerInput.toUpperCase() ==l3word4.toUpperCase()){
      setl3word4(()=>true)
      setScore(()=>score+100)
    }
    else if (score>=1200 && score <1600 && answerInput.toUpperCase() ==l4word1.toUpperCase()){
      setl4word1(()=>true)
      setScore(()=>score+100)
    }
    else if (score>=1200 && score <1600 && answerInput.toUpperCase() ==l4word2.toUpperCase()){
      setl4word2(()=>true)
      setScore(()=>score+100)
    }
    else if (score>=1200 && score <1600 && answerInput.toUpperCase() ==l4word3.toUpperCase()){
      setl4word3(()=>true)
      setScore(()=>score+100)
    }
    else if (score>=1200 && score <1600 && answerInput.toUpperCase() ==l4word4.toUpperCase()){
      setl4word4(()=>true)
      setScore(()=>score+100)
    }
    else if (score>=1600 && score <2000 && answerInput.toUpperCase() ==l5word1.toUpperCase()){
      setl5word1(()=>true)
      setScore(()=>score+100)
    }
    else if (score>=1600 && score <2000 && answerInput.toUpperCase() ==l5word2.toUpperCase()){
      setl5word2(()=>true)
      setScore(()=>score+100)
    }
    else if (score>=1600 && score <2000 && answerInput.toUpperCase() ==l5word3.toUpperCase()){
      setl5word3(()=>true)
      setScore(()=>score+100)
    }
    else if (score>=1600 && score <2000 && answerInput.toUpperCase() ==l5word4.toUpperCase()){
      setl5word4(()=>true)
      setScore(()=>score+100)
    }
    
  }

  

  if(!logIn){
    return(
      <Login/>
    )
  }

  if (leader){
    console.log('Show Leaderboards')
    return(
    <div>
      <Nav/>
      <Leader/>
    </div>
      
    )
  }
  else{

    if (score<400)
    {return(
    <div>
      <Nav/>
    <div>
        <p class="level">Level 1</p>
        <p class="score">Score:{score}</p>
      </div>
      <img class = "img" src={l1imagelink} alt="l1image" height={300} width={600}/>
      <div class="hint"><Hinter state1 ={l1word1s} state2 ={l1word2s} state3={l1word3s} state4={l1word4s} hint1={l1hint1} hint2={l1hint2} hint3={l1hint3} hint4 ={l1hint4}/></div>
      <div>
        <form class="guess" onSubmit={onSubmit}>
        <input value={answerInput} onChange={inputChange} placeholder="Guess a Word..."/>
        <div>
        <button type='submit'>Guess</button>
        <button class="quit" onClick={activeLeaderboard}>Quit</button>
      </div>
        </form>
      </div>
      <div class="words">
        <Show word={l1word1} state={l1word1s} />
        <Show word={l1word2} state={l1word2s} />
        <Show word={l1word3} state={l1word3s} />
        <Show word={l1word4} state={l1word4s} />
      </div>
      
    </div>)}
    else if (score < 800){
      return(
        <div>
          <Nav/>
      <div>
        <p class="level">Level 2</p>
        <p class="score">Score:{score}</p>
      </div>
      <img class = "img" src={l2imagelink} alt="l2image" height={300} width={600}/>
      <div class="hint"><Hinter state1 ={l2word1s} state2 ={l2word2s} state3={l2word3s} state4={l2word4s} hint1={l2hint1} hint2={l2hint2} hint3={l2hint3} hint4 ={l2hint4}/></div>
      <div>
        <form class="guess" onSubmit={onSubmit}>
        <input value={answerInput} onChange={inputChange} placeholder="Guess a Word..."/>
        <div>
        <button type='submit'>Guess</button>
        <button class="quit" onClick={activeLeaderboard}>Quit</button>
      </div>
        </form>
      </div>
      <div class="words">
        <Show word={l2word1} state={l2word1s} />
        <Show word={l2word2} state={l2word2s} />
        <Show word={l2word3} state={l2word3s} />
        <Show word={l2word4} state={l2word4s} />
      </div>
    </div>)
    }
    else if (score < 1200){
      return(
        <div>
         <Nav/>
      <div>
        <p class="level">Level 3</p>
        <p class="score">Score:{score}</p>
      </div>
      <img class = "img" src={l3imagelink} alt="l3image" height={300} width={600}/>
      <div class="hint"><Hinter state1 ={l3word1s} state2 ={l3word2s} state3={l3word3s} state4={l3word4s} hint1={l3hint1} hint2={l3hint2} hint3={l3hint3} hint4 ={l3hint4}/></div>
      <div>
        <form class="guess" onSubmit={onSubmit}>
        <input value={answerInput} onChange={inputChange} placeholder="Guess a Word..."/>
        <div>
        <button type='submit'>Guess</button>
        <button class="quit" onClick={activeLeaderboard}>Quit</button>
      </div>
        </form>
      </div>
      <div class="words">
        <Show word={l3word1} state={l3word1s} />
        <Show word={l3word2} state={l3word2s} />
        <Show word={l3word3} state={l3word3s} />
        <Show word={l3word4} state={l3word4s} />
      </div>
          
        </div>)
    }
  else if (score < 1600){
    return(
      <div>
       <Nav/>
      <div>
        <p class="level">Level 4</p>
        <p class="score">Score:{score}</p>
      </div>
      <img class = "img" src={l4imagelink} alt="l4image" height={300} width={600}/>
      <div class="hint"><Hinter state1 ={l4word1s} state2 ={l4word2s} state3={l4word3s} state4={l4word4s} hint1={l4hint1} hint2={l4hint2} hint3={l4hint3} hint4 ={l4hint4}/></div>
      <div> 
        <form class="guess" onSubmit={onSubmit}>
        <input value={answerInput} onChange={inputChange} placeholder="Guess a Word..."/>
        <div>
        <button type='submit'>Guess</button>
        <button class="quit" onClick={activeLeaderboard}>Quit</button>
      </div>
        </form>
      </div>
      <div class="words">
        <Show word={l4word1} state={l4word1s} />
        <Show word={l4word2} state={l4word2s} />
        <Show word={l4word3} state={l4word3s} />
        <Show word={l4word4} state={l4word4s} />
      </div>
        
      </div>)
    }
    else if (score < 2000){
      return(
        <div>
      <div class="topnav">
          <a class="active" href="#home">Home</a>
          <a href="#Leaderboards" onClick={activeLeaderboard}>Leaderboards</a>
          <a href="#Sign Out">Sign Out</a>
        </div>
      <div>
        <p class="level">Level 5</p>
        <p class="score">Score:{score}</p>
      </div>
      <img class = "img" src={l5imagelink} alt="l5image" height={300} width={600}/>
      <div class="hint"><Hinter state1 ={l5word1s} state2 ={l5word2s} state3={l5word3s} state4={l5word4s} hint1={l5hint1} hint2={l5hint2} hint3={l5hint3} hint4 ={l5hint4}/></div>
      <div>
        <form class="guess" onSubmit={onSubmit}>
        <input value={answerInput} onChange={inputChange} placeholder="Guess a Word..."/>
        <div>
        <button type='submit'>Guess</button>
        <button class="quit" onClick={activeLeaderboard}>Quit</button>
      </div>
        </form>
      </div>
      <div class="words">
        <Show word={l5word1} state={l5word1s} />
        <Show word={l5word2} state={l5word2s} />
        <Show word={l5word3} state={l5word3s} />
        <Show word={l5word4} state={l5word4s} />
      </div>
          
        </div>)
    }
    else{
      return(<p>You Beat the Game you got a score of :{score}</p>)
    }
  }




}
export default App;
