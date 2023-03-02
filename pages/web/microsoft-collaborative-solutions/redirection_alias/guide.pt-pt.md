---
title: 'Utilizar os alias e reencaminhamentos de e-mail'
excerpt: 'Saiba como gerir os seus alias e reencaminhamentos de e-mail'
slug: email-redirection-guide
section: 'Funcionalidades das contas Exchange'
order: 01
routes:
  canonical: "https://docs.ovh.com/pt/emails/mail_partilhado_guia_dos_reencaminhamentos_email/"
updated: 2020-05-20
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 01/02/2023**

## Objetivo

Neste guia encontrará diferentes informações e ajudas relativas à configuração dos seus reencaminhamentos e alias de e-mail, por exemplo para enviar e-mails recebidos num endereço A para um endereço B.

**Saiba como gerir os seus alias e reencaminhamentos de e-mail.**

### O que é um reencaminhamento de e-mail?

Um reencaminhamento permite modificar o trajeto inicial de um e-mail para um ou vários outros endereços de e-mail.

Por exemplo, ao enviar um e-mail para **contact@mydomain.ovh**, este deverá ser igualmente enviado para **john.smith@otherdomain.ovh**. Isto permite transmitir automaticamente um e-mail destinado a **contact@mydomain.ovh** para **john.smith@otherdomain.ovh**.

### O que é um alias de e-mail?

Contrariamente ao reencaminhamento, o endereço de e-mail associado ao alias não é um endereço que se possa consultar, trata-se de uma "máscara".

Criar um alias para o seu endereço de e-mail permite-lhe comunicar um endereço "máscara" aos seus contactos, sem ter de comunicar o seu endereço de e-mail pessoal ao remetente. Um endereço de e-mail pode ter vários alias.

Por exemplo, o seu endereço de e-mail é **john.smith@mydomain.ovh** e o seu alias **information@mydomain.ovh**. Pode então comunicar aos seus contactos o endereço **information@mydomain.ovh** e receber os seus e-mails em **john.smith@mydomain.ovh**, sem que o remetente tenha conhecimento de **john.smith@mydomain.ovh**.

### Reencaminhamento e alias em imagem <a name="diagram"></a>

- **O reencaminhamento simples (esquema n°1 abaixo)**: o e-mail é enviado diretamente para o endereço de reencaminhamento. o destinatário inicial não recebe o e-mail.

- **O reencaminhamento com cópia local (esquema n°2 abaixo)**: o e-mail é enviado ao destinatário inicial e ao endereço de reencaminhamento.

- **O alias de e-mail (esquema n°3 abaixo)**: o e-mail é enviado ao alias que o devolve ao destinatário no qual o alias foi configurado.

![emails](images/schema-redirect.png){.thumbnail}

> [!primary]
>
> Tenha em conta que é possível configurar um reencaminhamento para vários endereços de e-mail.

## Requisitos

- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).
- Dispor de uma solução de e-mail OVHcloud previamente configurada (**MX Plan**, proposta entre as nossas [ofertas de alojamento web](https://www.ovhcloud.com/pt/web-hosting/), incluída num [alojamento Start10M gratuito](https://www.ovhcloud.com/pt/domains/free-web-hosting/) ou encomendada separadamente como solução autónoma, como o [Hosted Exchange](https://www.ovhcloud.com/pt/emails/hosted-exchange/) ou o [Email Pro](https://www.ovhcloud.com/pt/emails/email-pro/)).

## Instruções

Siga o nosso guia [Utilizar os alias e reencaminhamentos de e-mail](https://docs.ovh.com/pt/emails/mail_partilhado_guia_dos_reencaminhamentos_email/) na secção "Hosted email - MX Plan".