import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: 'auto',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 'auto',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    color:'white',
    margin:'0 6px'
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  logout:{
    padding:"0px",
    margin:"0px"
  }
}));