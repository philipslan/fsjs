# Node's Programming Model
## The Event Loop
Javascript and Node are single-threaded. They are multi-threaded by illusion.
Javascript maintains queues of unhandled task through cycles.
For concurrent execution, we can use Web Workers using child_process and cluster modules.

Trivial Example. setTimeout function will queue up task for future cycle, allowing all other tasks to execute first.

We know that javascript is not multithreading because one task should not affect another. See asynch.js example.

Most other languages have synchronous I/O (blocking) which means when I/O happens the application will wait until the operation is complete. Most of these languages support multi-threads. Javascript is single threaded however, it is asynchronous meaning it will continue to execute code despite a return from I/O.
## Callback Functions
Callback function is called after an asynchronous operation is complete.

There are certain conventions associated with callback functions.
1. Callback functions should be the last argument, when passed.
2. Errors are always the first argument, if it can be passed to a callback function.  

There are both synchronous and asynchronous methods in fs module.

## Exception Handling
A try...catch statement cannot catch an asynchronous error, because while the callback function is waiting to be returned, javascript will continue to execute the rest of the code.
The general way of handling errors in Node is to pass them through callback functions.

When an uncaughtException event is emitted, the application is in an undefined state and should not attempt to recover.

## Promises
Promises return while waiting on a value, and promise to return an eventual value while the rest of the code is executed. Promises were supported in Node, but callback functions have since replaced them.
