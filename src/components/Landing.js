import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Link from '@material-ui/core/Link';
import Image from 'material-ui-image';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 320,
    overflow: "hidden",

  },
  gridRoot: {
    //display: 'flex',
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
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={0}>
            <Link href="https://avantgardedistributors.com/services" >
              <Image
                src="https://www.dropbox.com/s/bb3bp9zwiqclrb4/drip3.jpg?dl=1"
              />
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={0}>
            <SingleLineGridList />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

const tileData = [
  {
    img: "https://www.dropbox.com/s/s8erukb5nx7tbhv/pumps.jpg?dl=1",
    title: 'Pumps',
    url: 'https://avantgardedistributors.com/shop/category/water-division-pumps-1?order=name+asc',
  },
  {
    img: "https://www.dropbox.com/s/24i0h5xxtrth7jr/pipes.jpg?dl=1",
    title: 'Hoses',
    url: 'https://avantgardedistributors.com/shop/category/water-division-hoses-3?order=name+asc',
  },
  {
    img: "https://www.dropbox.com/s/03c8q0lt2kr0278/assecories.jpg?dl=1",
    title: 'Fittings & Accessories',
    url: 'https://avantgardedistributors.com/shop/category/water-division-fittings-accessories-6?order=name+asc',
  },
  {
    img: "https://www.dropbox.com/s/r5lgl1mx9ruz428/generator.jpg?dl=1",
    title: 'Generators',
    url: 'https://avantgardedistributors.com/shop/category/water-division-generators-4?order=name+asc',
  },
  {
    img: "https://www.dropbox.com/s/jshc1zq0opmhyfi/parts.jpg?dl=1",
    title: 'Spares',
    url: 'https://avantgardedistributors.com/shop/category/water-division-spares-5?order=name+asc',
  },
];

function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div className={classes.gridRoot}>
      <GridList className={classes.gridList} cols={5} cellHeight={240} spacing={1} >
        {tileData.map((tile) => (
          <GridListTile key={tile.title} component={Link} href={tile.url} >
            <Image
              src={tile.img}
              disableSpinner
            />
            <GridListTileBar
              title={tile.title}
            />
          </GridListTile>
        ))}
      </GridList>
    </div >
  );
}
