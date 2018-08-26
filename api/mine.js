import ajax from '../utils/ajax.js';

export function getAllIntTags() {
	return ajax("user/get_all_tags");
}
export function myOrder(params) {
	return ajax("/order/my_order",1,params);
}