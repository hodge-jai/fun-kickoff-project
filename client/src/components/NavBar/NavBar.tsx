import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';
import logo from '../../Images/logo.png';
import { useAuth } from '../../context/useAuthContext';
import { User } from '../../interface/User';
import AuthMenu from '../AuthMenu/AuthMenu';

interface Props {
  loggedInUser?: User;
  handleDrawerToggle?: () => void;
}

const NavBar = ({ loggedInUser }: Props): JSX.Element => {
  const classes = useStyles();
  console.log(loggedInUser);

  return (
    <AppBar className={classes.appbar} position="sticky">
      <ToolBar className={classes.toolbar}>
        <img src={logo} alt="logo" />
        {loggedInUser ? (
          <Grid className={classes.navButtons}>
            <Box p={2}>
              <Button component={Link} to="/notifications" color="secondary" size="large" variant="text">
                <Typography variant="h3">Notifications</Typography>
              </Button>
            </Box>
            <Box p={2}>
              <Button component={Link} to="/myjobs" color="secondary" size="large" variant="text">
                <Typography variant="h3">My Jobs</Typography>
              </Button>
            </Box>
            <Box p={2}>
              <Button component={Link} to="/messages" color="secondary" size="large" variant="text">
                <Typography variant="h3">Messages</Typography>
              </Button>
            </Box>
            <Box p={2}>
              <AuthMenu />
            </Box>
          </Grid>
        ) : (
          <Grid className={classes.navButtons}>
            <Box p={2}>
              <Button component={Link} to="/login" color="primary" size="large" variant="outlined">
                Login
              </Button>
            </Box>
            <Box p={2}>
              <Button component={Link} to="/signup" color="primary" size="large" variant="contained">
                Sign Up
              </Button>
            </Box>
          </Grid>
        )}
      </ToolBar>
    </AppBar>
  );
};

export default NavBar;
