---
title: "Desinstalar o sistema de monitorização RTM v2"
excerpt: "Saiba como desinstalar o sistema de monitorização RTM nos seus serviços"
updated: 2023-06-20
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

O sistema de monitoring OVHcloud RTM v2 está agora depreciado e os depósitos deste último foram eliminados. Por isso, recomendamos que desinstale este sistema do(s) seu(s) serviço(s) e que elimine todos os pacotes associados.

**Saiba como  limpeza dos pacotes utilizados por este sistema.**

## Requisitos

- Um [servidor dedicado](https://www.ovhcloud.com/pt/bare-metal/) no qual RTM v2 foi instalado
- Ter acesso de administrador (*root*) ao seu servidor através de SSH

## Instruções

Ligue-se ao seu servidor através de SSH e elimine os pacotes abaixo:

### Distribuições baseadas em Debian

```bash
# apt remove ovh-rtm-binaries
# apt remove ovh-rtm-metrics-toolkit
# apt remove noderig
# apt remove beamium
```

### CentOS 7 / AlmaLinux / Rocky Linux

```bash
# yum remove ovh-rtm-binaries
# yum remove ovh-rtm-metrics-toolkit
# yum remove noderig
# yum remove beamium
```

### Fedora

```bash
# dnf remove ovh-rtm-binaries
# dnf remove ovh-rtm-metrics-toolkit
# dnf remove noderig
# dnf remove beamium
```

De seguida, deverá eliminar os depósitos.

### Debian/Ubuntu

#### Verificar se os pacotes estão instalados:**

```bash
dpkg --list | grep -E "noderig|beamium|ovh-rtm-binaries|ovh-rtm-metrics-toolkit"
```

Se o comando não devolver nenhum valor, isto significa que os pacotes não estão instalados, pode passar à etapa de verificação dos depósitos. Caso contrário, pode eliminá-los através do seguinte comando:

```bash
sudo apt-get remove ovh-rtm-binaries ovh-rtm-metrics-toolkit noderig beamium
```

#### Verificar se os depósitos existem

```bash
ls /etc/apt/sources.list.d/
``` 

Se os ficheiros `ovh-metrics.list` e `ovh-rtm.list` não estiverem listados, então não precisa de fazer nada. Caso contrário, pode eliminá-los através do seguinte comando:

```bash
rm -f /etc/apt/sources.list.d/ovh-metrics.list /etc/apt/sources.list.d/ovh-rtm.list
```

### CentOS

#### Verifique se os pacotes estão instalados

```bash
yum list installed | grep -E "noderig|beamium|ovh-rtm-binaries|ovh-rtm-metrics-toolkit"
```

Se o comando não devolver nenhum valor, isto significa que os pacotes não estão instalados, pode passar à etapa de verificação dos depósitos. Caso contrário, pode eliminá-los através do seguinte comando:

```bash
sudo yum remove ovh-rtm-binaries ovh-rtm-metrics-toolkit noderig beamium
```

#### Verificar se os depósitos existem

```bash
ls /etc/yum.repos.d/
```

Se os ficheiros `OVH-metrics.repo` e `OVH-rtm.repo` não estiverem listados, então não precisa de fazer nada. Caso contrário, pode eliminá-los através do seguinte comando: 

```bash
rm -f /etc/yum.repos.d/OVH-metrics.repo /etc/yum.repos.d/OVH-rtm.repo
```

# Quer saber mais?

Se precisar de uma formação ou de uma assistência técnica para implementar as nossas soluções, contacte o seu comercial ou clique em [este link](https://www.ovhcloud.com/pt/professional-services/) para obter um orçamento e pedir uma análise personalizada do seu projeto aos nossos peritos da equipa Professional Services.

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
