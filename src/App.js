import {useState, useEffect} from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [searchFieldValue, setSearchFieldValue] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const tempFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchFieldValue);
    });
    setFilteredMonsters(tempFilteredMonsters);
  }, [monsters, searchFieldValue])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchFieldValue(searchFieldString);
  }

  return (
    <div className="App">
        <h1>Monsters Rolodex</h1>
        
        <SearchBox 
           onChangeHandler = {onSearchChange} 
           placeholder = 'Search Monsters' 
           className = 'search-box'  
         />

        <CardList monsters = {filteredMonsters} />

      </div>
  );
}

export default App;
