const upperAllowed = "ABCXYZHIJKLMNDEFGPQRSTUVWO";
const lowerAllowed = "aklmnojtuvwxpqrsbcdefghiyz";
const numberAllowed = "1234567890";
const symbolAllowed = "~!@#$%^&*()_+-";

const passwordCont = document.getElementById("password");
const charLength = document.getElementById("length");
const upperInp = document.getElementById("uppercase");
const lowerInp = document.getElementById("lowercase");
const numberInp = document.getElementById("numbers");
const symbolInp = document.getElementById("specialChars");
const getRandomData = (dataa) => {
  return dataa[Math.floor(Math.random() * dataa.length)];
};

const passwordGenerator = () => {
    let chars = "";
    password = "";
  if (upperInp.checked) {
    // password += getRandomData(upperAllowed);
    chars+=upperAllowed
  }
  if (lowerInp.checked) {
    // password += getRandomData(lowerAllowed);
    chars+=lowerAllowed
  }
  if (numberInp.checked) {
    // password += getRandomData(numberAllowed);
    chars+=numberAllowed
  }
  if (symbolInp.checked) {
    // password += getRandomData(symbolAllowed);
    chars+=symbolAllowed
  }
  if (
    !symbolInp.checked &&
    !numberInp.checked &&
    !upperInp.checked &&
    !lowerInp.checked
  ) {
    // password += password += getRandomData(upperAllowed);
    chars+=upperAllowed;
  }

  for (let i = 0; i < charLength.value; i++) {
    let randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  console.log(password)
//   passwordCont.value = trimString(password, charLength.value);
passwordCont.value=password
};

function trimString(str, num) {
  if (str.length > num) {
    let subStr = str.substring(0, num);
    return subStr;
  } else {
    return str;
  }
}

// passwordGenerator();

document.getElementById("btn").addEventListener("click", () => {
  passwordGenerator();
});

