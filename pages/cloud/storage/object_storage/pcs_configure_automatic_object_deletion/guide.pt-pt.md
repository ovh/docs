---
title: Object Storage Swift - Configurar a eliminação automática de objectos
excerpt: Configurar a eliminação automática de objectos
slug: pcs/configure-automatic-object-deletion
section: OpenStack Swift Storage Class Specifics
legacy_guide_number: g1950
order: 070
---

**Última atualização: 27/10/2021**

## Objetivo

Para facilitar a gestão do seu Object Storage é possível que tenha necessidade de decidir a duração de vida dos seus ficheiros.
Poderá, por ecemplo, guardá-los durante um certo período de tempo.

Este guia explica-lhe como poderá eliminar os seus ficheiros de forma automática passado algum tempo ou numa data em concreto.

## Requisitos

- [Preparar o ambiente para utilizar a API OpenStack](https://docs.ovh.com/pt/public-cloud/preparar_o_ambiente_para_utilizar_a_api_openstack/)
- [Carregar as variáveis de ambiente OpenStack](https://docs.ovh.com/pt/public-cloud/carregar-as-variaveis-de-ambiente-openstack/)

## Instruções

Existem duas formas para eliminar os seus ficheiros:

- Após alguns segundos (a definir)
- Numa data em concreto

### Após alguns segundos (a definir)

Para tal basta configurar o header `X-Delete-After` dos seus objetos

```bash
root@server:~$ swift post --header "X-Delete-After: 3600" container test.txt
```

O ficheiro test.txt será então eliminado dentro de 1 hora

### Numa data em concreto

Num primeiro tempo deverá conhecer a data de eliminação em formato epoch.
É possível que utilize um [conversor](http://www.epochconverter.com/){.external} para que consiga recuperar facilmente o valor a introduzir.

Depois do valor recuperado, basta que o introduza no header `X-Delete-At` :

```bash
root@server:~$ swift post --header "X-Delete-At: 1668877261000" container test.txt
```

O ficheiro test.txt será eliminado a 19/11/2022.

## Quer saber mais?
 
Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
