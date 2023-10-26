const handler = async (event) => {
    const tokens = ["0012d3"]
    let res = false

    try {
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