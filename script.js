const inicioScreen = document.getElementById('inicio');
const juegoScreen = document.getElementById('juego');
const jugarBtn = document.getElementById('jugarBtn');
const reiniciarBtn = document.getElementById('reiniciarBtn');
const lokiBtn = document.getElementById('lokiBtn');
const mensaje = document.getElementById('mensaje');
const loki = document.getElementById('loki');
const sofi = document.getElementById('sofi');
const recompensa = document.getElementById('recompensa');

const estados = {
  PASEO: 'paseo',
  LOKI_SE_FUE: 'loki_se_fue',
  REGRESANDO: 'regresando'
};

let estadoActual = estados.PASEO;
let timers = [];

function programar(fn, tiempo) {
  const id = setTimeout(fn, tiempo);
  timers.push(id);
}

function limpiarTimers() {
  timers.forEach((id) => clearTimeout(id));
  timers = [];
}

function mostrarPantallaJuego() {
  inicioScreen.classList.remove('screen--active');
  juegoScreen.classList.add('screen--active');
  iniciarCiclo();
}

function mostrarPantallaInicio() {
  inicioScreen.classList.add('screen--active');
  juegoScreen.classList.remove('screen--active');
  limpiarTimers();
}

function resetVisual() {
  estadoActual = estados.PASEO;
  loki.classList.remove('suelto', 'viniendo');
  loki.classList.add('atada');
  loki.style.left = '35%';
  sofi.querySelector('.cara').textContent = '😊';
  mensaje.textContent = '¡Vamos de paseo!';
  lokiBtn.disabled = true;
  recompensa.classList.remove('activa');
  recompensa.innerHTML = '';
}

function iniciarCiclo() {
  limpiarTimers();
  resetVisual();

  programar(() => {
    estadoActual = estados.LOKI_SE_FUE;
    mensaje.textContent = '¡Loki se fue a jugar! ¡Llamalo!';
    sofi.querySelector('.cara').textContent = '😮';
    loki.classList.remove('atada');
    loki.classList.add('suelto');
    loki.style.left = '75%';
    lokiBtn.disabled = false;
  }, 2200);
}

function mostrarRecompensa() {
  recompensa.classList.add('activa');
  recompensa.innerHTML = '';
  const iconos = ['💖', '⭐', '🐾'];

  for (let i = 0; i < 18; i += 1) {
    const particula = document.createElement('span');
    particula.className = 'particula';
    particula.textContent = iconos[i % iconos.length];
    particula.style.left = `${15 + Math.random() * 70}%`;
    particula.style.top = `${58 + Math.random() * 28}%`;
    particula.style.animationDelay = `${Math.random() * 0.35}s`;
    recompensa.appendChild(particula);
  }

  programar(() => {
    recompensa.classList.remove('activa');
    recompensa.innerHTML = '';
  }, 1400);
}

function llamarALoki() {
  if (estadoActual !== estados.LOKI_SE_FUE) {
    return;
  }

  estadoActual = estados.REGRESANDO;
  lokiBtn.disabled = true;
  loki.classList.add('viniendo');
  mensaje.textContent = '¡Muy bien! ¡Loki volvió!';
  sofi.querySelector('.cara').textContent = '😄';
  loki.style.left = '35%';

  programar(() => {
    loki.classList.remove('suelto', 'viniendo');
    loki.classList.add('atada');
    mostrarRecompensa();
  }, 1400);

  programar(() => {
    mensaje.textContent = 'Seguimos paseando...';
  }, 2100);

  programar(() => {
    iniciarCiclo();
  }, 3900);
}

jugarBtn.addEventListener('click', mostrarPantallaJuego);
reiniciarBtn.addEventListener('click', iniciarCiclo);
lokiBtn.addEventListener('click', llamarALoki);

mostrarPantallaInicio();
