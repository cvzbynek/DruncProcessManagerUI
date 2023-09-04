import React, { useState, useEffect } from 'react';
import SignIn from './SignIn';
import ProcessManager from './ProcessManager';
import BootstrapDune from './BootstrapDune';

const RenderManager = () => {
  const username = sessionStorage.getItem('username');
  const [isLoggedIn, setIsLoggedIn] = useState(!!username);

  return (
    <>
      <BootstrapDune />
      {isLoggedIn ? <ProcessManager /> : <SignIn onSignIn={() => setIsLoggedIn(true)} />}
    </>
  );
};

export default RenderManager;
