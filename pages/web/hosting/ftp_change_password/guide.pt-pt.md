---
title: 'Alterar a palavra-passe de um utilizador FTP'
slug: alterar-palavra-passe-utilizador-ftp
excerpt: 'Saiba como alterar a palavra-passe de um utilizador FTP criado num alojamento web da OVH'
section: 'FTP e SSH'
order: 1
---

**Última atualização: 06/02/2019**

## Sumário

Os planos de alojamento web da OVH dão acesso a um espaço de armazenamento que permite publicar ficheiros num site. O acesso a este espaço é possível através de um utilizador FTP e da respetiva palavra-passe.

**Saiba como alterar a palavra-passe de um utilizador FTP criado no seu alojamento web da OVH.**

## Requisitos

- Ter um serviço de [alojamento web OVH](https://www.ovhcloud.com/pt/web-hosting/){.external}.

- Ter acesso à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

## Instruções

### 1 - Aceder à gestão dos utilizadores FTP

Para isso, aceda à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, clique em `Alojamentos`{.action} na barra à esquerda e escolha o nome do alojamento correspondente. De seguida, clique no separador `FTP - SSH`{.action}.

Aparecerá uma tabela com os utilizadores FTP criados no seu alojamento. Estes utilizadores permitem-lhe aceder ao seu espaço de armazenamento e publicar ficheiros no seu site. Um utilizador será automaticamente criado durante a instalação do alojamento.

![ftppassword](images/change-ftp-password-step1.png){.thumbnail}

### 2 - Alterar a palavra-passe de um utilizador FTP

Para alterar a palavra-passe de um utilizador FTP criado no seu alojamento, pode fazê-lo de duas formas consoante o seu plano de [alojamento web da OVH](https://www.ovhcloud.com/pt/web-hosting/){.external}:

- **Para os planos onde não é possível criar vários utilizadores FTP** (plano Start 10M, Kimsufi Web e Perso): clique no ícone em forma de lápis na coluna `Palavra-passe`{.action} da tabela, introduza a nova palavra-passe no campo de texto e valide a alteração.

- **Para os planos onde é possível criar vários utilizadores FTP** (planos Pro e Performance): clique no ícone dos três pontos à direita do utilizador correspondente e selecione a opção `Alterar palavra-passe`{.action}. Na nova janela, introduza a nova palavra-passe, confirme que está correta e clique em **Validar**.

A alteração demorará alguns minutos até ficar efetiva.

> [!primary]
>
> Por razões de segurança, introduza a nova palavra-passe de acordo com as indicações apresentadas. Além disso, recomendamos que:
>
> - não utilize duas vezes a mesma palavra-passe;
>
> - selecione uma palavra-passe sem qualquer relação com as suas informações pessoais (apelido, nome ou data de nascimento, por exemplo);
>
> - renove as suas palavras-passe de forma regular;
>
> - não anote nem envie as suas palavras-passe para o seu endereço de e-mail;
>
> - não guarde as suas palavras-passe no seu browser, mesmo que lhe seja sugerido.
>

### 3 - Aceder ao espaço de armazenamento

Depois de alterar a palavra-passe do utilizador FTP, poderá aceder ao seu espaço de armazenamento.

Para isso, e dependendo do seu plano de [alojamento web da OVH](https://www.ovhcloud.com/pt/web-hosting/){.external}, existem várias formas de o fazer:

- **Utilizar o Explorador FTP**: permite-lhe aceder ao espaço de armazenamento a partir do navegador. Para o utilizar, ainda no separador `FTP - SSH`{.action}, clique no botão `Explorador FTP`{.action}.

- **Utilizar um programa compatível com o protocolo FTP**: terá de instalar no seu computador um programa compatível (como o FileZilla, por exemplo).

- **Utilizar um acesso SSH**: terá de executar comandos a partir de um terminal para interagir com o seu espaço de armazenamento. Este tipo de acesso requer conhecimento técnicos mais avançados.

## Quer saber mais?

[Saber mais sobre a segurança das palavras-passe graças à ANSSI](http://www.ssi.gouv.fr/en/){.external}.

[Guia de utilização do FileZilla](https://docs.ovh.com/pt/hosting/partilhado_guia_de_utilizacao_do_filezilla/){.external}.

[O SSH nos alojamentos partilhados](https://docs.ovh.com/pt/hosting/partilhado_o_ssh_nos_alojamentos_partilhados/){.external}.

Fale com a nossa comunidade de utilizadores em [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.