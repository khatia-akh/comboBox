import React, { Component } from "react";

export default class ComboBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      value: this.props.textField || "",
      showList: false
    };
  }

  onSearch = ({ target }) => {
    this.setState({ value: target.value });
    const data = target.value
      ? this.props.data.filter(item =>
          item.textField.toLowerCase().includes(target.value.toLowerCase())
        ) || []
      : this.props.data;
    this.setState({ data });
  };

  onSelectItem = (item, index) => {
    this.setState({ value: item.textField, showList: false });
    this.props.onSelectedItemChange(item.valueField, item.textField);
  };

  onFocus = () => {
    if (!this.props.disabled) {
      this._input.focus();
      this.setState({ showList: !this.state.showList });
    }
  };

  render() {
    return (
      <div>
        <div onClick={this.onFocus}>
          <div>
            <input
              className="selectInput"
              placeholder={this.props.placeholder}
              type="text"
              value={this.state.value}
              onChange={this.onSearch}
              disabled={this.props.disabled}
              ref={ref => (this._input = ref)}
            />
          </div>
        </div>
        {this.state.showList && (
          <div>
            <div>
              {this.state.data.map((item, index) => (
                <div
                  key={item.valueField}
                  onClick={e => this.onSelectItem(item, index)}
                  className="values"
                >
                  {item.textField}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}
