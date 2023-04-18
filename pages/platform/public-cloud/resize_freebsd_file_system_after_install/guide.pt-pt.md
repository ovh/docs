---
title: Redimensionar o sistema de ficheiros no FreeBSD 12
excerpt: Saiba como redimensionar o sistema de ficheiros de uma instância Public Cloud ou de uma VPS com FreeBSD 12
updated: 2020-10-27
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 27/10/2020**

## Objetivo

Este manual explica como redimensionar o sistema de ficheiros após a instalação ou o redimensionar com FreeBSD 12. Isto permitirá ao seu sistema usufruir de todo o espaço de disco.

## Requisitos

 * Ter uma instância com FreeBSD 12 no seu projeto [Public Cloud](https://www.ovhcloud.com/pt/public-cloud/) ou um [VPS](https://www.ovhcloud.com/pt/vps/) com FreeBSD 12
 * Ter instalado recentemente ou redimensionado a instância/VPS [da OVH](/pages/platform/public-cloud/resize_of_an_instance)

> [!primary]
>
> Neste tutorial, utiliza-se uma instância r2-15. As instruções são válidas para um VPS ou uma instância Public Cloud. Inicialmente, o sistema de ficheiros é de `5 GB`. Depois de terminar o processo, ele terá `50 GB`.
>

## Instruções

Para dimensionar o seu sistema de ficheiros, deve primeiro reparar as partições.

Ligue-se à sua instância e veja o estado das suas partições:

```
freebsd@freebsd:~ %sudo gpart show
=> 40 10239920 vtbd0 GPT (50G) [CORRUPT]
        40 1024 1 freebsd-boot (512K)
      1064 984 - free - (492K)
      2048 10235904 2 freebsd-zfs (4.9G)
  10237952 2008 - free - (1.0M)
```

Podem ver aqui que o sistema de ficheiros está corrompido. Este estado é normal porque é devido à instalação da imagem na instância ou ao seu redimensionamento. Por isso, tem de o reparar:

```
freebsd@freebsd;~ %sudo gpart recover vtbd0
vtbd0 recovered
```

Ao repetir a primeira encomenda, poderá agora constatar que o sistema de ficheiros está reparado:

```
freebsd@freebsd:~ %sudo gpart show
=> 40 104857520 vtbd0 GPT (50G)
         40 1024 1 freebsd-boot (512K)
       1064 984 - free - (492K)
       2048 10235904 2 freebsd-zfs (4.9G)
   10237952 94619608 - free - (45G)
```

Agora pode redimensionar a partição `freebsd-zfs`. Para isso, utilize o seguinte comando:

```
freebsd@freebsd;~ %sudo gpart resize -i 2 vtbd0
vtbd0p2 resized
```

> [!primary]
>
> É possível que o número de partição seja diferente, para encontrar o número certo, verifique a coluna `vtbd0` e o número em frente da linha `freebsd-zfs`.
>

Agora redimensionou o seu sistema de ficheiros. O ZFS está configurado para se expandir automaticamente. Para verificar, execute este comando:

```
freebsd@freebsd:~ %zpool list
NAME SIZE ALLOC FREE CKPOINT EXPANDSZ FRAG CAP DEDUP HEALTH ALTROOT
zroot 49.5G 854M 48.7G - 0% 1% 1,00x ONLINE -
```

Reparem que, neste exemplo, o `zroot` agora tem `50 GB`. Portanto, o ZFS é bem extenso.

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
