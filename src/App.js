import './App.css'
import Home from './pages/Home';
// import Blog from './pages/Blog'
// import data from "./data";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';
// import Footer from './components/Footer';
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Details from './pages/Details';
// import Reservation from './pages/Reservation'

function App() {
  const [blogs, setBlogs] = useState(null)
  const [isPending, setIsPending] = useState(true)

  const fetchblogs = async() => {
    try{
      const response = await fetch('http://localhost:3000/Blogs')
      
      if(!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      const data = await response.json()
      setBlogs(data)
      setIsPending(false)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchblogs()
    console.log(blogs)
  }, [])
  return (
    <>
      <Router>
        <NavBar />
        {isPending && <div>Loading...</div>}
        <Routes>
          {blogs && <Route path='/viva-Express' element={<Home blogs={blogs} />} exact />}
        </Routes> 
        {/* <Footer/> */}
      </Router>
    </>
  );
}

export default App;
