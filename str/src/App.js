import logo from './logo.svg';
import './App.css';
//import Star from './Components/Star';
import StarRating from './Components/StarRating';

function log(value) {
  console.log(value);
}

function App() {
  return (
    <div className="App">
      <div className='main'>
      <StarRating onChange={log} />
      </div>
         
    </div>
  );
}

export default App;

//npm install react-icons --save
