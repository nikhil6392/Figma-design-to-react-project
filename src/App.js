import './App.css';
import About from './components/About';
import LandingPage from './components/LandingPage';
import Loan from './components/loan/Loan';


// import logo from './components/assets/logo.png'
// import { FiArrowRight } from 'react-icons/fi';
// import Customer from './components/assets/customer.png'
// import Profile1 from './components/assets/profile1.png'
// import Profile2 from './components/assets/profile2.png'
// import Profile3 from './components/assets/profile3.png'
// import Profile4 from './components/assets/profile4.png'

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Loan />
      <About />
    </div>
  );
}

export default App;

