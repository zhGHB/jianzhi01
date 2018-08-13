import ajax from './ajax';

export async function getBanner(data) {
	let res = await ajax('/abc/abc',{});
	return res;
}