import { Navbar, Footer, Stats, Info, Malla } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Stats />
      </div>
      <Malla />
      <Info />
      <Footer />
    </>
  );
}

export default App;
