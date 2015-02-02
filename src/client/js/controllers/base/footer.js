'use strict';


module.exports = [
    '$scope',
    function($scope) {
        $scope.footer = {
            author: 'zhangaz1@hotmail.com',
            copyrights: '©Right本项目源码受开源协议保护。',
            version: '0.0.1',
            about: {
                url: 'about',
                text: '关于'
            }
        };
    }
];
