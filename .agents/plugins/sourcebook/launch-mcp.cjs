// WorkBuddy expands CODEBUDDY_PLUGIN_ROOT in its plugin MCP manifest.
// Resolve the bundled platform-specific native helper from this script.
const { spawn } = require('node:child_process');
const path = require('node:path');

const helper = path.join(__dirname, 'bin', process.platform === 'win32' ? 'sourcebook-mcp.exe' : 'sourcebook-mcp');
const child = spawn(helper, process.argv.slice(2), {
  cwd: __dirname,
  env: { ...process.env, SOURCEBOOK_AGENT_NAME: 'WorkBuddy' },
  stdio: 'inherit',
});

child.on('error', (error) => {
  process.stderr.write(`Sourcebook MCP could not start: ${error.message}\n`);
  process.exitCode = 1;
});
child.on('exit', (code, signal) => {
  process.exitCode = signal ? 1 : (code ?? 1);
});
