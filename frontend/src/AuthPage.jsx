import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost } from '@fortawesome/free-solid-svg-icons'
import './animation.css';


const AuthPage = (props) => {
    const onSubmit = (e) => {
      e.preventDefault();
      const { value } = e.target[0];
      axios.post('https://zipcodeinstantmessenger.com:3001/authenticate',
      {username: value}
      )
      .then(r => props.onAuth({ ...r.data, secret: value }) )
      .catch(e => console.log(e))
    };
  
    return (
      <div className="background">
        
        <form onSubmit={onSubmit} className="form-card">
        <FontAwesomeIcon icon={faGhost} className="banner" />
          <div className="form-title">Zip Code Instant Messenger</div>

          <div className="form-subtitle">Set a username to get started</div>
    
          <div className="auth">
            <div className="auth-label">Username</div>
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit">
              Log In
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AuthPage;
  