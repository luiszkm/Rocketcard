


export function Color() {

  const buttonColor = document.querySelector('#buttonColor').onclick = setColor
 
  function setColor() {

    const r = Number(Math.round(Math.random() * 100))
    const g = Number(Math.round(Math.random() * 100))
    const b = Number(Math.round(Math.random() * 100))


    tradeColor(r, g, b)
    function tradeColor(r, g, b) {
      let borderColor = document.querySelector('.main-card')

      borderColor.style.background = `rgb(${r},${g},${b})`
    }

    const rgb = () => {
      setInterval(() => {
        const r = Number(Math.round(Math.random() * 300))
        const g = Number(Math.round(Math.random() * 300))
        const b = Number(Math.round(Math.random() * 300))
        tradeColor(r, g, b)
        console.log(Number(Math.round(Math.random() * 250)));
      }, 800);
    }

  }


}