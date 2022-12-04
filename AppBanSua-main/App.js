import {AuthProvider} from './APP/context/AuthContext'
import Navigater from './APP/tab/Navigater';
export default function App() {
  return (
    <AuthProvider>
     <Navigater/>
    </AuthProvider>
    
  );
}


