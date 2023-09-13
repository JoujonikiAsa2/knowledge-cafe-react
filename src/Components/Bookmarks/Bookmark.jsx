import PropTypes  from "prop-types";

const Bookmark = ({bookmark}) => {
    return (
        <div>
            <h2 className="text-base font-medium p-4  bg-white m-4 rounded-lg">Title: {bookmark.title}</h2>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;