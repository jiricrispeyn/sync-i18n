const read = file => {
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.onload = () => {
      const fileAsText = reader.result;

      try {
        const json = JSON.parse(fileAsText);

        resolve(json);
      } catch (err) {
        reject(err);
      }
    };
    reader.onabort = () => reject('file reading was aborted');
    reader.onerror = () => reject('file reading has failed');

    reader.readAsText(file);
  });
};

export default read;
