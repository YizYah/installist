/* ns__file unit: standard, comp: test/index.test.ts */
/* ns__start_section imports */
import test from 'ava';
/* ns__custom_start customImports */
import {DepType, installist} from '../src/index'
/* ns__custom_end customImports */

/* ns__end_section imports */

/* ns__custom_start general */
test('general', async (t) => {
  // replace with whatever you'd like.  To start over with the default, remove everything including the
  t.not(typeof installist, "undefined")
  const foo = await installist(["barbells"],'/tmp/testInstallist', 0)
  t.not(typeof foo, "undefined")
  t.is(DepType.MAIN,0)

});
/* ns__custom_end general */
