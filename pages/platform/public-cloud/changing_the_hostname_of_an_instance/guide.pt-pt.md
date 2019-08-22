---
title: 'Modificar o hostname de uma instância Public Cloud'
slug: modificar-hostname-de-uma-instancia
excerpt: 'Saiba como modificar o hostname de uma instância Public Cloud'
legacy_guide_number: 1928
section: Tutoriais
---

**Última atualização: 31/08/2018**

## Sumário

O módulo cloud-init permite configurar a [instância Public Cloud](https://www.ovh.pt/public-cloud/instances/){.external} quando é criada, mas também em cada reinicialização. Por isso, se pretender reconfigurar o hostname devido a um erro durante a criação da instância ou para reconfigurar o seu servidor de e-mail, terá de desativar o módulo cloud-init. Este último encarrega-se de configurar o hostname de modo que não seja restabelecido.

**Este manual explica como reconfigurar o cloud-init, de forma a poder modificar o hostname da instância.**

> [!warning]
>
> A utilização e a gestão dos serviços OVH são da responsabilidade do cliente. Como não temos acesso a estas máquinas, não podemos administrá-las nem fornecer-lhe assistência. O cliente é o único responsável pela gestão e pela segurança do serviço.
>
> Este manual explica como implementar algumas de medidas para tornar o seu sistema mais seguro. Se encontrar alguma dificuldade relacionada com o processo, deverá contactar um serviço especializado. Para mais informações, aceda à secção deste manual intitulada: “Quer saber mais?”.
>


## Requisitos

- Ter criado uma [instância Public Cloud](https://www.ovh.pt/public-cloud/instances/){.external}.
- [Estar ligado através do protocolo SSH](https://docs.ovh.com/pt/public-cloud/primeira-conexao/){.external} (root) à instância.


## Instruções

### Desativar o módulo cloud-init

De modo a desativar o cloud-init, primeiro precisa de modificar o ficheiro de configuração:

```sh
sudo vim /etc/cloud/cloud.cfg
```

A seguir, basta acrescentar ou modificar as duas linhas seguintes:

```sh
preserve_hostname: true
manage_etc_hosts: false
```

### Modificar o hostname

A primeira etapa consiste em modificar o hostname:

```sh
sudo vim /etc/hostname
webserver
```

Em seguida, modifique o ficheiro `/etc/hosts`:

```sh
sudo vim /etc/hosts

127.0.1.1 webserver.localdomain webserver
127.0.0.1 localhost
```

De seguida, a instância deve ser reiniciada:

```bash
sudo reboot
```

Após a reinicialização, a modificação do hostname será corretamente tida em conta:

```sh
sudo cat /etc/hosts

127.0.1.1 webserver.localdomain webserver
127.0.0.1 localhost
```

## Quer saber mais? 

Fale com a nossa comunidade de utilizadores: [Comunidade OVH.](https://community.ovh.com/en/)