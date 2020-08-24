function request(url) {
  return new Promise((res) => {
      const delayTime = Math.floor(Math.random() * 10000) + 1;
      setTimeout(() => res(url), delayTime);
  });

}

function resolveUrlsArray(urls) {
  const arrayOfUrls = urls.map{(url) => request(url);
  });
  const resultArray = [];
    return new Promise((resolve, reject) => {
      for (let i = 0; i < arrayOfUrls.length; i++) {
        arrayOfUrls[i]
            .then((res) => {
              resultArray.push(res);
              if (resultArray.length === arrayOfUrls.length) resolve(resultArray);
            })
            .catch((error) => {
              reject(error);
            });
      }
  });
}
