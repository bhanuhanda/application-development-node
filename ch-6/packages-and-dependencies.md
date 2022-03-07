## Packages & Dependencies
---

#### Npm Commands
- ```npm help```
- ```npm init -y```
- ```npm install```

#### package.json
- name, version
- main = entry point file to load when package is loaded
- scripts = shell scripts

#### Packages
- ```npm install package_name@major_version_num```
- ```npm ls``` lists (installed) (production) dependencies tree of a package
- development dependencies are not installed
- ```--depth``` flag to see more than top level dependencies

#### Dev Dependencies
- ```npm install --save-dev package_name```
- ```npm install --production``` to install just the prod dependencies

#### SemVer
- Major, Minor, Patch
- ^7.6.2 === 7.x.x (ACCEPT ALL MINOR UPDATES)
- ~7.6.2 === 7.6.x (ACCEPT ALL PATCH UPDATES)
- 7.6.2 === 7.6.2 (KEEP EXACT VERSION, NO UPDATES)

####
- ```--``` to pass flags via npm run to aliases command
- ```npm run -- --fix lint
