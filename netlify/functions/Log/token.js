const handler = async (event) => {
    try {
        const tokens = ["0012d3"]
        let res = false
      let cred = await JSON.parse(event.body)

      if (tokens.includes(cred)) {
      res = true
      }
  
      return {
      
        statusCode: 200,
        body: JSON.stringify(res)
     
      }
  
    } catch (error) {
      return { statusCode: 500, body: error.toString("dont know") }
    }
  }
  
  module.exports = { handler }