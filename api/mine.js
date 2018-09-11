import ajax from '../utils/ajax.js';

export function getAllIntTags() {
	return ajax("user/get_all_tags");
}
export function myOrder(params) {
	return ajax("/order/my_order",1,params);
}
export function collectList(params) {
	return ajax("user/get_collect",1,params);
}
export function collectDelete(params) {
	return ajax("user/del_collect",1,params);
}
export function udateContact(params) {
	return ajax('/user/update_contacts', 1, params);
}
export function getContact(params) {
	return ajax('/user/get_contacts', 1, params);
	// body...
}
export function intro(argument) {
	return ajax('/user/user_mood', 1, argument);
}
export function sendCode(argument) {
	return ajax("/index/send_code", 1, argument);
}
export function udateCover(argument) {
	return ajax("/user/user_cover", 1, argument);
}