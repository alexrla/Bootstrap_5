# Bootstrap



### Primeiros passos

#### Principais formas de instalação

- **No Bootstrap, temos formas diferentes de fazer o setup:**
  - **CDN: servidor externo que detém os arquivos estáticos;**
  - **Arquivos internos: o Bootstrap é instalado a partir de arquivos do nosso servidor;**
  - **NPM: através do gerenciador de pacotes do Node.js, podemos instalar o Bootstrap como dependência;**
- **Existem ainda outras formas de instalação;**



#### Arquivos JavaScript do Bootstrap

- **No Bootstrap, existe a possibilidade de instalar arquivos JavaScript;**
  - **Não são arquivos obrigatórios, mas nos dão algumas funcionalidades a mais;**
  - **Algumas dessas funcionalidades são: menu dropdown, slider carousel, menu de hamburguer, tooltips, entre outras;**
  - **Porém, para projetos mais simples, apenas o CSS costuma atender as eventuais necessidades;**
  - **Os arquivos são divididos em: Popper e os do Bootstrap;**



#### Instalação com arquivos

- **Para instalar com arquivos no nosso servidor, precisamos fazer o download do Bootstrap (os arquivos estão disponíveis no site: https://getbootstrap.com/**;
  - **Os arquivos serão colocados em diretórios do projeto e e será realizado o link de CSS e JavaScript (a partir dos caminhos relativos);**



#### Instalação via NPM

- **Para instalar com o NPM, devemos ter o Node.js e rodar o comando `npm init -y`;**
  - **Em seguida, para instalar a dependência, utilizamos o comando: `npm i bootstrap`;**
  - **Após isso, basta fazermos o link no HTML: `node_modules/bootstrap/dist`;**



#### Configurações importantes

- **Existem dois elementos necessários, para o correto funcionamento do Bootstrap, que devemos nos atentar no HTML:**
  - **`DOCTYPE`: o Bootstrap necessita das tags corretas de `DOCTYPE`;**
  - **`viewport`: tag que controla a responsividade;**
- **Sem estas configurações, o Bootstrap pode funcionar, mas ficamos sujeitos a instabilidades;**



#### Outros arquivos do Bootstrap

- **Quando fazemos o download ou instalamos através do `NPM`, vários arquivos ficam disponíveis;**
- **Nesses arquivos teremos arquivos mais simplificados, minificados ou também com apenas alguns dos componentes;**
- **Os arquivos de JavaScript, também seguem esse mesmo padrão;**



#### Suporte

- **Nem todos os navegadores são suportados pelo Bootstrap;**

- **Para saber mais:**

  **https://getbootstrap.com/docs/5.2/getting-started/browsers-devices/**
