import './App.css';
import Main from './components/main'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
