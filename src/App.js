import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Paper, Grid, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
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
    }
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Carousel>
              {
                items.map(item => {
                  return <Item item={item} />
                })
              }
            </Carousel>
          </Grid>
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
        <h2>{props.item.name}</h2>
        <p>{props.item.description}</p>

        <Button className="CheckButton">
          Check it out!
      </Button>
      </Paper>
    </React.Fragment>
  )
}
export default App;


