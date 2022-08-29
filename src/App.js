import Thanks from './Thanks/Thanks';
import './App.css';
import logo from './logo.svg';
function App() {
  return (
    <div className="App">
      <header className="header">
          <img src={logo} alt="Логотип"/>
      </header>
      <Thanks/>
    </div>
  );
}

export default App;
