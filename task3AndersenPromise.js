const USER_OBJECT = {};
const OBJECT_OF_ID = {
  1: 7,
  2: 5,
  3: 3,
};

const promise1 = new Promise((resolve) => {
  setTimeout(() => resolve('Minsk'), 1000); 
}).then((result) => {
  USER_OBJECT.location = result;
  return new Promise((resolve) => {
    setTimeout(() => resolve('admin'), 4000);
  });
}).then((result) => {
  USER_OBJECT.role = result;
  USER_OBJECT.mail = `semenkovvlad@${result}.com`
  return new Promise((resolve) => {
    setTimeout(() => resolve('1'), 2000);
  });
}).then((result) => {
  USER_OBJECT.id = result;
  return new Promise((resolve) => {
    setTimeout(() => resolve(['Саша', 'Влад', 'Юля', 'Андрей', 'Богдан']), 1000);
  });
}).then((result) => {
  if(USER_OBJECT.role === 'admin'){
    if(OBJECT_OF_ID[USER_OBJECT.id] > result.length) {
      throw new Error('Count of people too much!');
    }
  function addFriends(id) {
    USER_OBJECT.friends = [];
    for(let i = 0;i < OBJECT_OF_ID[User.id];i++){
      USER_OBJECT.friends.push(result[i]);
    }
  }
  addFriends(ID[USER_OBJECT.id]);
} else throw new Error('You are not admin!');
}).catch(error => console.log(error));