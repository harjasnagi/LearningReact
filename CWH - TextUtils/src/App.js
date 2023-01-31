import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      {/* <Navbar title="Nagi" opt1="option" opt2="About"/> */}
      <Navbar/>
      <div className="container my-5">
        {/* <TextForm heading='Enter your text here hahaha' btnText='Convert to upper case' /> */}
        <About/>
      </div>
    </>
  );
}

export default App;