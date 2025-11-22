// Función para validar entradas numéricas
function validarInput(...ids) {
    for (let id of ids) {
        const valor = parseFloat(document.getElementById(id).value);
        if (isNaN(valor) || valor < 0) {
            alert(`Por favor, ingresa un valor numérico válido en ${id.replace('_', ' ')}`);
            return false;
        }
    }
    return true;
}

// --- Cálculos ---

function calcularVelocidad() {
    if (!validarInput("distancia_vel", "tiempo_vel")) return;
    const distancia = parseFloat(document.getElementById("distancia_vel").value);
    const tiempo = parseFloat(document.getElementById("tiempo_vel").value);
    const resultado = distancia / tiempo;
    document.getElementById("resultado_vel").textContent = `Velocidad: ${resultado.toFixed(2)} m/s`;
}

function calcularAceleracion() {
    if (!validarInput("vel_ini", "vel_fin", "tiempo_acel")) return;
    const velIni = parseFloat(document.getElementById("vel_ini").value);
    const velFin = parseFloat(document.getElementById("vel_fin").value);
    const tiempo = parseFloat(document.getElementById("tiempo_acel").value);
    const resultado = (velFin - velIni) / tiempo;
    document.getElementById("resultado_acel").textContent = `Aceleración: ${resultado.toFixed(2)} m/s²`;
}

function calcularFuerza() {
    if (!validarInput("masa_fuerza", "acel_fuerza")) return;
    const masa = parseFloat(document.getElementById("masa_fuerza").value);
    const aceleracion = parseFloat(document.getElementById("acel_fuerza").value);
    const resultado = masa * aceleracion;
    document.getElementById("resultado_fuerza").textContent = `Fuerza: ${resultado.toFixed(2)} N`;
}

function calcularTrabajo() {
    if (!validarInput("fuerza_trab", "distancia_trab", "angulo_trab")) return;
    const fuerza = parseFloat(document.getElementById("fuerza_trab").value);
    const distancia = parseFloat(document.getElementById("distancia_trab").value);
    const angulo = parseFloat(document.getElementById("angulo_trab").value);
    const radianes = angulo * (Math.PI / 180);
    const trabajo = fuerza * distancia * Math.cos(radianes);
    document.getElementById("resultado_trab").textContent = `Trabajo: ${trabajo.toFixed(2)} J`;
}

function calcularEnergiaCinetica() {
    if (!validarInput("masa_cin", "velocidad_cin")) return;
    const masa = parseFloat(document.getElementById("masa_cin").value);
    const velocidad = parseFloat(document.getElementById("velocidad_cin").value);
    const resultado = 0.5 * masa * Math.pow(velocidad, 2);
    document.getElementById("resultado_cin").textContent = `Energía Cinética: ${resultado.toFixed(2)} J`;
}

function calcularEnergiaPotencial() {
    if (!validarInput("masa_pot", "altura_pot")) return;
    const masa = parseFloat(document.getElementById("masa_pot").value);
    const altura = parseFloat(document.getElementById("altura_pot").value);
    const gravedad = 9.81; // m/s²
    const resultado = masa * gravedad * altura;
    document.getElementById("resultado_pot").textContent = `Energía Potencial: ${resultado.toFixed(2)} J`;
}

function calcularDensidad() {
    if (!validarInput("masa_dens", "volumen_dens")) return;
    const masa = parseFloat(document.getElementById("masa_dens").value);
    const volumen = parseFloat(document.getElementById("volumen_dens").value);
    if (volumen === 0) {
        alert("El volumen no puede ser cero.");
        return;
    }
    const resultado = masa / volumen;
    document.getElementById("resultado_dens").textContent = `Densidad: ${resultado.toFixed(2)} kg/m³`;
}

function calcularPresion() {
    if (!validarInput("fuerza_pres", "area_pres")) return;
    const fuerza = parseFloat(document.getElementById("fuerza_pres").value);
    const area = parseFloat(document.getElementById("area_pres").value);
    if (area === 0) {
        alert("El área no puede ser cero.");
        return;
    }
    const resultado = fuerza / area;
    document.getElementById("resultado_pres").textContent = `Presión: ${resultado.toFixed(2)} Pa`;
}

function calcularCargaElectrica() {
    if (!validarInput("intensidad_carga", "tiempo_carga")) return;
    const intensidad = parseFloat(document.getElementById("intensidad_carga").value);
    const tiempo = parseFloat(document.getElementById("tiempo_carga").value);
    const resultado = intensidad * tiempo;
    document.getElementById("resultado_carga").textContent = `Carga: ${resultado.toFixed(2)} C`;
}

function calcularLeyOhm() {
    if (!validarInput("voltaje_ohm", "resistencia_ohm")) return;
    const voltaje = parseFloat(document.getElementById("voltaje_ohm").value);
    const resistencia = parseFloat(document.getElementById("resistencia_ohm").value);
    if (resistencia === 0) {
        alert("La resistencia no puede ser cero.");
        return;
    }
    const corriente = voltaje / resistencia;
    document.getElementById("resultado_ohm").textContent = `Corriente: ${corriente.toFixed(2)} A`;
}
