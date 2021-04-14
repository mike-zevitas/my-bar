import React, {useState, useContext, useEffect} from 'react'
import {Avatar, Button, FormControl, Input, InputLabel, Paper, Typography} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import {Link, withRouter} from 'react-router-dom'
import firebase from '../../services/firebase'
import PrimaryButton from '../../common/Buttons/primaryButton'


const styles = theme => ({

  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing(3 * 2))]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
  },
  avatar: {
    margin: theme.spacing(),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(),
  },
  submit: {
    marginTop: theme.spacing(3),
  },
});

function ResetPassword(props) {
  const {classes} = props
  const [email, setEmail] = useState('')

  
let errorMessage;
  const forgotPassword = (Email) => {
    firebase.auth().sendPasswordResetEmail(Email)
    .then(function () {
      alert('check your email for password update....')
    }).catch(function (e) {
     console.log(e.message)
    }) 
  }
  return (

    <main className={classes.main}>
    
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
        Enter Email to Reset
        </Typography>
        {errorMessage}
        <form className={classes.form} onSubmit={e => e.preventDefault() && false}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="on" autoFocus value={email}  onChange={e => setEmail(e.target.value)}/>
          </FormControl>
          
          <PrimaryButton
            fullWidth
            variant="text"
            onClick={() => forgotPassword((email).toString())}
            className={classes.submit}>
            reset Password
          </PrimaryButton>
         
        </form>
      </Paper>
    </main>
      )
    
      }

export default withRouter(withStyles(styles)(ResetPassword))
