# Github blog

> Blog com `issues` deste repositório.

## 📲 [Link do deploy](https://github-blog-sandy.vercel.app/)

![Capa Github blog](./public/capa.png)

## 📑 Sobre o projeto

Esta aplicação é **o projeto de entrega** do módulo de "Consumo de API e performance no ReactJS" do curso de especialização Ignite.

## 🖼 [Layout no figma](<https://www.figma.com/file/ZEE0OaGwSHMs9j9EH3Us5y/GitHub-Blog-(Community)?node-id=2%3A1550>)

## ✍🏻 Funcionalidades

Esta aplicação consome 3 APIs diferentes do Github: users, issues e search.

- Feed
  - Busca de `users` por um usuário especifico
  - Busca de `issues` todas as issues do repositório
  - Busca de `search/issues` a pesquisa do usuário
- Post
  - Busca de `issues/:number` por uma issue especifica

## 🧠 Aprendizados

- Consumo de API com axios
- Analise da performace com React Dev Tools
- Implementação de debouce para que a pesquisa seja feita após o usuário parar de digitar
- Converter textos Markdown em HTML para exibição

## 🛠 Tecnologias utilizadas

- Axios
- Fontawesome
- Date-fns
- Loash
- React-router-dom
- React-markdown
- React-hook-form
- Styled-components
