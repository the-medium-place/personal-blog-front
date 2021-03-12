import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import facepic from '../../assets/images/facepic.jpg'


const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        width: '100vw',
        height: 400,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    jumboPic: {
        // width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: -1,
        // display: 'block',
        maskImage: 'linear-gradient(to left, rgba(0, 0, 0, 1) 60%, rgba(0,0,0,0) 90%)'
    },
    jumboText: {
        // display: 'absolute',
        // top: '4rem',
        // left: '5rem',
        // color: 'red'
        marginLeft: '20vw'
    }
}))

export default function AboutMeJumbotron() {
    const classes = useStyles();


    return (
        <div className={`AboutMeJumbotron fade-in ${classes.root}`}>
            <div className={`${classes.jumboText}`}>
                <h2>My name is Zac
                    <br />
                I love to code.
                    <br />
                Here's more about me...</h2>
            </div>
            {/* <div className={classes.picDiv} /> */}
            <img className={classes.jumboPic} src={facepic} alt="Zac's face is spectacularly handsome." />
        </div>
    )
}
