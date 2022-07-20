import './App.css';
import a from 'axios'
import { useEffect, useState } from 'react';
import { FaCity , FaMale, FaFemale} from "react-icons/fa";
import { BsFillPersonFill} from "react-icons/bs";


function App() {

  const [data,setData] = useState({})

  useEffect(()=>{
    // async function getdata()
    // {
    //   const h = await a.get("https://randomuser.me/api/");
    //   setData(h.data.results[0])
    // }
    // getdata();

    a.get("https://randomuser.me/api/")
    .then(res=> setData(res.data.results[0]))
    .catch(err=>console.log(err))

  },[])

  console.log(data);
  return (
    <>
      <div className="App">
      <p>**Hmasof is love**</p>
        <img src={data.picture?.large} alt="pictrue"/>
        <div className="container"> 
        <li className="items">
        {data.gender==='male'? <FaMale className='icons'/>:<FaFemale className='icons'/> }{data.gender}
          </li>
        <li className="items"><FaCity className='icons'/> {data.location?.city}</li>
        <li className="items"> <BsFillPersonFill className='icons'/> {data.name?.first} {data.name?.last}</li>
        </div>     
      </div>
    </>
  )
}

export default App;