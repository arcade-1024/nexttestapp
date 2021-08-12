module.exports = {
	target: "serverless",
	async redirects() {
		return [
			{
				source: "/",
				destination: "/login",
				permanent: true,
			},
			{
				source: "/company",
				destination: "/company/servers",
				basePath: false,
				permanent: false,
			},
			{
				source: "/company/site",
				destination: "/company/site/overview",
				basePath: false,
				permanent: false,
			},
		];
	},
};
