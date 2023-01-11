---
title: 'Criar e configurar um grupo de segurança no Horizon'
excerpt: 'Saiba como criar um grupo de segurança e configurá-lo numa instância Public Cloud'
slug: configure-security-group-horizon
legacy_guide_number: g1925
section: Gestão a partir do Horizon
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 24/08/2021**

## Objetivo

Por razões de segurança, é possível configurar e utilizar regras de filtragem que irão definir os acessos às suas instâncias. Pode autorizar ou bloquear certas ligações de entrada ou de saída através de grupos de segurança. Estas regras podem ser aplicadas para o tráfego proveniente de certos endereços IP, ou mesmo para as instâncias configuradas em grupos de segurança em particular.

**Saiba como criar um grupo de segurança e configurá-lo numa instância Public Cloud.**

## Requisitos

- Um [projeto Public Cloud](https://www.ovhcloud.com/pt/public-cloud/).
- [Ter acesso à interface Horizon](https://docs.ovh.com/pt/public-cloud/criar-e-eliminar-um-utilizador-openstack/)

## Instruções

### 1 - criar um grupo de segurança

Aceda à interface [Horizon](https://docs.ovh.com/pt/public-cloud/criar-e-eliminar-um-utilizador-openstack/). Escolha a região na qual pretende criar um grupo de segurança através do botão no canto superior esquerdo.

![definir a região](images/security-group0.png){.thumbnail}

> [!primary]
>
> Se um grupo de segurança deve ser utilizado em várias regiões, deve criá-lo para cada uma delas.
>

Agora, introduza o menu `Network`{.action} e clique em `Security Groups`{.action}. Um quadro lista os grupos de segurança criados. O grupo "default" já está incluído. Este deixa passar todo o tráfego de entrada e de saída.

Para adicionar um novo grupo de segurança, clique no botão `+ Create Security Group`{.action}.

![aceder aos grupos de segurança](images/security-group1.png){.thumbnail}

Na página que aparecer, dê um nome e uma descrição ao grupo que está prestes a criar. Depois, clique no botão `Create Security Group`{.action}.

![criar um grupo de segurança](images/security-group2.png){.thumbnail}

De volta para o separador `Security Groups`{.action}, a tabela apresenta agora o grupo recém-criado. As regras estão configuradas de forma padrão. Estas últimas deixam passar apenas o tráfego de saída. Passe para a etapa seguinte se pretender alterá-las.

Se precisar destas regras, continue a ler este manual na etapa 3 "[configurar um grupo de segurança na sua instância](#instance-security-group)".

### Etapa 2: configurar as regras de um grupo de segurança

Para alterar as regras padrão ou se as suas necessidades evoluírem, clique no botão `Manage Rules`{.action}.

![gerir as regras](images/security-group3.png){.thumbnail}

Se deixou as regras predefinidas no seu grupo de segurança, estas só deixam passar o tráfego de saída.

```bash
root@serveur:~$ ssh admin@149.xxx.xxx.177

ssh: connect to host 149.xxx.xxx.177 port 22: Connection timed out
```

A seguir, na página de gestão das regras, poderá:

- suprimir uma regra existente: para isso, utilize o botão `Delete Rule`{.action};
- adicionar uma nova regra: para isso, utilize o botão `+ Add Rule`{.action}.

Ao adicionar uma regra, deverá completar as informações solicitadas e clicar em `Add`{.action}.

No nosso exemplo, vamos autorizar a ligação SSH à instância.

![adicionar uma regra](images/security-group4.png){.thumbnail}

Depois de adicionar a nova regra, aguarde alguns minutos para que esta seja tomada em conta.

```bash
root@serveur:~$ ssh admin@149.xxx.xxx.177

Last login: Tue Out 13 13:56:30 2015 from proxy-109-190-254-35.ovh.net
admin@serveur1
```

### Configurar um grupo de segurança numa instância <a name="instance-security-group"></a>

Na interface Horizon, expanda o menu `Compute`{.action} e selecione `Instances`{.action}. A partir desta página, crie uma nova instância através do botão `Launch Instance`{.action}.

Ao criar a instância, poderá escolher, através do menu `Security Groups`{.action}, o novo grupo de segurança criado na etapa anterior.

![afetar grupo de segurança](images/security-group5.png){.thumbnail}

Pode aplicar um novo grupo de segurança numa instância já criada ao clicar no `Edit Security Groups`{.action} à direita da instância.

![modificar grupo de segurança](images/security-group6.png){.thumbnail}

### Eliminar um grupo de segurança

Para eliminar um grupo de segurança, selecione-o clicando no quadrado correspondente à esquerda e clique em `Delete Security Groups`{.action}.

![eliminar um grupo de segurança](images/security-group7.png){.thumbnail}

## Saiba mais

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
