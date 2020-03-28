import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';
import { red, blue, green } from '@material-ui/core/colors';
import { Paper, Grid, } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

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

  const open = true;

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>

              <div style={{ position: 'relative', width: '100%', height: 500 }}>
                <AutoRotatingCarousel
                  label='Get started'
                  open={open}
                >
                  <Slide
                    media={<img src='http://www.icons101.com/icon_png/size_256/id_79394/youtube.png' alt='hi' />}
                    mediaBackgroundStyle={{ backgroundColor: red[400] }}
                    style={{ backgroundColor: red[600] }}
                    title='This is a very cool feature'
                    subtitle='Just using this will blow your mind.'
                  />
                  <Slide
                    media={<img src='http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png' alt='hi' />}
                    mediaBackgroundStyle={{ backgroundColor: blue[400] }}
                    style={{ backgroundColor: blue[600] }}
                    title='Ever wanted to be popular?'
                    subtitle='Well just mix two colors and your are good to go!'
                  />
                  <Slide
                    media={<img src='http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png' alt='hi' />}
                    mediaBackgroundStyle={{ backgroundColor: green[400] }}
                    style={{ backgroundColor: green[600] }}
                    title='May the force be with you'
                    subtitle='The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.'
                  />
                </AutoRotatingCarousel>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </React.Fragment >
  );
}

export default App;


