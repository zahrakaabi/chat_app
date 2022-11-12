/* ----------------------------------- */
/*              DEPENDENCIES           */
/* ----------------------------------- */
// Packages
import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// FIREBASE CONTANTS
import { authentification } from '../../Shared/Utils/firebase';

// Styles
import './index.css';

/* ----------------------------------- */
/*                LOGIN                */
/* ----------------------------------- */
function Login() {
  /* ********** RENDERING ************ */
  return (
    <div className="login-bg flex justify-center items-center">
      <div className="login-wrapper flex flex-column justify-center items-center">
        <h1>Join us by Sign in!</h1>
        <div className="login-container flex justify-center items-center flex-row">
          <div 
            className="login-button facebook flex items-center text-center"
            onClick={() => authentification.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
          >
            <FacebookOutlined />
            <h2>Signin with your facebook account</h2>
          </div>
          <div 
            className="login-button google flex items-center text-center"
            onClick={() => authentification.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
          >
            <GoogleOutlined />
            <h2>Signin with your Google account</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;