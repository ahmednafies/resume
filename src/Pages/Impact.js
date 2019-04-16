import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Graph from '../Components/Graph';
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


class Impact extends Component {
    
    render(){
        const { classes } = this.props;

        return(
            <div>
            <h1>Impact</h1>
            <div className={classes.root}>
                <Grid container spacing={24}>
                <Slide direction="left" in={true} style={{ transitionDelay: 50 }} mountOnEnter unmountOnExit>
                    <Grid item xs={8} className={ classes.grid}>
                        <Graph/>
                    </Grid>
                    </Slide>
                    <Slide direction="left" in={true} style={{ transitionDelay: 200 }} mountOnEnter unmountOnExit>
                    <Grid item xs={8} className={ classes.grid}>
                        <Graph/>
                    </Grid>
                    </Slide>
                </Grid>
            </div>
            </div>
        );
    }
}

export default withStyles(styles) (Impact)