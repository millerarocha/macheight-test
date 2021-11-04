
import './App.css';

import Header from './containers/Header/Header';
import FilterBar from './containers/FilterBar/FilterBar';
import Results from './containers/Results/Results';

function App() {
  return (
    <div className="container">
      <Header/>
      <FilterBar/>
      <Results/>
    </div>
  );
}

export default App;
