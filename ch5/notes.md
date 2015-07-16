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
Read files through *fs* module *readFile()* and *readFileSync()*.
