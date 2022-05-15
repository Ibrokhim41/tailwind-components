import './App.css';
import Dropdown from './components/Dropdown';
import uzFlag from './assets/imgs/uz-flag.svg';
import ruFlag from './assets/imgs/ru-flag.svg';
import enFlag from './assets/imgs/en-flag.svg';
import Button from './components/Button';
import {VscSave} from 'react-icons/vsc';

function App() {

  const langs = [
    {
      Id: 0,
      title: "O'zbekcha",
      flag: uzFlag,
    },
    {
      Id: 1,
      title: "Русский",
      flag: ruFlag,
    },
    {
      Id: 2,
      title: "English",
      flag: enFlag,
    },
  ]

  return (
    <div className="text-black">
      <Dropdown title={"O'zbekcha"} img={uzFlag} icon={"down"} langs={langs} />
      <Button text={'вакансии'} icon={<VscSave />} />
    </div>
  );
}

export default App;
