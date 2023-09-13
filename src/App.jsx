import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTimes, setReadingTimes] = useState(0)

  const handleAddBookmark = blog => {
    const newBooksbarks = [...bookmarks, blog]
    setBookmarks(newBooksbarks)
    console.log('hi')
  }

  const handleMarkedAsRead = time => {
    let newReadingTimes = readingTimes + time;
    setReadingTimes(newReadingTimes)
  }

  return (
    <>
      <div className='max-w-6xl mx-auto'>
        <Header></Header>
        <div className='grid grid-cols-1 justify-center justify-items-center items-center content-center md:flex md:justify-between md:items-start md:p-4 md:mx-4'>
          <Blogs handleAddBookmark={handleAddBookmark} handleMarkedAsRead={handleMarkedAsRead}></Blogs>
          <Bookmarks bookmarks={bookmarks} readingTimes={readingTimes}></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
