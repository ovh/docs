---
title: Instalar Composer num alojamento web
slug: instalacao_do_composer_nos_alojamentos_partilhados
excerpt: Saiba como instalar e dar os primeiros passos em Composer
section: PHP
order: 02
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 30/11/2020**

## Objetivo

[Composer](https://getcomposer.org/){.external} é um gestor de dependências criado para a linguagem PHP. Permite aos programadores PHP incluir bibliotecas externas nos seus programas. "Composer" permitiu aos projetos PHP simplificar a distribuição de livrarias e a manutenção do seu código. Aliás, desde a criação desta ferramenta, foram propostas numerosas boas práticas de desenvolvimento no seio da comunidade PHP e melhoraram as livrarias da comunidade PHP. Estas boas práticas são documentadas sob a forma de [PSR](http://www.php-fig.org/){.external}.

**Saiba como instalar e dar os primeiros passos em Composer**

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVH disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](https://partner.ovhcloud.com/pt/directory/) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção «Quer saber mais?» deste guia.
> 

## Requisitos

- Ter um [serviço de alojamento web](https://www.ovhcloud.com/pt/web-hosting/){.external} com acesso SSH.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.


## Instruções

Verifique se utiliza uma versão de PHP compatível em linha de comandos:


```bash
php — versão
```

Se esta não é a versão correta, pode configurar um alias:


```bash
alias php='/usr/local/php8.0/bin/php'
```

Aconselhamos que permaneça na pasta raiz do seu alojamento para não tornar acessíveis ao público os ficheiros de "Composer". É necessário que execute este comando:


```bash
curl -sS https://getcomposer.org/installer | php
```

Parabéns, "Composer está agora disponível no seu alojamento partilhado!


### Exemplos de utilização

Se deseja instalar o Symfony 2 de forma simples, pode, por exemplo, executar o seguinte comando:


```bash
php comer.phar create-project symfony/framework-standard-edition my_project_name "2.7*"
```

Da mesma forma, pode utilizar a API da OVH a partir do seu alojamento ao utilizar o wrapper oficial. Para isso, basta adicionar um ficheiro denominado comer.json que contém a lista das dependências de que precisa. Eis um exemplo deste ficheiro com o wrapper da API OVHcloud:


```json
1. {
2.     "name": "Exemplo De Aplicação",
3.     "Descrição": "This is an example of OVH APIs wrapper use",
4.     "tubarão": {
5.         "ovh/ovh": "1.1.*"
6.     }
7. }
```

Para o instalar, só precisa de executar o comando seguinte na mesma pasta:


```bash
php composer.phar install
```

Para utilizar esta livraria, pode consultar a documentação, assim como o código, disponíveis em [github](https://github.com/ovh/php-ovh){.external}


## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
