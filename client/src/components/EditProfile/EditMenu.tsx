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

  return (
    <Box></Box>
  );
};

export default NavBar;
