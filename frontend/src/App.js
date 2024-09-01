import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import AllPosts from './pages/Posts/posts';
import Profile from './pages/Profile/profile';
import TopNavigation from './components/Header/TopNavigation';
import BottomNavigation from './components/Footer/BottomNavigation';
import SearchUsers from './pages/Search/Search';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import { themes, ThemeContext } from './Themes/ThemeContext';
function App() {
  return (<>
    
    <BrowserRouter>
    <ThemeContext.Provider value={themes.dark}>
      <TopNavigation />
      <Routes>
        <Route path="/" exact element={<AllPosts/>} />
        <Route path="/profile" element={<Profile />}/>
        <Route path="/search" element={<SearchUsers />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <BottomNavigation />
    </ThemeContext.Provider>
    </BrowserRouter>
    
    </>
  );
}

export default App;
