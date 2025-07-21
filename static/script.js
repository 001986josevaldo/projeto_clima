async function buscarClima() {
  const cep = document.getElementById('cep').value;
  if (!cep) return alert("Digite um CEP válido!");

  try {
    const response = await fetch(`/clima?cep=${cep}`);
    if (!response.ok) throw new Error("Erro ao buscar dados do clima");

    const data = await response.json();

    document.getElementById("weather-container").style.display = "block";
    document.getElementById("local").innerText = `📍 Local: ${data.local}`;
    document.getElementById("temperatura").innerText = `🌡️ Temperatura: ${data.temperatura} °C`;
    document.getElementById("condicao").innerText = `☁️ Condição: ${data.condicao}`;
    document.getElementById("humidade").innerText = `💧 Humidade: ${data.humidade} %`;
    document.getElementById("pressao").innerText = `🌬️ Pressão: ${data.pressao} Mb`;
    document.getElementById("vento").innerText = `💨 Velocidade do Vento: ${data.vento} Km/h`;
    document.getElementById("direcao_vento").innerText = `🧭 Direção do Vento: ${data.direcao_vento}`;
    document.getElementById("data_hora").innerText = `📅 Data e Horário do CEP: ${data.data_hora}`;


  } catch (error) {
    alert("Não foi possível obter os dados. Verifique o CEP ou tente novamente.");
    console.error(error);
  }
}
