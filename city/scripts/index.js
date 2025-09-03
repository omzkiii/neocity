for (let i = 0; i < 70; i++) {
  const x_pos = Math.floor(Math.random() * 100);
  const y_pos = Math.floor(Math.random() * 100);
  const particle = document.createElement("div");
  particle.textContent = "✦";
  // particle.textContent = y_pos;
  particle.id = `${i}`;
  particle.className = "particle";
  particle.style.position = "absolute";
  particle.style.left = `${x_pos}vw`;
  particle.style.bottom = `${y_pos}vh`;
  particle.style.zIndex = "-1";
  document.body.appendChild(particle);
}
