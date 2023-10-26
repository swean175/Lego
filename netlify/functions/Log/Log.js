// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  try {

    const mikolaj  = {log: "mikolaj", pass: "mikolaj"}

    const logPass = false

    if (JSON.parse(event.body) === mikolaj) {
      logPass = true
    }

    return {
    
      statusCode: 200,
      body: JSON.stringify({"reply":logPass}),
   
    }

  } catch (error) {
    return { statusCode: 500, body: error.toString("dont know") }
  }
}

module.exports = { handler }
