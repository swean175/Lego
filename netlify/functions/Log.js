// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2

const admin = {"email": "swean@vp.pl", "password": "foxchcejesc", "token": "0012d3", "name": "Damian"}
const mikolaj = {"email": "mik@wp.pl", "password": "mikolaj", "token": "0014t3", "name": "Mikołaj"}


let logPass = false
let token = ""
let name = ""
let user

const handler = async (event) => {

  try {
    let creds = await JSON.parse(event.body)
    user = admin
    if (creds.email === user.email & creds.password === user.password) {
      logPass = true
      token = user.token
      name = user.name
    }

    return {
    
      statusCode: 200,
      body: JSON.stringify({"aprove":logPass, "name": name, "token": token})
   
    }

  } catch (error) {
    return { statusCode: 500, body: error.toString("dont know") }
  }
}

module.exports = { handler }
