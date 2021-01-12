---
title: Configurar o DNS secundário
excerpt: Como configurar um domínio no servidor DNS Secundário
slug: configurar_o_dns_secundario
legacy_guide_number: g1477
hidden: true
---


## 
A OVH disponibiliza um servidor DNS secundário caso pretenda utilizar o seu servidor como servidor DNS primário para o seu domínio.

A opção DNS secundário encontra-se no resumo da sua VPS no seu Espaço Cliente.

![](images/img_2008.jpg){.thumbnail}
Nesta página é possível efetuar as seguintes operações:


- Consultar a lista dos domínios já configurados no nosso DNS secundário.
- Adicionar ou eliminar um domínio no nosso servidor DNS secundário.




## 1. Adicionar um domínio
Para adicionar um domínio clique em Adicionar um domínio, e preencha o formulário:

![](images/img_2009.jpg){.thumbnail}
No campo "Domínio". Introduza o domínio a adicionar.

![](images/img_2010.jpg){.thumbnail}
Depois dos campos preenchidos, valide ao clicar em Validar.

Após as operações validadas, o seu domínio aparecerá na lista como no nosso exemplo:

![](images/img_2011.jpg){.thumbnail}
As seguintes informações serão apresentadas após a adição de cada domínio:


- DOMÍNIO: O domínio que foi configurado com o nosso servidor DNS Secundário.
- DATA DE CRIAÇÃO: A data em que o domínio foi adicionado ao servidor DNS secundário.
- IP: O endereço IP do servidor DNS primário para o servidor em questão.
- DNS Secundário: O nome do DNS secundário da OVH onde o domínio foi configurado.


É necessária uma verificação do domínio. Neste caso, receberá a seguinte mensagem aquando da adição do domínio:
Ocorreu um erro aquando do pedido de adição do domínio no DNS secundário. (First we need to verify you are the owner of this domain. To do so, please add a TXT field on your DNS zone for the domain dedie-domaine.com, with the subdomain 'ownercheck' and the following value: '339ea8d0'. Once done and your zone reloaded, try again (you don't need to wait for DNS propagation).)
Neste caso, é necessário adicionar um campo TXT para o subdomínio "ownercheck.seudominio.com" na zona DNS atual e em funcionamento do domínio:


```
ownercheck TXT "339ea8d0"
```




## 2. Eliminar um domínio
Para eliminar o domínio do DNS secundário basta clicar no botão Lixeira situado à direita de cada domínio configurado.


## 
Neste guia é explicado como:

- Adicionar um domínio ao nosso servidor DNS secundário.
- Eliminar um domínio do nosso servidor DNS secundário.



