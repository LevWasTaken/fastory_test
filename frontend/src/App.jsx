import './App.css';
// import People from './component/People';
// import { Provider } from 'react-redux';
// import store from './store';
import CustomSelectSearch from './component/CustomSelectSearch';
const App = () => {
    const options = [
        { name: 'People', value: 'people' },
        { name: 'Planets', value: 'planets' },
        { name: 'Species', value: 'species' },
        { name: 'Starships', value: 'starships' },
        { name: 'Vehicles', value: 'vehicles' },
    ];
    return (
    <div className="App" >
        <CustomSelectSearch options={options} ></CustomSelectSearch>
    </div>
    );
}

export default App;