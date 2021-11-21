import './App.css';
import HomePage from './pages/homepage/HomePage';

import { Route, Switch } from 'react-router-dom';

const HatsPage = (props) => {
  return <div>Hats Pages</div>;
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
