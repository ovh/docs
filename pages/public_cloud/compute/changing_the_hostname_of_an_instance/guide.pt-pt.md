---
title: 'Modificar o hostname de uma instância Public Cloud'
excerpt: 'Saiba como modificar o hostname de uma instância Public Cloud'
updated: 2025-03-20
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Sumário

O módulo Cloud-init permite configurar a [instância Public Cloud](/links/public-cloud/public-cloud){.external} quando é criada, mas também em cada reinicialização. Por isso, se pretender reconfigurar o hostname devido a um erro durante a criação da instância ou para reconfigurar o seu servidor de e-mail, terá de desativar o módulo Cloud-init. Este último encarrega-se de configurar o hostname de modo que não seja restabelecido.

**Este manual explica como reconfigurar o Cloud-init, de forma a poder modificar o hostname da instância.**

> [!warning]
>
> A OVHcloud oferece-lhe serviços que são da sua responsabilidade. Uma vez que não temos acesso a estas máquinas, não podemos administrá-las nem fornecer-lhe assistência. O cliente é o único responsável pela gestão e pela segurança do serviço.
>
> Este guia fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades ou tiver dúvidas relativamente à administração, à utilização ou à segurança de um servidor, deverá contactar um [fornecedor especializado](/links/partner). Para mais informações, aceda à secção deste manual intitulada: “Quer saber mais?”.
>

## Requisitos

- Ter criado uma [instância Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps).
- [Estar ligado através do protocolo SSH](/pages/public_cloud/compute/public-cloud-first-steps) (sudo) à instância.

## Instruções

### Desativar o módulo cloud-init

> [!primary]
>
> Para efeitos deste guia, iremos utilizar o editor de ficheiros **vi**, uma vez que está presente por defeito nas distribuições Linux. Pode, naturalmente, usar o editor da sua preferência.
>
> Utilização básica do vi :
>
> - Prima **i** para mudar para o modo de inserção de texto.
> - Prima **Escape** (Esc) para sair do modo de inserção.
> - Prima **:wq** e depois **Enter** para guardar e sair.
> - Prima **:q!** e depois **Enter** para sair sem guardar.

De modo a desativar o cloud-init, primeiro precisa de modificar o ficheiro de configuração:

```sh
sudo vi /etc/cloud/cloud.cfg
```

A seguir, basta acrescentar ou modificar as duas linhas seguintes:

```sh
preserve_hostname: true
manage_etc_hosts: false
```

### Modificar o hostname

O primeiro passo é alterar o nome do host (*hostname*). Neste exemplo, vamos alterar o nome do host para **webserver**. Pode, naturalmente, alterá-lo de acordo com as suas preferências:

```sh
sudo vi /etc/hostname
```

Adicione ou substitua o conteúdo por:

```sh
webserver
```

Em seguida, modifique o ficheiro `/etc/hosts`:

```sh
sudo vi /etc/hosts
```

Adicione ou substitua o conteúdo por:

```sh
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

Fale com nossa [comunidade de utilizadores](/links/community).