import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import "../styles/styles.css"

const About = () => {

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
              Made by Simonas Aruna, soon to be known as a best programmer ever:
            </a>
            <a href="https://www.linkedin.com/in/simonas-aruna/">LinkedIn</a>
            <a href="https://github.com/wishpath">GitHub</a>
            <a>+37063644328</a>
            <a>simonasa.aruna[at]gmail.com</a>
            <br/>
          </div>   
        </Paper>
    </Container>
    </>
  );
}
export default About;