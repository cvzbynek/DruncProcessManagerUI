import React, { useEffect, useState } from 'react';

const App = () => {
    const [keycloak, setKeycloak] = useState(null);

    useEffect(() => {
        const initKeycloak = () => {
            const kc = window.Keycloak({
                url: 'https://auth.cern.ch/auth',
                realm: 'cern',
                clientId: 'dune_sso_test',
            });

            kc.init({ onLoad: 'login-required', flow: 'implicit' }).then((authenticated) => {
                if (authenticated) {
                    displayTokenInfo(kc);
                }
            }).catch(() => {
                alert('Failed to initialize');
            });

            setKeycloak(kc);
        };

        const script = document.createElement("script");
        script.src = "https://auth.cern.ch/auth/js/keycloak.js";
        script.onload = initKeycloak;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const displayTokenInfo = (keycloakInstance) => {
        sessionStorage.setItem('raw-token', keycloakInstance.token);
        sessionStorage.setItem('parsed-token', JSON.stringify(keycloakInstance.tokenParsed));
    };

    return (
        <div>
            <div><b>Hello</b></div>
            <input type="button" onClick={() => keycloak.logout()} value="Log Out" />

            <h2>Raw Token</h2>
            <div><p>{sessionStorage.getItem('raw-token')}</p></div>

            <h2>Parsed Token</h2>
            <div><pre>{sessionStorage.getItem('parsed-token')}</pre></div>
        </div>
    );
};

export default App;