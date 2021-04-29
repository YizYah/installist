
[//]: # ( ns__file unit: standard, comp: README.md )

[//]: # ( ns__custom_start beginning )

[//]: # ( ns__custom_end beginning )

[//]: # ( ns__start_section intro )

[//]: # ( ns__custom_start description )

![](images/installist.gif)

creates a lister to install a list of packages from an array of names

[//]: # ( ns__custom_end description )

[//]: # ( ns__custom_start afterDescription )

[//]: # ( ns__custom_end afterDescription )

[//]: # ( ns__custom_start badges )

[//]: # ( ns__start_section usageSection )

[![codecov](https://codecov.io/gh/YizYah/installist/branch/main/graph/badge.svg?token=019QO4XK1Z)](https://codecov.io/gh/YizYah/installist)
[![Version](https://img.shields.io/npm/v/installist.svg)](https://npmjs.org/package/installist)
[![Downloads/week](https://img.shields.io/npm/dw/installist.svg)](https://npmjs.org/package/installist)
[![License](https://img.shields.io/npm/l/installist.svg)](https://github.com/YizYah/installist/blob/master/package.json)


[![Geenee](https://img.shields.io/badge/maintained%20by-geenee-brightgreen)](https://npmjs.org/package/geenee)
[![Template](https://img.shields.io/badge/template-ts--packrat-blue)](https://npmjs.org/package/ts-packrat)

[//]: # ( ns__custom_end badges )

[//]: # ( ns__end_section intro )


[//]: # ( ns__start_section api )


[//]: # ( ns__custom_start APIIntro )

# Why
Sometimes it's useful for a CLI to install packages into a directory.  you can create a dependency list, but installation has the advantage that the user will not have to call `npm install` for the packages to become available

# Usage
Install the package:
```
npm i installist
```
It exports two things: an enumeration `DepType` and a function `insallist`.  There are two `DepType` values: `MAIN` and `DEV`.  

The `installist` takes 3 parameters:
1. packages: string[] with the list of packages
2. dir: string indicating the directory
3. depType: DepType (MAIN=0 or DEV=1)

It returns a Listr, as specified in the [listr](https://www.npmjs.com/package/listr) package.  Here's a sample usage:
```
import { DepType, installist } from '../src/custom/installist';

const mainInstallation = [
  'barbells',
  'geenee-rate@0.1.10',
]

const codeDir='/tmp/testInstallist'

const listrToRun = await installist(mainInstallation,codeDir,DepType.MAIN)
await listrToRun.run()
```
This code installs into the `codeDir` directory the latest versions of `barbells` and version `0.1.10` of `geenee-rate`.  They are added to `package.json` in `codeDir` within `dependencies`.  

If `DevTypes.DEV` value is used, then `npm insert -D` is called for each element of the dependency list.


[//]: # ( ns__custom_end APIIntro )


[//]: # ( ns__custom_start constantsIntro )
[//]: # ( ns__custom_end constantsIntro )



[//]: # ( ns__start_section types )


[//]: # ( ns__end_section types )


[//]: # ( ns__end_section api )

