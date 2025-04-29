// Extend given function to work with data received from main thread
// and implement function which sends result of the computation to the main thread

import { parentPort, workerData } from 'worker_threads';

import { createWriteStream } from 'fs';
import { join } from 'path';

const __dirname = import.meta.dirname;

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    const result = nthFibonacci(workerData);
//    console.log(`Worker ${workerData} finished with result: ${result}`);
    parentPort.postMessage(result);
};

sendResult();