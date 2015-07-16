# Node's Programming Model
## The Event Loop
Javascript and Node are single-threaded. They are multi-threaded by illusion. 
Javascript maintains queues of unhandled task through cycles. 
For concurrent execution, we can use Web Workers using child_process and cluster modules. 

Trivial Example. setTimeout function will queue up task for future cycle, allowing all other tasks to execute first.

We know that javascript is not multithreading because one task should not affect another. See mult.js example.

Most other languages have synchronous I/O (blocking) which means when I/O happens the application will wait until the operation is complete. Most of these languages support multi-threads. Javascript is single threaded however, it is asynchronous meaning it will continue to execute code despite a return from I/O.
## Callback Functions

