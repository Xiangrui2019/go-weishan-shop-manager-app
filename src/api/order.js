import axios from 'axios';
import * as conf from '../conf/config'

var getNonPubishOrder = () => axios.get("{0}/api/v1/order/non_publish".format(conf.pay_server))

export {
    getNonPubishOrder
};