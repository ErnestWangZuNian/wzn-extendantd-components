import { NumberInput } from '../../components';

const style = require('./style.scss');

style.use();

const { Button } = antd;

class App extends React.Component {
  static defaultProps = {};

  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() { }

  componentDidUpdate() { }

  componentWillUnmount() { }

  render() {
    return (
      <div className="demo-container">
        <NumberInput />
        <Button
          type="primary"
          onClick={() => {
            console.log('1111');
          }}
        >
          demo
        </Button>
      </div>
    );
  }
}
export default App;
