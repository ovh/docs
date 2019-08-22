---
title: 'Alterar o anúncio de um bloco IP no vRack'
slug: alterar-anuncio-bloco-ip-vrack
excerpt: 'Saiba como alterar o anúncio de um bloco IP no vRack'
section: vRack
---

**Última atualização: 24/04/2019**

## Sumário

O [vRack](https://www.ovh.pt/solucoes/vrack/){.external} é uma rede privada que lhe permite configurar o direcionamento entre dois ou mais [servidores dedicados](https://www.ovh.pt/servidores_dedicados/){.external} da OVH.

**Saiba como definir uma zona de anúncio de um bloco IP no vRack.**

## Requisitos

- Ter um [vRack](https://www.ovh.pt/solucoes/vrack/){.external}.
- Ter [configurado um bloco de endereços IP no vRack](https://docs.ovh.com/pt/dedicated/adicionar-ou-remover-um-bloco-ip-do-vrack/).
- Ter conhecimentos avançados de rede.

## Instruções

### 1 - Verificar a zona de anúncio atual

Comece a operação verificando a zona de anúncio atual do bloco IP em questão. Para isso, realize um “traceroute” num endereço IP do bloco. Teste um à escolha.

```sh
traceroute to 1.2.3.4, 30 hops max, 60 byte packets
 1  54.36.52.1 (54.36.52.1)  0.464 ms  0.461 ms  0.454 ms
 2  158.69.61.222 (158.69.61.222)  0.443 ms  0.426 ms  0.411 ms
 3  gra-z1b1-a70.fr.eu (92.222.60.62)  0.394 ms  0.396 ms  0.391 ms
 4  po101.gra-z1g2-a75.fr.eu (92.222.60.119)  0.374 ms  0.356 ms po101.gra-z1g1-a75.fr.eu (92.222.60.117)  0.333 ms
 5  be120.gra-d1-a75.fr.eu (37.187.232.74)  0.327 ms be121.gra-d2-a75.fr.eu (37.187.232.80)  0.335 ms be120.gra-d2-a75.fr.eu (37.187.232.78)  0.328 ms
 6  vl1247.rbx-g1-a75.fr.eu (37.187.231.234)  1.850 ms vl1248.rbx-d2-a75.fr.eu (37.187.231.252)  1.874 ms vl1247.rbx-g1-a75.fr.eu (37.187.231.234)  1.816 ms
 7  10.95.66.51 (10.95.66.51)  1.943 ms 10.95.66.53 (10.95.66.53)  1.872 ms 10.95.66.59 (10.95.66.59)  1.860 ms
 8  1.2.3.4  2.865 ms
```

O exemplo acima mostra que o endereço IP testado está atualmente anunciado em **Roubaix**. Isto é visível no último salto realizado: “vl1247.**rbx**-g1-a75.fr.eu (37.187.231.234) 1.816 ms”. Se precisar de ajuda, consulte a nossa página “[Datacenters](https://www.ovh.pt/aproposito/datacenters.xml){.external}”.

### 2 - Alterar o anúncio do bloco IP

Aceda à ligação <https://api.ovh.com/console/> e conecte-se com o seu ID de cliente OVH. A seguir, utilize as API abaixo para alterar o anúncio do bloco IP.

> [!api]
>
> @api {GET} /vrack#GET
> 

Esta API permite recuperar a lista dos serviços vRack. Caso não consigo identificar o serviço afetado através destas referências, consulte a [Área de Cliente](https://www.ovh.com/auth/?action=gotomanager){.external} para o consultar. Para isso, aceda à secção “Cloud” e selecione “vRack”.

> [!api]
>
> @api {POST} /vrack/{serviceName}/ip/{ip}/announceInZone#POST
> 

Esta API permite alterar o anúncio de um bloco IP. Preencha os campos necessários:

|Campo|Descrição|
|---|---|
|serviceName|Indique o nome do serviço vRack em questão.|
|ip|Indique o nome do bloco IP em questão. Tenha em conta que não deve indicar o endereço IP que testou na etapa anterior, mas sim o bloco IP em questão. Por exemplo: `1.2.3.4/27`.|
|zona|Seleciona a nova zona de anúncio do bloco IP. Certifique-se de que não indica a mesma zona que aquela que recuperou na etapa anterior.|

Por fim, execute a API para alterar o anúncio.

### 3 - Testar a nova zona de anúncio

Agora que a zona de anúncio foi alterada, realize um novo “traceroute” no endereço IP utilizado na 1ª etapa para o verificar.

```sh
traceroute to 1.2.3.4, 30 hops max, 60 byte packets
 1  54.36.52.1 (54.36.52.1)  0.464 ms  0.461 ms  0.454 ms
 2  158.69.61.222 (158.69.61.222)  0.396 ms  0.379 ms  0.372 ms
 3  gra-z1b1-a70.fr.eu (92.222.60.62)  0.360 ms  0.361 ms  0.354 ms
 4  po101.gra-z1g1-a75.fr.eu (92.222.60.117)  0.401 ms  0.396 ms  0.389 ms
 5  be121.gra-d1-a75.fr.eu (37.187.232.76)  0.346 ms be120.gra-d2-a75.fr.eu (37.187.232.78)  0.318 ms be120.gra-d1-a75.fr.eu (37.187.232.74)  0.351 ms
 6  10.73.0.65 (10.73.0.65)  0.625 ms 10.73.0.69 (10.73.0.69)  0.729 ms 10.73.0.65 (10.73.0.65)  0.526 ms
 7  10.17.145.25 (10.17.145.25)  0.354 ms 10.17.145.29 (10.17.145.29)  0.426 ms 10.17.145.25 (10.17.145.25)  0.415 ms
 8  1.2.3.4  2.865 ms
```

O exemplo acima mostra que o endereço IP testado está atualmente anunciado em **Gravelines**. Isto é visível no último salto realizado: “be120.**gra**-d1-a75.fr.eu (37.187.232.74) 0.351 ms”. Se precisar de ajuda, consulte a nossa página “[Datacenters](https://www.ovh.pt/aproposito/datacenters.xml){.external}”.

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.