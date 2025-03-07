import './App.css';
import About from './components/About';
import QuickLending from './components/componet';
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

