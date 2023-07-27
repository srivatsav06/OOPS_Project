import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #4D3B8C 500%, #4D3B8C 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px #8972D7',
  },
  label: {
    textTransform: 'capitalize',
  },
});

export default function ClassesNesting(props) {
  const classes = useStyles();
const navigate = useNavigate()
  return (
    <Button
      classes={{
        root: classes.root, // class name, e.g. `classes-nesting-root-x`
        label: classes.label, // class name, e.g. `classes-nesting-label-x`
      }}
      onClick={() => navigate('/calendar')}
    >
      View Schedule
    </Button>
  );
}
