import React, { useState } from 'react';
import { KeyPad, Result } from './Components'

function App() {
	const [result, setResult] = useState("")

	function handleClick(button){
		if (button === "="){
			calculate()
		}
		else if (button ==="C"){
			reset()
		}
		else if (button === "CE"){
			backspace()
		}

		else {
			setResult(
				result + button
			)
		}
	}

	function calculate(){
		try {
			setResult((eval(result) || "") + "")
		} catch(e) {
			setResult("error")
		}
	};

	function reset(){
		setResult('')
	}

	function backspace() {
		setResult( result.slice(0,-1))
	}

  return (
    <div>
      	<div className="calculator-body">
	      	<Result result={result} />
	      	<KeyPad handleClick={handleClick}/>
  		</div>
  </div>
  )
}

export default App;
