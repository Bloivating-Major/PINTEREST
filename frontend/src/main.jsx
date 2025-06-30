import "./index.css";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router';
import MainLayout from './routes/layouts/MainLayout';
import HomePage from './routes/homePage/homePage';
import CreatePage from './routes/createPage/CreatePage';
import PostPage from './routes/postPage/postPage';
import ProfilePage from './routes/profilePage/ProfilePage';
import SearchPage from './routes/searchPage/SearchPage';
import AuthPage from './routes/authPage/AuthPage';

createRoot(document.getElementById('root')).render(
   <Router>
     <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/create' element={<CreatePage />} />
          <Route path='/pin:id' element={<PostPage />} />
          <Route path='/:username' element={<ProfilePage />} />
          <Route path='/search' element={<SearchPage />} />
        </Route>
        <Route path='/auth' element={<AuthPage />} />
     </Routes>
   </Router>
)
