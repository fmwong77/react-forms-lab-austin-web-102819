import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: props.maxChars,
      message: ""
    };
  }

  handleChange = event => {
    const remain = this.props.maxChars - event.target.value.length;
    this.setState({
      message: event.target.value,
      maxChars: remain
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          onChange={event => this.handleChange(event)}
          value={this.state.message}
          maxChars={this.props.maxChars}
        />

        <div>{this.state.maxChars} remaining characters</div>
        <div>message: {this.state.message}</div>
      </div>
    );
  }
}

export default TwitterMessage;
