import Header from './components/Header';
import Feed from './components/Feed';
import Login from './components/Login'
import './App.css';

function App() {
  return (
    <main className="App">
      <Login/>
        <Header />
      <div className="App-header">
        <Feed />
      </div>

    </main>
  );
}

export default App;
