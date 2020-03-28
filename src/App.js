import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Paper, Grid, } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    height: 200,
    width: "100 %",
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

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Carousel className={classes.carousel}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://test.avantgardedistributors.com/web/image/360/Lucas+Plumbing+Reading+Plumbers+2-5184x3456.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://test.avantgardedistributors.com/web/image/3077"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://test.avantgardedistributors.com/web/image/775/IMG-20190125-WA0003.jpg"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </React.Fragment >
  );
}

export default App;


