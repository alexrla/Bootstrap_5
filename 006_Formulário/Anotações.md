# Bootstrap



### Formulário

- **Possuem diversos inputs no HTML e consequentemente, existem vários componentes no Bootstrap;**



#### Desabilitando formulários

- **Podemos desabilitar um formulário, ou os sesu campos;**
  - **Para desabilitar o form, prcisamos utilizar a tag _fieldset_, junto do atributo _disabled_, envolvendo todo o formulário;**
  - **Para desabilitar um input, basta utilizarmos o atributo _disabled_ no campo;**



#### Form-control

- **Classe que ajusta os inputs (os inputs ficam no padrão Bootstrap);**
  - **Na maioria dos inputs, adicionamos esta classe;**
  - **Temos variações de tamanho: `form-control-n` (`n` pode ser `sm`, `lg`, entre outros);**
  - **OBS.: a tag _label_ leva a classe `form-label`;**



#### Readonly

- **Atributo que indica somente leitura;**
  - **Temos duas formas de apresentação no Bootstrap:**
    - **Atributo: colocamos o atributo _readonly_ e o input recebe os estilos do componente;**
    - **Classe do Bootstrap: o input fica parecendo apenas um texto;**
  - **OBS.: _readonly_ é uma forma de enviar dados para o servidor, já o _disabled_ não envia;**



#### Arquivos

- **O input de arquivos tem uma forma diferente de receber CSS, o que acaba deixando essa tarefa, um pouco complicada;**
  - **Porém, o Bootstrap possui um componente para isso;**



#### Datalist

- **É um _select_, porém com busca;**
  - **Logo, podemos inserir opções e também encontrar alguma que está cadastrada;**
  - **Também temos um componente no Bootstrap para esse tipo de input;**



#### Cores

- **No Bootstrap também existe um componente para o input de cor;**
  - **Obtemos uma espécie de _color picker_ bem estilizado;**
  - **Esse input não é muito utilizado;**



#### Select

- **Exsitem dois tipos de select;**
  - **De valor único: o usuário só pode escolher uma opção;**
  - **De múltiplos valores: o usuário pode escolher uma/mais opções;**
  - **O Bootstrap possui componentes para os dois;**



#### Checkbox e radio button

- **O Bootstrap possui componentes para:**
  - **Checkbox: onde podemos selecionar mais de uma opção;**
  - **Radio: onde selecionamos apenas uma opção;**



#### Switch 

- **Um tipo de checkbox (semelhante ao checkbox);**
  - **Porém, apresenta uma estilização diferente (parecendo um botão "on/off");**



#### Range (input de escala)

- **Com o range, o usuário pode regular um parâmetro por uma barra (e ainda podemos definir um valor mínimo e um valor máximo);**



#### Input groups

- **Servem para darmos uma experiência melhor para o usuário:**
  - **Seja agrupando funções;**
  - **Ou tornando o input mais objetivo;**



#### Floating labels (label flutuante)

- **Forma de deixar o label dentro do input;**



#### Layout com forms

- **Podemos condicionar a exibição dos inputs pelo grid de colunas;**
  - **Ou seja, existe uma forma fácil de inserir inputs em uma linha;**
  - **E também de diferentes larguras;**



#### Validações

- **Para criar validações com o Bootstrap, precisaremos utilizar classes de validação, informar um feedback para o que está certo e o que está errado, e também observar o envio do formulário, para ativar a validação antes que o envio ocorra;**

#### 

#### Validações do HTML

- **O Bootstrap também funciona com a validação padrão do HTML;**
  - **Para isso, devemos utilizar atributos para dizer se um dado está errado ou não;**

