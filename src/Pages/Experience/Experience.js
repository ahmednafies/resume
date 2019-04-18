import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Timeline } from 'react-material-timeline';
import { Avatar } from '@material-ui/core';
import WorkIcon from '@material-ui/icons/WorkSharp'
import pink from '@material-ui/core/colors/pink';
import Slide from '@material-ui/core/Slide';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    grid: {
      alignItems: 'center',
      textAlign: 'center',
      justify: 'center',
    }
  });

const events = [
  {
    title: 'Hem Design Studio',
    subheader: 'Dec 2018 - Now (-1 year)' ,
    description: [ 'Full Stack Web Developer (React, Python/Django and Go)' ],
    icon: <Avatar><WorkIcon  style={{ color: pink[900] }}/></Avatar>,
  },
  {
    title: 'Swedbank',
    subheader: 'Jan 2017 - Dec 2018 (2 Years)',
    description: [ 'Full Stack Web Developer (AngularJs, Jquery, Python/Flask)' ],
    icon: <Avatar><WorkIcon  style={{ color: pink[700] }}/></Avatar>,
  },
  {
    title: 'Erasmus Student Network',
    subheader: 'Jan 2016 - Dec 2016 (1 Year)',
    description: [ 'Web Developer' ],
    icon: <Avatar><WorkIcon  style={{ color: pink[500] }}/></Avatar>,
  },
  {
    title: 'YBN LTD',
    subheader: 'Jan 2014 - Dec 2015 (2 Years)',
    description: [ 'Full Stack Web Developer' ],
    icon: <Avatar><WorkIcon  style={{ color: pink[300] }}/></Avatar>,
  }
];

function Experience (props){
      const { classes } = props;
      
      return(
          <div className={classes.root}>
              <Grid container spacing={24}>
                  <Grid item xs={12} sm={12} md={12} lg={8} className={classes.grid}>
                      <h1>Work Experience</h1>
                  </Grid>
                  <Slide direction="up" in={true} style={{ transitionDelay: 100 }} mountOnEnter unmountOnExit>
                  <Grid item xs={12} sm={12} md={12} lg={8}>
                  <Timeline events={events}/>
                  </Grid>
                  </Slide>
              </Grid>
          </div>
        );
  }
export default withStyles(styles)(Experience);