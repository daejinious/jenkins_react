module.exports = {
  apps : [{
    name: 'client',
    exec_mode: 'cluster',
    instances: 2,
    script: 'npx',
    args: `serve -s build -h localhost -p 3000`,
    watch: true,
    node_args: '--max_old_space_size=8192',
  },],
};
