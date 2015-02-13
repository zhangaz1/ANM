'use strict';


module.exports = [
    '$scope',
    function($scope) {
        $scope.header = {
            leftNavs: [{
                url: '/',
                text: '首页'
            }, {
                url: 'start',
                text: '起步'
            }, {
                url: 'settings',
                text: '设置'
            }, {
                url: 'books',
                text: '书'
            }, {
                url: 'images',
                text: '图片'
            }, {
                url: 'else',
                text: '其它'
            }, {
                url: 'foo',
                text: '不存在'
            }],

            rightNavs: [{
                url: 'admin',
                text: '管理'
            }]
        };
    }
];
