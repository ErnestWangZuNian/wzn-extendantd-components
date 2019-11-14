import { Page } from 'wzn-base-components';
import classNames from 'classnames';
import tableColumns from '../tablecolumns';

const { Table, Nodata } = antd;

@Page({
  style: require('./style.scss'),
})
class ComponentTab extends React.Component {
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
      const { columns, className, ...moreProps } = this.props;
      return (
        <Table
          {...moreProps}
          locale={{
            emptyText: <Nodata />,
          }}
          columns={tableColumns.dealColumns(columns)}
          className={classNames('component-table-container', className)}
        />
      );
    }
}
export default ComponentTab;
