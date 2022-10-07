---
title: 'Configurar o ficheiro .ovhconfig do alojamento web'
slug: configurar-ficheiro-ovhconfig
excerpt: 'Descubra o ficheiro .ovhconfig e saiba como alterá-lo'
section: Configuração do alojamento
order: 03
---

**Última atualização: 03/01/2019**

## Sumário

Existem diferentes razões pelas quais tem de configurar o seu [alojamento web](https://www.ovhcloud.com/pt/web-hosting/){.external}. Por isso, a OVH criou um ficheiro que permite alterar determinadas definições: o **.ovhconfig**.

**Descubra o ficheiro .ovhconfig e saiba como configurá-lo.**

## Requisitos

- Ter um serviço de [alojamento web OVH](https://www.ovhcloud.com/pt/web-hosting/){.external} compatível.
- Ter a palavra-passe do utilizador FTP para aceder ao seu espaço de armazenamento. 

## Instruções

Ao alterar o ficheiro .ovhconfig do seu alojamento web, estará a alterar a respetiva configuração e, por conseguinte, a que o seu website utiliza. Uma alteração inadequada poderia, por exemplo, impossibilitar o acesso ao seu website. Por isso, certifique-se de que a configuração indicada no ficheiro .ovhconfig seja tecnicamente compatível com o seu website.

A alteração do ficheiro .ovhconfig pode ser realizada de duas formas:

- **alterando manualmente o ficheiro .ovhconfig**: esta solução é mais técnica e precisa de aceder ao seu espaço de armazenamento. Este manual apenas irá abordar este método;

- **através de um assistente de configuração a partir da Área de Cliente OVH**: esta solução é menos técnica e requer uma ligação à Área de Cliente, onde poderá escolher as alterações que pretende realizar. Para mais informações, consulte o manual [“Alterar a configuração do alojamento web”](https://docs.ovh.com/pt/hosting/modificar_o_ambiente_de_execucao_do_meu_alojamento_web/){.external}.

Caso pretenda alterar o ficheiro .ovhconfig manualmente, continue a ler este manual. 

### Alterar o ficheiro .ovhconfig

#### 1 - Aceder ao espaço de armazenamento

Tenha consigo o seu nome de utilizador FTP, a respetiva palavra-passe e o endereço do servidor FTP. De seguida, ligue-se ao seu espaço de armazenamento. Para mais informações, consulte o manual “[Aceder ao espaço de armazenamento](https://docs.ovh.com/gb/en/hosting/web_hosting_how_to_get_my_website_online/#2-log-in-to-your-storage-space){.external}” (versão em inglês).

**Se já não possuir estas informações**, aceda à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} e clique em `Alojamentos`{.action}. De seguida, selecione o nome do alojamento correspondente e aceda à janela `FTP - SSH`{.action}. Aqui, poderá encontrar todas as informações que lhe permitem ligar-se. Para mais informações sobre a palavra-passe do utilizador FTP, consulte o manual [“Modificar a palavra-passe de um utilizador FTP”](https://docs.ovh.com/gb/en/hosting/modify-ftp-user-password/) (versão em inglês).

![ovhconfig](images/ovhconfig-step1.png){.thumbnail}

#### 2 - Recuperar ou criar o ficheiro .ovhconfig

Depois de aceder ao espaço de armazenamento, pode visualizar todos os ficheiros alojados. Na raiz do seu alojamento (que pode ser representada por um “/”), deverá poder encontrar o ficheiro .ovhconfig.

![ovhconfig](images/ovhconfig-step2.png){.thumbnail}

A partir daqui, terá duas possibilidades:

- **o ficheiro .ovhconfig está presente**: descarregue-o para a sua máquina. Recomendamos que o copie antes de o alterar, assim poderá restaurar o ficheiro de origem caso seja necessário.
- **o ficheiro .ovhconfig não está presente**: uma vez que o ficheiro não existe, crie-o na sua máquina e dê-lhe o nome “.ovhconfig”.

#### 3 - Alterar o ficheiro .ovhconfig

Quando tiver o ficheiro .ovhconfig, pode editá-lo. Para o fazer, utilize um programa de edição de texto. O seu ficheiro .ovhconfig deve conter um código deste género:

```php
app.engine=php
app.engine.version=8.0

http.firewall=none
environment=production

container.image=stable64
```

Personalize os valores das variáveis em função da configuração que pretende utilizar com o seu alojamento web. 

|Variáveis|Detalhes|
|---|---|
|app.engine|Permite alterar o motor PHP utilizado pelo alojamento. Insira “php” para ativar o acelerador PHP-FPM e “phpcgi” para o desativar.|
|app.engine.version|Permite definir a [versão de PHP](https://www.ovhcloud.com/pt/web-hosting/uc-programming-language/){.external} utilizada pelo alojamento. Indique a versão que pretende utilizar.|
|http.firewall|Permite ativar ou desativar a [firewall fornecida com os alojamentos web da OVH](https://www.ovhcloud.com/pt/web-hosting/options/){.external}. Insira “security” para ativar ou “none” para desativar.|
|environment|Permite gerir o comportamento da cache dos ficheiros estáticos do seu website, assim como o tratamento dos erros PHP. Insira “production” para maximizar a implementação de cache e ocultar os erros PHP, ou “development” para não aplicar nenhuma cache e apresentar os erros PHP.|
|container.image|Permite alterar o ambiente de execução utilizado pelo alojamento. Indique um motor à sua escolha. Para mais informações, consulte a secção [“Descobrir as configurações disponíveis”](https://docs.ovh.com/pt/hosting/modificar_o_ambiente_de_execucao_do_meu_alojamento_web/#descobrir-as-configuracoes-disponiveis_1){.external} do manual "Alterar a configuração do alojamento web".|

> [!warning]
>
> Quando escolher o ambiente de execução "estável64", verifique que o seu site é compatível com o ambiente de 64 bits.

A seguir, poderá encontrar os detalhes de aplicação do ficheiro .ovhconfig:

```php
; ovhconfig
;
; this file must be placed in $HOME/.ovhconfig or in $DOCUMENT_ROOT/.ovhconfig

; __app.engine__
;
; values: php (php engine + opcache accelerator)
; notice: if php, a phpcgi engine will be activated as fallback (if previous engine crash)
;
;   php:
;       IMPORTANT: register_globals and magic_quotes_gpc are off for security
;       php optiones .htaccess (like php version) are ignored
;   phpcgi:
;       IMPORTANT this is a fallback to previous system
;       in this case __app.engine.version__ will be considerated as AUTO and php version will be old system
;       (meaning depending .htaccess or .phpX extension)
;
app.engine=php

; __app.engine.version__ specify version of your engine
;
; for php:
;   default: 8.0
; for phpcgi:
;   this options is ignored (= fallback in AUTO)
;
app.engine.version=8.0

; __http.firewall__ used to add application firewall  (filter http requests)
;
; values: none | security
; default: none
;
http.firewall=none

; __environment__
;
; values: production | development
;
;   production:
;       apache will maximise local cache
;       mod_expires will grow up TTL of js, css, pdf, images, video, audio
;       you can override it changing expiration explicitly in your .htaccess
;       feel free to look on our guide.
;   development:
;       no expiration is added, files are not locally in cache,
;       will speed up tests but decrease performances
;
; choosen environment will also be available in your variable ENVIRONMENT unix env
;
; default: production
;
environment=production

; __container.image__
;
; values: legacy | stable | stable64
;
container.image=stable64
```

#### 4 - Descarregar o ficheiro .ovhconfig para o espaço de armazenamento

Depois de alterar o ficheiro .ovhconfig, só precisa de o descarregar para o seu espaço de armazenamento. Para isso, precisa de ter estabelecido uma ligação e de estar na raiz do seu espaço de armazenamento (que pode ser representada por um “/”). Em seguida, descarregue o ficheiro .ovhconfig  que acabou de alterar. Se já existir um ficheiro, substitua-o.

### Utilizar os ficheiros .ovhconfig de forma avançada

Se utiliza o seu alojamento web para alojar vários websites, terá certamente configurado multi-sites. São várias as razões pelas quais poderá querer beneficiar de uma versão de PHP diferente para determinados multi-sites.

Para isso, deverá criar um ficheiro .ovhconfig para os multi-sites que contêm a versão de PHP desejada. Para mais informações, consulte a secção [“Alterar o ficheiro .ovhconfig”](https://docs.ovh.com/pt/hosting/configurar-ficheiro-ovhconfig/#alterar-o-ficheiro-ovhconfig){.external} deste manual. Quando descarregar o ficheiro .ovhconfig para o seu espaço de armazenamento, certifique-se de que o faz na pasta raiz do multi-site. Pode encontrar a pasta raiz dos seus multi-sites na Área de Cliente, na janela `Multi-site`{.action} do alojamento correspondente.

> [!warning]
>
> Não é possível especificar um segundo ambiente de execução. Apenas é tido em conta o ambiente indicado no ficheiro .ovhconfig, que está na raiz do seu espaço de armazenamento.
> 

![ovhconfig](images/ovhconfig-step3.png){.thumbnail}

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}
