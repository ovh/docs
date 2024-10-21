---
title: "Diagnosticar avarias materiais num servidor dedicado"
excerpt: "Saiba como utilizar as ferramentas de diagnóstico para identificar avarias materiais no seu servidor"
updated: 2024-05-06
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Sumário

A um determinado momento da vida do seu servidor, pode sofrer uma avaria devido a um problema material. Quando o servidor é iniciado através do modo rescue OVHcloud, dispõe de várias ferramentas de diagnóstico que permitem identificar os componentes materiais com defeito.

**Saiba como diagnosticar avarias materiais no seu servidor dedicado.**

## Requisitos

- Ter um [servidor dedicado](https://www.ovhcloud.com/pt/bare-metal/).
- Reiniciar o servidor em [Modo Rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

## Instruções

Este guia explica pormenorizadamente os testes a realizar para diagnosticar:

- o(s) processador(es);
- a ligação à rede;
- a memória RAM;
- discos e partições.

### Processadores

O teste do processador verifica o bom funcionamento do processador do seu servidor e requer cerca de 30 minutos para ser executado. Se o servidor avariar durante o teste, isto significa que o processador é defeituoso.

```bash
WRKR=$(grep -c "^processor" /proc/cpuinfo)
stress-ng --metrics-brief --timeout 60s --cpu $WRKR --io $WRKR --aggressive --ignite-cpu --maximize --pathological
stress-ng --metrics-brief --timeout 60s --brk 0 --stack 0 --bigheap 0 
```

### Ligação à rede

O teste da ligação à rede verifica a largura de banda interna e externa. Estes dados são-lhe fornecidos a título indicativo, não se trata de um teste de performance.

```bash
ping -c 10 proof.ovh.net
for file in 1Mb 10Mb 100Mb 1Gb ; do time curl -4f https://proof.ovh.net/files/${file}.dat -o /dev/null; done
```

### Memória RAM

O teste da memória verifica a integridade dos módulos RAM do seu servidor. Se o servidor avariar durante o teste, isto significa que um ou vários módulos RAM têm defeitos.

> [!warning]
> Atenção, este teste pode ser muito longo.

```bash
RAM="$(awk -vOFMT=%.0f '$1 == "MemAvailable:" {print $2/1024 - 1024}' /proc/meminfo)"
memtester ${RAM}M 1
```

### Disk Health

Pode utilizar *Smartmontools* para verificar o estado dos seus discos lendo os dados `SMART`. Por exemplo, para ver todos os detalhes do disco intitulado `nvme1n1`, introduza:

```bash
smartctl -a /dev/nvme1n1
```

Para saber mais sobre a saída deste comando e a sua interpretação, consulte [a documentação oficial *Smartmontools*](https://www.smartmontools.org/wiki/TocDoc).

### Partições do disco

O teste das partições abrange um teste de acesso ao disco e uma verificação do sistema de ficheiros. O teste de acesso ao disco verifica se o sistema pode comunicar com os discos rígidos do seu servidor. A verificação do sistema de ficheiros utiliza o comando `fsck -fy`.

```bash
stress-ng --metrics-brief --timeout 60s --hdd 0 --aggressive
```

## Quer saber mais?

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
