const posts = [
  { subject: "Html", detail: "(image)" },
  { subject: "Css", detail: "(animation)" },
  { subject: "Javascript", detail: "(Node.js)" },
];

const listpost = () => {
  posts.map((value) => {
    console.log(value.subject), console.log(value.detail);
  });
};

const addposts = (newPosts) => {
  const promise1 = new Promise((resolve, reject) => {
    posts.push(...newPosts);
    if (posts) {
      resolve(posts);
    } else {
      reject("Veriler alınırken hata oluştu...");
    }
  });
  return promise1;
};

addposts([
  { subject: "Html", detail: "(Sound)" },
  { subject: "Css", detail: "(Flex)" },
  { subject: "Javascript", detail: "(React)" },
])
  .then(() => {
    console.log("---Veriler Yüklendi---");
    listpost();
  })
  .catch((error) => {
    console.log(error);
  });

  