// https://developers.google.com/chart/infographics/docs/qr_codes?hl=pt-br
const gerarQRCode = document.querySelector(".generateBtn");
gerarQRCode.addEventListener("click", () => {
  const inputValue = document.querySelector("#website").value;
  const googleChatAPI = `https://chart.googleapis.com/chart?cht=qr&chs=300x300&chld=H&chl=${encodeURIComponent(
    inputValue
  )}`;
  document.querySelector("#qrcode").src = googleChatAPI;
});
