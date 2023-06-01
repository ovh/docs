---
title: "Proteger a interface de administração do seu site com um ficheiro .htaccess"
slug: partilhado-htaccess-como-protecao-acesso-a-um-diretorio-por-autenticacao
excerpt: "Encontre aqui como proteger o acesso à administração do seu site com um ficheiro .htaccess"
section: Reescrita e autenticação
order: 02
updated: 2023-06-01
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 01/06/2023**

## Objetivo

Este tutorial explica como implementar uma autenticação "utilizador/palavra-passe" para aceder a todo ou parte do seu website através de um browser. 

Isto utilizando dois ficheiros de configuração (HTTP) Apache que pretende colocar no [espaço FTP](/pages/web/hosting/ftp_connection/) do seu alojamento Web: 

- "**.htaccess**": para mais informações sobre as funcionalidades deste ficheiro, consulte o nosso tutorial sobre as ["Operações possíveis com um ficheiro ".htaccess"](/pages/web/hosting/htaccess_what_else_can_you_do/).
- "**.htpasswd**": para além deste tutorial, consulte a [documentação oficial Apache](https://httpd.apache.org/docs/2.4/en/programs/htpasswd.html) relativa a este ficheiro.

> [!warning]
>
> A OVHcloud disponibiliza serviços cuja configuração, gestão e responsabilidade lhe incumbem. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](https://partner.ovhcloud.com/pt/directory/) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção ["Quer saber mais?"](#go-further) deste manual.
>
> Os exemplos que se seguem são implementados em ficheiros denominados ".htaccess" e ".htpasswd". Atenção, as regras que define nestes ficheiros têm consequências diretas no seu website. Verifique sempre as regras que adicionou antes de as aplicar ao seu website. 
> 

**Descubra como proteger um diretório ou o acesso à parte administrador do seu website através de uma autenticação com os ficheiros ".htaccess" e ".htpasswd".**

## Requisitos

## Instruções

## Quer saber mais? <a name="go-further"></a>