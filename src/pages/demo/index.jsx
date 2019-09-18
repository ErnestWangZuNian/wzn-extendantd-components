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

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="demo-container">
        <NumberInput
          isFloatNumber
          decimalMaxLen={8}
          maxLen={4}
          onChange={(e) => {
            console.log(e, 'ww');
          }}
        />
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
