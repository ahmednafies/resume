import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';


const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    bigAvatar: {
      margin: 10,
      width: 150,
      height: 150,
    },
  });
 
  class AboutMe extends Component {
    render(){
    const { classes } = this.props;
  
  return(
      <div>
          <div className={classes.root}>
            <Grid container spacing={24}>
                <Paper className={classes.paper}>
                <Grid item xs={12}>
                <Avatar alt="Ahmed Nafies" src="https://raw.githubusercontent.com/ahmednafies/resume/master/src/res/photo.png" className={classes.bigAvatar} />
                </Grid>
                <Grid item xs={12}>
                <h1>About Me</h1>
                <p>
                  I am full stack web developer with focus on backend, my favorite stack is Python/Django and React
                  (I started liking react recently actually). I know my way around HTML, CSS and Javascript and
                  I have previous experience with AngularJS. I have had a long experience with Flask, as well had a some
                  nice experience with Golang. I believe that my true power comes in developing Rest APIs. I'd like to think
                  of myself as a database agonstic as I have used different types of databases (MongoDb, MySQL, PostgreSQL, Neo4J).
                  Recently I started working with Firebase.
                </p>{"\n"}
                </Grid>               
                </Paper>
            </Grid>
          </div>
      </div>
  )
  };
}

AboutMe.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(AboutMe);