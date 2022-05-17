const users = [
  {
    userId: 12345,
    userName: "cathy123",
    password: "icecream"
  },
  {
    userId: 55555,
    userName: "fredburger54",
    password: "password"
  },
  ,
  {
    userId: 34212,
    userName: "coolcathy34",
    password: "badpassword"
  }
]

let getUsers = () => users;

function User(id, username, password, email, birthdate){
  this.UserId = id;
  this.UserUsername = username;
  this.UserPassword = password;
  this.UserEmail = email;
  this.UserBirthdate = birthdate;
}

User.prototype.getUserUsername = function () {
  return this.UserUsername;
}

User.prototype.getUserPassword = function () {
  return this.UserPassword;
}

User.prototype.getUserEmail = function () {
  return this.UserEmail;
}

User.prototype.getUserBirthdate = function () {
  return this.UserBirthdate;
}

User.prototype.setUserUsername = function (username) {
  this.UserUsername = username;
}

User.prototype.setUserPassword = function (password) {
  this.UserPassword = password;
}

User.prototype.setUserEmail = function (email) {
  this.UserEmail = email;
}

User.prototype.setUserBirthdate = function (birthdate) {
  this.UserBirtdate = birthdate;
}

function register(user) {
  const u = userExists(user.username);
  if(u.length>0) throw Error('Username already in use');
  const newUser = {
    userId: users[users.length-1].userId + 1,
    userName: user.username,
    password: user.password
  }
  users.push(newUser);
  console.log(newUser.userName);
  return newUser;
}

async function login(username, password) {
  const user = await userExists(username);
  if(!user[0]) throw Error('User not found')
  if(user[0].user_password !== password) throw Error("Password is incorrect");
  console.log(newUser.userName);
  return user[0];
}

function userExists(username) {
  return users.filter((u) => u.userName === username);
}

module.exports = {getUsers, register, login};