import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import useSWR from 'swr';
import FrontCarousel from "./FrontCarousel";

const useStyles = makeStyles((theme) => ({

  progress: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    position: "fixed",
    top: "40%",
    left: "40%"


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
  const { data, error } = useSWR('path', fetchConfig);
  if (error) return <div>failed to load</div>
  if (!data) return <LoadingFrontPage />
  return (
    <React.Fragment>
      <FrontCarousel slides={data.tiles} />
    </React.Fragment>
  );
}



const fetchConfig = async (path) => {
  var targetUrl = 'https://dl.dropboxusercontent.com/s/u5as349xx3r18r5/tiles.json';
  let response = await fetch(targetUrl)
  let responseText = await response.text();
  let jsonData = JSON.parse(responseText)
  return { tiles: jsonData.tiles, main: jsonData.main }
}