// import './App.css';
import Navbar from './components/Navbar';
import CardList from './components/CardList'
import { useState } from 'react';
import Button from './components/Button'
function App() {

  const data = localStorage.getItem('myData') ? JSON.parse(localStorage.getItem('myData')) : localStorage.setItem('myData', JSON.stringify({ "id": "1", "name": "ajit", "email": "something@gmail.com" }, { "id": '2', "name": "something", "email-id": "datanalysis@gmail.com" }, { "id": '23', "name": "something", "email-id": "datanalysis@gmail.com"})); JSON.parse(localStorage.getItem('myData'))

  console.log(typeof (data))

  // mapping data and making strin
  const [Data, setData] = useState([data])
  console.log(typeof (Data))

  function handleClick(event) {

    // let newData = { "id": '2', "name": "something", "email-id": "datanalysis@gmail.com" }
    // let updated_data = { ...Data ,newData} vvvvvvvvvvbnm, v
    // localStorage.setItem('myData', JSON.stringify(newData))
    // setData(updated_data)
    localStorage.setItem('myData',JSON.stringify({"id":'2',"name":"something","email-id":"datanalysis@gmail.com"}))

  }



  return (
    <>
      <Navbar />

      <CardList data={Data} />

      <button onClick={handleClick} > this is button </button>
    </>


  );
}

export default App;
