import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: 56,
    backgroundColor: '#FFFFFF',
  },
  loginsignup: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginRight: 20,
  },
  link: { textDecoration: 'none' },
}));

export default useStyles;
