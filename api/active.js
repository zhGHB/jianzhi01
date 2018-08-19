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