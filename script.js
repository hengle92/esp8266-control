function connectESP() {
  document.getElementById("status").innerText = "状态：已连接";
  document.getElementById("sensor").innerText = "传感器数据：温度 25°C, 湿度 60%";
  alert("已连接到 ESP8266");
}

function toggleTempAlert() {
  alert("温度报警已切换");
}

function toggleHumiAlert() {
  alert("湿度报警已切换");
}

function toggleSmokeAlert() {
  alert("烟雾报警已切换");
}

// 注册 Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./service-worker.js")
    .then(() => console.log("Service Worker 注册成功"))
    .catch(err => console.error("Service Worker 注册失败:", err));
}
