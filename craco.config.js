const path = require('path');

module.exports = {
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@common': path.resolve(__dirname, 'src/common'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@types': path.resolve(__dirname, 'src/common/types'),
			'@modules': path.resolve(__dirname, 'src/modules'),
			'@services': path.resolve(__dirname, 'src/services'),
			'@utils': path.resolve(__dirname, 'src/common/utils'),
			'@components': path.resolve(__dirname, 'src/common/components')
		}
	}
};
