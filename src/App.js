/* ----------------------------------- */
/*              DEPENDENCIES           */
/* ----------------------------------- */
// Packages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// UI Local Components
import { Login, Chats, AuthProvider } from './Components';

// Styles
import './Shared/Styles/global.css';

/* ----------------------------------- */
/*                  APP                */
/* ----------------------------------- */
function App() {
  /* ********** RENDERING ************ */
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            {/*<Route path="/Chats" element={<Chats />} />*/}
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
