import { Component } from 'wzn-base-components';
import classNames from 'classnames';
import Table from '../table';

@Component({
  style: require('./style.scss'),
  preload: async (props) => {
    let apiData = (await Api.get(props.source, props.parmas)).result;
    console.log(apiData, '97844444');
    const { onDataEnd } = props;
    if (onDataEnd && Util.isFunction(onDataEnd)) {
      apiData = onDataEnd(apiData);
    }
    const result = {
      apiResponseData: apiData,
    };
    return result;
  },
})
class ComponentSearchTable extends React.Component {
  static propTypes = {
    /** 列表选项 */
    columns: PropTypes.array.isRequired,
    /** 类名选项 */
    className: PropTypes.any.isRequired,
    /** 请求地址 */
    source: PropTypes.string.isRequired,
    /** 请求参数 */
    parmas: PropTypes.object.isRequired,
    /** 返回数据以后的回调 */
    onDataEnd: PropTypes.func.isRequired,

    preloadData: PropTypes.object.isRequired,
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
      className, preloadData, ...moreProps
    } = this.props;
    const { apiResponseData } = preloadData;
    console.log(apiResponseData, 'ww');
    return (
      <div className={classNames('component-searchtable-container', className)}>
        <Table dataSource={apiResponseData} {...moreProps} />
      </div>
    );
  }
}
export default ComponentSearchTable;
