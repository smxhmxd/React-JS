{/*In the previous algorithm we were concatenating the alphabets with the number and characters (if required) and than randomly picking up characters to make the password. 
The problem with this was that probability of getting a index where the numbers or characters are situated were very less and
there exist chances where even after checking the number checkbox there still exist no number in the output password.*/}

{/*Solution to the Problem with new Algorithm:
Hence, In order to solve the problem I created a new algo, in which we are keeping at least one place secure for numbers and characters (when needed) and 
then applying the same random process to fill the remaining positions. And hence the problem is solved.*/}

import { useState, useCallback, useEffect, useRef } from 'react'
function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {

    let password = [];
    for (let i = 0; i < Number(length); i++) {
        password.push("");
    }
    let words = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let numbers = "1234567890";
    let characters = "!@#$&*";
    if (numberAllowed) {
        let randomIndex = Math.floor(Math.random() * password.length);
        password[randomIndex] = numbers[Math.floor(Math.random() * numbers.length)];
        words += numbers;
    }
    if (charAllowed) {
        let randomIndex = Math.floor(Math.random() * password.length);
        password[randomIndex] = characters[Math.floor(Math.random() * characters.length)];
        words += characters;
    }
    for (let i = 0; i < Number(length); i++) {
        if (password[i] === "") {
            password[i] = words[Math.floor(Math.random() * words.length)]
        }
    }

    setPassword(password.join(""));


  }, [length, numberAllowed, charAllowed, setPassword])
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (

    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>

    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>

  )
}
export default App
Footer
