import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UrlDetails from "./pages/UrlDetails";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/url/:code" element={<UrlDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
