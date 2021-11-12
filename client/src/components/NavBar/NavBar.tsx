import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';
import logo from '../../Images/logo.png';
import { User } from '../../interface/User';
import AuthMenu from '../AuthMenu/AuthMenu';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';
import { useHistory } from 'react-router-dom';
import LoggedInBar from './AuthBars/LoggedInBar';
import LoggedOutBar from './AuthBars/LoggedOutBar';

interface Props {
  loggedInUser?: User;
  handleDrawerToggle?: () => void;
}

const NavBar = (): JSX.Element => {
  const classes = useStyles();
  const { loggedInUser } = useAuth();
  const history = useHistory();
  if (loggedInUser === undefined) return <CircularProgress />;

  return (
    <AppBar className={classes.appbar} position="absolute">
      <ToolBar className={classes.toolbar}>
        <img src={logo} alt="logo" />
        {loggedInUser ? <LoggedInBar /> : <LoggedOutBar />}
      </ToolBar>
    </AppBar>
  );
};

export default NavBar;
