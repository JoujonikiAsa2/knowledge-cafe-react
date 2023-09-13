import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa'
const Blog = ({ blog , handleAddBookmark}) => {
    const { cover, title, author_img, author, posted_date, reading_time, hashtags } = blog
    return (
        <div className='space-y-6 border-b-2'>
            <img src={cover} alt={`Cover picture of the ${title}`} className="rounded-lg w-full" />
            <div className='space-y-6 pb-4'>
                <div className='flex justify-between items-center'>

                    <div className='flex gap-8 items-center'>
                        <div>
                            <img src={author_img} alt={`Profile picture of Author`} className='w-12 h-12' />
                        </div>
                        <div>
                            <h4 className='text-xl font-bold'>{author}</h4>
                            <p className='text-base font-semibold text-[#11111199]'>{posted_date}</p>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <span>{reading_time}min read</span>
                        <button onClick={()=>handleAddBookmark(blog)}><FaBookmark></FaBookmark></button>
                    </div>
                </div>
                <h1 className='text-3xl font-bold'>{title}</h1>
                <p className='text-lg font-medium text-[#11111199]'>{
                    hashtags.map((hash, idx) => <span key = {idx}><a href="">#{hash} </a></span>)
                }
                </p>
                <button className='btn bg-red-300 p-3 rounded-lg'>Mark as Read</button>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmark: PropTypes.func
}

export default Blog;