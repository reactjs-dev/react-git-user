import React, { Component } from 'react';
import { Link } from 'react-router';

class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {cars:[]};
      }
      componentDidMount() {
      
        let user=fetch('https://api.github.com/users', { 
            method: 'get',
           
          })
          .then( (response) => {

            return response.json()    
         })
         .then( (json) => {
           
            console.log(json);
            const cars=  json;
            this.setState({cars});
           
       
            
           })
       
      };
    
      
    render(){
       
        // Map through cars and return linked cars
        const carNode = this.state.cars.slice(0, 5).map((car) => {
            return (
			
                <Link
                    to={"/users/"+car.login}
                    className="btn btn-primary"
                    key={car.id}>
                    {car.login}
                </Link>
            )
        });
        return (
            <div>
                <h1>Top 5 Git Hub Users</h1>
                <h5>Click on  user to get full Information</h5>
                <div className="list-group">
                    {carNode}
                </div>
            </div>
        );
    }
}

export default Car
