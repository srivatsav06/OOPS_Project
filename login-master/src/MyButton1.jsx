import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



export default function MyButton1() {
    const useStyles = makeStyles({
        root: {
          background: 'linear-gradient(45deg, #BEE8EE 100%, #4D3B8C 90%)',
          borderRadius: 3,
          border: 0,
          color: 'Black',
          height: 48,
          padding: '0 30px',
          boxShadow: '0 3px 5px 2px #F1F1F1',
        },
        label: {
          textTransform: 'capitalize',
        },
      }); 
    const classes = useStyles();

  return (
    <Button
      classes={{
        root: classes.root, // class name, e.g. `classes-nesting-root-x`
        label: classes.label, // class name, e.g. `classes-nesting-label-x`
      }}
    >
      Schedule a meet
    </Button>
  );
}
