import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Link from '@material-ui/core/Link';
import { Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Image from 'material-ui-image';
import useSWR from 'swr';

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
  progress: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    marginLeft: "50%",

  },
}));

const LoadingFrontPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.progress}>
      <CircularProgress />
    </div>
  );
}
export default function Landing() {
  const classes = useStyles();
  const { data, error } = useSWR('path', fetchConfig);
  if (error) return <div>failed to load</div>
  if (!data) return <LoadingFrontPage />
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={0}>
            <GridList cellHeight={320} spacing={1} className={classes.gridList} style={{ width: "100%" }} >
              <GridListTile style={{ width: "100%" }} >
                <Link href={data.main.url} >
                  <Image
                    src={data.main.img}
                  />
                </Link>
                <GridListTileBar
                  title={<Typography variant="h5">{data.main.title}</Typography>}
                  titlePosition="top"
                />
              </GridListTile>
            </GridList>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={0}>
            <SingleLineGridList tiles={data.tiles} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}


function SingleLineGridList(props) {
  const classes = useStyles();
  const tileData = props.tiles;
  console.log(tileData)
  return (
    <div className={classes.gridRoot}>
      <GridList className={classes.gridList} cols={5} cellHeight={240} spacing={1} style={{ "backgroundColor": "#000", "borderTopWidth": 1, "borderTopStyle": "solid" }}>
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


const fetchConfig = async (path) => {
  var targetUrl = 'https://dl.dropboxusercontent.com/s/u5as349xx3r18r5/tiles.json';
  let response = await fetch(targetUrl)
  let responseText = await response.text();
  let jsonData = JSON.parse(responseText)
  return { tiles: jsonData.tiles, main: jsonData.main }
}