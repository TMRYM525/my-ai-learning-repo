function checkAge() {
  const inputEl = document.getElementById("ageInput");
  const age = Number(inputEl.value);
  let msg = "";

  if (Number.isNaN(age) || age < 0) {
    msg = "正しい年齢を入力してください。";
  } else if (age >= 20) {
    msg = "あなたは成人です！";
  } else {
    msg = "あなたは未成年です。";
  }

  document.getElementById("result").textContent = msg;
}
