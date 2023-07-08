export default {
    backend: {
      "ip": "ghost",
      "port": "2368",
      "apikey": import.meta.env.apikey || process.env.apikey,
    }
  };
  