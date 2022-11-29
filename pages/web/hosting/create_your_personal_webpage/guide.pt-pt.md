---
title: 'Tutorial - Criar a sua página web pessoal na OVHcloud'
slug: create-your-own-web-page
excerpt: 'Saiba como criar a primeira página num alojamento gratuito Start 10M'
section: 'Tutoriais'
order: 01
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 22/11/2022**

## Objetivo

Saiba como criar a primeira página de um site num alojamento Start 10M grátis para qualquer compra de um domínio na OVHcloud.

## Requisitos

- Dispor de um [domínio](https://www.ovhcloud.com/pt/domains/)
- Ter um serviço de [alojamento web da OVHcloud](https://www.ovhcloud.com/pt/web-hosting/) ou um [alojamento gratuito Start 10M](https://www.ovhcloud.com/pt/domains/free-web-hosting/)
- Ter um editor de texto (bloco de notas, TextEdit, Notepad++, etc.)
- Ter instalado um cliente FTP (por exemplo, [Cyberduck](https://cyberduck.io/), [FileZilla](https://filezilla-project.org/download.php), etc.) para telecarregar (colocar no alojamento) os seus ficheiros no seu espaço dedicado.

## Antes de começar

### Do que é feita uma página web?

O conteúdo de um website é frequentemente constituído por várias páginas web. Uma página web apresenta um conteúdo, fiado ou não, que foi formado para servir uma experiência de navegação. As páginas que visualiza no seu browser são o resultado de três componentes que vamos detalhar:

- **O HTML (HyperText Markup Language)**: linguagem utilizada para estruturar as suas páginas. A "estrutura" designa os elementos e a sua organização.<br>
**Exemplo**: um título de documento será seguido de um subtítulo e de um ou vários parágrafos.

Os elementos utilizados para estruturar o seu conteúdo são designados por "balizas" e escrevem-se através de pesquisas que abrem e fecham.<br>
**Exemplo**: O sinal `<p>` designa o que começa um parágrafo, sendo o mesmo parágrafo fechado pela placa `</p>`. 

>[!warning]
>
> Para qualquer baliza aberta, deve ser criada uma baliza fechada. As balizas não se sobrepõem (fecham-se pela ordem inversa da sua abertura) e só podem ser interpretadas por balizas HTML.
>

Estão disponíveis mais de cem balizas, mas poderá perfeitamente realizar o seu site com algumas delas.

- **O CSS (Cascading Style Sheet, cascata)**: Língua que descreve o modo como os elementos HTML serão posicionados, dimensionados, comportamentalizados, colorizados ou apresentados. Estas regras podem aplicar-se a elementos genéricos (a mesma cor para todos os títulos do website, ou à apólice que será utilizada para todos os textos) ou a elementos precisos (o texto contido no foter, o comportamento ao sobrevoo do menu de navegação).

- **O JavaScript**: linguagem que permite enriquecer as interações num website (ou numa aplicação web). Embora incontornável para os programadores web, não é obrigatório criar o seu website.<br>
Se não está familiarizado com o código nas diferentes linguagens citadas, pode copiar/colar os exemplos de código que são fornecidos neste guia, que lhe permitirão ter um website explorável no seu alojamento.

### Que ferramentas utilizar?

Para criar uma página web, comece por escrever num ficheiro o seu código de origem a partir de uma das três linguagens acima mencionadas. Veja os principais nomes de extensão: *".html"* (para os seus ficheiros HTML), *".css"* (para os seus ficheiros CSS), *".js"* (para os seus ficheiros JavaScript).

Os ficheiros podem ser escritos em editores de texto, incluindo os que estão disponíveis por predefinição no seu sistema operativo (bloco de notas, TextEdit). Numerosas soluções Open Source gratuitas propõem funcionalidades suplementares: [Notepad++](https://notepad-plus-plus.org/), [Brackets](https://brackets.io/), [Sublime Text](https://www.sublimetext.com/) ou ainda [microfone](https://micro-editor.github.io/). Também é possível utilizar um IDE (Integrated Development Environment, ambiente de desenvolvimento integrado) como o [Visual Studio Code](https://code.visualstudio.com/) ou [Geany](https://www.geany.org/).

Para visualizar e ajustar as suas páginas antes de as colocar no seu alojamento, utilize o seu browser. Para isso, abra o ficheiro a partir da sua localização local diretamente no seu browser.

### Website **estático** ou **dinâmico**?

Um website é **estático** quando as páginas que visualiza com o seu browser são sempre idênticas e não oferecem outras interações específicas além dos efeitos (menus desvirtuados, por exemplo), animações e vídeos.

Por oposição, um website **dinâmico** subentende que as páginas que visualiza são geradas pelo servidor web que executa o código, acede a uma base de dados, etc. Isto permite entregar um resultado em função dos pedidos feitos pelo utilizador (consulta de rubricas, autenticação, envio de dados através de um formulário, consulta de stocks ou de inventários, etc.).

### O que é a linguagem PHP?

O PHP (*Hypertext Preprocessor*) é uma linguagem utilizada principalmente no desenvolvimento web. Funciona exclusivamente no lado do servidor, pelo que não é necessário para construir os elementos visíveis no seu browser. No entanto, será útil para, por exemplo, recuperar as mensagens que lhe serão enviadas através do formulário de contacto do seu site.

## Instruções

Os passos abaixo permitem-lhe realizar a sua primeira página web.

### Crie o conteúdo da sua página através da estruturação com o código HTML

Para realizar a sua primeira página web, crie um diretório, em qualquer lugar do seu computador, no qual coloque todos os seus ficheiros.

Dê um nome ao primeiro ficheiro `index.html`, que incluirá o código HTML. Este é o primeiro ficheiro a criar, pois os servidores HTTP estão configurados de forma padrão para que o pedido feito no seu alojamento (introduzindo o seu nome de domínio na barra de endereço de um browser) apresente o ficheiro "index".

Abra o seu editor de texto e guarde o seu ficheiro de trabalho. 

> [!primary]
> 
> Recomendamos que guarde várias cópias deste diretório de trabalho para efetuar backups.
> O site estará disponível no seu alojamento, mas é mais seguro guardar uma cópia local bem como backups noutros suportes, tais como discos rígidos externos.
>

#### Composição de uma página HTML tipo

As páginas HTML estão sempre estruturadas da mesma forma:

- uma declaração DOCTYPE que indica ao browser o seguinte conteúdo respeitando ao máximo as normas;
- um baliza `<html>` que vai enquadrar todas as outras balizas do documento;
- um balise `<head>` que vai conter informações sobre o enconding da página e o seu título;
- um balise `<body>` que vai conter o "corpo" da sua página HTML.

Pode copiar/colar este código no seu ficheiro `index.html`:

```html
<!DOCTYPE html>
<html lang="pt">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>A minha página pessoal</title>
    </head>
    <body>
         
    </body>
</html>
```

Algumas balizas contêm mais informações do que outras, como a baliza `<html lang="en">` do exemplo acima.<br>
Neste caso, fala-se de atributos que vão permitir precisar certos elementos. Neste caso, trata-se de indicar qual é a língua principal da página web. Alguns destes atributos são universais e poderão ser utilizados em todas as balizas (com algumas exceções), outros são específicos.

O sinal de `<head>` inclui elementos que não serão apresentados no ecrã. As balizas `<meta>` darão indicações ao browser, mas também aos motores de busca, como a codificação dos caracteres utilizados no documento (UTF-8 no exemplo acima) ou informações sobre a visualização em telemóvel ("viewport" no exemplo acima).
O sinal `<title>` é muito importante. Permite-lhe determinar o título da sua página que aparecerá no separador do seu browser, mas sobretudo que será indexado pelos motores de pesquisa.<br>
Este título permitir-lhe-á, por exemplo, aparecer nos resultados de pesquisa no Google, DuckDuckGo, etc.<br>
Colocar-se no topo destes resultados é um exercício definido pelas regras SEO (*Search Engine Otimization*). Não abordaremos este assumpto neste artigo.

Quanto à baliza `<body>`, ela vai conter as outras balizas HTML que vão estruturar o seu documento.

#### Completar com um título, um subtítulo e conteúdo

Vamos agora editar o conteúdo textual da sua página, respeitando a estrutura standard do HTML, para adicionar um título, um subtítulo, parágrafos e listas de texto.

- **As balizas `<h1>` até `<h6>`**

Os títulos escrevem-se entre balizas `<h..>`, que são hierarquizadas como em qualquer documento: primeiro `<h1>`, depois `<h2>`, etc., sendo o último o `<h6>`. A `<h1>` é, portanto, indispensável se deseja escrever um `<h2>`. No entanto, se não cumprir esta regra, o browser apresentará o resultado sem erros.

```html
<body>
    <h1>Bem-vindo à minha página pessoal</h1>
    <h2>Crie de forma rápida e fácil o seu website</h2>
</body>
```

Pode observar o resultado abrindo o ficheiro HTML através de um browser Internet (Firefox, Chrome, Safari, etc.): as duas cadeias de caracteres serão apresentadas com tamanhos diferentes.

- **Esta baliza `<p>`**

Esta baliza é utilizada para introduzir texto ("p" para parágrafo). É possível posicionar várias:

```html
<body>
    <h1>Bem-vindo à minha página pessoal</h1>
    <h2>Crie de forma rápida e fácil o seu website</h2>
    <p>A OVHcloud propõe-lhe, na sua oferta Start 10M, gratuitamente um alojamento para qualquer compra de um nome de domínio.</p>
</body>
```

- **As balizas `<ul>` e `<li>`**

Pode, em HTML, utilizar listas. Tomaremos o exemplo de listas simples, ditas não ordenadas (como as disponíveis num tratamento de texto). Para declarar uma lista, utiliza-se a baliza `<ul>` (*unordered list*). Esta baliza vai enquadrar outros elementos, as balizas `<li>`, que conterão o conteúdo das suas listas:

```html
<body>
    <h1>Bem-vindo à minha página pessoal</h1>
    <h2>Crie de forma rápida e fácil o seu website</h2>
    <p>
        <img src="images/logo-ovhcloud.png" alt="Log OVHcloud">
    </p>
    <p>A OVHcloud propõe-lhe, na sua oferta Start 10M, gratuitamente um alojamento para qualquer compra de um nome de domínio.</p>
    <p>A oferta "Nome de domínio" compreende:</p>
    <ul>
        <li>Alojamento Web 10 MB grátis</li>
        <li>Conta E-mail 5 GB grátis</li>
        <li>DNSSEC: proteção contra o envenenamento da cache (cache poisoning)</li>
        <li>Easy Redirect: acesso às redes sociais a partir do seu nome de domínio</li>
    </ul>
</body>
```

Pode ver o resultado no seu browser: por predefinição, os elementos das listas são apresentados com chips.

#### Adicionar imagens para tornar a sua página mais atraente

A web é, antes de mais, um meio visual. Vamos ver nesta secção como inserir imagens no seu conteúdo. A oferta Start 10M propõe-lhe um espaço de armazenamento de 10MB. É suficiente para as suas páginas HTML e CSS, mas pode ser limitado se deseja colocar muitas imagens no seu site. Neste caso, sugerimos que subscreva uma [oferta de alojamento web da OVHcloud](https://www.ovhcloud.com/pt/web-hosting/) que lhe permita beneficiar de um maior armazenamento.

O identificador HTML utilizado para apresentar uma imagem é o identificador `<img>`. Contrariamente às balizas que vimos anteriormente, não há abertura e encerramento deste elemento. Falamos de baliza autoferoz. São os atributos desta baliza que permitirão estabelecer a ligação entre a localização do ficheiro e o texto descritivo da imagem.

##### **Otimizar as suas imagens**

Uma imagem de grande dimensão é uma imagem que levará tempo a ser carregada pelo seu browser, particularmente se os seus visitantes utilizam um smartphone ou um tablet ligado à rede 4 ou 5G.
Regra geral, deve otimizar as suas imagens e limitar o seu peso. Este peso é expresso em bytes. As unidades normalmente utilizadas são os quilobytes (1 ko = 1 000 bytes) ou o megabyte (1 MB = 1 000 000 bytes). Uma imagem superior a algumas dezenas de KB é considerada pesada e merece ser otimizada. 

**Exemplo**: se cada uma das suas imagens pesar 1 MB, ficará limitado a menos de 10 imagens no seu alojamento Start10M. Se conseguir reduzir o tamanho entre 50 Kg e 200 Kg, poderá apresentar até 100 Kg na sua página web.

Alguns conselhos para que os seus ficheiros sejam o mais leves possível:

- limite a definição das suas imagens redimensionando o tamanho ao qual elas serão mostradas no seu site;
- o tamanho é expresso em pixéis de largura×altura (por exemplo, 300×250 pixels é a largura de uma imagem publicitária standard);
- altere a resolução (a "web" utiliza uma resolução padrão de 72 dpi);
- privilegie formatos comprimidos como *JPEG*, *PNG* ou *Webp*;
- também é possível utilizar um formato vetorial (SVG);
- evite os formatos não comprimidos *BPM* e *TIFF*.

##### **Armazenar as suas imagens no seu alojamento**

Por razões de legibilidade, convém armazenar as suas imagens num diretório dedicado:

![Arborescência de ficheiros e pastas](images/create_your_personal_webpage_1.png){.thumbnail}

Consideremos o caso de um ficheiro em formato *PNG*. Coloque-o no diretório "imagens":

![Arborescência de ficheiros e pastas com imagem](images/create_your_personal_webpage_2.png){.thumbnail}

Vamos agora criar um novo parágrafo no qual colocaremos a imagem (neste exemplo, não especificamos o tamanho de apresentação da imagem em píxeis). O browser irá apresentá-lo em função do seu tamanho original (em forma de ficheiro).

```html
<body>
    <h1>Bem-vindo à minha página pessoal</h1>
    <h2>Crie de forma rápida e fácil o seu website</h2>
    <p>
        <img src="images/logo-ovhcloud.png" alt="Log OVHcloud">
    </p>
    <p>A OVHcloud propõe-lhe, na sua oferta Start 10M, gratuitamente um alojamento para qualquer compra de um nome de domínio.</p>
    <p>A oferta "Nome de domínio" compreende:</p>
    <ul>
        <li>Alojamento Web 10 MB grátis</li>
        <li>Conta E-mail 5 GB grátis</li>
        <li>DNSSEC: proteção contra o envenenamento da cache (cache poisoning)</li>
        <li>Easy Redirect: acesso às redes sociais a partir do seu nome de domínio</li>
    </ul>
</body>
```

O resultado no seu browser deverá ser o seguinte:

![Resultado do código HTML no browser](images/create_your_personal_webpage_3.png){.thumbnail}

### Aplicar configuração ao seu conteúdo graças aos estilos CSS

Vimos como estruturar o seu conteúdo em HTML. O resultado é minimalista com um estilo que se limita a tamanhos de títulos e de subtítulos definidos por defeito.
As folhas de estilo permitem alterar a aparência e o comportamento dos elementos codificados em HTML.

#### Princípios

##### **Criação de um ficheiro CSS**

Tal como para os ficheiros HTML, os ficheiros CSS podem ser criados com qualquer editor de texto. A extensão destes ficheiros deve estar em *.css*.

![Colocação do ficheiro CSS](images/create_your_personal_webpage_4.png){.thumbnail}

Agora temos de ligar este ficheiro CSS, que designámos por convenção *estilo.css*, à nossa página HTML. Esta ligação é realizada adicionando um balizas `<link>` no balizador `<head>` no ficheiro index.html:

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>A minha página pessoal</title>
    <link rel="stylesheet" href="style.css">
</head>
```

Para verificar, vamos declarar no nosso estilo uma cor definida para cada elemento `<h1>` da nossa página web. Altere o ficheiro estilo.css adicionando estas linhas:

```html
h1 {
    color: red;
}
```

Este conjunto de instruções é designado por "regra CSS" e significa: todos os elementos HTML `<h1>` terão a cor *(color)* vermelha *(red)*.

Pode testar outra cor no elemento `<h2>`, nos parágrafos e nos elementos da lista:

```html
h1 {
    color: red;
}
 
h2 {
    color: blue;
}
 
p
    color: slategray;
}
 
li
    color: slategray;
}
```

Atualize a página do seu browser pressionando na tecla `F5` do seu teclado: o seu título aparecerá a vermelho.

Os browsers têm estilos predefinidos, incluindo regras específicas para o posicionamento dos componentes. Alteraremos o ficheiro CSS em conformidade e especificaremos uma regra que se aplicará a todos os elementos HTML apresentados pelo browser. Utiliza-se o seletor `*` (estrela), chamado seletor universal, que é colocado no início do ficheiro CSS:

```html
* {
    padding: 0;
    margin: 0;
}
```

Podem ver que os textos estão agora colados nas margens do navegador.

A propriedade padding define o bordo rotativo (margem interior), ou seja, o espaço exterior do bloco que contém o texto (ou qualquer elemento). O esquema seguinte ilustra a correspondência destes termos no chamado "modelo de caixa" em CSS:

![Modelo de caixa CSS](images/create_your_personal_webpage_5.png){.thumbnail}

### Melhorar a estrutura HTML do documento

Posicionámos elementos básicos no seu `<body>`: `h1`, `h2`, `p`, `ul` e `li`.

Na sua última iteração, a linguagem [HTML5](https://html.spec.whatwg.org/) propõe novas balizas que permitem estruturar melhor um documento e enriquecê-lo de um ponto de vista semântico. Um documento clássico (incluindo um suporte tradicional) inclui blocos visualmente identificáveis que podem ser reproduzidos em HTML:

- um cabeçalho, que figurará num balise `<header>` (não confundir com o balise `<head>`);
- conteúdo principal, definido por um balise `<main>`;
- por fim, um pé de página, descrito pelo item `<footer>`.

Cada um destes elementos pode ser utilizado para usos precisos:

- o `header` conterá, por exemplo, o menu de navegação (ele mesmo enquadrado por um balise `<nav>`);
- na `main`, figurarão todos os elementos relacionados com o conteúdo, os quais podem igualmente estruturar o documento de forma ainda mais precisa (`section`, `article`, `aside`, `div`, etc.);
- o `footer` conterá informações mais genéricas, tais como ligações às redes sociais, menções legais, condições gerais de utilização e, possivelmente, outro menu de navegação.

O seu código HTML será apresentado da seguinte forma:

```html
<!DOCTYPE html>
<html lang="pt">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>A minha página pessoal</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
                <img src="images/logo-ovhcloud.png" alt="Log OVHcloud">
        </header>
        <main>
            <h1>Bem-vindo à minha página pessoal</h1>
            <h2>Crie de forma rápida e fácil o seu website</h2>
            <p>A OVHcloud propõe-lhe, na sua oferta Start 10M, gratuitamente um alojamento para qualquer compra de um nome de domínio.</p>
            <p>A oferta "Nome de domínio" compreende:</p>
            <ul>
                <li>Alojamento Web 10 MB grátis</li>
                <li>Conta E-mail 5 GB grátis</li>
                <li>DNSSEC: proteção contra o envenenamento da cache (cache poisoning)</li>
                <li>Easy Redirect: acesso às redes sociais a partir do seu nome de domínio</li>
            </ul>
        </main>
        <footer>
            <p>© 2022 A minha página pessoal</p>
        </footer>
    </body>
</html>
```

### Tornar um elemento interativo

As ligações que permitem navegar de uma página para outra num website são elementos essenciais da web. Para as implementar, é preciso utilizar a baliza `<a>` (_anchor_, âncora), que torna um elemento interativo, acompanhado de um atributo `href` que conterá o URL para o qual apontar. No seguinte exemplo, vamos tornar interativo o logótipo contido na web `<header>`:

```html
<header> 
    <a href="index.html">
        <img src="images/logo-ovhcloud.png" alt="Log OVHcloud">
    </a>
</header>
```

Podemos fazê-lo da mesma forma para tornar o texto interativo:

```html
<p>A oferta <a href="https://www.ovhcloud.com/pt/domains/">"Nome de domínio"</a> compreende:</p>
```

Para apresentar o alvo do link num novo separador, basta adicionar um atributo `target` no seu web `<a>`:

```html
<p>A oferta <a href="https://www.ovhcloud.com/pt/domains/" target="_blank">"Nome de domínio"</a> compreende:</p>
```

### Como armazenar conteúdo no meu alojamento?

Para que as suas páginas e, portanto, o seu site, sejam visíveis para todos, deve colocá-las no seu alojamento (deve ativar o alojamento [como indicado neste guia](https://docs.ovh.com/pt/hosting/ativar-start10m/)).

A transferência dos ficheiros faz-se através de um protocolo dedicado: o **FTP** (para **F**ile **T**ransfer **P**rotocol). Utilize um software dedicado para esta operação, como o [FileZilla](https://filezilla-project.org/download.php?type=client) ou ainda o [Cyberduck](https://cyberduck.io/download/).

### Implementar um site com FTP

Para transferir os seus ficheiros para o seu alojamento, consulte o manual sobre a [utilização do FileZilla](https://docs.ovh.com/pt/hosting/partilhado_guia_de_utilizacao_do_filezilla/).

Depois de transferir os ficheiros para o seu alojamento, poderá visualizar o resultado introduzindo o seu domínio na barra de endereço do seu browser ou pressionando a tecla `F5` do seu teclado para carregar a página se já está no seu site.

> [!warning]
> 
> A nossa infraestrutura compreende um sistema de cache que permite que as suas páginas se apresentem com o mínimo de latência possível. Quando estiver a implementar, é possível que não visualize imediatamente as alterações efetuadas no seu browser. Nesse caso, aguarde alguns segundos e não hesite em refrescar a cache do seu browser com a combinação de teclas `Ctrl` + `F5`.
> 

### Melhorar o seu site com um template

O CSS e o HTML são linguagens fáceis de apreender para um resultado rápido. No entanto, estas linguagens, e em especial o CSS, evoluíram consideravelmente. As folhas de estilos em cascata oferecem mais funcionalidades (animações, degradadas, posição dos elementos na página, etc.), mas tornaram-se mais complexas de codificar.

Para poupar tempo na aparência do seu site e permitir que se concentre no conteúdo, e portanto no que será referenciado, é comum recorrer a *templates* (modelos) para poupar tempo e ter um resultado de qualidade, tanto gráfica como funcional (design, ergonomia, visibilidade em smartphone e tablet).

#### O que é um template? Quais as soluções a utilizar?

Um *template* é um modelo ou um exemplo que se pode reutilizar, adaptando-o ou não. O recurso aos *templates* permite poupar tempo na conceção de um site adaptando elementos já concebidos, oferecendo ao mesmo tempo as qualidades que se podem exigir de um site "profissional". A palavra "tema" também pode ser utilizada.

Existem soluções "Open Source" gratuitas disponíveis na Internet, como [Bootstrap](https://materializecss.com/), [Materialize](https://materializecss.com/), [Foundation](https://get.foundation/) ou ainda [Semantic UI](https://semantic-ui.com/). Estes instrumentos são designados por "framework": trata-se de livrarias que facilitam a criação de websites ou de aplicações web. Eles propõem elementos estandardizados, personalizáveis e reutilizáveis e toda a comunidade propõem *templates* reutilizáveis.

#### Bootstrap

Entre as ferramentas utilizadas pelos programadores web, Bootstrap é o framework mais comum. Desenvolvido originalmente em 2010 por engenheiros que trabalham para o Twitter para harmonizar o desenvolvimento das interfaces desenvolvidas internamente. Disponível sob licença Open Source desde 2011, a Bootstrap evoluiu continuamente de acordo com as alterações tecnológicas (evolução das tecnologias e das utilizações) e continua a ser incontornável.

Alguns exemplos de sites e aplicações web realizados com Bootstrap:

- [https://themes.getbootstrap.com/](https://themes.getbootstrap.com/)
- [https://bootswatch.com/](https://bootswatch.com/)
- [https://bootstrapmade.com/](https://bootstrapmade.com/)
- [https://bootstraptaste.com/](https://bootstraptaste.com/)
- [https://bootstrapthemes.co/](https://bootstrapthemes.co/).

## Saiba mais

Encontrará muitos recursos na web para aprender e melhorar a sua prática, copiar elementos inteiros de código ou porções de código, adicionar funcionalidades ao seu site sem correr o risco de ter erros ou disfunções. Veja alguns sites de referência:

- [Começar com o HTML](https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
- [Guia de referência sobre as balizas HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [Tutorial W3Schools no HTML](https://www.w3schools.com/html/)
- [Tutoriais CSS Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Tutorials)
- [CSS Tutorial W3 Schools](https://www.w3schools.com/css/).

### Reiniciar as suas imagens

Muitas ferramentas gratuitas permitem-lhe retrabalhar as suas ilustrações:

- A aplicação [Fotos](https://apps.microsoft.com/store/detail/photos-microsoft/9WZDNCRFJBH4) Windows 10 e 11
- A aplicação [Fotos](https://support.apple.com/pt-pt/guide/photos/welcome/mac) macOS
- [Paint.Net](https://www.getpaint.net/), [GIMP](https://www.gimp.org/), [darktable](https://www.darktable.org/)
- Lembre-se também das aplicações de retoque de imagem disponíveis nos seus smartphone Android ou iOS.

Encontrará também recursos online:

- [Compressor](https://compressor.io/)
- [ShrinkMe](https://shrinkme.app/)
- [Free Online Image Optimizer](https://kraken.io/web-interface)
- [TinyJPG](https://tinyjpg.com/) e [TinyPNG](https://tinypng.com/).

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
