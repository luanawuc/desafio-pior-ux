# 💀 Desafio: A Pior Experiência de Usuário Possível

## 📌 Sobre o Projeto

Este projeto foi desenvolvido para o desafio prático de UI, UX e Engenharia do Erro.

A proposta foi criar uma interface propositalmente ruim, confusa e frustrante, mas que ainda fosse funcional e permitisse ao usuário concluir o fluxo.

O usuário deve passar por um cadastro, enfrentar diferentes problemas de usabilidade e, ao final, chegar à mensagem:

> "Parabéns! Você sobreviveu!"

O projeto foi desenvolvido utilizando HTML, CSS e JavaScript.

---

## 🎯 Objetivo

O objetivo do projeto é compreender, na prática, a diferença entre UI e UX e perceber como decisões inadequadas de interface podem prejudicar a experiência do usuário.

As dificuldades foram criadas propositalmente para representar problemas que devem ser evitados em sistemas reais.

---

# 🧠 Princípios e Heurísticas Violados

## 1. Botões com funções confusas

Na primeira tela, o botão "Cancelar" possui uma aparência muito mais chamativa que o botão "Continuar" e também leva o usuário para a próxima etapa.

### Problema

O usuário não consegue identificar facilmente qual é a ação correta.

### Princípio violado

**Consistência e padrões** e **correspondência entre o sistema e o mundo real**.

### Como deveria ser

O botão "Continuar" deveria ser claramente identificado como ação principal, enquanto "Cancelar" deveria realizar somente o cancelamento.

---

## 2. Baixo contraste

A interface utiliza propositalmente cores muito fortes e algumas combinações com pouca legibilidade.

### Problema

O usuário pode ter dificuldade para ler determinadas informações.

### Princípio violado

**Acessibilidade e legibilidade**, relacionados às boas práticas da WCAG.

### Como deveria ser

Utilizar contraste adequado entre texto e fundo, além de uma tipografia legível.

---

## 3. Validação de senha contraditória

O formulário apresenta regras impossíveis ou contraditórias, como exigir números e ao mesmo tempo proibir números.

### Problema

O usuário não sabe qual informação deve fornecer para concluir o cadastro.

### Princípio violado

**Prevenção de erros**.

### Como deveria ser

As regras deveriam ser claras, objetivas e possíveis de cumprir.

---

## 4. Mensagens de erro confusas

Algumas mensagens apresentam informações contraditórias ou pouco úteis.

### Problema

O usuário não consegue compreender exatamente o que precisa corrigir.

### Princípio violado

**Visibilidade do status do sistema**.

### Como deveria ser

As mensagens deveriam explicar claramente o problema e indicar como solucioná-lo.

---

## 5. Hierarquia visual inadequada

Elementos importantes possuem pouca visibilidade, enquanto elementos secundários chamam muita atenção.

### Problema

O usuário não sabe para onde deve olhar ou qual ação realizar.

### Princípio violado

**Hierarquia visual e consistência**.

### Como deveria ser

A interface deveria destacar as ações principais e organizar as informações de acordo com sua importância.

---

## 6. Checkbox confuso

O texto do checkbox utiliza uma frase propositalmente difícil de interpretar:

> "Eu NÃO concordo que concordo com os termos..."

### Problema

O usuário não consegue compreender claramente o que está aceitando.

### Princípio violado

**Clareza e consistência**.

### Como deveria ser

O texto deveria ser simples e direto, por exemplo:

> "Li e concordo com os termos de uso."

---

## 7. Posicionamento inesperado dos elementos

Botões e informações são colocados em posições pouco intuitivas.

### Problema

O usuário precisa procurar pela próxima ação.

### Princípio violado

**Reconhecimento em vez de memorização**.

### Como deveria ser

Os elementos deveriam seguir padrões conhecidos de navegação e posicionamento.

---

# 🛠️ Proposta de Correção / Versão Ideal

Em uma interface profissional, o fluxo deveria ser simples e previsível.

### Tela inicial

- Botão "Continuar" destacado.
- Botão "Cancelar" claramente separado.
- Texto objetivo.
- Contraste adequado.

### Formulário

- Campos identificados corretamente.
- Placeholders utilizados apenas como auxílio.
- Regras de senha claras.
- Mensagens de erro próximas ao campo correspondente.
- Dados digitados preservados quando houver erro.

### Confirmação

- Texto simples.
- Checkbox com informação clara.
- Botão "Confirmar" destacado.
- Botão "Cancelar" separado.

### Tela final

- Mensagem clara informando que o cadastro foi concluído.
- Opção para voltar ou iniciar novamente.

---

# 💻 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- GitHub
- GitHub Pages

---

# ▶️ Como Executar

O projeto pode ser acessado diretamente pelo GitHub Pages.

Também é possível executar localmente baixando ou clonando o repositório e abrindo o arquivo:

`index.html`

---

# 👥 Playtest

O projeto foi desenvolvido para ser testado por outros usuários.

Durante o playtest, o objetivo é observar:

- dificuldade para encontrar os botões;
- compreensão das mensagens;
- facilidade para preencher o formulário;
- reação às validações;
- dificuldade para chegar à tela final.

Apesar de propositalmente apresentar uma experiência ruim, o fluxo possui uma forma funcional de ser concluído.

---

# 🎓 Conclusão

A atividade demonstrou que UI e UX estão diretamente relacionadas.

Uma interface pode possuir elementos visualmente funcionais, mas escolhas inadequadas de cores, textos, posicionamento, navegação e feedback podem tornar a experiência confusa e frustrante.

Ao construir propositalmente uma interface ruim, foi possível compreender melhor a importância de princípios como consistência, acessibilidade, prevenção de erros, clareza e visibilidade do status do sistema.

O projeto demonstra, na prática, que uma boa experiência depende não apenas da aparência da interface, mas também da forma como o usuário consegue compreender e utilizar o sistema.
