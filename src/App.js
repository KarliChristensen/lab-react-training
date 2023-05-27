import logo from './logo.svg';
import './App.css';
import IDcard from './components/IDcard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';

function App() {
  return (
    <div className="App">
      <div>
        <h1 className="font-extrabold flex m-10 text-6xl">IDCard</h1>
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
      <h1 className="font-extrabold flex m-10 text-6xl">Greetings</h1>

      <div>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>
      <h1 className="font-extrabold flex m-10 text-6xl">RNG</h1>

      <div>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
      <h1 className="font-extrabold flex m-10 text-6xl">BoxColour</h1>

      <div>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
    </div>
  );
}

export default App;
