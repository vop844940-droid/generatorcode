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

// Exemplu: generează 10 coduri de 12 caractere
console.log(generateMultipleCodes(10, 12));