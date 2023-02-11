import { useEffect, useState } from "react";
//import './App.css';
import employeeService from "../services/employee.service";
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

  return (
    <div className="container">
      <h3>List of Employees</h3>
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
  );}
export default UploadEmployees;