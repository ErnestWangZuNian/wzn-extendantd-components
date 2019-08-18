
import { Input } from 'antd';
import React from 'react';

const style = require('./style.scss');

if (style.use) {
  style.use();
}


export default class NumberInput extends React.Component {
  static defaultProps = {};

  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() { }

  componentDidUpdate() { }

  componentWillUnmount() { }

  render() {
    return <Input placeholder="number-input" className="components-numberinput-container" />;
  }
}
