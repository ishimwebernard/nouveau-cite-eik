import './App.css';
import Main from './components/main'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import {BrowserRouter as Router} from 'react-router-dom'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
