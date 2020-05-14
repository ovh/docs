---
title: 'Usar uma chave SSH na interface Public Cloud'
slug: usar-uma-chave-ssh-na-interface-public-cloud
excerpt: 'Documentação passo a passo sobre como usar uma chave SSH para simplificar o acesso aos servidores cloud'
section: Segurança
order: 2
---

**Última atualização: 4 de dezembro de 2019**

## Preâmbulo
O SSH é um protocolo que possibilita o acesso e a comunicação com um servidor por intermédio de um método de autenticação e encriptação.

Existem duas formas de adicionar uma chave SSH a partir da sua interface Public Cloud:

- O primeiro método, e também o mais direto, é realizado no momento de criação da instância.
- O segundo método consiste em adicionar uma chave a partir do gestor de chaves SSH.


### Pré-requisitos
- uma [chave SSH](../criacao-de-chaves-ssh/){.ref}


## Criar uma instância
Para criar uma instância a partir da interface de cliente Public Cloud, clique em `Criar uma instância`{.action} no menu Instâncias situado na secção `Compute`{.action} à esquerda do ecrã.

![Adicionar servidor](images/compute.png){.thumbnail}

Em seguida, durante a criação da instância, e no passo 3, ser-lhe-á pedido que introduza a sua chave SSH.

![Adicionar servidor](images/selectkey.png){.thumbnail}

Se já possui mais chaves, basta selecionar a da sua preferência.

Para adicionar uma chave, clique em `Adicionar chave`{.action}. Atribua um nome à sua chave através da opção “Nome da chave SSH” e cole-o no espaço designado “Chave SSH”. Para concluir, clique em `Adicionar chave`{.action}.

![Adicionar chave](images/addkey.png){.thumbnail}

## A partir da ferramenta de gestão de chaves

Uma vez selecionada a opção “Chaves SSH” no menu situado à esquerda do seu projeto, será disponibilizado um separador com o mesmo nome.

![Adicionar chave](images/addkeymenu.png){.thumbnail}

Clique em `Adicionar chave`{.action} e depois em `Adicionar esta chave`{.action} depois de a ter nomeado e colado no respetivo espaço.

![Adicionar chave](images/addkeymenu1.png){.thumbnail}

Esta chave estará disponível para utilizar no momento da [criação da sua próxima instância cloud](../fcomecar-com-uma-instancia-public-cloud/){.external}.
