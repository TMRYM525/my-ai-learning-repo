function greet() {
  const hour = Number(document.getElementById("hourInput").value);
  let text = "";

  if (Number.isNaN(hour) || hour < 0 || hour > 23) {
    text = "0〜23 の範囲で時刻を入力してください。";
  } else if (hour < 12) {
    text = "おはよう！";
  } else if (hour < 18) {
    text = "こんにちは！";
  } else {
    text = "こんばんは！";
  }

  document.getElementById("result").textContent = text;
}
