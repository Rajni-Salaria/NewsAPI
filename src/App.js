import './App.css';
import { useEffect, useState } from 'react';
import NewsLetter from "./components/newsLetter";
import Nav from "./components/nav";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [users, setUsers] = useState([])
  const [headings, setHeadings]=useState("Top Heading ")

  useEffect(() => {
    let host = window.location
    console.log(host.split('/')[1])
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=5032edd0002747199cbfbbdb412c4281")
      .then((value) => value.json())
      .then((data) => { setUsers(data.articles) })
  }, [])

  function items(id) {
    console.log(id)
    fetch(`https://newsapi.org/v2/top-headlines?category=${id}&apiKey=5032edd0002747199cbfbbdb412c4281`)
      .then((value) => value.json())
      .then((data) => {
        console.log(data.articles)
        setUsers(data.articles) }
      )
      setHeadings(id)
  }
  return (
    <div className='App'>
      <BrowserRouter>
      <Nav items={items} />
      <h2 className='mt-3 text-center'>{headings}</h2>
      <NewsLetter news={users} />
      </BrowserRouter>
    </div>
  );
}

export default App;
