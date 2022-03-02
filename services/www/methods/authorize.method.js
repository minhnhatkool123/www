const _ = require("lodash");

module.exports = async function (ctx, route, req) {
	console.log("vao authorize");
	ctx.meta.clientIp =
		req.headers["x-forwarded-for"] ||
		req.connection.remoteAddress ||
		req.socket.remoteAddress ||
		req.connection.socket.remoteAddress;
	ctx.meta.auth = ctx.meta.user;
	//console.log('ctx.meta.auth', ctx.meta.auth)
	delete ctx.meta.user;
};
