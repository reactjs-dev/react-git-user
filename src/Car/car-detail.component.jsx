import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';

class CarDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {car:[]};
      }
      componentDidMount() {
      
        let user=fetch('https://api.github.com/users/'+this.props.params.id, { 
            method: 'get',
           
           
          })
          .then( (response) => {
            return response.json()    
         })
         .then( (json) => {
           
            
            const car=  json;
            this.setState({car});
           
        
            
           })
       
      };
    
    handleRedirect(){
        browserHistory.push('/');
    }
    render(){
        const cars = this.props.route.data;
        const id = this.props.params.id;
        const car = this.state.car;

        return (
            <div>
			{/*<button className="btn btn-default" onClick={this.handleRedirect.bind(this)}>Go to Users</button>*/}
                    
                
                <div className="row myclass">
                    <div className="col-sm-2 col-md-3">
                        <div className="thumbnail">
                            <img width="100"src={car.avatar_url} alt={car.name} />
                        </div>
                    </div>
                    <div className="col-sm-10 col-md-9">
						<h3>{car.name}</h3>
                       
                         {car.location}
                           
                       
                    </div>
                    <div className="col-md-12">
                   
               
                        
                    </div>
                    <div className="col-md-12">
                       </div>
                </div>
            </div>
        );
    }
}

export default CarDetail