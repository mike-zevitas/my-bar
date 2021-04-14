import React, {useState} from 'react'
import {Avatar, Button, FormControl, Input, InputLabel, Paper, Typography} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import {Link, withRouter} from 'react-router-dom'
import firebase from '../../services/firebase'
import PrimaryButton from '../../common/Buttons/primaryButton'
import SecondaryButton from '../../common/Buttons/secondaryButton'



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

function SignIn(props) {
  const {classes} = props
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={e => e.preventDefault() && false}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="on" autoFocus value={email}
                   onChange={e => setEmail(e.target.value)}/>
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="off" value={password}
                   onChange={e => setPassword(e.target.value)}/>
          </FormControl>
          <Button
            fullWidth
            variant="text"
            component={Link}
            to="/password"
            className={classes.submit}>
            Forgot Password?
          </Button>
          <hr/>
          <PrimaryButton
            type="submit"
            fullWidth
            variant="contained"
            onClick={login}
            className={classes.submit}>
            Log in
          </PrimaryButton>
          <SecondaryButton
            type="submit"
            fullWidth
            variant="contained"
            component={Link}
            to="/register"
            className={classes.submit}>
            Sign Up
          </SecondaryButton>
         
        </form>
      </Paper>
    </main>
  )


  //Login with Email 
  async function login() {
    try {
      // await firebase.login(email, password)
      await firebase.auth().signInWithEmailAndPassword(email, password);
      props.history.replace('/home')
    } catch (error) {
      alert(error.message)
    }
  } 
}
export default withRouter(withStyles(styles)(SignIn))
