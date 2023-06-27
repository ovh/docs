---
title: Alterar os direitos de um utilizador
routes:
    canonical: '/pages/cloud/private-cloud/change_users_rights'
updated: 2020-11-18
---

**Última atualização: 18/11/2020**

## Objetivo

Este manual tem como objetivo explicar os detalhes da gestão dos direitos de utilizador na oferta Managed Bare Metal da OVHcloud.

**Saiba como tratar da gestão dos direitos de utilizador na sua infraestrutura.**

## Requisitos

* Dispor do serviço [Managed Bare Metal](https://www.ovhcloud.com/pt/managed-bare-metal/){.external}.
* Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

## Instruções

Clique em **Server** > **Managed Bare Metal** e escolha a infraestrutura na qual pretende alterar os utilizadores.

Aceda ao separador **Utilizadores** e clique nos três pontos no final da linha correspondente ao utilizador em questão para ver o menu.

![Ver / Modificar as permissões por DC](images/user_rights_1.png){.thumbnail}

A partir deste menu, pode modificar os direitos dos seus utilizadores vSphere por Datacenter:

![Modificar os direitos](images/user_rights_2.png){.thumbnail}

| Acesso  | Direito possível | Descrição |
|---|---|---|
| Acesso ao vSphere | Nenhum/Leitura apenas/Leitura e escrita | Direitos globais de utilizador no vSphere |
| Acesso à vmNetwork | Nenhum/Leitura apenas/Operador | Direitos de gestão da parte da rede pública (chamada VM Network na interface vSphere) |
| Adição de recursos | Sim/Não | Direitos para acrescentar recursos adicionais através do plugin OVHcloud no vSphere Client (Host, Datastore, Backup Veeam) |

![Modificar os direitos](images/user_rights_3.png){.thumbnail}

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
