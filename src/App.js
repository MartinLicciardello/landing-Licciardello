import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
// import ItemCount from './components/ItemCount';

const blueColor = "blue";




function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer color={blueColor} />
    </div>
  );
}

export default App;
