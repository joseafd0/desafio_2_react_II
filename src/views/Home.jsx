import { useContext } from "react";
import Gallery from "../components/Gallery";
import { FotosContext } from "../context/ContextProvider";

const Home = () => {
  return (
    <div>
      <h1 className="App">Natural Pic</h1>
      <Gallery />
    </div>
  );
};
export default Home;
