# js-algorithms
A group of algorithmic solutions with JavaScript

## Motivation
Often times, you may read about some complex computer science problems that could be solved with a simple algorithm in which ever language of your choice. This particular repo uses JavaScript and nodejs to execute the solution.  This will be a 'work in progress', with added solutions as time permits.

## Requirements
- nodejs ^14.6.x
- @babel transpiler packages ^7.12.x
## Run
- Have `nodejs` installed locally. I'd suggest using `nvm` or dropping this into a simple `docker` container with the minimal nodejs listed.
- Run `npm install`.
- Run `npm run build` to create a build or run `npm run watch` to have a continual build of the project.
- Run the code via `node build/fibonacci.js`, as an example.

## TODO
- Add docker container
- Add command line runner of the algorithms available to run
- Take command line argument with the command line runner
- Add testing framework
- Add standard, prettier, with husky, githooks, etc.
