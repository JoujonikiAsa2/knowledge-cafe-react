import PropTypes from 'prop-types'
import Bookmark from './Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 bg-slate-200 m-4 rounded-lg">
            <div className='text-xl font-bold rounded-lg m-4'>
            <h2>Bookmarked Blogs: {bookmarks.length}</h2>
            </div>
            <div>
                {
                    bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}

export default Bookmarks;