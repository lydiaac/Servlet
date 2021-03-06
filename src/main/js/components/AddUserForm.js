import React from "react";

export default class AddUserForm extends React.Component {

  constructor() {
    super();
    this.state = {
      "username": "",
      "apellido": "",
      "dni": ""
    }
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  keyPressed(e) {
    if (e.keyCode == 13) { // If enter is pressed
      this.addUser();
    }
  }

  addUser() {
    this.props.addUser(this.state.username);
  }

  render() {
    const cssStyle = {
      'marginBottom': '20px'
    }

    return (
      <div class="input-group col-md-4 col-md-offset-4" style={cssStyle}>
        <div>
          <input type="text" class="form-control"
            name="nombre"
            placeholder="Add a new user name..."
            value={this.state.name}
            onChange={this.handleChange.bind(this)}
            onKeyDown={this.keyPressed.bind(this)} />
          <input type="text" class="form-control"
            name="apellido"
            placeholder="Add a new user apellido..."
            value={this.state.surname}
            onChange={this.handleChange.bind(this)}
            onKeyDown={this.keyPressed.bind(this)} />
          <input type="text" class="form-control"
            placeholder="Add a new user document id..."
            name="dni"
            value={this.state.dni}
            onChange={this.handleChange.bind(this)}
            onKeyDown={this.keyPressed.bind(this)} />
        </div>
        <div>
          <button className="btn btn-default" type="button" onClick={this.addUser.bind(this)}>Insert User</button>
        </div>
      </div>
    );
  }
}