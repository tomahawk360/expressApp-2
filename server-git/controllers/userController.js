const user_model = require('../models/userModel');

exports.get_user = async (req, res) => {
    const {u_name, u_pwd} = req.params;
    const u_data = `{"username":"${u_name}", "password":"${u_pwd}"}`;

    user_model
        .exists(JSON.parse(u_data))
        .exec((err, result) => {
            if(result) {
                res.send(result);

            } else {
                fail = {
                    _id: 0
                };
                res.send(fail);

            }

        })
}