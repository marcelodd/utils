'use strict';

var dateUtils = require('../lib/dateUtils');

module.exports = {
    '__name': { '': function(test) { test.done(); } },
    '__description': { '': function(test) { test.done(); } },
    'unixTime': {
        'Tests basic functionality': function(test) {
            test.equal(dateUtils.unixTime(new Date(1970, 0, 1), 0), 0);

            test.done();
        }
    }
};