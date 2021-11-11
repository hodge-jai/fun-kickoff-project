import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';
import logo from '../../Images/logo.png';

export default function NavBar(): JSX.Element {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <ToolBar className={classes.toolbar}>
        <img src={logo} alt="logo" />
        <Grid className={classes.loginSignup}>
          <Box p={1}>
            <Button component={Link} to="/login" color="primary" size="large" variant="outlined">
              Login
            </Button>
          </Box>
          <Box p={1}>
            <Button component={Link} to="/signup" color="primary" size="large" variant="contained">
              Sign Up
            </Button>
          </Box>
        </Grid>
      </ToolBar>
    </AppBar>
  );
}
