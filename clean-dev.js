const fs = require('fs')
const path = require('path')
const { spawn } = require('child_process')

const nextDir = path.join(__dirname, '.next')

try {
  if (fs.existsSync(nextDir)) {
    fs.rmSync(nextDir, { recursive: true, force: true })
    console.log('[clean-dev] Cleared .next cache')
  }
} catch (err) {
  console.warn('[clean-dev] Could not clear cache:', err.message)
}

// Small delay for Windows to release file handles
setTimeout(() => {
  const child = spawn('npx', ['next', 'dev', '-p', '3003'], {
    stdio: 'inherit',
    shell: true,
  })
  child.on('exit', (code) => process.exit(code || 0))
}, 400)
