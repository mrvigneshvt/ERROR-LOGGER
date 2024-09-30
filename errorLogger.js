import fs from 'fs'


export function errorLogger(text, error) {
    const date = new Date();
    const localTime = date.toLocaleString('en-Us', { timeZone: 'Asia/Kolkata' })

    fs.appendFileSync("errorLogs.txt", `ERROR -: ${localTime} :- In ${text} : ${error}` + "\n")
    console.log(error)
}

