
import './App.css';

import Header from './containers/Header/Header';
import FilterBar from './containers/FilterBar/FilterBar';
import Results from './containers/Results/Results';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <div className="container">
        <Header/>
        <FilterBar/>
        <Results/>
      </div>
    </AppProvider>
  );
}

export default App;
