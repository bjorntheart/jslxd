import test from 'ava';
import { Lxd } from './jslxd';

test('should exist', async (t) => {
  const client = new Lxd();
  t.not(client, undefined);
});
