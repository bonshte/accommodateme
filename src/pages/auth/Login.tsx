import React from 'react'
const handleNameChange = () => {
  const names = ["ivan", "stilian", "daniel"];
  const int = Math.floor(Math.random() * 3);
  return names[int];
}
const Login = () => {
  return (
    <div className="login">
        <h2>Login {handleNameChange()}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, minus!</p>
    </div>
  )
}

export default Login