import './App.css';
import About from './components/About';
import FAQ from './components/Faqs';
import LandingPage from './components/LandingPage';
import Loan from './components/loan/Loan';
import Review from './components/Review';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Loan />
      <About />
      <Review />
      <FAQ /> 
    </div>
  );
}

export default App;

