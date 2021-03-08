module.exports = {
    images: {
      domains: [
        'assets.vercel.com',
        'api.screenshotmachine.com',
      ],
    },

    webpack: (config, options) => {
		config.module.rules.push({
			test: /\.mp3$/,
			use: [
				options.defaultLoaders.babel,
				{
					loader: 'file-loader',
					loader: 'url-loader',
				},
			],
		});

		return config;
	},
  };
  