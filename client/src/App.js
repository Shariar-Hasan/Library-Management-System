import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Componant/Home/Home"
import Register from './Componant/Register/Register';
import Login from './Componant/Login/Login';
import CPanel from './Componant/CPanel/CPanel';
import NotFound from './Componant/NotFound/NotFound';
import CPanelHomePage from './Componant/CPanelHomePage/CPanelHomePage';
import Books from './Componant/Books/Books';
import IssueBook from './Componant/IssueBook/IssueBook';
import PrivateRoute from './Componant/PrivateRoute/PrivateRoute';
import Users from './Componant/Users/Users';
import { createContext, useState } from 'react';
import { getDB } from './AllFunctions/LoginRegister';
import { fakebooklist } from './AllFunctions/FakeBookList';

export const UserContext = createContext([])
export const AllUserContext = createContext([])
export const BookContext = createContext([])


function App() {
  const newUser = getDB("user") || {};
  const [user, setUser] = useState(newUser);
  const [allUser, setAllUser] = useState([]);
  const [books, setBooks] = useState(fakebooklist);

  return (
    <div>
      <UserContext.Provider value={[user, setUser]}>
        <AllUserContext.Provider value={[allUser, setAllUser]}>
          <BookContext.Provider value={[books, setBooks]}>
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="cpanel" element={
                  <PrivateRoute>
                    <CPanel />
                  </PrivateRoute>
                }>
                  <Route path="" element={<CPanelHomePage />} />
                  <Route path="books" element={<Books/>} />
                  <Route path="approveissue" element={<IssueBook />} />
                  <Route path="issuebook/:b_id" element={<IssueBook />} />
                  <Route path="users" element={<Users />} />
                </Route>
                <Route path="*" element={<NotFound />} />

              </Routes>
            </Router>
          </BookContext.Provider>
        </AllUserContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
