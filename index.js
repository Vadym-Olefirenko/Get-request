async function getInfo(url) {
        let res = await fetch(url);

        return await res.json();
   }

   getInfo(' http://jsonplaceholder.typicode.com/posts')
   .then(data => {
       data.forEach(({id, title}) => {
          console.log(id, title);
       });
   })
