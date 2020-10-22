import React, { Component } from "react";

class TaskTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryList: [
        {
          country: {
            name: "IN",
          },
          states: [
            {
              name: "KA",
            },
            {
              name: "KL",
            },
            {
              name: "TN",
            },
            {
              name: "MH",
            },
          ],
          id: "0",
        },
        {
          country: {
            name: "US",
          },
          states: [
            {
              name: "AL",
            },
            {
              name: "DE",
            },
            {
              name: "GA",
            },
          ],
          id: "1",
        },
        {
          country: {
            name: "CA",
          },
          states: [
            {
              name: "ON",
            },
            {
              name: "QC",
            },
            {
              name: "BC",
            },
          ],
          id: "2",
        },
      ],

      stateValue: "",
      countryValue: "",
    };
  }

  handleCountry = (e) => {
    let countryValue = this.state.countryValue;
    countryValue = e.target.value;
    this.setState({
      countryValue: countryValue,
    });
  };

  handleState = (e) => {
    let stateValue = this.state.stateValue;
    stateValue = e.target.value;
    this.setState({
      stateValue: stateValue,
    });
  };

  render() {
    console.log(this.state.countryValue);
    console.log(this.state.stateValue);
    return (
      <div>
        <h1>Task2</h1>
        <select onChange={this.handleCountry}>
          {this.state.countryList.map((item, index) => (
            <option key={index} value={item.country.name}>
              {item.country.name}
            </option>
          ))}
        </select>
        <select onChange={this.handleState}>
          {this.state.countryList
            .filter((item) => item.country.name === this.state.countryValue)
            .map((item) =>
              item.states.map((states, index) => (
                <option key={index} value={states.name}>
                  {states.name}
                </option>
              ))
            )}
          ;
        </select>

        {/* <h3>{states}</h3> */}
      </div>
    );
  }
}

export default TaskTwo;
