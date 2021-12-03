const dbConn = require('../../Config/db.config');

var User = (user) => {
    // this.id = user.id;
    // this.UserName = user.UserName;
    // this.Email = user.Email;
    // this.Password = user.Password;
console.log(user,'this is variabe model')

}
User.getAllUsers = (result) => {
    dbConn.query('select * from logindetails', (err, res) => {
        if (err) {
            console.log('erroe inside mode.js', err);
            console.log(result(null, err))
            // console.log(result)
        }
        else {
            console.log('User fetch succesful');
            result(null, res)
        }
    })
}
User.registerUser = (userReqData, result) => {
    dbConn.query('INSERT INTO logindetails SET ?', userReqData, (err, res) => {
        if (err) {
            console.log('error while inserting user', err);
            result(null, err);
        } else {
            //    console.log('Party Created successfully');
            result(null, res);
        }
    })
}

module.exports = User;
