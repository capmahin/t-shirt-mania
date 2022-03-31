import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import OrderReview from "./components/OrderReview/OrderReview";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <OrderReview></OrderReview>
    </div>
  );
}

export default App;
