---
title: 'Primeiros passos com uma instância Public Cloud'
slug: comecar-com-uma-instancia-public-cloud
excerpt: 'Saiba como começar a utilizar uma instância Public Cloud'
section: Introdução
---

**Última atualização: 22/10/2019**

## Sumário

Tem a possibilidade de gerir facilmente as suas instâncias Public Cloud da OVH a partir da sua [Área de Cliente](https://www.ovh.com/auth/?action=gotomanager){.external}, onde poderá consultar todos os seus projetos de infraestrutura (instâncias, backups, discos, chaves SSH, etc.) e de armazenamento (incluindo a lista de containers).

**Saiba como começar a utilizar uma instância Public Cloud.**

### Requisitos

- [Ter criado uma instância Public Cloud da OVH a partir da sua conta](https://docs.ovh.com/pt/public-cloud/criar_uma_instancia_a_partir_do_espaco_cliente_ovh/).
- [Ter criado chaves SSH](https://docs.ovh.com/pt/public-cloud/criacao-de-chaves-ssh/).

### Instruções

### Aceder à interface de gestão da instância

Comece por aceder à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external} na secção “Cloud” e clique em `Servidores`{.action} na coluna à esquerda. De seguida, selecione o serviço Public Cloud em questão. No separador `Compute`{.action}, certifique-se de que está posicionado na opção “Instâncias”.

Abaixo dos separadores, encontra-se a visualização da sua instância. Poderá consultar várias informações:

- o modelo e o preço da sua instância;
- o nome e a região;
- os recursos disponíveis;
- os eventuais discos adicionais associados;
- o endereço IP da instância.

![public-cloud](images/3415-2.png){.thumbnail}

### Editar a configuração de uma instância

Na página de gestão da instância, clique no ícone de seta virada para baixo e selecione a opção `Editar`{.action}.

![public-cloud](images/3481-2.png){.thumbnail}

Na janela que aparece, poderá:

- dar outro nome à instância;
- alterar o modelo da instância;
- reinstalar a instância noutro sistema operativo (**atenção: os dados atuais serão eliminados durante esta operação**);
- passar de uma faturação à hora para uma faturação mensal (será então emitida uma fatura proporcional à data de mudança).

![public-cloud](images/3481-3.png){.thumbnail}

### Criar uma cópia de segurança de uma instância

Pode criar uma cópia de segurança de uma instância a partir da página de gestão da mesma. Para isso, clique no ícone de seta virada para baixo e selecione a opção `Criar uma cópia de segurança`{.action}. De seguida, siga as instruções apresentadas.

Consulte o nosso manual “[Criar uma cópia de segurança de uma instância](https://docs.ovh.com/pt/public-cloud/efetuar_backup_de_uma_instancia/)” para obter ajuda nesta operação. 

![public-cloud](images/3481-4.png){.thumbnail}

### Obter as informações de ligação

Na página de gestão da instância, clique no ícone de seta virada para baixo e selecione a opção `Informações da ligação`{.action}. Isto permite-lhe obter o comando SSH que deve utilizar para se ligar à sua instância.

![public-cloud](images/3484-2.png){.thumbnail}

### Aceder à consola VNC

A consola VNC permite-lhe dispor de um acesso direto à sua instância. No entanto, deve ter configurado uma palavra-passe para o utilizador “root”.

Para aceder a esta consola, clique no ícone de seta virada para baixo na página de gestão da instância e selecione a opção `Consola VNC`{.action}.

![public-cloud](images/3484-3.png){.thumbnail}

A consola aparece numa nova janela. 

![public-cloud](images/3484-4.png){.thumbnail}

### Reiniciar uma instância

Existem duas formas diferentes de reiniciar uma instância:

- reboot a quente (software);
- reboot a frio (hardware).

Na página de gestão da instância, clique no ícone de seta virada para baixo e selecione `Reboot a quente (soft)`{.action} ou `Reboot a frio (hard)`{.action}.

A seguir, confirme a reinicialização na nova janela.

![public-cloud](images/3484-5.png){.thumbnail}

### Reinstalar uma instância

Pode reinstalar uma instância mantendo o mesmo sistema operativo. **Esta operação irá eliminar todos os dados atuais.**

Na página de gestão da instância, clique no ícone de seta virada para baixo e selecione a opção `Reinstalar`{.action}. A seguir, valide. 

![public-cloud](images/3484-6.png){.thumbnail}

### Eliminar uma instância

Pode eliminar uma instância. **Esta operação irá eliminar de forma definitiva a instância e os respetivos dados.**

Na página de gestão da instância, clique no ícone de seta virada para baixo e selecione a opção `Eliminar`{.action}. De seguida, valide a operação. 

![public-cloud](images/3484-7.png){.thumbnail}

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em [https://community.ovh.com/en/](https://community.ovh.com/en/)
