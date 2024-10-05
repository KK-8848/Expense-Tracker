import { useState,useEffect } from 'react'
import Balance from './Balance.jsx'
import './App.css'
import Display from './Display.jsx'
import Box from '@mui/material/Box';
import History from './History.jsx';
import Add from './Add.jsx';
import axios from 'axios';


function App() {
  const[trans,setTrans]=useState([])
  const getItem= async()=>{
   try{
    const response=await axios.get("http://localhost:5000/");
    if(response)
    return response.data;
    else
    return [];
   }
   catch(error){
    console.log(error);}
   /* const data=JSON.parse(localStorage.getItem("trans"));
    if(!data)
        return []
    else
    return data*/}

    const fetchItems=async ()=>{
      await getItem().then(data=>setTrans(data));}
  useEffect( ()=>{//localStorage.setItem("trans",JSON.stringify(trans));

fetchItems()}
,[]);
const add = async (text, t, amnt) => {
  try {
    
    const response = await axios.post("http://localhost:5000/", { text:text, positive: t, amount: parseFloat(amnt) });
    fetchItems();
    console.log(trans)
    //setTrans(prevTrans => [...prevTrans, response.data]); // Use previous state to add new transaction
  } catch (error) {
    console.log(error);
  }
};
  let income=0;
  let expense=0;
  const[balance,setBalance]=useState(0);
  function calc(i,e){
    setBalance(parseFloat(i+e))
  }
  
  const delet= async(id)=>{
    try{
      console.log(id);
      const response=await axios.delete(`http://localhost:5000/${id}`);
      fetchItems();
      console.log(trans);
    }
    catch(err){
      console.log(err)
    }
   /* console.log(id);
    setTrans(trans=>trans.filter(item=>{ return item.id!==id;}))*/

  }
  return(
  

  <Box sx={ {
    fontFamily:'Montserrat',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
   
    bgcolor: 'background.default',
    p: 3,
    border: '2px solid',
    borderColor: 'primary.dark',
    borderRadius: 2,
    boxShadow: 3,
    margin: '10px auto',
    maxWidth: '450px'}}>
 
  
  <h2 className=' text-2xl font-semibold font-sans mb-16  '>Expense Tracker</h2>
  <Balance bal={balance}/>
  <Display trans={trans}income={income}expense={expense} cal={calc}/>
  <History trans={trans} del={delet}/>
  <Add add={add}/>
  </Box>)
}

export default App
