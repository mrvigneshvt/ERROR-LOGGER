import fs from "fs";

export function errorLogger(text: string, error: unknown) {
  const date = new Date();
  const localTime = date.toLocaleString("en-Us", { timeZone: "Asia/Kolkata" });

  fs.appendFileSync(
    "errorLogs.txt",
    `ERROR -: ${localTime} :-  ${text} : ${error}` + "\n",
  );
  console.log(text, error);

  return;
}
