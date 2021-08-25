module.exports = {
  client: {
    service: {
      name: 'github',
      url: process.env.NEXT_PUBLIC_API_URL,
      skipSSLValidation: true
    }
  }
};