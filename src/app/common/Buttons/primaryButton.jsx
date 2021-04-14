import {Button} from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import { purple } from '@material-ui/core/colors';


const PrimaryButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(purple[500]),
      backgroundColor: purple[500],
      '&:hover': {
        backgroundColor: purple[700],
      },
    },
  }))(Button);

  export default PrimaryButton