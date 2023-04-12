

import Login from './Component/Login';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AppProvider from './Context/Appprovider';

function App() {
  const clientId = "376415915784-s671r2hqnif828gb5r253kj7ehfs9t07.apps.googleusercontent.com"
  return (

    <GoogleOAuthProvider clientId={clientId}>
      <AppProvider>
        <Login />
      </AppProvider>

    </GoogleOAuthProvider>
  );
}

export default App;
