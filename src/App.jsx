import { Navbar, Footer, Stats, Info, Malla, Welcome} from "./components";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
          <Welcome />
        <Stats />
      </div>
      <Malla />
      <Info />
      <Footer />
    </>
  );
}

export default App;
