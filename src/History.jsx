import Divider from '@mui/material/Divider';
import { Box,Typography } from '@mui/material';
export default function History({trans,del}){
    console.log(trans);
    return(
        <div className="history">
        <p style={{fontWeight:"bold", fontSize:18}}>History</p>
        
        <Divider orientation="horizontal" variant="full" flexItem sx={{marginBottom:2}}/>
        {trans.map((t,i)=>{
          
        return(
        <Box  onClick={()=>del(t._id)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid',
                borderColor: 'divider',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                bgcolor: 'white',
                width:400,
                height:60,
                fontFamily:'Montserrat',
                marginBottom:2,
                
                '& svg': {
                  m: 1,
                },
              }}>
                <Typography variant="body2"  sx={{marginLeft:3,fontSize:16,}}>{t.text}</Typography>
                <div style={{backgroundColor:t.positive?"rgb(44,219,132)":"red",width:10,height:'100%',marginLeft:'auto'}}>
                    <p></p>
                </div>
              </Box>)})}
        </div>
    )
}