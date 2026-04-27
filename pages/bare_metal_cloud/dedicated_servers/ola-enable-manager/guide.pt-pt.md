---
title: "OVHcloud Link Aggregation através da área de cliente (Dedicado)"
excerpt: "Ative o OVHcloud Link Aggregation (OLA) no seu servidor dedicado diretamente a partir da área de cliente OVHcloud"
updated: 2026-04-20
---

## Objetivo

A tecnologia OVHcloud Link Aggregation (OLA) foi criada pelas nossas equipas para aumentar a disponibilidade do seu servidor e aumentar a eficiência das suas ligações de rede. Em apenas alguns cliques, pode agregar as suas placas de rede e tornar as suas ligações de rede redundantes. Isto significa que se uma ligação for interrompida, o tráfego é automaticamente redirecionado para outra ligação disponível.<br>
A agregação baseia-se na tecnologia IEEE 802.3ad, ou Link Aggregation Control Protocol (LACP).

**Neste manual, discutiremos como criar o OLA na Área de Cliente OVHcloud.**

## Requisitos

- Dispor de um [servidor dedicado OVHcloud](/links/bare-metal/bare-metal) da gama Advance, Scale ou High Grade.
- Um sistema operativo / Hypervisor que suporta o protocolo de agregação 802.3ad (LACP).

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### Acesso à Área de Cliente OVHcloud

- **Link direto:** [Servidores dedicados](/links/control-panel/baremetal-dedicated-servers)
- **Caminho de navegação:** `Bare Metal Cloud`{.action} > `Servidores dedicados`{.action} > Selecione o seu servidor

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

## Instruções

> [!warning]
>
> A configuração OLA faz-se em todas as interfaces de rede. Constituirão um agregado do tipo "agregação privada".
>
> Após a implementação do OLA, o IP público deixará de estar acessível.
>

### Configurar o OLA na Área de Cliente OVHcloud

Para começar a configurar o OLA, abra o separador `Interfaces de rede`{.action} na página de gestão do seu servidor.

Clique no botão `Agregação de redes`{.action} na secção **Controladores de interfaces de rede (NIC)**.

Serão apresentadas duas tabelas:
- À esquerda, a configuração atual das suas interfaces de rede;
- À direita, a configuração simulada das suas interfaces de rede agregadas.

No campo abaixo das tabelas, introduza um nome para a sua agregação de ligações.

Depois de verificar que a configuração da agregação corresponde aos seus requisitos de rede, clique em `Ativar a agregação`{.action} para continuar.

A operação pode demorar alguns minutos até ficar concluída. O próximo passo consistirá em configurar as interfaces do seu sistema operativo como NIC bond ou NIC team. Para ficar a conhecer o procedimento, consulte os nossos manuais relativos aos sistemas operativos mais populares:

- [Como configurar a NIC para o OVHcloud Link Aggregation em Debian 9 através do ifupdown](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9).
- [Como configurar a NIC para o OVHcloud Link Aggregation em Windows Server 2019](/pages/bare_metal_cloud/dedicated_servers/ola-enable-w2k19).
- [Como configurar a NIC para o OVHcloud Link Aggregation em SLES 15](/pages/bare_metal_cloud/dedicated_servers/ola-enable-sles15).
- [How to configure your NIC for OVHcloud Link Aggregation in Debian 12 or Ubuntu 24.04 using Netplan](/pages/bare_metal_cloud/dedicated_servers/lacp-enable-netplan).

### Verificar o estado do OLA

Pode verificar o estado da sua agregação de ligações (OLA) no separador `Interfaces de rede`{.action}. Na parte inferior da secção **Largura de banda**, localize a linha **OVHcloud Link Aggregation**.

Existem quatro etiquetas de estado possíveis:
- **Indisponível**: O OLA não é suportado neste modelo de servidor dedicado.
- **Disponível**: O OLA é suportado, mas não está configurado.
- **Ativo - Totalmente privado**: O OLA está ativado; todas as interfaces físicas estão agregadas numa única ligação privada para uso de vRack.
- **Ativo - LAG duplo**: O OLA está pré-ativado; as interfaces físicas estão divididas em dois agregados separados (um público, um privado).

> [!primary]
> **Nota:** O estado **Ativo - LAG duplo** é uma configuração específica geralmente reservada para as gamas de servidores Scale e High-Grade, que dispõem de quatro interfaces de rede físicas.
>

### Restaurar OLA aos valores predefinidos

Para restaurar OLA aos valores predefinidos, clique no botão `Desagregar as redes`{.action} na secção **Controladores de interfaces de rede (NIC)**. Clique em `Confirmar`{.action} no menu contextual.

A operação pode demorar alguns minutos.

## Saiba mais

[Como configurar a NIC para o OVHcloud Link Aggregation em Debian 9 através do ifupdown](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9)

[Como configurar a NIC para o OVHcloud Link Aggregation em Windows Server 2019](/pages/bare_metal_cloud/dedicated_servers/ola-enable-w2k19)

[Como configurar a NIC para o OVHcloud Link Aggregation em  SLES 15](/pages/bare_metal_cloud/dedicated_servers/ola-enable-sles15)

[How to configure your NIC for OVHcloud Link Aggregation in Debian 12 or Ubuntu 24.04 using Netplan](/pages/bare_metal_cloud/dedicated_servers/lacp-enable-netplan)

Fale com nossa [comunidade de utilizadores](/links/community).
