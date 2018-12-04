const { ContentTypes } = require('../../constants/content-types');

/**
 * load stubs
 */
const { user } = require('./user.stub');

/**
 * UserController
 */
class UserController {
    constructor() { }

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    fetchUserProfile(req, res, next) {
        res
            .contentType = ContentTypes.JSON;
        res
            .json({
                data: user
            });
    }
}

const userController = new UserController();

module.exports = { userController };
