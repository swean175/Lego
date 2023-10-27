const tokens = ["0012d3"]
let res = false

const handler = async (event) => {


    try {
        let cred = await JSON.parse(event.body)

      if (tokens.includes(cred)) {
      res = true
      } else {
        res = false
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