---
title: Object Storage Swift - Configurar a eliminação automática de objectos
excerpt: Configurar a eliminação automática de objectos
legacy_guide_number: g1950
updated: 2021-10-27
---

**Última atualização: 27/10/2021**

## Objetivo

Para facilitar a gestão do seu Object Storage é possível que tenha necessidade de decidir a duração de vida dos seus ficheiros.
Poderá, por ecemplo, guardá-los durante um certo período de tempo.

Este guia explica-lhe como poderá eliminar os seus ficheiros de forma automática passado algum tempo ou numa data em concreto.

## Requisitos

- [Preparar o ambiente para utilizar a API OpenStack](/pages/platform/public-cloud/prepare_the_environment_for_using_the_openstack_api)
- [Carregar as variáveis de ambiente OpenStack](/pages/platform/public-cloud/loading_openstack_environment_variables)

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

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique em [esta ligação](https://www.ovhcloud.com/pt/professional-services/) para obter um orçamento e solicitar uma análise personalizada do seu projecto aos nossos especialistas da equipa de Serviços Profissionais.
 
Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
