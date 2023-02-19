import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import "../styles/styles.css"

const About = () => {
document.title = 'About';
  return(
    <>
    <CssBaseline/>
    <Toolbar/>

    <Container maxWidth="md">
        <Paper elevation={4}>
            
          <div className="fl">
            <br/>
            <img src="https://avatars.githubusercontent.com/u/117854313?v=4" className="photo"/>
            <br/>
            <a>
              This is a homework task for Sourcery Academy / Devbridge.
            </a>
            <a href="https://github.com/wishpath/CSVReaderBackendJavaH2">Source code - backend</a>
            <a href="https://github.com/wishpath/-CSVReaderFrontendReact">Source code - frontend</a>
            <br/>
            <a>
              Made by Simonas Aruna, soon to be known as a best programmer ever:
            </a>
            <a href="https://www.linkedin.com/in/simonas-aruna/">LinkedIn</a>
            <a href="https://github.com/wishpath">GitHub</a>
            

            <a>+37063644328</a>
            <a>simonas.aruna[at]gmail.com</a>
            <br/>
          </div>   
        </Paper>
    </Container>
    </>
  );
}
export default About;