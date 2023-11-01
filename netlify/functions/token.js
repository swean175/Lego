const tokens = JSON.parse(process.env.TOKENS)
let res = false

const handler = async (event) => {


    try {
        let cred = await JSON.parse(event.body)

      if (tokens.arr.includes(cred)) {
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