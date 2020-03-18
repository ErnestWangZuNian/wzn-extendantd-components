import { Component } from 'wzn-base-components';
import classNames from 'classnames';
import tableColumns from '../tablecolumns';

const { Table } = antd;

@Component({
  style: require('./style.scss'),
})
class ComponentTable extends React.Component {
  static propTypes = {
    /** 列表选项 */
    columns: PropTypes.array.isRequired,
    /** 类名 */
    className: PropTypes.any.isRequired,
    dataSource: PropTypes.array.isRequired,
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
    const {
      columns, className, dataSource = [], ...moreProps
    } = this.props;
    return (
      <Table
        {...moreProps}
        columns={tableColumns.dealColumns(columns)}
        dataSource={dataSource}
        className={classNames('component-table-container', className)}
      />
    );
  }
}
export default ComponentTable;
