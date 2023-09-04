import React, { useState, useEffect } from 'react';
import SignIn from './SignIn';
import ProcessManager from './ProcessManager';
import BootstrapDune from './BootstrapDune';

const RenderManager = () => {
  const [keycloak, setKeycloak] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const initKeycloak = () => {
      const kc = new window.Keycloak({
        url: 'https://auth.cern.ch/auth',
        realm: 'cern',
        clientId: 'dune_sso_test',
      });

      kc.init({ onLoad: 'login-required', flow: 'implicit' }).then((authenticated) => {
        if (authenticated) {
          sessionStorage.setItem('username', kc.tokenParsed.preferred_username);
          sessionStorage.setItem('roles', kc.tokenParsed.resource_access.dune_sso_test.roles);
          //sessionStorage.setItem('roles', "ryba");
          sessionStorage.setItem('userId', kc.token);
          console.log(JSON.stringify(kc.tokenParsed));
          console.log(JSON.stringify(kc.tokenParsed.resource_access.dune_sso_test.roles))
          setIsLoggedIn(true);
          setKeycloak(kc);
        }
      }).catch(() => {
        alert('Failed to initialize');
      });
    };

    const script = document.createElement("script");
    script.src = "https://auth.cern.ch/auth/js/keycloak.js";
    script.onload = initKeycloak;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <BootstrapDune keycloak={keycloak} />
      {isLoggedIn ? <ProcessManager /> : <div><h1>Authentication in progress...</h1></div>}
    </>
  );
};

export default RenderManager;
