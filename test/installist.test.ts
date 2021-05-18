import test from 'ava';

const proxyquire = require('proxyquire');
const sinon = require('sinon');

const fakeInstalledPackages: string[] = []
const execaFake = (file: string, args: string[]) => {
  if (file==='npm') {
    const packageName = args[4]
    if (packageName.indexOf('#') > -1) throw new Error(`Invalid tag name '${packageName}'`)
    fakeInstalledPackages.push(packageName)
  }
}
const execa = sinon.stub().callsFake(execaFake);


import { DepType } from '../src/custom/installist';
const installistModule = proxyquire('../src/custom/installist', { 'execa': execa})
const {installist} = installistModule

const fs = require('fs-extra');

const mainInstallation = [
  'barbells',
  'geenee-rate@0.1.10',
]

const mainInstallationFailing = [
  'test#',
]

const codeDir=__dirname +  '/temp'

  test('installist', async t => {

    if (!fs.existsSync(codeDir)) {
      await fs.mkdir(codeDir)
    }

    const listrToRun = await installist(mainInstallation,codeDir,DepType.MAIN)
    await listrToRun.run()

    t.true(fakeInstalledPackages.includes('barbells'))


    const listrToRun2 = await installist(mainInstallationFailing,codeDir,DepType.MAIN)

    const error = await t.throwsAsync(async () => {
      await listrToRun2.run()
    });

    t.regex(error.message, /Invalid tag name /);

  });
