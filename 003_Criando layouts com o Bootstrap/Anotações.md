# Bootstrap



### Criando layouts com o Bootstrap

#### Inserindo nosso CSS

- **O estilo do Bootstrap, pode não ser suficiente para finalizar uma aplicação, então devemos inserir o nosso próprio CSS;**
- **O nosso CSS deve ser linkado sempre abaixo do Bootstrap;**
- **Nossas regras precisam ter um nível de seleção pelo menos igual ao do Bootstrap, para que elas possas substituir as regras do próprio Bootstrap;**



#### Breakpoints

- **Pontos específicos de resolução, criados através de media query, para deixar o site responsivo;**
- **Eles seguem um padrão que é encontrado na maioria dos dispositivos;**
  - **Por exemplo, temos um breakpoint para tablet e outro para celular;**

- **Não há para todos (os dispositivos), mas existem para os mais utilizados;**
- **OBS.: é utilizado o padrão mobile_first, ou seja, a estilização de menor resolução, para a maior;**



#### Breakpoints no Bootstrap

- **No Bootstrap, os breakpoints são utilizados por classes, por exemplo: `sm`, `md` e `lg`;**

  - **Cada um representa um media query;**

- **Normalmente, adequamos outros elementos do nosso site, a estes breakpoints;**

  - **Assim é possível trabalhar com o Bootstrap e deixar o site responsivo;**

- **Para saber mais:**

  **https://getbootstrap.com/docs/5.2/layout/breakpoints/**



#### Containers

- **Entidades importantes do Bootstrap, que estruturam o layout;**
  - **São depósitos de outros elementos;**

- **Temos tipos diferentes de containers, mas o uso acaba sendo o mesmo: separar o site em áreas;**



#### Container Fluid

- **Utiliza uma área maior, para abrigar os elementos;**
- **Sempre representa 100% da área útil;**
  - **Eliminando as margens laterais;**

- **A classe é `container-fluid`;**



#### Container por breakpoint

- **Podemos moldar um container, através dos breakpoints;**
  - **Para isso utilizamos a classe `container-x`;**
    - **Onde x pode ser: `sm`, `md`, `lg`, entre outras classes de breakpoint;**




#### Grid

- **Estrutura para criar layouts com o Bootstrap;**

- **Temos um grid colunar, dividido em 12 colunas;**

- **A estrutura do Grid é sempre: `container > row > colunas`;**
  - **Onde temos o container para abrigar a seção;**
  - **Row, para determinar uma linha (largura 100%);**
  - **Colunas, para subdividir o container em até 12 partes;**




#### Tamanho das colunas

- **Podemos ajustar os tamanhos das colunas;**

  - **Por exemplo: para que a coluna ocupe três espaços, temos a classe `col-3`;**
  - **OBS.: lembrando que poderemos separar em no máximo, 12 divisões (quando ultrapassamos as 12 colunas, o elementos acaba "ficando de fora" do container);**
    - **E o espaço será proporcional, ou seja, em: `col-11` e `col-1`, teremos uma coluna ocupando quase que 100% da largura da row;**

  

#### Limitando o número de colunas

- **Podemos limitar a quantidade de colunas em uma row;**
  - **A classe utilizada é a: `row-cols-n`;**
    - **Onde `n` é o número limite;**
- **Com isso, o grid sempre irá respeitar este número máximo na row (linha);**
- **Caso tenhamos mais colunas, do que o limite imposto, os itens acabam "ficando de fora" do container. Com isso, ou aumentamos a altura do container, ou trabalhamos com o números de colunas imposto pelo limite;**



#### Alinhamento vertical

- **As colunas de uma row, estão condicionadas ao flex-box;**
  - **Sendo assim, para alinhá-las, temos classes bem parecidas com as regras do flex-box;**
    - **Por exemplo: `align-items-end`, que alinha as colunas ao fim da row;**
    - **OBS.: estas classes devem sempre ficar no elemento pai (elemento onde aplicamos a classe `row`);**



#### Alinhamento horizontal

- **O alinhamento horizontal, segue a mesma premissa do vertical;**
  - **Utilizamos classes no elemento pai (o elemento no qual aplicamos a classe `row`);**
    - **Por exemplo, para centralizar os elementos, no eixo horizontal, podemos aplicar a classe (no elemento pai): `justify-content-center`;**
    - **As classes contendo o `start` e o `end`, também funcionam;**
  - **Além disso, podemos combinar os alinhamentos, vertical e horizontal;**



#### Alinhamento de item

- **Serve para alinharmos um item individualmente;**
  - **Utilizamos por exemplo, a classe: `align-self-center` (que alinha um elemento na vertical);**
  - **OBS.: não existem alinhamentos unitários, para a horizontal;**



#### Ordem dos elementos

- **É possível alterar a ordem em que os itens são exibidos;**
  - **Para isso, utilizamos a classe: `order-n`;**
    - **Onde `n` corresponde a posição do elemento, sendo 1, o primeiro;**
  - **Este recurso acaba sendo útil no desenvolvimento mobile, onde os elementos costumam mudar de ordem;**



#### Offset de colunas

- **Através do _offset_, podemso criar espaçamentos (externos);**
  - **Podemos ter uma margem da borda do elemento, definida por uma quantidade de colunas;**
    - **Para isso, por exemplo, podemos utilizar a classe: `offset-md-3` (que nos dá um _offset_ de 3 colunas à esquerda);**



#### Gutters

- **São intervalos (espaçamento interno/externo) que podemos inserir entre as colunas;**

- **É possível inserir no eixo `x` ou no eixo `y`;**

  - **Exemplo: `gx-2` (na horizontal);**
  - **Outro exemplo: `gy-4` (vertical);**
  - **Os números utilizados, são baseados no `rem` da página (fonte do elemento root);**
    - **O número 3 é a referência para `1rem` (que por padrão é igual a `16px`, mas podemos alterar e colocar qualquer valor);**

  - **OBS.: no eixo `x`, o gutter aplica um padding, enquanto no eixo `y`, o gutter aplica um margin;**
