import Navbar from './components/Ninja/Navbar';
import Home from './components/Ninja/Home';

const App = () => {
  return (
    <div className="App">
      <Navbar />

      <div className="content">
        <Home />
      </div>
    </div>

  );
}

export default App;
