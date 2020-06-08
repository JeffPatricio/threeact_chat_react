import React, { useState, useEffect, createContext } from 'react';
import GlobalStyles from './styles/global';
import Routes from './routes';
import { LoadingPage } from './components/Loading';

const App = () => {

  const [authUser, setAuthUser] = useState({ authenticated: false });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const dataStorage = await localStorage.getItem('threechatUser');
      if (dataStorage) setAuthUser({ authenticated: true, ...dataStorage });
      setLoading(false);
    })()
  }, []);

  return (
    <AppContext.Provider value={{ authUser, setAuthUser }}>
      <GlobalStyles />
      {(loading) && <LoadingPage />}
      {(!loading) && <Routes authUser={authUser} />}
    </AppContext.Provider>
  )
}

export const AppContext = createContext()
export default App