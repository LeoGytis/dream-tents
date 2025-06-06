/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
	output: 'export',
	// images: {unoptimized: true},
	basePath: isProd ? '/dream-tents' : '',
	assetPrefix: isProd ? '/dream-tents/' : '',
	images: {unoptimized: true},
};

module.exports = nextConfig;
