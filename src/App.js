import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Paper, Grid, } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel';
import MediaCard from './components/TestCard'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  carousel: {
    backgroundColor: "#ff00ff",
  },
  carouselItem: {
    backgroundColor: "#ff00ff",
  }
}));
class App extends Component {
  render() {
    return (
      <SimpleContainer />
    );
  }
}


function SimpleContainer() {
  const classes = useStyles();
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!"
    },
    {
      name: "Random Name #2",
      description: "Hello World!"
    },
    {
      name: "Random Name #3",
      description: "Hello World!"
    }
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Carousel animation="slide" interval={1000} className={classes.carousel} >
              {
                items.map(item => {
                  return <Item className={classes.carouselItem} item={item} key={item.name} />
                })
              }
            </Carousel>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </div>
    </React.Fragment >
  );
}

function Item(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <MediaCard />
      </Paper>
    </React.Fragment>
  )
}
export default App;

