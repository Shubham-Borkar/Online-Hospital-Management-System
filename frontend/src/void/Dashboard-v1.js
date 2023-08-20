import { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class Dashboard1 extends Component 
{   
    state = { emp : [] } 

    
    render() { 
        var helper = new XMLHttpRequest();
            helper.onreadystatechange = ()=>{
                if(helper.readyState == 4 && helper.status == 200)
                {
                  debugger;
                  var usersInString = helper.responseText;
                  var users = JSON.parse(usersInString);
                  this.setState( {emp : users.data} );
                } 
            }
            helper.open("GET", "https://reqres.in/api/users");
            helper.send();

        return (<table class='table table-bordered'>
                    {
                        this.state.emp.map((i)=>{
                            return <tr>
                                        <td>{i.id}</td>
                                        <td>{i.first_name}</td>
                                        <td>{i.last_name}</td>
                                        <td><img src={i.avatar}/></td>
                                   </tr>
                        })
                    }
                </table>);
    }
}
 
export default Dashboard1;