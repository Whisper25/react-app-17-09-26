import PropTypes from "prop-types";

const Comment = (props) => {
  const {
    dataComment: { content, likeAmount, isNew },
  } = props;
  return (
    <div>
      <p style={{BackgroundColor: isNew ? "green" : "red" }}>{content}</p>
      <p>{likeAmount}</p>
    </div>
  );
};

Comment.propTypes = {
  dataComment: PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string.isRequired,
    likeAmount: PropTypes.number.isRequired,
    isNew: PropTypes.bool,
  }),
};

export default Comment;
