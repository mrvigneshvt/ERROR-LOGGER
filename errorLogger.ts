import fs from "fs";
import path from "path";

//install path and fs if required

export function errorLogger(text: string, error: unknown) {
  const date = new Date();
  const localTime = date.toLocaleString("en-US", { timeZone: "Asia/Kolkata" });

  // Define absolute path to the log file
  const logFilePath = "/home/root/"; //replace it with actual Directory

  // Ensure the directory exists (optional but recommended)
  const logDir = path.dirname(logFilePath);
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }

  fs.appendFileSync(
    logFilePath,
    `ERROR in ${text} -: ${localTime} : ${String(error)}\n`
  );

  console.log(text, error);
}
