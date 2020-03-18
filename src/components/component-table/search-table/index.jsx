import { Component } from 'wzn-base-components';
import classNames from 'classnames';
import Table from '../table';

@Component({
  // style: require('./style.scss'),
})
class ComponentSearchTable extends React.Component {
  static propTypes = {
    /** 列表选项 */
    columns: PropTypes.array.isRequired,
    /** 类名选项 */
    className: PropTypes.any.isRequired,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps() {}

  componentWillUpdate() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const { className, ...moreProps } = this.props;
    return (
      <div className={classNames('component-searchtable-container', className)}>
        <Table {...moreProps} />
      </div>
    );
  }
}
export default ComponentSearchTable;
