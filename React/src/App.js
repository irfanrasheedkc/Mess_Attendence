import React from 'react'
import Login from './components/Login';
import MyComponent from './components/MyComponent';
import NavBar from './components/NavBar';
import UserForm from './components/UserForm';
function App() {
  return (
    <div>
      <NavBar/>
      <UserForm/>
      {/* <MyComponent/> */}
    </div>
  )
}

export default App;