import axios from 'axios'

function stringToHash(string:string) {                  
    let hash:string | number = 0; 
      
    if (string.length == 0) return hash; 
      
    for (let i = 0; i < string.length; i++) { 
        let char = string.charCodeAt(i); 
        hash = ((hash << 5) - hash) + char; 
        hash = hash & hash; 
    } 
      
    return hash; 
}

export default async function getFingerPrint () {
  const userstackOptions = 'ua=Mozilla/5.0(WindowsNT10.0;Win64;x64)AppleWebKit/537.36(KHTML,like Gecko)Chrome/85.0.4183.121Safari/537.36OPR/71.0.3770.323'
    
  /*
  ** !! USERSTACK FREE PLAN does not support HTTPS Encryption !!
  */
  const userstackAPIfreePlan = `http://api.userstack.com/api/detect?access_key=${process.env.USERSTACK_KEY}&${userstackOptions}`

  const userstackAPIpremiumPlan = `https://api.userstack.com/api/detect?access_key=${process.env.USERSTACK_KEY}&${userstackOptions}`

  const response = await axios.get(userstackAPIfreePlan)

  const UAstring = await JSON.stringify(response)

  const hashResult = await stringToHash(UAstring)

  return hashResult
}