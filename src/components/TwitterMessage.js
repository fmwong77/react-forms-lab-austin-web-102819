import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      // maxChars: this.props.maxChars,
      message: ""
    };
  }

  handleChange = event => {
    const remain = this.props.maxChars - event.target.value.length;
    this.setState({
      message: event.target.value
      // maxChars: remain
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

        <div>
          {this.props.maxChars - this.state.message.length} remaining characters
        </div>
        <div>message: {this.state.message}</div>
      </div>
    );
  }
}

export default TwitterMessage;
