'use strict';

var plist = require('simple-plist');
var certDownloader = require('./cert-downloader')
module.exports = function (file, callback) {
    var certDl = new certDownloader();
    certDl.verify(file, function (error, output) {
        if (error) {
            return callback(error);
        }
        callback(null, plist.parse(output));
    });
};