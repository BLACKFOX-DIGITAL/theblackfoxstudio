module.exports = {
  apps: [
    {
      name: "theblackfoxstudio",
      script: "node_modules/.bin/next",
      args: "start -p 3020",
      instances: 1,
      env: {
        NODE_ENV: "production",
        PORT: 3020,
      },
    },
  ],
};
