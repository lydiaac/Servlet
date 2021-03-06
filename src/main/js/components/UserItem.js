import React from "react";

export default class UserItem extends React.Component {

	constructor(props) {
		super(props)
	}

  render() {

    const { user } = this.props;
  
    return (
      <div class="well col-md-4 col-md-offset-4" key={user.dni}>
        nombre: {user.nombre} apellido: {user.apellido} dni: {user.dni}<br/>
      </div> 
    );
  }
}
