import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './component/Home'

function App() {
    return (
      <Router>
        <Security issuer='https://dev-198566.okta.com/oauth2/default'
                  clientId='0oan9g2dq7WpdWvQd4x6'
                  redirectUri={window.location.origin + '/callback'}
                  pkce={true}>
          <SecureRoute path='/' exact={true} component={Calendar}/>
          <Route path='/callback' component={LoginCallback}/>
        </Security>
      </Router>
    );
  }

export default App;