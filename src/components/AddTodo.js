import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const styles = {
  card: {
    width: '60%',
    minWidth: 275,
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'center',
    padding: '16px',
    margin: '8px'
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  textField: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',            
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500
  },
  cssUnderline: {
    '&:after': {
      borderBottomColor: 'lightseagreen',
    },
  },
  cssLabel: {
    '&$cssFocused': {
      color: 'lightseagreen',
    },
  },
  cssFocused: {},
  button: {
    color: 'lightseagreen',
  },
  margin: {
    marginRight: '24px'
  }
};


const addTodo = ({addEvent, saveInputHandler, inputValue, classes}) => {
  return (
    <Card className={classes.card}>
      <FormControl className={classes.margin}>
        <InputLabel
          htmlFor="custom-css-input"
          FormLabelClasses={{
            root: classes.cssLabel,
            focused: classes.cssFocused,
          }}
        >
          Add Event
        </InputLabel>
        <Input
          id="custom-css-input"
          onChange={saveInputHandler}
          classes={{
            underline: classes.cssUnderline,
          }}
        />
      </FormControl>
      <Button
        classes={{
          label: classes.button,
        }}
        onClick={addEvent.bind(this, { id: Math.random()+inputValue, value: inputValue })}
      >
        Submit
      </Button>
    </Card>
  );
}
addTodo.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(addTodo);

// const addTodo = ({addEvent, saveInputHandler, inputValue}) => {   
//   return (
//     <div className="todo-row todo-input">
//       <label htmlFor="todoInput"> Add your planned event </label>
//       <div className="todo-input_container">
//         <input onChange={saveInputHandler} name="todoInput"/>
//         <button onClick={addEvent.bind(this, { id: Math.random()+inputValue, value: inputValue })}>Submit</button>
//       </div>
//     </div>
//   )
// }

// export default addTodo;