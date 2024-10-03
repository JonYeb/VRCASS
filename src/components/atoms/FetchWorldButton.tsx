const FetchWorldButton = () => {
  const btn = () => {
    window.electronAPI
      .getWorldById('wrld_5d8ce471-aae3-4f2b-8d15-3567c3a7075a')
      .then((result: never) => {
        console.log(result);
      });
  };
  return <button onClick={btn}>click me</button>;
};

export default FetchWorldButton;
