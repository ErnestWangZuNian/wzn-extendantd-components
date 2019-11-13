import { Page } from 'wzn-base-components';
import { NumberInput, Table } from '../../components';

const { Button } = antd;
@Page({
  style: require('./style.scss'),
  form: true,
})
class Demo extends React.Component {
  static defaultProps = {};

  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      isFloatNumber: true,
    };
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const { isFloatNumber } = this.state;
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        weight: true,
        key: 'name',
        // render: (text) => {
        //   const result = `1111-${text}`;
        //   return result;
        // },
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
    ];
    const dataSource = [
      {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
      },
      {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      },
    ];
    return (
      <div className="demo-container">
        <NumberInput
          isFloatNumber={isFloatNumber}
          decimalMaxLen={8}
          maxLen={4}
          onChange={(e) => {
            console.log(e, 'ww');
          }}
        />
        <Table columns={columns} dataSource={dataSource} />
        <Button
          type="primary"
          onClick={() => {
            this.setState({
              isFloatNumber: !isFloatNumber,
            });
          }}
        >
          demo
        </Button>
      </div>
    );
  }
}
export default Demo;
