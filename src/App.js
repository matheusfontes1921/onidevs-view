// import { BrowserRouter as Route, Switch, Router } from 'react-router-dom';
import FooterOriginal from './layout/FooterOriginal';
import Navbar from './layout/Navbar';
import Home from './components/Home'
import Chat from './components/Chat'

function App() {
  return (    
    <div>
      <Navbar />
      <Home />     
      <FooterOriginal />
       <Chat /> 
    </div>
    
  );
}

export default App;
