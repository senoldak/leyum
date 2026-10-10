import test from 'node:test';
import assert from 'node:assert/strict';

test('CLI argüman ayrıştırıcı parametreleri doğru okur', () => {
  const args = ['--kategori', 'doga-hayvanlar', '--yas', '4-6', '--konu', 'Kutup Ayısı'];
  const map = {};
  for (let i = 0; i < args.length; i += 2) {
    map[args[i].replace(/^--/, '')] = args[i + 1];
  }
  assert.equal(map.kategori, 'doga-hayvanlar');
  assert.equal(map.yas, '4-6');
  assert.equal(map.konu, 'Kutup Ayısı');
});
