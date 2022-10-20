import { ContextProvider } from "./Contex";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductDetails from "./components/products/ProductDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* <ContextProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ContextProvider> */}
    </div>
  );
}

export default App;
