---
title: Ativar a otimização do PHP no seu Alojamento Partilhado OVH
excerpt: Este guia irá ajudá-lo na ativação do PHP-FPM no seu alojamento web partilhado na OVH, com vista a melhorar os tempos de resposta PHP
slug: ativar_a_otimizacao_do_php_no_seu_alojamento_partilhado_ovh
section: PHP
order: 03
---


## O que é o PHP-FPM?
Nós adaptámos PHP-FPM à nossa infraestrutura Web de forma a podermos tirar beneficio da mesma com o objetivo de acelerar as respostas PHP.

Está compilado com o opcode-caching que permite minimizar os pedidos ao sistema de armazenamento de ficheiros bem com o tempo de processamento do seu código PHP.

Obtemos desta forma performances que se revelaram nos laboratórios de testes, 7 vezes mais rápidas quanto comparadas ao anterior mecanismo.

## No seu Espaço cliente
Encontrará neste guia a explicação sobre como ativar o PHP FPM e como definir a versão de PHP graças ao ficheiro .ovhconfig, embora possa, de forma simples, realizá-lo no seu espaço cliente com a ajuda do seguinte guia: []({legacy}1999)

Atenção: a partir de PHP-FPM, e por razões de segurança, as seguintes opções são desativadas (depreciadas pelo PHP):


```
register_globals
magic_quotes_gpc
```



Concretamente ao magic_quote_gpc :


- Sem PHP-FPM :


PHP 5.4: magic_quotes_gpc desativado


- Com PHP-FPM :


PHP 5.4: magic_quotes_gpc desativado
PHP 5.5: magic_quotes_gpc desativado

## Atenção
É aconselhada a utilização das versões mais recentes de PHP (5.5 ou 5.6) na medida em que as antigas versões deixaram de ser mantidas pelo editor e poderão conter falhas de segurança.


## Como ativar o PHP-FPM?
Basta colocar o ficheiro .ovhconfig na raiz do seu website via FTP

ATENÇÃO: O ficheiro .ovhconfig está presente de forma padrão nos Alojamentos Web 2014. Nas anteriores ofertas basta que o crie e o coloque na raiz do seu alojamento (/).
Este ficheiro não é adicionado automaticamente nos antigos Planos e aquando de uma alteração da oferta de alojamento, uma vez que certos parâmetros poderão não ser compatíveis com a versão de PHP que utiliza.

NB: O ficheiro .ovconfig somente poderá ser colocado na raiz ou numa pasta de primeiro nível, não é possível utilizar diferentes ficheiros para coabitar diferentes configurações num esmo alojamento (exceto [para multi-domínios declarados corretamente](https://www.ovh.com/fr/g1332.mise-en-place-multidomaine)).

O ficheiro .ovhconfig deverá conter o código:


```
app.engine=php
app.engine.version=5.6
http.firewall=none
environment=production
```


Se o PHP-FPM falhar, o motor utilizará por segurança o antigo motor PHP.


## Quais são as versões de PHP que estão disponíveis?
Pode utilizar as seguintes versões PHP:

- 7.0
- 5.6 (versão padrão)
- 5.5 (em breve obsoleta, não recomendada)
- 5.4 (versão obsoleta)
- 5.3 (versão obsoleta)

- ionCube está igualmente disponível

 Atenção, uma vez colocado o .ovhconfig no local correto, a versão PHP utilizada é aquela que está definida pelo app.engine.version. As diretivas do seu .htaccess como SetEnv PHP_VER ... serão ignoradas



## Criei o meu .ovhconfig e obtenho o erro "Not implemented"
Isto significa que o motor ou a versão especificada no seu .ovhconfig não existe.
Não hesite em consultar o error.log do seu site para mais informações sobre o erro.


## Que significa a diretiva "environment"?
Ela permite especificar a cache dos ficheiros estáticos bem como os comportamentos dos erros de PHP
Em modo development:

- não é aplicado qualquer cache
- os logs de PHP aparecem no seu site (display_errors=On)


Em modo production: (opção padrão)

- os ficheiros estáticos tais como imagens, vídeos ou áudio têm uma "expiração" maior, o que fará com que esses ficheiros fiquem mais tempo armazenados na cache dos browsers.
- os logs de PHP não aparecem no seu site (display_errors=Off)




## O que significa a diretiva http.firewall?
Esta diretiva permite-lhe ativar uma firewall aplicacional do tipo mod_security e, para tal, deve introduzir: security

De forma padrão, o http.firewall está como none


## IonCube está disponível com o PHP-FPM?
Sim, o IonCube está disponível com as seguintes versões:

- 5.6
- 5.5
- 5.4


Para o utilizar, é necessário servir-se do codificador IonCube para os seus scripts PHP e os mesmos poderão funcionar no seu alojamento partilhado. Para mais informações, poderá aceder à [FAQ IonCube](http://www.ioncube.com/faq.php).


## Como desativar o PHP-FPM?
Basta que introduza o seguinte código no seu .ovhconfig:


```
app.engine=phpcgi
app.engine.version=AUTO
```




## Detalhes sobre o ficheiro .ovhconfig
Veja o detalhe da aplicação do ficheiro desta configuração:


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
; php optiones .htaccess (like php version) are ignored
; phpcgi:
; IMPORTANT this is a fallback to previous system
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
; you can override it changing expiration explicitly in your .htaccess
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



