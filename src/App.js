import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';

const blueColor = "blue";
const greenColor ="green";
const redColor ="red";
const violetColor="violet";
const orangeColor="orange";
const yellowColor="yellow";
const blackColor="black";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer color={blueColor} />
      <ItemListContainer color={greenColor} />
      <ItemListContainer color={redColor} />
      <ItemListContainer color={violetColor} />
      <ItemListContainer color={orangeColor} />
      <ItemListContainer color={yellowColor} />
      <ItemListContainer color={blackColor} />


    </div>
  );
}

export default App;
