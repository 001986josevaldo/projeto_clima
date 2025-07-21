# 🌤️ Consulta Climática por CEP

Sistema web que permite ao usuário consultar as **condições climáticas atuais** de qualquer local, digitando apenas o **CEP**. A aplicação utiliza **WeatherAPI**, **ViaCEP** e **Nominatim (OpenStreetMap)** para obter dados de localização e clima em tempo real.

---

## 🚀 Tecnologias Utilizadas

### 🖥️ Front-End
- HTML5
- CSS3
- JavaScript

### 🖧 Back-End
- Python
- Flask
- Requests
- dotenv

### 🌐 APIs Integradas
- [WeatherAPI](https://www.weatherapi.com/)
- [ViaCEP](https://viacep.com.br/)
- [Nominatim (OpenStreetMap)](https://nominatim.org/)

---

## 📦 Estrutura do Projeto
projeto_clima/
├── app.py # Back-end Flask
├── .env # Chave da API (não versionar)
├── static/
│ ├── style.css # Estilos do site
│ └── script.js # Lógica de requisição no navegador
├── templates/
│ └── index.html # Página principal
└── README.md
├── requirements.txt
└── .gitignore

---

## 🔧 Como Executar Localmente

### 1. Clone o repositório

git clone https://github.com/seu-usuario/projeto_clima.git

cd projeto_clima

### 2. Crie o ambiente virtual (opcional, mas recomendado)

python -m venv venv
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate     # Windows

### 3. Instale as dependências

pip install -r requirements.txt

### 4. Configure o .env

Faça um cadastro no site: https://www.weatherapi.com/

Crie um arquivo .env e insira sua chave da WeatherAPI:

WEATHER_API_KEY=sua_chave_aqui

### 5. Execute o servidor

python app.py

## 6. Acesse a aplicação

http://localhost:5000


🧪 Exemplo de Uso

Digite um CEP válido como 78735816 e veja:

🌡️ Temperatura atual

☁️ Condição do tempo

💧 Umidade

🌬️ Pressão atmosférica

💨 Velocidade e direção do vento

📅 Data e hora local da consulta

🔒 Segurança
A chave da API é carregada via variável de ambiente (.env)

O arquivo .env deve estar no .gitignore e nunca ser versionado

📄 Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

🙋‍♂️ Autor
Desenvolvido por Josevaldo Moreira

📧 josevaldomr@gmail.com 📧 josevaldo.m@unemat.br

🔗 https://www.linkedin.com/in/josevaldomoreira

