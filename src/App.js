import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Route } from 'wouter';
import Search from './components/search/Search';
import Titles from './components/titles/Titles';
import SingleGif from './components/singleGif/SingleGif';

export default function App() {
  return (
    <>
      <header>
        <Titles />
        <Search />
      </header>
      <section className="App-content">
        <Route component={ListOfGifs} path="/" />
        <Route component={ListOfGifs} path="/gifs/:category" />
        <Route component={SingleGif} path="/gif/:identifier" />
      </section>
    </>
  );
}
