import logo from './logo.svg';
import './App.css';
import Header from './header/Header'
import Cource from './header/Cource'



function App() {
  const handleSelect = (selectedValue) => {
    console.log('Selected value:', selectedValue);
    
  };

  return (
    <div>
      <Cource/>
    
    </div>)
}

export default App;
