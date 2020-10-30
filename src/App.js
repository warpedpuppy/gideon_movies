import './App.css';
import MovieChooser from './components/MovieChooser';
import Nav from './components/Nav';
import Background from './components/Background';
function App() {
  return (
    <div className="App">
      <Background />
        <header><Nav /></header>
        <main>
            <MovieChooser id={2} />
        </main>
        <footer></footer>
    </div>
  );
}

export default App;
