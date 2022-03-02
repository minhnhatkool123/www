const _ = require("lodash");

module.exports = function (err) {
	console.error(err);
	console.log("vao reformat");
	return _.pick(err, ["message", "code", "data"]);
};
