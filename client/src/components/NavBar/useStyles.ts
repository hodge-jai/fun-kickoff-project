import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: 56,
    backgroundColor: '#FFFFFF',
  },
  loginSignup: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginRight: 20,
    textTransform: 'uppercase',
  },
  link: { textDecoration: 'none' },
}));

export default useStyles;
