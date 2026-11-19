
const ejeX = document.getElementById("ejeX");
const ejeY = document.getElementById("ejeY");
const valorX = document.getElementById("valorX");
const valorY = document.getElementById("valorY");
const estado = document.getElementById("estado");

function actualizar() {
  valorX.textContent = ejeX.value;
  valorY.textContent = ejeY.value;
  guardarConfiguracion();
}

function guardarConfiguracion() {
  const ajustes = {
    sensibilidadX: Number(ejeX.value),
    sensibilidadY: Number(ejeY.value)
  };

  localStorage.setItem(
    "ultraTouchConfig",
    JSON.stringify(ajustes)
  );

  estado.textContent = "CONFIGURACIÓN GUARDADA";
}

function cargarConfiguracion() {
  const datos = JSON.parse(
    localStorage.getItem("ultraTouchConfig") || "{}"
  );

  if (datos.sensibilidadX !== undefined) {
    ejeX.value = datos.sensibilidadX;
  }

  if (datos.sensibilidadY !== undefined) {
    ejeY.value = datos.sensibilidadY;
  }

  actualizar();
}

ejeX.addEventListener("input", actualizar);
ejeY.addEventListener("input", actualizar);

cargarConfiguracion();

document.getElementById("guardar").addEventListener("click", () => {
  guardarConfiguracion();
  estado.textContent = "PERFIL GUARDADO";
});

document.getElementById("restaurar").addEventListener("click", () => {
  ejeX.value = 100;
  ejeY.value = 100;
  actualizar();
  estado.textContent = "VALORES RESTAURADOS";
});
