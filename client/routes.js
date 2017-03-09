// Hook for server
if (typeof require.ensure !== 'function') {
    require.ensure = function (dependencies, callback) {
        callback(require)
    }
}

const routes = {
    childRoutes: [
        {
            path: '/',
            component: require('./components/Main'),
            indexRoute: {
                getComponent(nextState, callback) {
                    require.ensure([], require => {
                        callback(null, require('./components/Login'))
                    }, 'home')
                }
            },
            childRoutes: [{
                path: 'login',
                getComponent(nextState, callback) {
                    require.ensure([], require => {
                        callback(null, require('./components/Login'))
                    }, 'login')
                }
            }, {
                path: 'todo',
                getComponent(nextState, callback) {
                    require.ensure([], require => {
                        callback(null, require('./components/Todo'))
                    }, 'todo')
                }
            }]
        },
        {
            path: '*',
            getComponent(nextState, callback) {
                require.ensure([], require => {
                    callback(null, require('./components/common/NotFoundPage/index'))
                }, '404')
            }
        }
    ]
}

export default routes