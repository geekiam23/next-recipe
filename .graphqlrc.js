module.exports = {
  schema: process.env.NEXT_PUBLIC_API_URL,
  extensions: {
    endpoints: {
      default: {
        url: process.env.NEXT_PUBLIC_API_URL}
      }
    }
  }
};