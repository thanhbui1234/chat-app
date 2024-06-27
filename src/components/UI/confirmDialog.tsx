import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper, { PaperProps } from '@mui/material/Paper';
import Draggable from 'react-draggable';
import { auth } from '../../libs/firebase'; 
import {signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function PaperComponent(props: PaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

interface props {
    open: boolean,
    setOpen :(open:boolean)=> void;  
}

export default function DraggableDialog(props:props) {
    const navigate = useNavigate()
    const signOutAuth = ()=>{
        signOut(auth).then(() => {
            navigate('/')
          }).catch((error :unknown) => {
            console.log(error);
          });
    }
    const {open,setOpen} = props;


  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Signout
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
       May da chac la muon dang xuat khoi app chua?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={()=>{signOutAuth()
            handleClose()
          }}>
          Signout
          </Button>
          <Button onClick={handleClose}>Cancle</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
