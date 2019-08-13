const bcrypt   = require('bcrypt-nodejs');

var data=bcrypt.hashSync("123",bcrypt.genSaltSync(8),null)

var isMath=bcrypt.compareSync("123", '$2a$08$NzK7Fo3qjzVeo.Kh4kHKn.ATqNYX7K.p5DuR4obFOMM0lDz66FBHq');

console.log(isMath)