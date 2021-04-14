import {Button} from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import { blue } from '@material-ui/core/colors';


const SecondaryButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(blue[500]),
      backgroundColor: blue[500],
      '&:hover': {
        backgroundColor: blue[700],
        color: `white`,
      },
    },
  }))(Button);

  export default SecondaryButton