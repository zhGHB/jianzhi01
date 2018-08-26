import ajax from '../utils/ajax.js';


export function getActiveBanner() {
	return ajax('index/banner');
}
export function getCate() {
	return ajax('index/cate_list');
}
export function getListByID(params) {
	return ajax('active/active_list',1,params);
}
export function getActiveDetail(params) {
	return ajax("active/detail",1,params);
}
export function getActiveLead(params) {
		return ajax("active/get_team_list",1,params);
}
export function getActiveRate(params) {
	return ajax("active/get_active_comment",1,params);
}
export function getIntTag(params) {
	return ajax("user/get_user_tags",1,params);
}
export function orderScan(params) {
	return ajax("order/prive_order",1,params);
}
export function collect(params) {
	return ajax("active/add_collect",1,params);
}
