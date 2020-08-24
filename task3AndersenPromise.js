const User = {};
const ID = {
  1: 7,
  2: 5,
  3: 3,
};

const promise1 = new Promise((resolve) => {
  setTimeout(() => resolve('Minsk'), 1000); 
}).then((result) => {
  User.location = result;
  return new Promise((resolve) => {
    setTimeout(() => resolve('admin'), 4000);
  });
}).then((result) => {
  User.role = result;
  User.mail = `semenkovvlad@${result}.com`
  return new Promise((resolve) => {
    setTimeout(() => resolve('1'), 2000);
  });
}).then((result) => {
  User.id = result;
  return new Promise((resolve) => {
    setTimeout(() => resolve(['Саша', 'Влад', 'Юля', 'Андрей', 'Богдан']), 1000);
  });
}).then((result) => {
  if(User.role === 'admin'){
    if(ID[User.id] > result.length) {
      throw new Error('Count of people too much!');
    }
  function addFriends(id) {
    User.friends = [];
    for(let i = 0;i < ID[User.id];i++){
      User.friends.push(result[i]);
    }
  }
  addFriends(ID[User.id]);
} else throw new Error('You are not admin!');
}).catch(error => console.log(error));