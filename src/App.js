import logo from './logo.svg';
import './App.css';
import IDcard from './components/IDcard';

function App() {
  return (
    <div className="App">
      <IDcard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={'1992-07-14'}
        image="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IDcard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={'1988-05-11'}
        image="https://randomuser.me/api/portraits/women/44.jpg"
      />
    </div>
  );
}

export default App;
