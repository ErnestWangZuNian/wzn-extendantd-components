import { Page } from 'wzn-base-components';
import { NumberInput, SearchTable } from '@/components';


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
        title: '标题',
        dataIndex: 'name',
        weight: true,
      },
      {
        title: '年龄',
        dataIndex: 'age',
      },
      {
        title: '间介',
        dataIndex: 'text',
      },
    ];
    // const dataSource = [
    //   {
    //     name: '154541',
    //     age: 32,
    //     address: '西湖区湖底公园1号',
    //   },
    //   {
    //     name: '12222',
    //     age: 42,
    //     address: '西湖区湖底公园1号',
    //   },
    //   {
    //     name: '154541',
    //     age: 32,
    //     address: '西湖区湖底公园1号',
    //   },
    //   {
    //     name: '12222',
    //     age: 42,
    //     address: '西湖区湖底公园1号',
    //   },
    //   {
    //     name: '154541',
    //     age: 32,
    //     address: '西湖区湖底公园1号',
    //   },
    //   {
    //     name: '12222',
    //     age: 42,
    //     address: '西湖区湖底公园1号',
    //   },
    //   {
    //     name: '154541',
    //     age: 32,
    //     address: '西湖区湖底公园1号',
    //   },
    //   {
    //     name: '12222',
    //     age: 42,
    //     address: '西湖区湖底公园1号',
    //   },
    //   {
    //     name: '154541',
    //     age: 32,
    //     address: '西湖区湖底公园1号',
    //   },
    //   {
    //     name: '12222',
    //     age: 42,
    //     address: '西湖区湖底公园1号',
    //   },
    //   {
    //     name: '154541',
    //     age: 32,
    //     address: '西湖区湖底公园1号',
    //   },
    //   {
    //     name: '12222',
    //     age: 42,
    //     address: '西湖区湖底公园1号',
    //   },
    // ];
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
        <SearchTable source="/getJoke" toolbar={<Button type="primary">新增</Button>} columns={columns} />
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
