import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Altcha from './Altcha'
import './App.css'

function App() {
  const altchaRef = useRef<HTMLInputElement>(null)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Altcha payload:', altchaRef.current?.value)
  }

  return (
    <>
      <div>
        <a href="https://www.ramajudicial.gov.co" target="_blank">
          <img src={"./logo.png"} className="logo" alt="Vite logo" />
        </a>
      
      </div>

      <h1>DDPD Captcha demo</h1>

      <form action="#" method='post' onSubmit={handleSubmit}>
        <fieldset>
          <label>Name:</label>
          <input type="text" name="name" />
        </fieldset>

        <fieldset>
          <label>Message:</label>
          <textarea name="message"></textarea>
        </fieldset>

        <fieldset>

          <Altcha
            ref={altchaRef}
          />

        </fieldset>

        <button type="submit">Submit</button>
      </form>

      <p className="read-the-docs">
        Click on the main button to learn how to implement Captcha features on UDTDI Apps
      </p>
    </>
  )
}

export default App
