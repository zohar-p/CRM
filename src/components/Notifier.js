import React, {useState} from 'react'
import {Snackbar, Slide, Typography} from '@material-ui/core';


function Notifier(props) {
    // const [open, setOpen] = useState(props.open);
  
    // function handleClick() {
    //   setOpen(true);
    // }
  
    function handleClose(event, reason) {
      if (reason === 'clickaway') {
        return;
      }
  
      props.setNotifier(false);
    }
  
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={props.open}
          autoHideDuration={3000}
          onClose={handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<Typography varient="body1" align='center'>{props.msg}</Typography>}
        />
      </div>
    );
  }
  

export default Notifier
