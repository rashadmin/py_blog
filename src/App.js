import Header from './components/Header';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import Blog from './pages/blog';
import History from './pages/history';
import Home from './pages/home';
import Profile from './pages/profile';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/history' element={<History/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='*' element={<Navigate to="/"/>}/>
      <Route path='blog/:blog_id' element={<Blog/>}/>
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
