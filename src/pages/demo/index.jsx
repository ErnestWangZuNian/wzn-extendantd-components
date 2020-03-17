import { Page } from 'wzn-base-components';
import { NumberInput, Table } from '../../../dist';

console.log(Table, 'www');

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
        title: '金额',
        dataIndex: 'name',
        weight: true,
        format: Util.other.formatMoney,
        render: (text) => {
          const result = `${text}12`;
          return result;
        },
      },
      {
        title: '年龄',
        dataIndex: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
      },
    ];
    const dataSource = [
      {
        name: '154541',
        age: 32,
        address: '西湖区湖底公园1号',
      },
      {
        name: '12222',
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
