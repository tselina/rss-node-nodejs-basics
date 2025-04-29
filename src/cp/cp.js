// Implement function "spawnChildProcess" that receives array of arguments "args"
// and creates child process from file "script.js", passing these "args" to it.
// This function should create IPC-channel between "stdin" and "stdout" of master process and child process:
// - child process "stdin" should receive input from master process "stdin"
// - child process "stdout" should send data to master process "stdout"

import { spawn } from 'child_process';
import { join } from 'path';

const __dirname = import.meta.dirname;

const spawnChildProcess = async (args) => {
    const scriptPath = join(__dirname, 'files/script.js');
    const childProcess = spawn('node', [scriptPath, ...args], {
        stdio: ['pipe', 'pipe', 'inherit'],
    });

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['arg1', 'arg2']);