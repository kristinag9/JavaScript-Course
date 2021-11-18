const makeDogPromise = () => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         const rand = Math.random();
         if(rand < 0.5) {
            resolve();
         } else {
            reject();
         }
      }, 5000);
   });
};

makeDogPromise()
.then(() => {
   console.log('Yay we got a dog'); // if is resolved
})
.catch(() => {
   console.log('No dog'); // if is rejected
});


// Resolving/ rejecting values
const fakeRequest = () => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
            const pages = {
               '/users' : [
               { id: 1, username: 'Bilbo' },
               { id: 5, username: 'Esmeralda' }
               ],
               '/users/1' : {
                     id: 1,
                     username: 'Bilbo',
                     upvotes: 360,
                     city: 'Lisbon',
                     topPostId: 454321
               },
               '/users/5' : {
                  id: 5,
                  username: 'Esmeralda',
                  upvotes: 571,
                  city: 'Honolulu'
            },
               '/posts/454321' : {
                  id: 454321,
                  title: 'Ladies & gentlemen, may I introduce my pet pig, Hamlet'
               },
               '/about': 'This is the about page!'
            };
            const data = pages[url];

            if(data) {
               resolve({ status: 200, data });
            } else {
               reject({ status: 404 });
            }
      }, 1000);
   });
};

// fakeRequest('/about')
//    .then((res) => {
//       console.log('Status code', res.status);
//       console.log('Data'. res.data);
//       console.log('Request worked!');
//    })
//    .catch((res) => {
//       console.log(res.status);
//       console.log('Request failed');
//    });

// 1.
// fakeRequest('/users')
//    .then((res) => {
//       const id = res.data[0].id;
//       fakeRequest(`/users/${id}`).then((res) => {
//          const postId = res.data.topPostId;
//          fakeRequest(`/posts/${postId}`).then((res) => {
//             console.log(res);
//          });
//       })
//    })
//    .catch((err) => {
//       console.log('Oh no', err);
//    })

// 2. promise chaining
fakeRequest('/users')
   .then((res) => {
      console.log(res);
      const id = res.data[0].id;
      return fakeRequest(`/users/${id}`)
   })
   .then((res) => {
      console.log(res);
      const postId = res.data.topPostId;
      return fakeRequest(`/posts/${postId}`)
   })
   .then((res) => {
      console.log(res);
   })
   .catch((err) => {
      console.log('Oh no', err);
   });
