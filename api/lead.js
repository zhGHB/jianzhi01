import ajax from '../utils/ajax.js';
export function hotLead(params) {
	return ajax("/lander/lander_list", 1, params);
}
export function watchLead(argument) {
	return ajax('/user/gz', 1, argument);
}