import { Component } from 'wzn-base-components';
import classNames from 'classnames';
import tableColumns from '../tablecolumns';

const { Table } = antd;
const { Fragment } = React;

@Component({
  style: require('./style.scss'),
})
class ComponentTable extends React.Component {
  static propTypes = {
    /** 列表选项 */
    columns: PropTypes.array.isRequired,
    /** 类名 */
    className: PropTypes.any.isRequired,
    /** 数据源 */
    dataSource: PropTypes.array.isRequired,
    /** 表单顶部工具展示 如表单顶部按钮 */
    toolbar: PropTypes.any.isRequired,
    /** 分页 */
    pagination: PropTypes.object.isRequired,
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
      columns, className, dataSource = [], toolbar, pagination, ...moreProps
    } = this.props;
    return (
      <Fragment>
        {toolbar ? <div className="toolbar-container">{toolbar}</div> : null}
        <Table
          {...moreProps}
          columns={tableColumns.dealColumns(columns)}
          dataSource={dataSource}
          className={classNames('component-table-container', className)}
          pagination={{
            hideOnSinglePage: true,
            pageSize: 10,
            ...pagination,
          }}
        />
      </Fragment>

    );
  }
}
export default ComponentTable;
