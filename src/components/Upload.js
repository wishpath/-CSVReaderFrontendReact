import React from "react";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";

import { useDropzone } from 'react-dropzone';
import RootRef from '@material-ui/core/RootRef';
import { makeStyles } from '@material-ui/core/styles';

import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";
import Fab from "@material-ui/core/Fab";
import CheckIcon from "@material-ui/icons/Check";
import CloudUpload from "@material-ui/icons/CloudUpload";
import clsx from "clsx";
import { LinearProgress } from "@material-ui/core";
import axios from "axios";

import "../styles/styles.css"
import uploadService from "../services/upload.service";

import { useEffect, useState } from "react";
import employeeService from "../services/employee.service";
import "../styles/styles.css"
import 'bootstrap/dist/css/bootstrap.css'


const useStyles = makeStyles((theme) => ({
    dropZoneContainer: {
        height: 300,
        background: "#efefef",
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        borderStyle: "dashed",
        borderColor: "#aaa"
    },
    preview: {
        width: 250,
        height: 250,
        margin: "auto",
        display: "block",
        marginBottom: theme.spacing(2),
        objectFit: "contain",

    },
    wrapper: {
        margin: theme.spacing(1),
        position: "relative",
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
    },
    buttonSuccess: {
        backgroundColor: green[500],
        "&:hover": {
            backgroundColor: green[700],
        },
    },
    fabProgress: {
        color: green[500],
        position: "absolute",
    },
    buttonProgress: {
        color: green[500],
        position: "absolute",
        top: "50%",
        left: "50%",
        marginTop: -12,
        marginLeft: -12,
    },
}));

const Upload = () => {
    document.title = 'CSV Uploader'; 
    const classes = useStyles(); 
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [file, setFile] = React.useState();
    const [percent, setPercent] = React.useState(0);
    const [downloadUri, setDownloadUri] = React.useState();
    const [employees, setEmployees] = useState([]);
    const buttonClassname = clsx({
        [classes.buttonSuccess]: success,
    });
    const onDrop = React.useCallback((acceptedFiles) => {
        console.log(acceptedFiles);
        if (acceptedFiles[0].type == "text/csv") {
            setFile(acceptedFiles[0]);
            setSuccess(false);
            setPercent(0);
        }

    });
    const { getRootProps, getInputProps } = useDropzone({
        multiple: false,
        onDrop,
    });

    const { ref, ...rootProps } = getRootProps();

    const uploadFile = async () => {
        try {
            setSuccess(false);
            setLoading(true);
            const formData = new FormData();
            formData.append("file", file);
            const API_URL = "http://129.151.221.35:8888/files";
            const response = await axios.put(API_URL, formData, {
                onUploadProgress: (progressEvent) => {
                    const percentCompleted =
                        Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    setPercent(percentCompleted);
                },
            });
            setDownloadUri(response.data.filedownloadUri)
            setSuccess(true);
            setLoading(false);
            init();

        } catch (err) {
            alert(err.message)
        }
    }

    const init = () => {
        employeeService.getAll()
            .then(response => {
                console.log('Printing employees data', response.data);
                setEmployees(response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }

    useEffect(() => {
        init();
    }, []);

    return (
        <>
            <CssBaseline />
            <Toolbar />

            <Container maxWidth="md">
                <Paper elevation={4}>
                    <Grid container>

                        <Grid item xs={12} style={{ padding: 16 }}>
                            <RootRef rootRef={ref}>
                                <Paper {...rootProps} elevation={0}
                                    className={classes.dropZoneContainer}>
                                    <input {...getInputProps()} />
                                    {file ? <p>{file.name}</p> : <p>Drop or select a CSV file</p>}
                                </Paper>
                            </RootRef>
                        </Grid>


                        <Grid item xs={12} style={{ padding: 0 }}>

                            {/*  */}
                            {file && <>
                                <Grid container style={{ marginTop: 12 }} alignItems="center">

                                    <Grid item xs={12}>
                                        <div className={classes.wrapper}>
                                            <Fab aria-label="save" color="primary" className={buttonClassname} onClick={uploadFile}>
                                                {success ? <CheckIcon /> : <CloudUpload />}
                                            </Fab>
                                            {loading && (
                                                <CircularProgress size={68} className={classes.fabProgress} />
                                            )}
                                        </div>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <div className={classes.wrapper}>

                                            {(loading && <div>
                                                <LinearProgress variant="determinate" value={percent} style={{ width: 200 }} />
                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Typography variant="body">{percent}%</Typography>
                                                </div>
                                            </div>
                                            )}

                                        </div>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <div className={classes.wrapper}>
                                            {success && (
                                                <Typography variant="body">
                                                    The file is successfully uploaded!{" "}
                                                </Typography>
                                            )}
                                        </div>
                                        <div className={classes.wrapper}>
                                            {success && (
                                                <Typography variant="body">
                                                    <a href={downloadUri} target="_blank" >
                                                        File URL
                                                    </a>
                                                </Typography>
                                            )}
                                        </div>
                                    </Grid>
                                </Grid>
                            </>}
                            {/*  */}
                        </Grid>


                    </Grid>
                </Paper>
            </Container>
            <br />
            <Container maxWidth="md">
                <Paper elevation={4}>
                    <div className="container px-0">
                        <div>
                            <table className="table table-bordered table-hover">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone Number</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        employees.map(employee => (
                                            <tr key={employee.id}>
                                                <td>{employee.name}</td>
                                                <td>{employee.email}</td>
                                                <td>{employee.phone}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Paper>
            </Container>
        </>
    );
}

export default Upload;