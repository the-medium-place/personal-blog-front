import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import WebTwoToneIcon from '@material-ui/icons/WebTwoTone';
import AccountTreeTwoToneIcon from '@material-ui/icons/AccountTreeTwoTone';
import useWindowDimensions from '../../../hooks/WindowDimensions';


const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});


function Row(props) {
    const { project } = props;
    const [open, setOpen] = useState(false);
    const classes = useRowStyles();
    const { width, height } = useWindowDimensions();


    return (
        <Fragment>
            <TableRow className={classes.root} onClick={() => setOpen(!open)}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" style={{ paddingRight: 0, paddingLeft: 0 }}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row" style={{padding:'auto 0'}}>
                    <Typography variant="h6" gutterBottom component="div">
                        {project.title}
                    </Typography>
                </TableCell>
                {/* DONT SHOW TAGLINE ROW ON SMALLER SCREENS */}
                {width > 960 ? <TableCell>{project.tagline}</TableCell> : null}
                <TableCell align="right">
                    {/* <ButtonGroup
                        // fullWidth
                        size="small"
                        aria-label="outlined primary button group"
                    > */}
                    <Button
                        size="small"
                        startIcon={<WebTwoToneIcon />}
                        href={project.deployed}
                        variant="contained"
                        target="_blank"

                    // className={classes.linkBtn}
                    >
                        Live App
                            </Button>
                    <Button
                        size="small"
                        startIcon={<AccountTreeTwoToneIcon />}
                        href={project.github}
                        variant="contained"
                        target="_blank"

                    // className={classes.linkBtn}
                    >
                        Git Repo
                            </Button>
                    {/* </ButtonGroup> */}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1} style={{ width: '100%' }}>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <Typography variant="h6" gutterBottom component="div">
                                        {project.title}
                                    </Typography>
                                </Grid>
                                <Grid item xs={8} md={4}>
                                    <img src={project.screenshot} style={{ width: '100%' }} />
                                </Grid>

                            </Grid>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </Fragment>
    );
}


export default function CollapsibleTable({ projects }) {
    console.log(projects)
    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <TableContainer component={Paper}>
                    <Table aria-label="collapsible table" size="small">
                        <TableBody>
                            {projects.map((project) => (
                                <Row key={project.id} project={project} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
}