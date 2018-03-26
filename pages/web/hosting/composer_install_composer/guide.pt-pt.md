---
title: Instalação do "Composer" nos alojamentos partilhados
excerpt: Instalação do "Composer" nos alojamentos partilhados
id: '1894'
slug: instalacao_do_composer_nos_alojamentos_partilhados
legacy_guide_number: g1894
---


## Pré-requisitos
Nas ofertas partilhadas OVH pode utilizar o "Composer" a partir das ofertas PRO. Esta limitação deve-se ao facto de que é necessário um acesso SSH na medida em que se trata de uma ferramenta em linha de comandos.


## Instalação

## Ligue-se por SSH
Verifique que possui a última versão de PHP (5.6) disponível através da linha de comandos:


```
php --version
```


Se não é a correta versão poderá configurar um alias:


```
alias php='/usr/local/php5.6/bin/php'
```


Aconselhamos que fique na pasta raiz do seu alojamento para não tornar os ficheiros do "Composer" acessíveis ao público.

## Download e instalação
Deve executar o seguinte comando:

[code]curl -sS https://getcomposer.org/installer | php[/code

Parabéns, "Composer" está atualmente disponível no seu alojamento partilhado!


## Exemplos de utilização
Se deseja instalar o Symfony 2, poderá efetuá-lo com o seguinte comando:


```
php composer.phar create-project symfony/framework-standard-edition my_project_name "2.7.*"
```


Poderá utilizar da mesma forma a API da OVH a partir do seu alojamento ao utilizar o "wrapper" oficial. Para tal, basta que adicione um ficheiro com o nome de composer.json que contenha a lista de dependências de que necessita. Deixamos um exemplo com o "wrapper" da API OVH:


```
{
"name": "Example Application",
"description": "This is an example of OVH APIs wrapper usage",
"require": {
"ovh/ovh": "1.1.*"
}
}
```


Para o instalar, basta efetuar o seguinte comando na mesma pasta:


```
php composer.phar install
```


Para utilizar esta "libraria" poderá consultar a documentação, bem como o código, disponível no [github](https://github.com/ovh/php-ovh)

