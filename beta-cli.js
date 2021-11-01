/*
Beta CLI
- Command line iterface for the Beta NextJS boilerplace
*/
const fse = require('fs-extra')
const chalk = require('chalk');
const log = console.log

// cli utils

function createProject(project_name){
    let sourceFiles = `./`
    let projectDir = `../${project_name}`
    fse.ensureDirSync(projectDir);
    // copy base files
    console.log("Copying files, excluding git...")
    fse.copySync(
        sourceFiles,
        projectDir,
        { 
            overwrite: true,
            filter: path => {
                console.log('path ===', path)
                return !(path.indexOf('.git') > -1)
              }
        },
        function (err) {
          if (err) {
            console.error(err);
          } else {
            log(chalk.greenBright(`SUCCESS: project created in ../${project_name}`))
          }
        }
      );

      log(chalk.greenBright(`SUCCESS: project created in ../${project_name}`))
}


// cli logs

log(chalk.blue('========================='));
log(chalk.green('Beta CLI v1'));
log(chalk.blue('========================='));

const args = process.argv

if(args.length == 2){
log(chalk.whiteBright(`
--create [folder-name] : Create a new Beta CLI Boilerplate instance. If the project is already modified
this also creates a copy of the entire project. Folder will be create out side this project directory.
`))
}



// watch for the create command

if(args.includes("--create") && args.length === 4){
    log(chalk.yellow(`Creating App Instance: (${args[3]})`))
    createProject(args[3])  
}