
function randomOffset(nNeg, nPos) {
  return Math.floor(Math.random() * (2 * nPos + 1)) - nNeg;
}
function changeColor(element) {
  const colorIndex = Math.floor(Math.random() * 13);
  const colors = ["gv_red", "gv_orange", "gv_yellow", "gv_green", "gv_aqua", "gv_blue", "gv_purple", "gv_brown", "gv_olive", "gv_mustard", "gv_cyan", "gv_magenta", "gv_green2"]
  element.style.color = `var(--${colors[colorIndex]})`

}
function addAnimation(animName) {
  const nPos = 500;
  const nNeg = 500;
  const style = document.createElement("style");
  let keyframes = `@keyframes ${animName} {\n`;
  for (let i = 0; i <= 100; i += 12) {
    const x = randomOffset(nNeg, nPos);
    const y = randomOffset(nNeg, nPos);
    keyframes += `  ${i}% { transform: translate(${x}px, ${y}px) rotate(${i * 3.6}deg); }\n`;
  }
  keyframes += `}`;
  style.textContent = keyframes;
  document.head.appendChild(style);

}


for (let i = 0; i < 100; i++) {
  const x_pos = Math.floor(Math.random() * 100);
  const y_pos = Math.floor(Math.random() * 100);
  const animTime = Math.floor(Math.random() * 100) + 100;
  const particle = document.createElement("div");
  const speedCurve = ["ease", "ease-in", "ease-out", "ease-in-out"];
  const speedCurveIndex = Math.floor(Math.random() * 3);


  const randX = Math.floor(Math.random() * (2 * 500 + 1)) - 500;
  const randY = Math.floor(Math.random() * (2 * 500 + 1)) - 500;
  const animName = `move-${randX}-${randY}`;

  particle.textContent = "✦";
  particle.id = `${i}`;
  particle.className = "particle";
  particle.style.position = "absolute";
  particle.style.left = `${x_pos}vw`;
  particle.style.bottom = `${y_pos}vh`;
  particle.style.zIndex = "-1";
  particle.style.animation = `${animName} ${animTime}s ${speedCurve[speedCurveIndex]} infinite alternate`;


  particle.addEventListener("mouseover", () => {
    particle.style.fontSize = "200%"
  });
  particle.addEventListener("mouseout", () => {
    particle.style.fontSize = "100%"
    changeColor(particle)
  });
  particle.style.transition = "all 1s ease"
  document.body.appendChild(particle);
  addAnimation(animName)
}
