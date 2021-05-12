import Head from 'next/head';
import {ThemeProvider} from 'styled-components';
import Statusbar from '../components/general/Statusbar';
import Dock from '../components/general/Dock';
import { useState, useEffect, createContext, useReducer } from 'react';
import { Apps } from '../components/staticInfo';
import App from '../components/general/App';
import { App as AppType, initialState, reducer } from '../reducers/AppReducer';
import { Workspace } from '../components/styles/homepage';
import AppWindow from '../components/application/AppWindow';

export const AppsContext = createContext(null);

export default function Home() {
  //Context
  const [state, dispatch] = useReducer(reducer, initialState);

  //State
  const [theme, setTheme] = useState({
    mode: "dark",
    themeStyles: {
      bg: '#0e0d0d',
      fg: '#fff',
    }
  });
  const [appsRunning, setAppsRunning] = useState<AppType[]>([])

  //Use Effect :: onPageLoad
  useEffect(() => {
    const mode: string | null = localStorage.getItem("mode");
    if(mode){
      setTheme({
        mode: mode,
        themeStyles: {
          bg: mode === "light"? '#fff' : '#0e0d0d',
          fg: mode === "light"? '#0e0d0d' : '#fff',
        }
      });
    }
  }, []);

  //Handlers
  const handleOpenApp = (app: string): void => {
    dispatch({ type: "OPEN", payload: app});
    setTimeout(updateAppWindows, 50);
  }

  const updateAppWindows = () => {
    console.log(state);
    setAppsRunning([...state]);
  }

  return (
    <>
      {/* Head Tag for SEO */}
      <Head>
        <title>Adithya Jain</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      {/* Visible Interface */}
      <ThemeProvider theme={theme.themeStyles}>
        <AppsContext.Provider value={{
          state,
          dispatch
        }}>
          <Statusbar />
          <Workspace>
            {
              Apps.map((app, idx) => (
                <div key={idx} onDoubleClick={() => handleOpenApp(app.name)}>
                  <App name={app.name} icon={app.icon} />
                </div>
              ))
            }
            {
              appsRunning.map(app => (
                <AppWindow  name={app.name} state={app.state} key={app.id} left={`${app.id + 10}rem`}></AppWindow>
              ))
            }
          </Workspace>
          <Dock />
        </AppsContext.Provider>
      </ThemeProvider>
    </>
  );
}
