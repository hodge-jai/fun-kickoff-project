import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  appbar: {
    maxHeight: 100,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  navButtons: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginRight: 40,
  },
  link: { textDecoration: 'none' },
}));

export default useStyles;
