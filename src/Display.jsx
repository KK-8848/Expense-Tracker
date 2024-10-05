import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { Grow, Typography } from '@mui/material';
export default function Display({trans,income,expense,cal}){
      console.log(`Display${trans}`);
      trans.map((item) => {
        
        if(item.amount>0){income+=parseFloat(item.amount);}else{expense+=parseFloat(item.amount);}
      })
      cal(income,expense);
    
  
    return (
            
          
        
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid',
                borderColor: 'divider',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                bgcolor: 'white',
                width:400,
                height:90,
                fontFamily:'Montserrat',
                
                '& svg': {
                  m: 1,
                },
              }}
            >
             <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,flexGrow:1}}>
             <Typography variant="body1" component="p" sx={{ fontWeight: 'bold' }}>
              INCOME
             </Typography>
             <Typography variant="body2" component="p" sx={{fontSize:22, color: 'rgb(44,219,132)' }}>
               {income}
              </Typography>
              </div>
              <Divider orientation="vertical" variant="middle" flexItem />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',flexGrow:1 }}>
                <Typography variant="body1" component="p" sx={{ fontWeight: 'bold'}}>
                EXPENSE
                </Typography>
                <Typography variant="body2" component="p" sx={{fontSize:22, color: 'red' }}>
                 {expense}
                </Typography>
               </div>
              
            
           
            </Box>
            
        )
}