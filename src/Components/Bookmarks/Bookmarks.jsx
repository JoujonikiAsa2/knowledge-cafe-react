import PropTypes from 'prop-types'
import Bookmark from './Bookmark';
const Bookmarks = ({ bookmarks, readingTimes }) => {
    return (
        <div className="md:w-1/3">
            <div>
                <div className='bg-slate-200 m-4 rounded-lg text-xl font-bold p-4'>
                    <h2 className='text-[#6047EC]'>Spent time on read : {readingTimes} min</h2>
                </div>
            </div>
            <div className='bg-slate-200 m-4 p-4 rounded-lg'>
                <h2 className='text-xl font-bold rounded-lg m-4'>Bookmarked Blogs: {bookmarks.length}</h2>

                <div>
                    {
                        bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                    }
                </div>
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTimes: PropTypes.number
}

export default Bookmarks;