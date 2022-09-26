import logo from './logo.svg';
import './App.css';
import PostsList from './features/posts/postsList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Posts List</h1>
      </header>
      <PostsList />
    </div>
  );
}

export default App;
