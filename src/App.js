import './App.css';
import Header from './components/Header';
import Props from './components/Props';


// const StyledButton = styled.button`
//   background-color: #4CAF50; /* Green */
//   border: none;
//   color: white;
//   padding: 15px 32px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px;

// `
function App() {


  return (
    <div className="container">
      <Props name="Rafi">
        <p>this is children </p></Props>
      <Props name="Annie" />
    </div>

  );
}

export default App;
