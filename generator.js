const fs = require("fs");

function generateCode(length = 12) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < length; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

function generateMultipleCodes(count = 10, length = 12) {
  const codes = [];
  for (let i = 0; i < count; i++) {
    codes.push(generateCode(length));
  }
  return codes;
}

// Generează 10 coduri de 12 caractere și le salvează în coduri.txt
const codes = generateMultipleCodes(10, 12);
fs.writeFileSync("coduri.txt", codes.join("\n"), "utf8");
console.log(codes);