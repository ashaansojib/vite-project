import { useEffect, useState } from 'react'
import './App.css'

/* need to install vs code
react extaintion pack
*/
function App(){
  return(
    <div className='container'>
      {/* <UserData></UserData> */}
      <LoadCountries></LoadCountries>
    </div>
  )
}
// load countries
function LoadCountries(){
  const [countries, setCountries] = useState([]);
  useEffect( () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, []);
  return(
    <div className='dataArea'>
      {
        countries.map( country => DisplayCountry(country))
      }
    </div>
  )
}
// display country 
function DisplayCountry(props){
  console.log(props.flags.png)
  return(
    <div className='content-area'>
      <div className='img-area'>
        <img src={props.flags.png} alt="" />
      </div>
      <h2>{props.name.common}</h2>
    </div>
  )
}
/*
Note : dynamiclly kno data load korte gele 5 ta step follow korte hy. first kono ekta datatkbe kina setar jnne ekta empty array rakhhte hbe useState er vitore. tar dane setake desctructuring kortehbe.
2. useState er choto vai useEffect, useEffect a duita value thke first a ekta function carray korte pare tar pashe ekta empty array bosate hy. functon er vitore ekta empty function likhte hbe jar kno nam nai man jai without dependencey. just ekta khali arrow function. ekta peraameter and ekta body thkbe mot kotha ekta annonimous function use korte hbe.
3. useEffect er vite just data fetch korte hbe
4. tar por data take set er jaygay set korte hbe use korar smy just dane man ta set hbe and setake bosaate hbe.
*/

function UserData(){
  const [users, setUser] = useState([]);
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data=> setUser(data))
  });
  return(
    <div className='dataArea'>
      {
        users.map( user=> displayUser(user))
      }
    </div>
  )
}
function displayUser(props){
  const {name, email} = props;
  return(
    <div className='content-area'>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}

export default App
