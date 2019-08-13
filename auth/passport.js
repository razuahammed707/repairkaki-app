const localStrategy  = require('passport-local').Strategy;
const Partner = require("../models/partnerModel");
const bcrypt   = require('bcrypt-nodejs');

const JWTstrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt;



module.exports=(passport)=>{

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        Partner.findById(id, function(err, user) {
          done(err, user);
        });
    });


    // ============== local JWT Authentication =================== //
    passport.use('login', new localStrategy({
        usernameField : 'email',
        passwordField : 'password'
      }, async (email, password, done) => {
        try {
          //Find the user associated with the email provided by the user
          const user = await Partner.findOne({ "local.email":email });
          if( !user ){
            //If the user isn't found in the database, return a message
            return done(null, false, { message : 'User not found'});
          }
          //Validate password and make sure it matches with the corresponding hash stored in the database
          //If the passwords match, it returns a value of true.
          const validate = bcrypt.compareSync(password,user.local.password);

          if( !validate ){
            return done(null, false, { message : 'Wrong Password'});
          }
          //Send the user information to the next middleware
          return done(null, user, { message : 'Logged in Successfully'});
        } catch (error) {
          return done(error);
        }
      }));


      // ===== Verifing token 
      passport.use(new JWTstrategy({
        //secret we used to sign our JWT
        secretOrKey : 'top_secret',
        //we expect the user to send the token as a query paramater with the name 'secret_token'
        jwtFromRequest : ExtractJWT.fromAuthHeaderAsBearerToken()
      }, async (token, done) => {
        try {
          //Pass the user details to the next middleware
          return done(null, token.user);
        } catch (error) {
          done(error);
        }
      }));

}