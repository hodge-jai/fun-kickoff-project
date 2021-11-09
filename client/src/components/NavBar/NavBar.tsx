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
        <Grid className={classes.loginsignup}>
          <Box p={1}>
            <Link to="/login" className={classes.link}>
              <Button color="primary" size="large" variant="outlined">
                LOGIN
              </Button>
            </Link>
          </Box>
          <Box p={1}>
            <Link to="signup" className={classes.link}>
              <Button color="primary" size="large" variant="contained">
                SIGN UP
              </Button>
            </Link>
          </Box>
        </Grid>
      </ToolBar>
    </AppBar>
  );
}
