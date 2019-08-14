require('./style.scss');

const { Button } = antd;

class App extends React.Component {
  static defaultProps = {};

  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <div>
          <Button
            type="primary"
            onClick={() => {
              console.log('1111');
            }}
          >
            demo测试
          </Button>
        </div>
      </div>
    );
  }
}
export default App;
