# DIO User API 🐱‍🐉

Este projeto é uma API para gerar imagens das principais skills estudadas na plataforma [DIO](https://web.dio.me).

Podemos gerar a seguinte imagem indicando apenas o nome do usuário:  
<img src="http://dio-users-api.vercel.app/api/v1/skills?username=pedro_h_teles" width="300px" height="300px" />

<br />

A ideia foi inspirada no famoso [Github Stats Card](https://github.com/anuraghazra/github-readme-stats), usado para gerar imagens dinâmicas das linguagens mais usadas por cada desenvolvedor a partir da análise de seus repositórios no Github.

## Exemplo de uso 🖍

Para se usar, deve-se copiar a seguinte linha de código, alterando o nome do usuário no local indicado.  
`<img src="http://dio-users-api.vercel.app/api/v1/skills?username=[NOME-DO-USUARIO]" width="300px" height="300px" />`

As dimensões da imagem também podem ser alteradas através dos atributos width e height. O resultado pode ser visto abaixo:

<img src="http://dio-users-api.vercel.app/api/v1/skills?username=pedro_h_teles" width="300px" height="300px" />

## Observação importante ❗

A página dos usuários é acessível apenas aos usuários cadastradas na plataforma, e demanda autenticação.

Para possibilitar a coleta das informações, foi utilizada a biblioteca [Puppeteer](https://pptr.dev/), o que demanda um alto tempo de processamento, já que não existe API para acessar diretamente os dados do usuário.

Sendo assim, a fim de minimizar o custo operacional e o impacto na plataforma, as imagens são salvas em cache no servidor durante 7 dias. A primeira requisição demora alguns segundos para ser gerada pelo servidor, e as requisições posteriores são resolvidas instantaneamente.
