import React from "react";
import ReactDOM from "react-dom";
import Router from "./components/Router";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { createTheme, CssBaseline, ThemeProvider, Theme, StyledEngineProvider} from "@mui/material";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import Notifier from "./components/Notifier";
import { SnackbarProvider } from "notistack";
import BackgroundService from "./components/BackgroundService";


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1a71b8",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      paper: "#181818",
      default: "#0e0b0b",
    },
  },
});
const persistor = persistStore(store);

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <SnackbarProvider maxSnack={3}>
            <Notifier />
          </SnackbarProvider>
          <CssBaseline />
          <Router />
          <BackgroundService />
        </ThemeProvider>
      </StyledEngineProvider>
    </PersistGate>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
