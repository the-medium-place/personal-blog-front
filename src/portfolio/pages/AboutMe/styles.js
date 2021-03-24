import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // height: '500vh',
        overflow: 'hidden'
    },
    aboutmeTop: {
        marginTop: '7rem'
    },
    aboutmePic: {
        width: '100%',
        margin: '0 auto',
    },
    aboutmePicWrapper: {
        // paddingTop: '56.25%'
    },
    scrollProgressIndicator: {
        position: 'fixed',
        top: '2.5rem',
        right: '1rem',
        width: 80,
        height: 80,
        aspectRatio: '1/1'
    },
    scrollProgressPercent: {
        position: 'fixed',
        top: '1rem',
        right: '1rem'
    }
}))

export default useStyles;