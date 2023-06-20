const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 1 resolved');
    }, 2000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Promise 2 rejected'));
    }, 1500);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise 3 resolved');
    }, 1000);
  });
  
  Promise.all([promise1, promise2, promise3])
    .then((results) => {
      console.log('All promises resolved:', results);
    })
    .catch((error) => {
      console.log('Error occurred:', error.message);
    });
  