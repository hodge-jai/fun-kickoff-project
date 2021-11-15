import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';
import AuthMenu from '../../AuthMenu/AuthMenu';

const LoggedInBar = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid container className={classes.navButtons}>
      <Grid item>
        <Button component={Link} to="/notifications" color="secondary" size="large" variant="text">
          <Typography variant="h3">Notifications</Typography>
        </Button>
      </Grid>
      <Grid item>
        <Button component={Link} to="/my-jobs" color="secondary" size="large" variant="text">
          <Typography variant="h3">My Jobs</Typography>
        </Button>
      </Grid>
      <Grid item>
        <Button component={Link} to="/messages" color="secondary" size="large" variant="text">
          <Typography variant="h3">Messages</Typography>
        </Button>
      </Grid>
      <Grid item>
        <Button component={Link} to="/my-sitters" color="secondary" size="large" variant="text">
          <Typography variant="h3">My Sitters</Typography>
        </Button>
      </Grid>
      <Grid item>
        <AuthMenu />
      </Grid>
    </Grid>
  );
};

export default LoggedInBar;
