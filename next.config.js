const nextConfig = {
  staticPageGenerationTimeout: 120, // Increase the timeout to 120 seconds (default is 60)

  images: {
    domains: ['cdn.sanity.io'], // Add Sanity's image domain to allow loading images from Sanity
  },

  webpack: (config) => {
    // Handle small SVGs with @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
      exclude: /public\/.*\.svg$/, // Exclude SVGs in the public folder
    });

    // For large SVGs in the public folder, use file-loader
    config.module.rules.push({
      test: /\.svg$/,
      include: /public\/.*\.svg$/, // Only include SVGs in the public folder
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'static/media/[name].[hash].[ext]', // File naming pattern
            publicPath: '/_next/static/media/', // Public path for SVG assets
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
