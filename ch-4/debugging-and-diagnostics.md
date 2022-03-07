## Debugging & Diagnostics
---

#### Starting in Inspect Mode
- ```node --inspect app.js```
- to start the process with active breakpoint at the begining of the program
- ```node --inspect-brk app.js```
- go to url [chrome://inspect](chrome://inspect)

#### Breaking on Error in Devtools
- Call Stack on right side
- Hover over local variables to check their scope benath call stack
- "Pause on Exceptions" can be useful for locating source of exception

#### Adding Breakpoint in Devtools
- in Sources tab, click on line number in the source code

#### Adding Breakpoint in Code
- ```debugger```
- useful for breaking the line thats burried under dependency tree