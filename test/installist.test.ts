import test from 'ava';
import { DepType, installist } from '../src/custom/installist';

const fs = require('fs-extra');

const mainInstallation = [
  'barbells',
  'geenee-rate',
]

const mainInstallationFailing = [
  'test#',
]

const devInstallation = [
  'cogs-box',
]

const codeDir='/tmp/testInstallist'

  test('installist', async t => {
    if (!fs.existsSync(codeDir)) {
      await fs.mkdir(codeDir)
    }

    const listrToRun = await installist(mainInstallation,codeDir,DepType.MAIN)
    await listrToRun.run()

    t.true(await fs.pathExists(codeDir + '/node_modules/barbells'));


    const listrToRun2 = await installist(mainInstallationFailing,codeDir,DepType.MAIN)

    const error = await t.throwsAsync(async () => {
      await listrToRun2.run()
    });
    t.regex(error.message, /Invalid tag name /);

  });
