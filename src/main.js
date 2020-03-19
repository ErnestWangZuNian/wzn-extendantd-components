import Util from 'wzn-utils';
import Api from '@/api';
import Router from './routes';

import 'antd/dist/antd.css';

Object.assign(global, antd);
global.Util = Util;
global.Api = Api;

ReactDOM.render(Router, document.getElementById('app'));
