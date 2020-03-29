import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Image from 'material-ui-image';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxHeight: 200,
    overflow: "hidden",

  },
  gridRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

export default function Landing() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Paper className={classes.paper} elevation={0}>
            <Image
              animationDuration={5000}
              style={{ width: "100%" }}
              src="https://test.avantgardedistributors.com/web/image/product.product/2769/image"
              onClick={() => console.log('onClick')}
            />
          </Paper>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Paper className={classes.paper} elevation={0}>
            <SingleLineGridList />
          </Paper>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
}

const tileData = [
  {
    img: "https://test.avantgardedistributors.com/web/image/product.product/2769/image",
    title: 'Pumps',
    author: 'author',
  },
  {
    img: "https://test.avantgardedistributors.com/web/image/product.product/2769/image",
    title: 'Generators',
    author: 'author',
  },
  {
    img: "https://test.avantgardedistributors.com/web/image/product.product/2769/image",
    title: 'Pipes',
    author: 'author',
  },
  {
    img: "https://test.avantgardedistributors.com/web/image/product.product/2769/image",
    title: 'Others',
    author: 'author',
  },
];

function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div classes={{
      root: classes.gridRoot
    }}>
      <GridList className={classes.gridList} cols={4}>
        {tileData.map((tile) => (
          <GridListTile key={tile.title}>
            <Image
              animationDuration={5000}
              src={tile.img}
              onClick={() => console.log('onClick')}
              disableSpinner
            />
            <GridListTileBar
              title={tile.title}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
