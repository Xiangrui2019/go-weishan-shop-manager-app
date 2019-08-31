import axios from 'axios';
import * as conf from '../conf/config'

const getNonPubishOrder = (limit, start) => axios.get("{0}/api/v1/order/non_publish?limit={1}&start={2}".format(conf.pay_server, limit, start))
const publishOrder = (id) => axios.patch("{0}/api/v1/order/publish/".format(conf.pay_server)+id)

export {
    getNonPubishOrder,
    publishOrder
};