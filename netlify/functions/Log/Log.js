// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2

const admin = {"email": "swean@vp.pl", "password": "foxchcejesc", "token": "0012d3", "name": "Damian"}


let logPass = false
let token = ""
let name = ""

const handler = async (event) => {

  try {
    let creds = await JSON.parse(event.body)

    if (creds.email === admin.email) {
      logPass = true
      token = admin.token
      name = admin.name
      //localStorage.setItem("logData", token)
    }

    return {
    
      statusCode: 200,
      body: JSON.stringify({"aprove":logPass, "name": name})
   
    }

  } catch (error) {
    return { statusCode: 500, body: error.toString("dont know") }
  }
}

module.exports = { handler }
