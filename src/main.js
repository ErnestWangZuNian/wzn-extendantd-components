import Util from 'wzn-utils';
import Router from './routes';

import 'antd/dist/antd.css';

Object.assign(global, antd);
global.Util = Util;

ReactDOM.render(Router, document.getElementById('app'));
