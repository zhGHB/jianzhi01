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