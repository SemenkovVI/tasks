function request(url) {
  return new Promise((res) => {
      const delayTime = Math.floor(Math.random() * 10000) + 1;
      setTimeout(() => res(url), delayTime);
  });

}

function resolveUrlsArray(urls) {
  let ArrayOfUrls = urls.map(function (url) {
      return request(url);
  });
  const resultArray = [];
    return new Promise((resolve, reject) => {
      for (let i = 0; i < ArrayOfUrls.length; i++) {
        ArrayOfUrls[i]
            .then(res => {
              resultArray.push(res);
              if (resultArray.length === ArrayOfUrls.length) resolve(resultArray);
            })
            .catch(error => {
              reject(error);
            });
      }
  });
}
