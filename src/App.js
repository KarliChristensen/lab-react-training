import logo from './logo.svg';
import './App.css';
import IDcard from './components/IDcard';
import Greetings from './components/Greetings';
import Random from './components/Random';

function App() {
  return (
    <div className="App">
      <div>
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
      <div>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>
      <div>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
    </div>
  );
}

export default App;
