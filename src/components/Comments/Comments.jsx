import React from "react";
import PropTypes from "prop-types";
import { Comment } from "../Comment/Comment";
import { Grid } from "../Grid/Grid";
import { useGetAllCommentsQuery } from "../../redux/commentApi";
import { Loader } from "../Loader/Loader";
import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/filterSlice";
// import { comments } from '../../helpers/comments';

export const Comments = () => {
  const filter = useSelector(selectFilter);
  const { data: comments, isLoading } = useGetAllCommentsQuery();
  const getFilteredComments = (comments, filter) => {
    return comments.filter(
      ({ author, content }) =>
        author.toLowerCase().includes(filter.toLowerCase()) ||
        content.toLowerCase().includes(filter.toLowerCase())
    );
  };
  return (
    <div>
      <Grid>
        {comments &&
          getFilteredComments(comments, filter).map((comment) => (
            <Comment key={comment.id} {...comment} />
          ))}
      </Grid>
      {isLoading && <Loader />}
    </div>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
