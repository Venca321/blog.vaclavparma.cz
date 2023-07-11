export default {
  backend: {
    "ip": "ghost",
    "port": "2368",
    "apikey": import.meta.env.apikey || process.env.apikey,
    "admin_apikey": import.meta.env.admin_apikey || process.env.admin_apikey,
  },
  newsletter: {
    en: "64aa5de1f8269200019c9e5e",
    cs: "64abf0abba66680001484a44",
  },
};
  
/*export default {
  backend: {
    "ip": "localhost",
    "port": "2368",
    "apikey": "fd2f77087ded272d5876675504",
    "admin_apikey": "64aa503212c0f400013f0e3a:2edf6de21f38bb9ba6001a37840e8a349a29417897b88f63cfe06cce5f3c13ad",
  },
  newsletter: {
    en: "64aa4fa312c0f400013f0bff",
    cs: "64aa4fa312c0f400013f0bff",
  },
};*/