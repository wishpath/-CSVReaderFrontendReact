import React from "react";
// import uploadService from "../services/upload.service";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
//import 'bootstrap/dist/css/bootstrap.css'
import Divider from "@material-ui/core/Divider";
import {useDropzone} from 'react-dropzone';
import RootRef from '@material-ui/core/RootRef';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    dropZoneContainer:{
        height:300,
        background:"#efefef",
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        borderStyle: "dashed",
        borderColor: "#aaa"
    }
}))

const Upload = () => {
    const classes = useStyles();
    const onDrop = React.useCallback((acceptedFiles) => {
        console.log(acceptedFiles);
   });
    const { getRootProps, getInputProps } = useDropzone({
        multiple:false, 
        onDrop,
    });

   const {ref,...rootProps} = getRootProps();





    
    
    


//   const onDrop = React.useCallback((acceptedFiles) => {
//     const fileDropped = acceptedFiles[0];
//     if (fileDropped["type"].split("/")[0] === "image") {
//     //   setSelectedImageFile(fileDropped);
//       return;
//     }
//     // setFile(fileDropped);
//     const previewUrl = URL.createObjectURL(fileDropped);
//     // setPreview(previewUrl);
//     // setSuccess(false);
//     // setPercent(0);
//   },[]);



    
      


    return(
        //<div>klxxxxspavyzdys</div>
        <>
        <CssBaseline/>
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6">React File Upload Laba Diena</Typography>
            </Toolbar>
        </AppBar>
        <Toolbar/>
        <Toolbar/>
        <Container maxWidth="md">
            <Paper elevation={4}>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography align="center" style={{padding:16}}>
                            File Upload
                        </Typography>
                        <Divider/>
                    </Grid>
                    <Grid item xs={6} style={{padding:16}}>
                         
                         <RootRef  rootRef={ref}>
                         <Paper {...rootProps} elevation={0} 
                         className={classes.dropZoneContainer}>
                            
                            <input {...getInputProps()}/>
                            <p>Drop or select a file</p>
                        </Paper>
                        </RootRef>
                        
       
                    </Grid>
                    <Grid item xs = {6} ></Grid>
                </Grid>
            </Paper>
        </Container>
        </>
    );
}

export default Upload;