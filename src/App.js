
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Toolbar from './components/Toolbar/Toolbar';

function App() {
  return (
    <div className="App">
      <Header/>
      <Toolbar/>
      <Layout/>
      <Footer/>
    </div>
  );
}

export default App;
