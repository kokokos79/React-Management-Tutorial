import React, { Component } from 'react';
import EmployeesService from '../services/EmployeesService';
// rcc 단축키로 완성하기
class ListEmployeeComponent extends Component {
    // con
    constructor(props) {
        super(props);
        this.state = {
            // 데이터 리스트 추가하기 
            employees : []
        }
        
    }
    //axio
    componentDidMount(){
        
        EmployeesService.getEmployees().then((res) => {
            this.setState({ employees : res.data });
        })

    }


    render() {
        return (
            <div>
                <h2 className='text-center'>Emp List</h2>
                <div className='row'>
                    <table className='table table-striped table-bordered'>

                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>    
                            <tbody>
                            {
                                this.state.employees.map(
                                    employees => 
                                    <tr key={employees.id}>
                                        <td> { employees.firstName } </td>
                                        <td> { employees.lastName } </td>
                                        <td> { employees.emailID } </td>

                                    </tr>
                                )
                            }
                            </tbody>
                      
                    </table>

                </div>

            </div>
        );
    }
}

export default ListEmployeeComponent;