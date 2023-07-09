export default {
  backend: {
    "ip": "ghost",
    "port": "2368",
    "apikey": import.meta.env.apikey || process.env.apikey,
  }
};
  
/*export default {
  backend: {
    "ip": "localhost",
    "port": "2368",
    "apikey": "fd2f77087ded272d5876675504",
  }
};*/