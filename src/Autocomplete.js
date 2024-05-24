import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import fuzzysearch from "fuzzysearch";
import './Autocomplete.css';
 
class Autocomplete extends Component {
  static propTypes = {
    options: PropTypes.instanceOf(Array),
    default: PropTypes.string,
    name: PropTypes.string,
    maxDisplayItems: PropTypes.number
  };
  
  static defaultProps = {
    options: [],
    default: "",
    name: "menu",
    maxDisplayItems: 100
  };
  
  constructor(props) {
    super(props);
  
    this.state = {
      activeOption: 0,
      filteredOptions: this.props.options,
      showOptions: false,
      userInput: this.props.default
    };
    this.blurTimeout = null;

    this.refreshOptions = this.refreshOptions.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleListClick = this.handleListClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleDivBlur = this.handleDivBlur.bind(this);
    this.handleDivFocus = this.handleDivFocus.bind(this);
  }
  
  refreshOptions(userInput) {
    const filteredOptions = this.props.options.filter(
      (option) => fuzzysearch(userInput.toLowerCase(), option.toLowerCase())
    );
    this.setState({
      activeOption: 0,
      filteredOptions,
      showOptions: true,
      userInput: userInput
    });
  };

  handleTextChange(e) {
    this.refreshOptions(e.currentTarget.value);
  };
  
  handleListClick(e) {
    console.log("a click");
    this.refreshOptions(e.currentTarget.innerText);
  };
  
  handleKeyPress(e) {
    if (e.code === "Enter") {
      this.setState({
        activeOption: 0,
        showOptions: false,
        userInput: this.state.filteredOptions[this.state.activeOption]
      });
    } else if (e.code === "ArrowUp") {
      this.setState({ activeOption: (this.state.activeOption + this.state.filteredOptions.length - 1) % this.state.filteredOptions.length });
    } else if (e.code === "ArrowDown") {
      this.setState({ activeOption: (this.state.activeOption + 1) % this.state.filteredOptions.length });
    }
  };
  
  handleDivBlur(e) {
    console.log("a blur");
    this.blurTimeout = setTimeout(() => {
      console.log("doing a blur");
      this.setState({
        showOptions: false
      });
    }, 500); // FIXME dumb timeout
  };

  handleDivFocus(e) {
    console.log("a focus");
    clearTimeout(this.blurTimeout);
    this.setState({
      showOptions: true
    });
  };

  render() {
    console.log("render");
    let optionsListComponent;
  
    if (this.state.showOptions) {
      if (this.state.filteredOptions.length) {
        const buildList = options => options.reduce((out, option, index) => {
          if ( index < this.props.maxDisplayItems ) {
            let className = "option";
            if (index === this.state.activeOption) {
              className += " active";
            }
            out.push(
              <li className={className} key={option} onClick={this.handleListClick}>
                {option}
              </li>
            );
          } else if ( index === this.props.maxDisplayItems ) {
            out.push(
              <li className="option"><i>... ({options.length - index} more)</i></li>
            );
          }
          return out;
        }, []);
        optionsListComponent = (
          <ul className="Autocomplete-options" key={this.name}>
            {buildList(this.state.filteredOptions)}
          </ul>
        );
      } else {
        optionsListComponent = (
          <ul className="Autocomplete-options">
            <li className="option"><i>No options</i></li>
          </ul>
        );
      }
    }
  
    return (
      <Fragment>
        <div className="Autocomplete-box" key={this.name} onBlur={this.handleDivBlur} onFocus={this.handleDivFocus}>
            <input
              type="text"
              onChange={this.handleTextChange}
              onKeyDown={this.handleKeyPress}
              value={this.state.userInput}
              className="Autocomplete-input"
            />
            {optionsListComponent}
        </div>
      </Fragment>
    );
  }
  }
  
  export default Autocomplete;
