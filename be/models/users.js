const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
<<<<<<< HEAD
  name : { type:String, default:'', unique:true, index:true },
  age : { type:Number, default : 1 }
=======
    name: { type: String, default: '', unique: true, index: true },
    age: { type: Number, default: 1 }
>>>>>>> ea8c468bd097704c8ea3dd39e0a7d83f335356be
})

const User = mongoose.model('User', userSchema)

module.exports = User
