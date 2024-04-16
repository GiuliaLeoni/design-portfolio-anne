import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/router';

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/projects">Projects</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
    </ul>
  </nav>
);
)

const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
