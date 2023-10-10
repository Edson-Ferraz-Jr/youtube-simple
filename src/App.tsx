import './App.css';

import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import { InterfaceContext } from "./contexts/interfaceContext";

import Header from "./components/header";
import Menu from "./components/menu";

import Home from "./pages/home";
import Shorts from "./pages/shorts";
import Subscriptions from "./pages/subscriptions";
import Library from "./pages/library";
import SignIn from "./pages/signIn";
import SignUp from './pages/signUp';

import { ThemeProvider } from 'styled-components';

import { lightTheme } from './styles/themes/light';
import { darkTheme } from './styles/themes/dark';

import { GlobalStyle } from './styles/global';
import { useContext } from 'react';
import DropdownMenu from './components/dropdownMenu';
import CreateVideo from './pages/createVideo';
import MyVideos from './pages/myVideos';
import Search from './pages/search';
import EditVideo from './pages/editVideo';

function MainApp() {
  return(
    <div className="mainApp">
      <Header />

      <DropdownMenu />

      <div className="container">
        <Menu />

        <div className="mainContent">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

function App() {
  const { theme } = useContext(InterfaceContext);
  
  return (
        <BrowserRouter>

          <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyle />

            <div className="App">
              <Routes>
                <Route element={<MainApp />} >
                  <Route path='/' element={<Home />} />
                  <Route path='/shorts' element={<Shorts />} />
                  <Route path='/subscriptions' element={<Subscriptions />} />
                  <Route path='/library' element={<Library />} />
                  <Route path='/my-videos' element={<MyVideos />} />
                  <Route path='/search' element={<Search />} />
                </Route>

                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/create-video' element={<CreateVideo />} />
                <Route path='/edit-video/:video_id' element={<EditVideo />} />
              </Routes> 
            </div>
          </ThemeProvider>

        </BrowserRouter>
  );
}

export default App;
