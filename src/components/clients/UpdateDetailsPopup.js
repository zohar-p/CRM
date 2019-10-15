import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { NotifierContext } from '../../App';

function UpdateDetailsPopup(props) {

  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [country, setCountry] = useState('')
  const {setNotifier, setMsg} = useContext(NotifierContext)

  useEffect(() => {
      setOpen(props.dialog)
      setFirstName(props.firstName)
      setLastName(props.lastName)
      setCountry(props.country)
  }, [props.dialog])

  function handleClose() {
    setOpen(false);
    props.setDialog(false)
  }

  const updateClient = async () => {
      handleClose()
      await axios.put(process.env.REACT_APP_API_URL + '/client/' + props.firstName+' '+props.lastName, {name: firstName+' '+lastName, country} )
      setMsg(`${firstName} ${lastName} was updated`)    
      setNotifier(true)
      props.getAllClients()
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="first-name"
            label="First Name"
            type="text"
            fullWidth
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="last-name"
            label="Last Name"
            type="text"
            fullWidth
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="country"
            label="Country"
            type="text"
            fullWidth
            value={country}
            onChange={e => setCountry(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={updateClient} variant='contained' color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default UpdateDetailsPopup