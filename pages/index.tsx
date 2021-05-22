import Head from 'next/head';
import {ThemeProvider} from 'styled-components';
import Statusbar from '../components/general/Statusbar';
import Dock from '../components/general/Dock';
import { useState, useEffect } from 'react';
import { Apps } from '../components/staticInfo';
import App from '../components/general/App';
import { Workspace } from '../components/styles/homepage';
import AppWindow from '../components/application/AppWindow';
import { OPEN_APP } from '../reducers/AppStateModifiers';
import { App as AppType } from '../components/types';
import isMobile from '../components/hooks/isMobile';

export default function Home() {

  //State
  const [theme, setTheme] = useState({
    mode: "dark",
    themeStyles: {
      mode: "dark",
      bgAccent: '#000000',
      bg: '#0e0d0d',
      fgAccent: '#fff',
      fg: '#f2f2f2',
    }
  });
  const [appsRunning, setAppsRunning] = useState<AppType[]>([]);

  //Use Effect :: onPageLoad
  useEffect(() => {
    const mode: string | null = localStorage.getItem("mode");
    if(mode){
      document.body.style.backgroundColor = mode === 'light'? '#f2f2f2' : '#000';
      setTheme({
        mode: mode,
        themeStyles: {
          bg: mode === "light"? '#f2f2f2' : '#0e0d0d',
          fg: mode === "light"? '#0e0d0d' : '#f2f2f2',
          bgAccent: mode === "light"? '#ffffff' : '#000000',
          fgAccent: mode === "light"? '#000000' : '#ffffff',
          mode: mode
        }
      });
    }
  }, []);

  //Handlers
  const handleOpenApp = (appName: string, appIcon: string): void => {
    setAppsRunning(prev => [...OPEN_APP(prev, appName, appIcon)]);
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
          <Statusbar />
          <Workspace>
            {
              Apps.map((app) => (
                <div 
                  key={app.id}
                   onClick={() => isMobile()? handleOpenApp(app.name, app.icon) : null} 
                   onDoubleClick={() => handleOpenApp(app.name, app.icon)}
                   >
                  <App dock={false} name={app.name} icon={app.icon} />
                </div>
              ))
            }
            {
              appsRunning.map(app => (
                <AppWindow 
                active={app.active}
                setApps={setAppsRunning}
                name={app.name} 
                state={app.state} 
                key={app.id} 
                left={`${app.id + 10}rem`}
                zIndex={app.id + 5}
                ></AppWindow>
              ))
            }
          </Workspace>
          <Dock setApps={setAppsRunning} apps={appsRunning}/>
      </ThemeProvider>
    </>
  );
}
