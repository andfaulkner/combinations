var assert = require('assert');
var combo = require('../');


suite('combo', function() {

  test('1 item array', function() {

    var out = combo(['a']);

    assert.deepEqual(out, [['a']]);

  })

  test('2 item array', function() {

    var out = combo(['a', 'b']);

    assert.deepEqual(out, [['a'], ['b'], ['a', 'b']]);

  })

  test('3 item array', function() {
    var out = combo(['a', 'b', 'c']);

    assert.deepEqual(out, [ [ 'a' ], [ 'b' ], [ 'c' ], [ 'a', 'b' ], [ 'a', 'c' ], [ 'b', 'c' ], [ 'a', 'b', 'c' ] ]);
  });
});

