// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  try {
const admin = {"email": "swean@vp.pl", "password": "foxchcejesc", "token": "0012d3", "name": "Damian"}
    let creds = await JSON.parse(event.body)
   let logPass = false
   let token = ""
   let name = ""
console.log(creds)

    if (creds.email === admin.email & creds.password === admin.password) {
      logPass = true
      token = admin.token
      name = admin.name
      localStorage.setItem("logData", token)
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
