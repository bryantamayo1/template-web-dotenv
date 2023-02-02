# template-web-dotenv
>Final version template of webpack to build a web page

## Table of contents
1. [About](#about)
2. [Installation](#installation)
3. [Structure of project](#structure-of-project)
4. [Updates](#updates)
5. [Others](#others)

## About
Template to create web page with Webpack's environment and otenv-webpack library to global variables.

## Installation
1. Install libraries
```
    npm install
```
2. Run project
```
    npm start
```
3. Build project
```
    npm run build
```
4. Optionals
    - 4.1. Create files: *.env.development.local* and *.env.production.local* to global variables

## Structure of project

    ├── build                               # code for production
    ├── config-webpack                      # setup of webpack
    │   ├──  webpack.common.js              # common setup for dev and prod
    │   ├──  webpack.dev.js                 # setup only for dev
    │   └──  webpack.prod.js                # setup only for prod
    ├── docs                                # screenshots of updatings
    ├── node_modules                        # libraries after of installing with npm install
    ├── files-to-build                      # files to copy in build folder
    ├── src                                 # code for development
    │   ├──  js                             # only files javascript
    │   │    └── main.js                    # javascript file root
    │   ├──  styles                         # only files css
    │   │    └── main.css                   # css
    │   │    └── normalize.css              # css to normalize the styles of web page
    │   └──  index.html                     # html file root
    ├── .env.development.local              # development global variables
    ├── .env.production.local               # production global variables
    ├── .gitignore                          # ignore files
    ├── babel.config.json                   # setup of library babel
    ├── LICENSE                             # License MIT
    ├── manifest.json                       # info about the web page
    ├── package.json.json                   # file setup of profect
    ├── postcss.config.js                   # setup of library postcss
    └── README.md                           # info of project


## Update
Each six months it tries to update all project with npm-check-updates library.
## Others
- Info about [browserlist](https://github.com/browserslist/browserslist#browsers-data-updating): 

https://github.com/browserslist/browserslist#browsers-data-updating
- Global variables manages with dotenv-webpack
