module.exports = {
  apps: [
    {
      name: "theblackfoxstudio",
      script: "npm",
      args: "start -- -p 3020",
      instances: "max",
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
