## Node Binaries
---

#### Command Options
- ```node --help```
- ```node --v8-options```

#### Checking Syntax without running
- ```node --check app.js```
- ```node -c app.js```

#### Dynamic Evaluation (from shell)
- evaluate & print ```-p``` 
- ```node --print "1+1"```
- just evaluate ```-e```
- ```node --eval "1+1" ```

#### Preloading CommonJs Modules
- ```--require```
- ```node -r ./preload.js app.js ```

#### Stack Trace Limit
- only for development environments
- ```node --stack-trace-limit=101 app.js```
