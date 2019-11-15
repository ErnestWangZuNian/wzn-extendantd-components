import { Page } from 'wzn-base-components';
import classNames from 'classnames';
import Table from '../table';


@Page({
  style: require('./style.scss'),
})
class ComponentSearchTable extends React.Component {
  static propTypes = {
    /** 列表选项 */
    columns: PropTypes.array.isRequired,
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
