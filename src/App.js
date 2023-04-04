
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemList from './components/ItemList/ItemList';


function App() {

 

  return (
    <div className="App">
  
<NavBar/>
<ItemList saludo={"Bienvenidos a Cosmeticos Aroma"} />

 


    </div>
  );
}

export default App;
