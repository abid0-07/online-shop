const User = require('../models/user.model');
const authUtil = require('../util/authentication');
const validation = require('../util/validation');
const sessionFlash = require('../util/session-flash');


function getSignup(req, res) {
  res.render('customer/auth/signup');
}

async function signup(req, res, next) {
  const enteredData = {
    email: req.body.email,
    password: req.body.password,
    fullname: req.body.fullname,
    Street: req.body.street,
    Postal: req.body.postal,
    City: req.body.city
  };

  if (!validation.userDetailsAreValid(req.body.email,
    req.body.password,
    req.body.fullname,
    req.body.street,
    req.body.postal,
    req.body.city) || !validation.emailIsConfirmed(req.body.email, req.body['confirm-email'])) {
    sessionFlash.flashDataToSession(req, {
      errorMessage: 'Please check your input. Password must be 6 characters long, postal code must be 5 characters long and email must match.',
      ...enteredData
    }, function () {

      res.redirect('/signup');
    });
    return;
  }
  const user = new User(
    req.body.email,
    req.body.password,
    req.body.fullname,
    req.body.street,
    req.body.postal,
    req.body.city
  );

  try {
    const existsAlready = await user.existsAlready()
    if (existsAlready) {
      sessionFlash.flashDataToSession(req, {
        errorMessage: 'User already exists! Try logging in instead.',
        ...enteredData
      }, function () {
        res.redirect('/signup');
      });
      return;
    }

    await user.signup();
  } catch (error) {
    next(error);
    return;
  }

  res.redirect('/login');
}

function getLogin(req, res) {
  res.render('customer/auth/login');
}

async function login(req, res, next) {
  const user = new User(req.body.email, req.body.password);
  let existingUser;
  try {
    existingUser = await user.getUserWithSameEmail();
  } catch (error) {
    next(error);
    return;
  }

  const sessionErrorData = {
    errorMessage: 'Invalid credentials. Please double-check your email and password.',
    email:user.email,
    password:user.password
  };

  if (!existingUser) {
    sessionFlash.flashDataToSession(req,sessionErrorData , function () {
      res.redirect('/login');
    });
    
    return;
  }

  const passwordIsCorrect = await user.hasMatchingPassword(
    existingUser.password
  );

  if (!passwordIsCorrect) {
    sessionFlash.flashDataToSession(req,sessionErrorData , function () {
      res.redirect('/login');
    });
    return;
  }

  authUtil.createUserSession(req, existingUser, function () {
    res.redirect('/');
  });
}

function logout(req, res) {
  authUtil.destroyUserAuthSession(req);
  res.redirect('/login');
}

module.exports = {
  getSignup: getSignup,
  getLogin: getLogin,
  signup: signup,
  login: login,
  logout: logout
};
