import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';

function UpdateDetailsPopup(props) {

  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [country, setCountry] = useState('')

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
      await axios.put('http://localhost:4000/client/' + props.firstName+' '+props.lastName, {name: firstName+' '+lastName, country} )
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