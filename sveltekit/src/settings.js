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
    "apikey": "3028397c9ba109fe21b8aabb61",
  }
};*/