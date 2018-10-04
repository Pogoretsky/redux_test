import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '60%',
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
  button: {
    color: 'lightseagreen',
  }
};

const todoRow = ({profile, deleteEvent, classes}) => {
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="inherit">
          {profile.first_name} {profile.last_name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button         
          classes={{
            label: classes.button,
          }} 
          size="small" onClick={()=>deleteEvent(profile.id)}
        >
          X
        </Button>
      </CardActions>
    </Card>
  );
}

todoRow.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(todoRow);

// const todoRow = ({profile, deleteEvent}) => {
//   return (
//     <div className="todo-row">
//       <span>{profile.first_name} {profile.last_name}</span>
//       <button onClick={()=>deleteEvent(profile.id)}>X</button>
//     </div>
//   )
// }

// export default todoRow;