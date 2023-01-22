import './App.css';
import cartItems from './data'
function App() {
  console.log(cartItems)
  return (
    <div className="App">
      <img src={cartItems[0].img} alt="" />
      
    </div>
  );
}

export default App;
