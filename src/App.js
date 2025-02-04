import './App.css';
import IDcard from './components/IDcard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import RGBColorPicker from './components/RGBColorPicker';
import SignupPage from './components/SignupPage';
import Facebook from './components/Facebook';
import profiles from './data/berlin.json';
import SingleColorPicker from './components/SingleColorPicker';

function App() {
  return (
    <div className="App flex flex-col">
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
      <h1 className="font-extrabold flex m-10 text-6xl">Credit Cards</h1>

      <div className="flex">
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />

        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />

        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>
      <h1 className="font-extrabold flex m-10 text-6xl">Rating</h1>
      <div>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
      <h1 className="font-extrabold flex m-10 text-6xl">Driver Card</h1>
      <div>
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: 'Toyota Corolla Altis',
            licensePlate: 'CO42DE',
          }}
        />

        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: 'Audi A3',
            licensePlate: 'BE33ER',
          }}
        />
      </div>
      <div>
        <LikeButton />
      </div>
      <div>
        <ClickablePicture
          image="https://as1.ftcdn.net/v2/jpg/02/09/98/08/1000_F_209980881_En0z019smwTH6szfnpq64j3vfbr78XeC.jpg"
          imageClicked="https://previews.123rf.com/images/martialred/martialred1806/martialred180600036/105297926-mouse-pointer-arrow-clicked-or-cursor-click-line-art-icon-for-apps-and-websites.jpg"
        />
      </div>
      <div>
        <Dice />
      </div>
      <div>
        <Carousel
          images={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg',
          ]}
        />
      </div>
      <div className="flex justify-center">
        <NumbersTable limit={15} />
      </div>
      <div>
        <Facebook data={profiles} />
      </div>
      <div>
        <SignupPage />
      </div>
      <div>
        <RGBColorPicker />
      </div>
      <div>
        <SingleColorPicker />
      </div>
    </div>
  );
}

export default App;
