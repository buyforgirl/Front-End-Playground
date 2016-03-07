function route (pathname, handle) {
	var paramsIndex = pathname.indexOf('?'); 
	var params = '';
	if (paramsIndex !== -1) {
		params = pathname.slice(paramsIndex + 1);
		pathname = pathname.slice(0, pathname.indexOf('?'));
	}
	if (typeof handle[pathname] === 'function') {
		return handle[pathname](params);
	} else {
		return '404 Not found'
	}
}



exports.route = route;