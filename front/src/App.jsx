import './App.css'
import Header from './layout/Header'
import {Route, Routes} from 'react-router-dom'
import Home from './components/home/Home'
import Add from './components/add/Add'
import Discover from './components/discover/Discover'
import Donate from './components/donate/Donate'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import Detail from './components/home/Detail'

function App() {

  return (
    <>
    <Header/>
     <Routes>
     <Route path='/' element={<Home/>}/> 
     <Route path='/add' element={<Add/>}/> 
     <Route path='/discover' element={<Discover/>}/> 
     <Route path='/donate' element={<Donate/>}/> 
     <Route path='/blog' element={<Blog/>}/> 
     <Route path='/contact' element={<Contact/>}/> 
     <Route path='/:detailId' element={<Detail/>}/> 
     </Routes>
    </>
  )
}

export default App
