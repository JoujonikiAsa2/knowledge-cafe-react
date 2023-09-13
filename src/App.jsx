import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  
  const handleAddBookmark = blog =>{
  const newBooksbarks = [...bookmarks, blog]
  setBookmarks(newBooksbarks)
  console.log('hi')
 }  
  return (
    <>
      <Header></Header>
      <div className='grid grid-cols-1 justify-center justify-items-center items-center content-center mx-w-7xl md:flex md:justify-between md:items-start md:p-4 md:mx-4'>
        <Blogs handleAddBookmark={handleAddBookmark}></Blogs>
        <Bookmarks bookmarks = {bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
