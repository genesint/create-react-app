import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Image from 'material-ui-image';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 320,
        //width:800,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top left",

    },
    legend: {
        width: "50% !important",
        marginLeft: "0 !important",
        right: "0 !important",
        left: "auto !important",
        bottom: "auto !important",
        top: "10% !important",
        borderRadius: "0 !important",
        minHeight: "60%",
        background: "#0f0ff0 !important",
        color: "#000 !important",
        opacity: "1 !important",
        transition: "unset !important"


    },
}));

export default function FrontCarousel(props) {
    const classes = useStyles();
    const handleOnChange = () => { }
    const handleOnClickItem = () => { }
    const handleOnClickThumb = () => { }
    const slides = props.slides;
    console.log('slides', slides)
    return (
        <Carousel
            autoPlay
            infiniteLoop
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            transitionTime={1000}
            onChange={handleOnChange}
            onClickItem={handleOnClickItem}
            onClickThumb={handleOnClickThumb}>
            {slides.map((slide) => (
                <div className={classes.root} key={slide.url}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper} elevation={0} style={{
                                backgroundImage: `url('http://placehold.it/800x280')`
                            }}>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Typography component="div" className={`legend ${classes.legend}`}>
                        <p>
                            {slide.title}</p>
                        <p>
                            <Button
                                component="a"
                                href={slide.url}
                                variant="contained"
                                color="primary"
                                style={{ position: "absolute", left: "5%", bottom: "5%" }}
                                disableElevation>
                                Browse products
                        </Button></p>

                    </Typography>
                </div>
            ))}
        </Carousel>
    );
}
