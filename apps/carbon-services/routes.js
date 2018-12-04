const { userController } = require('./packages');
const { HttpMethods } = require('./constants/http-methods');

const applicationRoutes = [
    {
        path: '/user/profile',
        method: HttpMethods.GET,
        controller: userController.fetchUserProfile,
        children: [
            {
                path: '/hello',
                method: HttpMethods.GET,
                controller: userController.fetchUserProfile
            }
        ]
    }
];

module.exports = {
    applicationRoutes
};
