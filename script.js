let socket; // WebSocket 连接对象

// 连接 ESP8266
function connectESP() {
  socket = new WebSocket("ws://192.168.1.1:5000"); // 替换为 ESP8266 的 WebSocket 地址

  socket.onopen = () => {
    document.getElementById('status').innerText = "状态：已连接";
    alert("成功连接到 ESP8266");
  };

  socket.onmessage = (event) => {
    document.getElementById('data').innerText = "传感器数据：" + event.data;
  };

  socket.onerror = () => {
    document.getElementById('status').innerText = "状态：连接错误";
    alert("无法连接到 ESP8266，请检查网络！");
  };

  socket.onclose = () => {
    document.getElementById('status').innerText = "状态：连接已关闭";
  };
}

// 发送控制指令
function sendCommand(command) {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(command);
    alert("发送指令：" + command);
  } else {
    alert("请先连接 ESP8266");
  }
}
