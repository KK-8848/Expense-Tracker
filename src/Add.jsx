import Divider from '@mui/material/Divider';
import { Typography,Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
export default function Add({add}){
    const[text,setText]=useState("");
    const[amount,setAmount]=useState()
    function handleClick(event) {
        event.preventDefault();
        if(amount>=0){
            add(text,true,amount);
            setText("");
            setAmount(0);
        }
        else
         add(text,false,amount);
    }
    return(
        <div className="Add" style={{width:"90%", marginTop:10}}>
        <p style={{fontWeight:"bold", fontSize:18}}>Add new transaction</p>
        
        <Divider orientation="horizontal" variant="full" flexItem sx={{marginBottom:2}}/>
        <p style={{fontWeight:'bold',marginLeft:0}}>Text</p>
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
        <TextField id="Text" label="Transaction" placeholder="Enter your text..." variant="outlined" value={text} onChange={(e)=>{setText(e.target.value)}}  />

       
        </Box>
        <p style={{fontWeight:'bold',marginLeft:0}}>Amount(negative-expense,positive-income)</p>
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
        <TextField id="Amount" label="Transaction" placeholder="Enter amount" variant="outlined" value={amount} type="number"onChange={(e)=>{setAmount(e.target.value)}} />
        
       
        </Box>
        <Button variant="contained" size="large" sx={{fontFamily:"Arial",marginLeft:1,width:'99%', marginTop:2}} onClick={
           handleClick}>Add transaction</Button>
        </div>
    )
}