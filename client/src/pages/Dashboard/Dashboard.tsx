import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';
import { useHistory } from 'react-router-dom';
import { useEffect, FunctionComponent, Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';

interface Props {
  component?: FunctionComponent | Component;
}

export default function Dashboard(component: Props): JSX.Element {
  const classes = useStyles();

  const { loggedInUser } = useAuth();
  const { initSocket } = useSocket();

  const history = useHistory();

  useEffect(() => {
    initSocket();
  }, [initSocket]);

  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    // loading for a split seconds until history.push works
    return <CircularProgress />;
  }

  return (
    <Grid container component="main" className={`${classes.root} ${classes.dashboard}`}>
      <CssBaseline />
      <NavBar loggedInUser={loggedInUser} />
      <Grid item xs={12} sm={8} md={7} elevation={6} component={Paper} square>
        <Box width="100%" maxWidth={450} p={3} alignSelf="center">
          <Grid container>
            <Grid item xs></Grid>
          </Grid>
        </Box>
        <Box p={1} alignSelf="center" />
      </Grid>
    </Grid>
  );
}
