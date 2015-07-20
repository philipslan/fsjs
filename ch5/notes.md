# Core Modules
## Command Line Arguments
All command line arguments are available via *process.argv* array.
The first two elements of the array are the node executable and invoked JavaScript file.
## Working with the File System
Filename and dirname variables can locate the absolute location of a file. They are local variables and are different for each file.

[demo file](argv-demo.js)
## The Current Working Directory
The current working directory is the base for working with relative file paths.
Some command line methods

```javascript

process.cwd() // current working directory ;
process.chdir(string) // changes directory to input string ;
```
## Reading Files
Read files through *fs* module *readFile()* and *readFileSync()*. readFile and readFileSync share two arguments, a filename and a second argument that specifies other options. In the demo, the second argument specifies the encoding to return as utf8. readFile has a third argument that is the callback function.

## Writing Files
Use *writeFile(filename, data, more_info, return_fn)* and *writeFileSync(filename, data, more_info)*. Setting flags allows for better control ex. appending documents, not overwriting existing ones.

## Streams
Used for moving data between points.
### Readable Streams
They are sources emitting: data close, end, and error events.
### Writable Streams
Use write() and end() methods.
pipe() allows the output of a stream to be used for an input of another stream.

## Standard Streams
stdin, stdout, & stderr.