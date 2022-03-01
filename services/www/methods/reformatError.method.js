const _ = require('lodash');

module.exports = function (err) {
	console.log('vao 1')
	return _.pick(err, ['message', 'code', 'data']);
};
