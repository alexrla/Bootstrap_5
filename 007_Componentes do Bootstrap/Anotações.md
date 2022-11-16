# Bootstrap



### Componentes do Bootstrap

- **Além dos componentes já vistos (onde se utilizava muitas regras CSS), temos componentes mais complexos, que são resultados de muitas tags e classes em conjunto;**
  - **Para esses componentes mais complexos, além da questão do CSS, agora temos a questão estrutural e a questão funcional, as funcionalidades (a partir daí precisaremos do JavaScriptt);**



#### Accordion

- **Lista com elementos ocultos;**
  - **Ao clicar no título de cada item da lista, uma descrição é exibida;**
  - **Enquanto isso, o outro item que estava aberto, é fechado;**



#### Alertas

- **Os componentes de alertas servem para exibir mensagens;**
- **Existem diversas cores, que sinalizam cada ação possível;**
  - **Ações como: erros, confirmações, informações, etc.;**
- **Estas mensagens são como feedbacks do sistema, para o usuário final;**



#### Badge

- **Componente que serve para exibir alguma informação ao lado do texto;**
  - **Exemplos: um _label_ ou uma notificação;**



#### Breadcrumb

- **Componente que serve para mostrar ao usuário o caminho que ele já percorreu no site;**
  - **Podemos mostrar as páginas principais. Desta maneira, o usuário consegue voltar para as páginas anteriores;**



#### Buttons

- **Componente que possui diversas variações;**

  - **Utilizamos a classe base `btn`;**

  - **Podemos inserir o estilo em outras tags, como a de _link_ por exemplo:**

    ```html
    <a class="btn"></a>
    ```

  - **Existe uma variação para _outline_, que exibe cor só no contorno;**

  - **Também podemos inserir estilo de "botão desabilitado";**



#### Button Group

- **Agrupamento de botões;**
  - **Podemos criar componentes como paginação;**
  - **Ou se precisarmos, botões unidos que configuram algo;**



#### Cards

- **Os cards são componentes onde podemos inserir imagens, descrição e um botão de chamada;**
  - **São utilizados para: produtos, avatares e outros itens;**



#### Slider

- **Podemos criar um _slider_ com o Bootstrap, através do componente de _Carousel_;**
  - **Existem recursos para passar imagem e também para exibir a quantidade delas;**



#### Close button

- **Componente de botão de fechar;**
  - **Não é necessário a instalação de ícones;**



#### Collapse

- **Componente que possui duas partes:**
  - **Um texto: que sua exibição é condicionada a um evento de click em um botão;**
  - **Um botão: que exibe ou esconde o texto;**



#### Dropdown

- **Componente para menu;**
  - **Podemos colocar um botão com um evento e ao clicarmos nele, abrimos uma lista com os demais itens do menu;**



#### Modal

- **Possui dois elementos:**
  - **Um botão de ativação;**
  - **E um banner que aparece após o clique do botão;**
- **É útil para colocar mensagens ou realizar ações dentro do modal;**



#### Navbar

- **Componente para barras de navegação;**
  - **Existem diversas variações;**
  - **Podem ser colocados ícones, links, dropdowns e mais;**



#### Offcanvas

- **Parecido com o Modal;**
- **Um conteúdo fica oculto, a espera do clique em um botão;**
- **Porém, possui uma perspectiva diferente: costuma aparecer na lateral;**



#### Paginação

- **Podemos utilizar um componente próprio para paginação o _pagination_;**
  - **Nesse componente existe alguns recursos a mais que o _group button_;**



#### Popover

- **Elemento que necessita da ação de um botão;**
  - **Ao clicar no botão, uma área informativa aparece;**
    - **É necessário um código JavaScript para ativar os popovers;**



#### Barra de Progresso

- **Para barras de progresso, temos o componente _Progress_;**
  - **Ele vai se completando a medida que um atributo é alterado;**
  - **Pode ser utilizado para loading ou para upload de arquivos;**



#### Scrollspy

- **Componente utilizado para levar a barra de navegação e a um local indicado;**
  - **Geralmente utilizado para fixar as seções do site;**
  - **Ao clicar em um botão, o scroll desce;**



#### Toast 

- **Componente de _push notification_;**
  - **Pode ser exibido através de um evento;**
  - **Serve para exibir mensagens para os usuários;**



#### Tooltip

- **Componente de dica;**
  - **Onde podemos oferecer informações em algum elemento;**
    - **Precisaremos de um código JavaScript, para realizar a ativação;**
