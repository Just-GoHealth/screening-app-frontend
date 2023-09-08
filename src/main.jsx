import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthContextProvider } from './shared/context/auth/AuthContext.jsx';
import SchoolProvider from "./shared/context/SchoolContext.jsx";
import UserProvider from "./shared/context/UserContext.jsx";

const theme = createTheme({
  palette: {
    primary: {
      main: '#1D509E',
    },
    secondary: {
      main: '#965AA4',
    },
  },
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <AuthContextProvider>
            <SchoolProvider>
              <UserProvider>
                <App/>
              </UserProvider>
            </SchoolProvider>
          </AuthContextProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
