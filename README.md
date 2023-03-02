# DIO User API 🐱‍🐉

Este projeto é uma API para gerar imagens das principais skills estudadas na plataforma [DIO](https://web.dio.me).

Podemos gerar a seguinte imagem indicando apenas o nome do usuário:  
![Imagem com exemplo de Skills](/public/skills-example.svg)

<br />

A ideia foi inspirada no famoso [Github Stats Card](https://github.com/anuraghazra/github-readme-stats), usado para gerar imagens dinâmicas das linguagens mais usadas por cada desenvolvedor a partir da análise de seus repositórios no Github.

---

## Exemplo de uso em ambiente local 🏡

1. Para rodar o ambiente localmente, clone o repositório com o comando:
`git clone https://github.com/Pitossomo/dio-users-api.git`

2. Instale as dependências com o comando `npm install` 

3. Na raiz do projeto, crie o arquivo `.env.local` com as variáveis:
```
DIO_USERNAME=email.cadastrado.na.dio@exemplo.com]
DIO_PASSWORD=senhaNaDIO
```

4. Rode o servidor em modo de desenvolvimento com o comando:
`npm run dev`

5. No navegador, abra a página `http://localhost:3000/api/v1/skills?username=pedro_h_teles`, alterando o nome de usuário como desejar

6. Para encontrar o seu nome de usuário, visite seu perfil e veja o nome na barra de endereço. Por exemplo, na imagem abaixo o nome do usuário é `pedro_h_teles`:
![Captura de tela do perfil](/public/skills-example2.png)

7. Na primeira visita, aguarde o tempo para o carregamento. Nas visitas futuras, o carregamento será instantâneo, desde que o servidor não seja reinicializado e o nome do usuário seja o mesmo.

---

### Propostar futuras
Hospedar o projeto em um servidor para criar as imagens dinâmicamente. Por se tratar de um projeto com alta latência, o custo de hospedagem ficou bem alto, sendo 

--- 

## Observação importante ❗

A página dos usuários é acessível apenas aos usuários cadastradas na plataforma, e demanda autenticação.

Para possibilitar a coleta das informações, foi utilizada a biblioteca [Puppeteer](https://pptr.dev/), o que demanda um alto tempo de processamento, já que não existe API para acessar diretamente os dados do usuário.

Sendo assim, a fim de minimizar o custo operacional e o impacto na plataforma, as imagens são salvas em cache no servidor durante 7 dias. A primeira requisição demora alguns segundos para ser gerada pelo servidor, e as requisições posteriores são resolvidas instantaneamente. Se o servidor reiniciar, o cache desaparece.
