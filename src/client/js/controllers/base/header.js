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
                url: 'else',
                text: '其它'
            }],

            rightNavs: [{
                url: '/admin.html',
                text: '管理'
            }]
        };
    }
];
