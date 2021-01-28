import React from 'react';
import {Avatar,makeStyles} from '@material-ui/core';
import {Search,MoreVert}from '@material-ui/icons';

const useStyles=makeStyles(()=>({
        headerChat:{
            background: '#2a2f32', 
            height: '2.5rem',
            padding: 10,
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center'
        },
        icons:{
            display:'flex',
            justifyContent:'space-between',
             
        },
        avatar:{
            display:'flex',
            paddingRight:10,
            justifyContent:'space-between',
            alignItems:'center'
             
        }
}))




const HeaderChat=({props})=>{
    const classes = useStyles();
    return (
           <div className={classes.headerChat}>
               <div className={classes.avatar}>
                    <Avatar src="/broken-image.jpg" />
                     <p style={{color:'white',marginLeft:10}}><b> Prerna</b></p>
              </div>
                      <div className={classes.icons}>
                        <Search style={{color: 'white', cursor: 'pointer'}}/>
                        <MoreVert style={{color: 'white', cursor: 'pointer'}}/>
                      </div>
           </div>)
}


export default HeaderChat;