import ajax from '../utils/ajax.js';

export function getShareList(params,index) {
	if(index == 0) {
		return ajax("/share/index",1,params);
	}else {
		return ajax("/share/my_follow_share",1,params);
	}
} 
export function zan(params) {
	return ajax("/share/sdz",1,params);
}
export function  shareDetail(params) {
	return ajax("share/detail",1,params);
}
export function watch(argument) {
	return ajax("/user/tags_update", 1, argument);
}