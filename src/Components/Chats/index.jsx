/* ----------------------------------- */
/*              DEPENDENCIES           */
/* ----------------------------------- */
// Packages
import { useNavigate } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';

// FIREBASE CONTANTS
import { authentification } from '../../Shared/Utils/firebase';

// Styles
import './index.css';

/* ----------------------------------- */
/*                CHATS                */
/* ----------------------------------- */
function Chats() {
  /* ********** RENDERING ************ */
  return (
    <div className="chats-page">
      <div className="chats-navbar">
        <div className="chats-navbar__Logo">CHAT APP</div>
        <div className="chats-navbar__Log-out">Log out</div>
      </div>

      <ChatEngine
        height="calc(100vh - 66px)"
        projectId=""
      />
    </div>
  );
}

export default Chats;