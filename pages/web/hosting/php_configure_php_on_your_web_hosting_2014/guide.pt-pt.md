---
title: Configurar o PHP num Alojamento Web (Alojamentos 2014) OVH
excerpt: Este guia irá guiá-lo na configuração do PHP no seu alojamento web na OVH
id: '1207'
slug: configurar_o_php_num_alojamento_web_alojamentos_2014_ovh
legacy_guide_number: g1207
---


## Como escolher a minha versão PHP?

## No seu Espaço cliente
Encontrará neste guia a explicação sobre como ativar o PHP FPM e como definir a versão de PHP graças ao ficheiro .ovhconfig, embora possa, de forma simples, realizá-lo no seu espaço cliente com a ajuda do seguinte guia: []({legacy}1999)
Para configurar PHP graças ao ficheiro .ovhconfig manualmente, é necessário colocar o ficheiro ".ovhconfig" na raiz do seu alojamento através de FTP.

Para utilizar o PHP 5.6, por exemplo, este ficheiro ".ovhconfig" deverá conter o código:


```
app.engine=php
app.engine.version=5.6
http.firewall=none
environment=production
```




## Quais as versões de PHP que estão disponíveis?
Pode utilizar as seguintes versões PHP:

- 7.0
- 5.6 (versão padrão)
- 5.5 (em breve obsoleta, não recomendada)
- 5.4 (versão obsoleta)
- 5.3 (versão obsoleta)


Nota: as versões inferior não são mantidas pelo editor e iremos pará-las progressivamente. Continuarmos as atualizações em função da saída de novas versões de PHP e iremos parar o suporte às anteriores. Desta forma, deverá atualizar as suas páginas regularmente.
Pode seguir os planos e a progressão dessas operações através dos trabalhos...

Atenção, após a introdução do ficheiro ".ovhconfig", a versão PHP utilizada será aquela que está definida no parâmetro app.engine.version. As diretivas do seu .htaccess como o SetEnv PHP_VER.... serão ignoradas 


## Criei o meu ficheiro "[b][orange].ovhconfig[/orange][/b]" e obtenho o erro de "Not Implemented"
Isso significa que o motor ou a versão especificada no seu ficheiro ".ovhconfig" não existe.
Não hesite em consultar o ficheiro error.log do seu site para obter mais informações sobre o erro.


## O que significa a diretiva environment?
Ela permite especificar a cache dos ficheiros estáticos bem como os comportamentos dos erros de PHP

Em modo development:

- não é aplicado qualquer cache
- os logs de PHP aparecem no seu site (display_errors=On)


Em modo production: (opção padrão)

- os ficheiros estáticos tais como imagens, vídeos ou áudio têm uma "expiração" maior, o que fará com que esses ficheiros fiquem mais tempo armazenados na cache dos browsers.
- os logs de PHP não aparecem no seu site (display_errors=Off)




## O que significa a diretiva http.firewall?
Esta diretiva permite-lhe ativar uma firewall aplicacional do tipo mod_security, para tal deve introduzir: security
de forma padrão, o http.firewall está como none


## Modificar o ambiente de execução graças à diretiva container.image
Os alojamentos Web OVH permitem que modifique o ambiente de execução na qual o seu alojamento funciona.
Esta alteração permite que beneficie de uma configuração estável a longo termo ou que beneficie das últimas atualizações dos softwares fornecidos pela OVH.

Para tal basta que adicione a seguinte linha:


```
; __container.image__
;
; values:
; stable: current recommended and up-to-date environment
; legacy: former stable environment, only receiving security updates, being feature-freezed
; testing: "experimental" environment dedicated to functionalities beta testing before being merged into stable
;
container.image=stable
```


Esta diretiva aplica-se à integralidade do seu alojamento e apenas poderá estar presente no ficheiro .ovhconfig presente na raiz do seu alojamento.

Caso tenha vários ficheiros .ovhconfig em diferentes pastas no mesmo alojamento, a diretiva  "container.image" somente poderá ser definida no ficheiro presente na raiz do seu alojamento*.

Poderá encontrar uma descrição dos diferentes ambiente de execução no seguinte guia:
[]({legacy}2149)

* Neste caso poderá definir apenas a diretiva "container.image" no ficheiro .ovhconfig presente na raiz do alojamento, e o resto das diretivas poderá defini-las nos ficheiros .ovhconfig presentes nas sub-pastas.


## Detalhes sobre o ficheiro .ovhconfig
Veja o detalhe da aplicação do ficheiro de configuração:


```
; ovhconfig
;
; this file must be placed in $HOME/.ovhconfig or in $DOCUMENT_ROOT/.ovhconfig

; __app.engine__
;
; values: php (php engine + opcache accelerator)
; notice: if php, a phpcgi engine will be activated as fallback (if previous engine crash)
;
; php:
; IMPORTANT: register_globals and magic_quotes_gpc are off for security
; php options .htaccess (like php version) are ignored
; phpcgi:
; IMPORTANT this is a fallback or previous system
; in this case __app.engine.version__ will be considerated as AUTO and php version will be old system
; (meaning depending .htaccess or .phpX extension)
;
app.engine=php

; __app.engine.version__ specify version of your engine
;
; for php:
; default: 5.6
; for phpcgi:
; this options is ignored (= fallback in AUTO)
;
app.engine.version=5.6

; __http.firewall__ used to add application firewall (filter http requests)
;
; values: none | security
; default: none
;
http.firewall=none

; __environment__
;
; values: production | development
;
; production:
; apache will maximise local cache
; mod_expires will grow up TTL of js, css, pdf, images, video, audio
; you can override it changing expiration explicitly or in your .htaccess
; feel free to look on our guide.
; development:
; no expiration is added, files are not locally in cache,
; will speed up tests but decrease performances
;
; choosen environment will also be available in your variable ENVIRONMENT unix env
;
; default: production
;
environment=development
```




## Quais as versões de PHP que estão disponíveis?
Se utiliza um CMS (tipo WordPress, Joomla, PrestaShop, etc), poderá encontrar as informações úteis na documentação disponível no seu site oficial, ou no espaço de administração do módulo.
Se o CMS que possui é ainda mantido e atualizado pelo seu editor, e a sua versão está atualizada, não deverá ter problemas em suportar as últimas versões de PHP. A maioria dos CMS integra uma ferramenta de atualização simplificada, permitindo que o atualize facilmente. Alguns gerem-se sozinhos, como o Wordpress a partir da versão 7.3, no final de 2013.

Se o seu site é baseado num desenvolvimento próprio ou uma outra solução personalizada, deverá determinar qual(ais) a(s) versão(ões) de PHP se adequa(m).

Para informação, veja a lista das alterações incompatíveis entre as versões de PHP:
> de PHP 4 para a versão PHP 5 : http://www.php.net/manual/fr/migration5.incompatible.php
> de PHP 5.1 para a versão PHP 5.2 : http://www.php.net/manual/en/migration52.incompatible.php
> de PHP 5.2 para a versão PHP 5.3 : http://www.php.net/manual/en/migration53.incompatible.php
> de PHP 5.3 para a versão PHP 5.4 : http://www.php.net/manual/en/migration54.incompatible.php
> de PHP 5.4 para a versão PHP 5.5 : http://www.php.net/manual/en/migration55.incompatible.php
> de PHP 5.5 para a versão PHP 5.6 : http://www.php.net/manual/en/migration56.incompatible.php
> de PHP 5.6 à PHP 7.0 : http://php.net/manual/en/migration70.deprecated.php


## Como escolher a minha versão PHP?
Após determinar qual a versão PHP que deve utilizar poderá utilizar o seguinte guia para o ajudar com a modificação:
[]({legacy}1999)


## Onde colocar o meu ficheiro .ovhconfig?

## Dispõe de um alojamento com um único website
Na maior parte dos casos, apenas dispõe de um só website no seu alojamento.

Lembramos que é possível a edição e a geração do ficheiro .ovhconfig diretamente no seu Espaço Cliente, e poderá consultar o seguinte guia para o ajudar nessa operação: []({legacy}1999)

Se deseja efetuá-lo manualmente, o ficheiro .ovhconfig deve ser colocado na raiz do seu alojamento, ou seja, na primeira pasta ("/") como na imagem.


- As sub-pastas utilizarão os parâmetros deste ficheiro.



![](images/img_3764.jpg){.thumbnail}

## Definiu vários "domínios associados" que não necessitam de configurações diferentes.
Pode deste caso consultar o próximo parágrafo.


- Todos os domínios associados utilizarão os parâmetros do ficheiro .ovhconfig presente na raiz do seu alojamento.



## Definiu vários "domínios associados" que necessitam de diferentes configurações.
É possível definir uma versão de PHP diferente para cada um dos domínios associados, e nesse caso é necessário colocar um ficheiro .ovhconfig em cada uma das pastas alvo definidas para os seus domínios associados.

Se nenhum ficheiro .ovhconfig está presente na pasta alvo do seu domínio associado, será utilizado o ficheiro .ovhconfig presente na raiz do seu alojamento.

Desaconselhamos a utilização de diferentes ambientes num mesmo alojamento ao utilizar ficheiros .ovhconfig diferentes. Esta utilização poderá levar a incompatibilidades entre versões de PHP. Sugerimos que segmente os seus websites por diferentes utilizações para não encontrar problemas para este tipo de utilizações. 


## É possível modificar a configuração PHP do meu alojamento Web?
Diferentes configurações estão disponíveis no seu alojamento Web, e poderá encontrar uma descrição dos diferentes ambientes de execução no seguinte guia:
[]({legacy}2149)

