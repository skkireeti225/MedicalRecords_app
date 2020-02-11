import React from "react";
import "./styles.css";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = "";
    this.textInput = React.createRef();
  }
  componentDidMount() {
    axios
      .get("https://jsonmock.hackerrank.com/api/medical_records")
      .then(res => {
        return this.setState({ data: res.data });
      });
  }

  // getData = () => {
  //   axios
  //     .get("https://jsonmock.hackerrank.com/api/medical_records")
  //     .then(res => {
  //       return this.setState({ data: res.data });
  //     });
  // };

  // getRecords = value => {

  //   console.log("hello");
  // };

  renderList = () => {
    if (!this.state.data) {
      return <div> Loading... </div>;
    }

    if (this.state.data) {
      console.log(this.textInput.current.value);
      return this.state.data.data.map(item => {
        // if (item === this.state.userName) {
        return (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.timestamp}</td>
            <td>{item.diagnosis.name}</td>
            <td>{item.meta.weight}</td>
            <td>{item.doctor.name}</td>
          </tr>
        );
        // }
        // <li key={item.id}>{item.userName}</li>;
      });
    }
  };

  renderOptions = () => {
    if (!this.state.data) {
      return <div> Loading... </div>;
    }
    if (this.state.data) {
      return this.state.data.data.map(item => {
        return (
          // <tr key={item.id}>
          //   <td>{item.id}</td>
          //   <td>{item.timestamp}</td>
          //   <td>{item.diagnosis.name}</td>
          //   <td>{item.meta.weight}</td>
          //   <td>{item.doctor.name}</td>
          // </tr>
          <option
            key={item.id}
            value={item.id}
            onChange={() => console.log("hello")}
          >
            {item.userName}
          </option>
        );
        // <li key={item.id}>{item.userName}</li>;
      });
    }
  };

  // <div>
  //   <h1>{data.name}</h1>
  //   <h2>{data.address.city}</h2>
  // </div>
  render() {
    //https://jsonplaceholder.typicode.com/users
    console.log("rendered");
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <select ref={this.textInput}>{this.renderOptions()}</select>
        <input type="button" value="submit" onClick={this.getData} />
        <table>
          <tr>
            <th>Sl</th>
            <th>Date</th>
            <th>Diagnosis</th>
            <th>Weight</th>
            <th>Doctor</th>
          </tr>
          {this.renderList()}
        </table>
      </div>
    );
  }
}

export default App;
