// const obj = {
//   advice: {
//     id: 1,
//     quote: "özlü söz"
//   }
// };

// https://api.adviceslip.com/advice
// soz
// sozGetirBtn

function handleGetirClick() {
  fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(res => {
      soz.innerText = `${res.slip.id} - ${res.slip.advice}`;
    });
}
sozGetirBtn.addEventListener('click', handleGetirClick);

handleGetirClick();
