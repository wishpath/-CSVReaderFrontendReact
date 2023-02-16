import { useEffect, useState } from "react";
import employeeService from "../services/employee.service";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import "../styles/styles.css"
import 'bootstrap/dist/css/bootstrap.css'

const UploadEmployees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    employeeService.getAll()
      .then (response => {
        console.log('Printing empoyees data', response.data);
        setEmployees(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }, []);

  return(
    <>
    <CssBaseline/>
    <Toolbar/>
    <Container maxWidth="md">
      <Paper elevation={4}>  
        <div className="container px-0">
          <div>
            <table className="table table-bordered table-hover">
              <thead className="thead-dark">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
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
export default UploadEmployees;