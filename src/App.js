import React, { useState } from 'react'
import './App.css'

function App() {
const [player, setPlayer] = useState(1)

  return (
    <div>
      <h1 className='text-centre'>❌ Tic Tac Toe ⭕</h1>

      <div className='palyers-container'>
        <span>
          Player 1:❌
        </span>

        <span>
          Player 2:⭕
        </span>
      </div>

<div className='board'>

<div className='row'>
<div className='box'></div>
<div className='box'></div>
<div className='box'></div>
</div>

<div className='row'>
  <div className='box'></div>
<div className='box'></div>
<div className='box'></div>
</div>

<div className='row'>
  <div className='box'></div>
<div className='box'></div>
<div className='box'></div>
</div>

</div>
    </div>
  )
}

export default App