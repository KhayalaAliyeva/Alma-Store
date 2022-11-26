import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Apple from "../public/images/companenets/dialog/apple-social-icon (1).svg"
import Google from "../public/images/companenets/dialog/google-social-icon.svg"
import Facebook from "../public/images/companenets/dialog/facebook-social-icon.svg"
//mui
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const AlertDialog = ( {onclose, open}) => {
  return (
    <div className="dialog">
         <Dialog open={open} onClose={onclose}>
          <Button onClick={onclose} className="close-btn">X</Button>
        <DialogTitle className="heading"> Sign in </DialogTitle>
        <DialogContent>
          <DialogContentText>
          To access your personal account, enter the e-mail. 
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          
          <Button onClick={onclose} className="continue-btn"> Continue </Button>
            <div className="socials-wrapper">
            <DialogContentText className="social-descr">
            or click on the below button to quickly sign in with Apple or Google or Facebook if you have activated one of these functions earlier 
            </DialogContentText>
            <ul className="socials-list">
                <li className="list-item">
                    <Link href="https://appleid.apple.com/auth/authorize?response_type=code&response_mode=form_post&client_id=PAcms.client&redirect_uri=https%3A%2F%2Fi-store.by%2Fapi%2Fsocial-sign%3Fsocial%3Dapple&state=eyJzaXRlIjoiaHR0cHM6XC9cL2FsbWFzdG9yZS5helwvZW4iLCJhcHJfcGFnZSI6IiIsImVudF9zbGciOiIiLCJ1aWQiOjAsImtleSI6IjY5NzNhNzRmNTYifQ%3D%3D&scope=name+email">
                    <a className="btn btn-apple">
                        <Image src={Apple} alt="apple"/>
                    </a>
                    </Link>

                </li>
                <li className="list-item">
                    <Link href="https://accounts.google.com/o/oauth2/auth?response_type=code&access_type=online&client_id=841694807437-apngnicrl6hudtdl965sr28vu1cl0g9r.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Falmastore.az%2Fapi%2Fsocial-sign%3Fsocial%3Dgoogle&state=eyJzaXRlIjoiaHR0cHM6XC9cL2FsbWFzdG9yZS5helwvZW4iLCJhcHJfcGFnZSI6IiIsImVudF9zbGciOiIiLCJ1aWQiOjAsImtleSI6IjhmODljMGJkNmYifQ%3D%3D&scope=email%20profile&approval_prompt=auto">
                    <a className="btn btn-google">
                        <Image src={Google} alt="Google"/>
                    </a>
                    </Link>

                </li>
                <li className="list-item">
                    <Link href="https://www.facebook.com/v6.0/dialog/oauth?client_id=503300097686802&redirect_uri=https://almastore.az/api/social-sign?social=facebook&scope=email&state=eyJzaXRlIjoiaHR0cHM6XC9cL2FsbWFzdG9yZS5helwvZW4iLCJhcHJfcGFnZSI6IiIsImVudF9zbGciOiIiLCJ1aWQiOjAsImtleSI6IjRhZjY1M2UwYjcifQ==">
                    <a className="btn btn-facebook">
                        <Image src={Facebook} alt="Facebook"/>
                    </a>
                    </Link>

                </li>

            </ul>
            </div>
            <div className="modal-switch-wrapper">
                <p className="title"> No account? </p>
                <div className="link"> Sign up </div>
            </div>
            <DialogContentText className="modal-copy-wrapper">
            <p>
                By logging in to the account or creating a new one, you agree to the processing of personal data and the receipt of mails.
            </p>
            <Link href="/information/privacy-policy">
                <a>
                    personal data
                </a>
            </Link>
            </DialogContentText>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AlertDialog