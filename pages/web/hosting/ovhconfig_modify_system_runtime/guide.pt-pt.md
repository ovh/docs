---
title: Modificar o ambiente de execução do meu alojamento web
excerpt: Modificar o ambiente de execução do meu alojamento web
slug: modificar_o_ambiente_de_execucao_do_meu_alojamento_web
legacy_guide_number: g2149
---


## Como modificar o ambiente de execução?

## No seu Espaço Cliente
Deve aceder ao seu alojamento e clicar em "Modificar a configuração".

![](images/img_4127.jpg){.thumbnail}
Deve, de seguida, modificar a configuração que está em vigor.

![](images/img_4128.jpg){.thumbnail}
Basta que escolha na lista um dos ambientes de execução descritos em baixo.

![](images/img_4129.jpg){.thumbnail}

## No ficheiro .ovhconfig
A atualização efetua-se no seio do ficheiro .ovhconfig na raiz do seu alojamento.
As modificações efetuam-se então de duas formas: no seu Espaço Cliente ou diretamente no seu ficheiro .ovhconfig.

Encontrará mais informações sobre o ficheiro .ovhconfig no seguinte guia: []({legacy}1207)


## Os diferentes ambientes de execução

## Ambiente "legacy"
Trata-se do ambiente histórico nos alojamentos web, sendo a única configuração disponível.


- Este ambiente é ainda mantido. É aconselhado que passe para o ambiente "stable" de forma a beneficiar das últimas atualizações estáveis automaticamente. O ambiente "legacy" pode ser utilizado para antigos websites que utilizem antigas verões de PHP ou softwares não mantidos (por exemplo, um antigo 'conetor' para as bases mysql).


Deve adicionar a seguinte linha no seu ficheiro .ovhconfig*:


```
container.image=legacy
```



## Ambiente "stable"
Este ambiente permite-lhe beneficiar das últimas atualizações estáveis automaticamente.

Deve adicionar a seguinte linha no seu ficheiro .ovhconfig*:


```
container.image=stable
```



## Ambiente "jessie.i386"
Este ambiente permite-lhe beneficiar de Debian Jessia como base.


- É atualmente a versão proposta quando seleciona o ambiente de execução "stable".


Deve adicionar a seguinte linha no seu ficheiro .ovhconfig*:


```
container.image=jessie.i386
```


Escolher jessie.i386 ao invś da stable não é aconselhado mas permite-lhe assegurar que ao invés do que ocorre no ambiente stable, a atualização não levará ao corte do website. Esta situação somente ocorre quando o website utiliza softwares externos nos scripts php.

## Ambiente "testing"
Este ambiente permite-lhe beneficiar em primeira mão de patchs, novas imagens, novas tecnologias mas sem qualquer garantia de correto funcionamento.

Deve adicionar a seguinte linha no seu ficheiro .ovhconfig*:


```
container.image=testing
```


* Trata-se do ficheiro .ovhconfig presente na raiz do seu alojamento web "/".


## Diferença entre as imagens
|Ambientes|legacy|stable|testing|jessie.i386|
|---|---|---|---|
|Ambientes|legacy|stable|testing|jessie.i386|
|Imagem associada|legacy|jessie.i386|jessie.i386|jessie.i386|
|Versão mínima de PHP|4.4|5.3|5.3|5.3|
|Openssl|0.9.8o|1.0.1k (TLS1.2 compatível)|1.0.1k (TLS1.2 compatível)|1.0.1k (TLS1.2 compatível)|
|Extensão php imagick||x|x|x|
|Extensão php memcache|x|x|x|x|
|Extensão php memcached||x|x|x|
|Extensão php mongo (PHP 5.4, 5.5, 5.6)||x|x|x|
|Extensão mysqlnd (en utf-8 unicamente)||x|x|x|
|Extensão redis||x|x|x|
|Opcache**|x|x|x|x|
|Python|2.6|2.7 et 3.4|2.7 et 3.4|2.7 et 3.4|
|Ruby|1.8.7|2.1.5|2.1.5|2.1.5|
|Rails|2.3.5|4.1.8|4.1.8|4.1.8|
|Perl|5.10|5.20|5.20|5.20|
|git|1.7.2.5|2.1.4|2.1.4|2.1.4|


** É necessária a ativação de PHP-FPM: []({legacy}1175)


## A modificação do ambiente de execução afeta todo o meu alojamento?
Sim, a modificação do seu ambiente de execução será repercutido em todo o alojamento.
Não é então possível ter dois ambientes de execução diferentes ao mesmo tempo.


## Sobre que oferta posso modificar o ambiente de execução?
A modificação do ambiente de execução é possível de ser efetuada em todas as ofertas de alojamento Web.


## As sessões de PHP são conservadas aquando de uma alteração ao ambiente de execução?
A alteração do ambiente de execução reinicializa automaticamente todas as sessões PHP.

