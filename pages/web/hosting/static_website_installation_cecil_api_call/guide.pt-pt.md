---
title: "Tutorial - Adicionar conteúdo dinâmico a uma página web estática gerada com Cecil"
slug: static-site-generator-cecil-use-api
excerpt: "Saiba como adicionar uma chamada a uma API externa a partir da sua página web estática"
section: 'Tutoriais'
order: 05
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 20/01/2023**

## Objetivo

Este tutorial explica como utilizar o gerador de site [Cecil](https://cecil.app){.external} para apresentar o conteúdo de uma página dinâmica. Tudo isto chamando uma API para recuperar e apresentar informações numa página gerada via **Cecil**.

**Saiba como adicionar uma chamada a uma API externa a partir da sua página web estática.**

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Se tiver dificuldades em seguir os passos deste tutorial, recomendamos que recorra a um [prestador de serviços especializado](https://partner.ovhcloud.com/pt/). Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção ["Quer saber mais?"](#go-further) deste manual.
>

## Requisitos

- Ter um [serviço de alojamento web da OVHcloud](https://www.ovhcloud.com/pt/web-hosting/) com acesso SSH. Este acesso permite instalar, em linha de comandos, uma ou várias soluções alternativas às propostas por defeito nas nossas ofertas de alojamento web.
- Estar familiarizado com a introdução em linha de comandos.
- Ter instalado e configurado a aplicação **Cecil** no seu alojamento (consulte o nosso tutorial sobre [a instalação e a configuração do Cecil](https://docs.ovh.com/pt/hosting/install-configure-cecil/)).

## Instruções

O exemplo escolhido consiste em utilizar uma das API de um serviço que fornece dados meteorológicos. Isto em função de uma cidade escolhida pelo utilizador.

As etapas são as seguintes:

- criar uma nova página no Cecil e adicionar esta página ao menu do website;
- criar uma conta e recuperar a chave que permite fazer pedidos na API meteorológica
- alterar o ficheiro `.md` criado adicionando código HTML;
- adicionar `assets` (JavaScript e CSS);
- gerar e testar a solução.

### Criar uma nova página

Prepare o seu ambiente ligando-se através de SSH ao seu alojamento web e adira ao tutorial "[Instalar e configurar Cecil](https://docs.ovh.com/pt/hosting/install-configure-cecil/)" para instalar a sua aplicação **Cecil** num diretório dedicado.

Crie um diretório e coloque-se dentro:

```bash
mkdir myWebSite
cd myWebSite
```

### Utilização da API OpenWeather

Para este tutorial, vamos utilizar uma API fornecida pelo site [OpenWeather](https://openweathermap.org/){.external}. Permite conhecer as informações meteorológicas em função do nome de uma cidade.

Crie uma conta em <https://home.openweathermap.org/users/sign_up><br>
Uma vez a sua conta validada (através de um e-mail de confirmação), aceda ao menu "My API keys". Uma chave foi gerada de forma padrão, recupere-a e guarde-a para o resto deste tutorial.

![Open Weather API key](images/static_website_installation_cecil_api_call01.png){.thumbnail}

### Adicionar o código HTML

Crie uma nova página com o seguinte comando:

```bash
php cecil.phar new:page weather.md
```

De seguida, edite a página gerada:

```bash
nano pages/weather.md
```

Altere o cabeçalho do ficheiro para que a página apareça no menu:

```
---
title: "Weather"
data: 2022-11-28
published: true
menu: main
---
```

Depois do cabeçalho, adicione o código HTML para mostrar a cidade escolhida, as temperaturas reenviadas pela API e um botão para mudar de parâmetro:

```html
---
title: "Weather"
date: 2022-11-28
published: true
menu: main
---
<h1>Weather</h1>
<div>
    <span id="city">Roubaix</span>
    <div id="temperature"><span id="temperatureValue"></span> °C</div>
    <div id="modify">Change city</div>
</div>
```

Gerar a página HTML com o seguinte comando:

```bash
php cecil.phar build
```

Verifique o resultado no seu browser e clique na ligação "Weather" que foi adicionada ao menu principal:

![Teste nova página](images/static_website_installation_cecil_api_call02.png){.thumbnail}

### Adicionar o código JavaScript

Não é possível adicionar um `<script>` num ficheiro Markdown. Deverá modificar o template fornecido de forma padrão.

#### Modificar o template

Os templates estão dispostos no diretório `layouts`. Pode visualizá-las através do seguinte comando:

```bash
ls -la layouts
```

O ficheiro contém um diretório de `blog` e um ficheiro `index.html.twig`:

![layouts diretory](images/static_website_installation_cecil_api_call03.png){.thumbnail}

Abra o ficheiro `index.html.twig`:

![Cecil layouts index file](images/static_website_installation_cecil_api_call04.png){.thumbnail}

O ficheiro faz referência a um template que não está presente no diretório. Este ficheiro (e outros) está no ficheiro `cecil.phar`. As extensões `.phar` designam arquivos de ficheiros PHP que podem ser manipulados sem serem descomprimidos.
Descomprima os ficheiros deste arquivo para os tornar visíveis:

```bash
php cecil.phar util:extract
```

Consulte novamente o conteúdo do diretório `layouts`:

![Cecil layouts diretory including uncompressed files](images/static_website_installation_cecil_api_call05.png){.thumbnail}

Modifique o template por defeito para inserir um balise `<script>` que conterá o código que permite a chamada à API:

```bash
nano layouts/_default/page.html.twig
```

Esta baliza e o seu conteúdo devem ser colocados antes da `</body>` na nota de rodapé:

```twig
    </footer>
    {%- include 'partials/googleanalytics.js.twig' with {site} only ~%}
    {% block javascript %}
    <script src="{{ asset('script.js', {minify: true}) }}"></script>
    {% endblock %}
  </body>
</html>
```

Quando um ou vários ficheiros `assets` são modificados, reconstrua a cache com o seguinte comando:

```bash
php cecil.phar cache:clear:assets
```

Se as alterações não forem efetivas no seu browser, esvazie a cache deste último.
Também pode eliminar os ficheiros gerados no seu alojamento web:

```bash
php cecil.phar clear
```

De seguida, reconstrua a sua solução com o seguinte comando:

```bash
php cecil.phar build
```

#### Adicionar o ficheiro JavaScript

Os ficheiros JavaScript, como os ficheiros CSS, devem ser colocados no diretório `assets`. Pode organizá-las em diferentes diretórios.

Crie o ficheiro `script.js` mencionado anteriormente na raiz da diretoria `assets`:

```bash
nano assets/script.js
```

Substitua o valor da variável `apiKey` pela chave anteriormente recuperada no site [OpenWeather](https://openweathermap.org/){.external}

```javascript
let apiKey = '123456789'; // Substitua este valor
let city = 'Roubaix'; // Indique aqui a cidade predefinida que será apresentada na página meteorológica
getTemperature(city);  // Chamada da função que chama a API com o parâmetro 'city'

// Adicionar um evento ao click do botão "Change city"
let button = document.querySelector('#modify');
button.addEventListener('click', () => {
    city = prompt('Choose a city');
    getTemperature(city);
});

// Função de chamada da API utilizando um objeto XMLHttpRequest para um pedido assíncrono
function getTemperature(city) {
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey + '&units=metric';
    let xhrQuery = new XMLHttpRequest();
    xhrQuery.open('GET', url);
    xhrQuery.responseType = 'json';
    xhrQuery.send();

    xhrQuery.onload = function() {
        if (xhrQuery.readyState === XMLHttpRequest.DONE) {
            if (xhrQuery.status === 200) {
                let city = xhrQuery.response.name;
                let temperature = xhrQuery.response.main.temp;
                document.querySelector('#city').textContent = city;
                document.querySelector('#temperatureValue').textContent = temperature;
            } else {
                alert('A problem has occurred, please come try later.');
            }
        }
    };
}
```

### Testes

Consulte o seu website através de um browser :

![Web page with JavaScript running](images/static_website_installation_cecil_api_call06.png){.thumbnail}

Clique em "Mude de cidade" e introduza o nome de um município:

![Selet a new city](images/static_website_installation_cecil_api_call07.png){.thumbnail}

![Página updated](images/static_website_installation_cecil_api_call08.png){.thumbnail}

### Conclusão

Este tutorial apresenta-lhe um exemplo de integração de dados dinâmicos recuperados de fontes externas através das API. Construa e faça viver um website alterando manualmente o conteúdo destas páginas ou crie novas páginas. Tudo isto enriquecendo o seu conteúdo de outros websites.

## Quer saber mais?

- Algumas API a testar no seu website
    - [Numbers API](http://numbersapi.com/#42){.external}
    - [NASA](https://api.nasa.gov/){.external}
    - [News API](https://newsapi.org/){.external}
    - [Polygon.io](https://polygon.io/){.external}
    - uma lista de [API públicas](https://github.com/public-api-lists/public-api-lists){.external}
- As [encomendas Cecil](https://cecil.app/documentation/commands/){.external}.

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
