import React from 'react';
import { Box, Typography, makeStyles, Avatar } from '@material-ui/core';
import { useState, useEffect } from 'react';

const useStyles = makeStyles({
  commentBox: {
    borderBottom: '1px solid gray',
    padding: '15px',
  },
  commentHeader: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#34eb64',
    marginBottom: '10px',
  },
  commentBody: {
    fontWeight: '400',
    fontSize: '16px',
    color: 'gray',
  },
});

const Comment = (props) => {
  const { email, body } = props.comment;
  const [user, setUser] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((data) => setUser(data.results[0].picture));
  }, []);

  return (
    <Box className={classes.commentBox}>
      <Avatar alt="" src={user.medium} />
      <Typography variant="h6" component="h6" className={classes.commentHeader}>
        {email}
      </Typography>
      <Typography component="p" className={classes.commentBody}>
        {body}
      </Typography>
    </Box>
  );
};

export default Comment;
