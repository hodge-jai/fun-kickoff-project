import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  typography: {
    fontFamily: '"Roboto"',
    fontSize: 12,
    button: {
      fontFamily: '"Roboto"',
      fontWeight: 'bold',
    },
    body1: {
      color: '#f14140',
    },
    h5: {
      fontSize: 26,
      color: '#000000',
      fontWeight: 700,
      fontFamily: "'Roboto'",
      textAlign: 'center',
    },
  },
  palette: {
    primary: { main: '#f14140' },
  },
  shape: {
    borderRadius: 5,
  },
});
