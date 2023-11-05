// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2

const admin = JSON.parse(process.env.CREDS_ADMIN)
const mikolaj = JSON.parse(process.env.CREDS_MIKOLAJ)


let logPass = false
let token = ""
let name = ""
let user = {}
let usersArr = [admin, mikolaj]

const handler = async (event) => {

  try {
    let creds = await JSON.parse(event.body)
    usersArr.map((it) => {
      if (it.email === creds.email){
        return user = it
      } 
    })
  
    if (creds.email === user.email && creds.password === user.password) {
      logPass = true
      token = user.token
      name = user.name
    } else {
      logPass = false
      token = ""
      name = ""
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
