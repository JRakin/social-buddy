import React from 'react';
import { Box, Typography } from '@material-ui/core';

const Comment = (props) => {
  const { name, body } = props.comment;

  return (
    <Box>
      <Typography variant="h6" component="h6">
        {name}
      </Typography>
      <Typography component="p">{body}</Typography>
    </Box>
  );
};

export default Comment;
