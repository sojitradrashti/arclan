import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Title from './components/Title';
import Flexbox from './components/Flexbox';
import Collection from './components/Collection';
import Watch from './components/Watch';
import Box from './components/Box';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Title />
      <Flexbox />
      <Collection />
      <Watch />
      <Box />
      <Footer />
    </div>
  );
}

export default App;
