const chalk = require('chalk')
const execa = require('execa')
const Listr = require('listr');

export enum DepType {
  MAIN,
  DEV,
}

const depTypeSaveString = {
  [DepType.MAIN]: '--save',
  [DepType.DEV]: '--save-dev'
}

// function createInstallationCommandSpecs: CommandSpec[] (packages: string[], depType: DepType){
//   return packages.map(
//     // ...
//     // call this below, and then return it called to monsterBash
//   )
// }

export function installist(packages: string[], dir: string, depType: DepType) {
  const listItems = packages.map((item: string) => {
    return {
      title: item,
      task: async () => {
        await execa('npm',
          ['install', '--prefix', dir, depTypeSaveString[depType], item]).catch((error: any) => {
          throw new Error(chalk.red(`error installing ${item}.`) +
                            `You may try installing ${item} directly by running ` +
                            `npm install ${depTypeSaveString[depType]} ${item}' directly and see what messages are reported. ` +
                            `Here is the error reported:\n${error}`)
        },)
      },
    }
  })

  return new Listr(listItems)
}
