import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  typography: {
    fontFamily: '"Roboto"',
    fontSize: 12,
    button: {
      fontFamily: '"Roboto"',
      fontWeight: 'bold',
    },
    h5: {
      fontFamily: '"Roboto"',
      fontWeight: 'bold',
    },
  },
  palette: {
    primary: { main: '#ff002b' },
  },
  shape: {
    borderRadius: 5,
  },
});
