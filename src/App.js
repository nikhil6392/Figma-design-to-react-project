import './App.css';
import logo from './components/assets/logo.png'

function App() {
  return (
    <div className="App">
      <div className='h-screen bg-gradient-to-r from-cyan-500 to-blue-500'>
      <nav className="flex items-center p-4 border-b bg-gray-700 text-white">
      {/* Logo on the left */}
      <img 
        src={logo} 
        alt="Logo" 
        className="h-10 w-auto mt-[44px] ml-[100px]"
      />

      {/* Navigation links on the right */}
      <ul className="flex space-x-6 ml-auto">
        <li><a href="/" className="text-white">Home</a></li>
        <li><a href="/services" className="text-white">Services</a></li>
        <li><a href="/aboutUs" className="text-white">About us</a></li>
        <li><a href="/blog" className="text-white">Blog</a></li>
        <li><a href="/getEstimate" className="text-white ">Get estimate</a></li>
      </ul>
      <span className="ml-6 space-x-4">
        <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200">
          Borrower Portal
        </button>
        <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-blue-700">
          Company Portal
        </button>
      </span>
    </nav>
    <div className='p-4 flex flex-col md:flex-row items-center relative'>
      <div className='md:w-2/3 space-y-6'>
      <h1 className='text-6xl font-bold'>Learn how we are <span className='mx-2 text-red-700'>Different</span> from other lenders.<span className='block h-2 w-10 bg-red-700 mt-6'></span></h1>
      </div>
    </div>
    </div>
    </div>
  );
}

export default App;

