
const { getAllUsers } = require('../models/user.model')
const UserModel = require('../models/user.model')

exports.getUserList = (req , res)=>{
    console.log('here is the list of employee')


    UserModel.getAllUsers((err,user)=>{
        console.log('we are here inside controllers model')
        if(err){
            console.log(err)

        }
        res.send(user)
    })
   
}
exports.postRegister = (req, res) => {
    const userReqData = req.body;
    console.log('userReqData', userReqData);

    //check null
    if ( Object.keys(req.body).lentgh === 0 || req.body.UserName=='' || req.body.Email == '' || req.body.Password ==' ') {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
        alert('all fields need to feild')

    } else {
        console.log('valid data');

       UserModel.registerUser(userReqData, (err, user) => {
            if (err)
                req.send(err);
            -          res.json({ status: true, message: 'Inserted Succefully', data: user })
        })
    }
}
