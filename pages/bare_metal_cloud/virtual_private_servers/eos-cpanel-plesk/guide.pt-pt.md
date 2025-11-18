---
title: "Fim do suporte Plesk e cPanel para VPS - Assegurar a continuidade dos seus serviços"
excerpt: "Descubra as datas de fim do suporte dos sistemas operativos do seu VPS OVHcloud que afetam as licenças Plesk e cPanel"
updated: 2025-09-29
---

## Objetivo

Este guia explica-lhe como assegurar a continuidade dos seus serviços migrando o seu VPS OVHcloud para um sistema operativo compatível com as últimas versões de **Plesk** e **cPanel**, após o fim do suporte anunciado para vários SO.

**Descubra as datas de fim do suporte dos sistemas operativos do seu VPS OVHcloud que afetam as licenças Plesk e cPanel.**

## Requisitos

- Dispor de uma oferta [VPS](/links/bare-metal/vps) com uma [distribuição compatível](/links/bare-metal/vps-os).

## Instruções

Os editores **Plesk** e **cPanel** anunciam o fim do suporte para os seguintes sistemas operativos:

| Sistema operativo | Produto        | Fim do suporte           |
| ----------------- | -------------- | ------------------------ |
| Ubuntu 18.04      | Plesk          | **1 de janeiro de 2027** |
| Debian 10         | Plesk          | **1 de janeiro de 2027** |
| CentOS 7          | Plesk / cPanel | **1 de janeiro de 2027** |
| CloudLinux 7      | Plesk / cPanel | **1 de janeiro de 2027** |

Para obter mais informações de apoio, consulte a documentação oficial:

- [Plesk](https://docs.plesk.com/release-notes/obsidian/system-requirements/).
- [cPanel](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan/).

### O que devo fazer concretamente?

> [!primary]
>
> De um ponto de vista **segurança**, continuar a utilizar um SO não suportado expõe-no a ataques.
> Recomendamos que leia:
>
> - [as recomendações do cPanel](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/).
> - [as recomendações do Plesk](https://docs.plesk.com/en-US/obsidian/administrator-guide/plesk-administration/securing-plesk.59464/).

#### 1. Verificar o sistema atual

Aceda à [Área de Cliente OVHcloud](/links/manager), vá à secção `Bare Metal Cloud`{.action} e selecione o seu servidor na parte `Servidores privados virtuais`{.action}.

![EOS Plesk cPanel](images/vpshome.png){.thumbnail}

No separador `Página Inicial`{.action}, encontre os detalhes do seu sistema operativo na secção `SO / Distribuição` do quadro `O seu VPS`.

#### 2. Identificar um SO compatível

Se o seu sistema operativo faz parte dos SO que já não serão suportados, deverá migrar para um sistema compatível recomendado pelo editor.

Consulte a documentação oficial dos SO suportados:

- [Lista dos SO suportados pelo Plesk](https://docs.plesk.com/release-notes/obsidian/system-requirements/).
- [Lista dos SO compatíveis com cPanel](https://docs.cpanel.net/installation-guide/system-requirements/).

#### 3. Migrar o seu serviço

**Opção A — Reinstalação manual**

1. [Faça o backup dos seus dados](/pages/bare_metal_cloud/virtual_private_servers/using-automated-backups-on-a-vps) (conteúdo web, base de dados, e-mails, etc.).
2. Reinstale um SO compatível a partir da Área de Cliente OVHcloud, seguindo a secção `Reinstalar o VPS` do nosso guia [Primeiros passos com um VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps).
3. [Reinstale o cPanel](/pages/bare_metal_cloud/virtual_private_servers/cpanel) ou o Plesk no novo sistema.
4. Recupere os seus dados a partir dos seus backups.

**Opção B — Migração via Plesk ou cPanel**

Este método é recomendado se puder implementar uma novo VPS com um sistema atualizado em paralelo com o antigo.

Encomende um novo VPS com um SO compatível, se ainda não o fez. [Instale cPanel](/pages/bare_metal_cloud/virtual_private_servers/cpanel) ou Plesk.

Utilize a ferramenta de migração à sua escolha. Estas ferramentas permitem transferir automaticamente sites, bases de dados, contas de e-mail e configurações de um VPS para outro:

- Plesk Migrator - [Documentação oficial](https://docs.plesk.com/en-US/obsidian/migration-guide/introduction.75496/).
- cPanel Transfer Tool - [Documentação oficial](https://docs.cpanel.net/whm/transfers/transfer-tool/).

**Opção C — Atualização direta do SO sem reinstalação ou migração (utilizadores avançados)**

Se não conseguir implementar um novo servidor VPS, algumas ferramentas permitem **atualizar diretamente o seu sistema operativo**, conservando o Plesk ou cPanel instalado. Este método destina-se a utilizadores experientes porque pode ser perigoso se não for bem executado.

- Para **Plesk** (passagem de CentOS 7 para AlmaLinux 8), utilize o script `centos2alma` proposto pela [documentação oficial do Plesk](https://github.com/plesk/centos2alma). Consulte também as instruções detalhadas do [suporte de Plesk](https://support.plesk.com/hc/en-us/articles/12377714344983).

- Para **cPanel** (passagem de CentOS 7 para AlmaLinux 8), utilize a ferramenta **Elevate** proposta pela [documentação oficial do cPanel](https://cpanel.github.io/elevate/).

> [!primary]
>
> Estas ferramentas não têm uma garantia de 100% e necessitam de backups completos antes de serem utilizadas. Certifique-se igualmente de que o seu VPS dispõe de recursos suficientes (RAM, CPU, disco).

### Boas práticas de segurança

Independentemente do Plesk/cPanel, é essencial **manter o sistema operacional do seu VPS atualizado** para beneficiar-se dos patches de segurança, compatibilidade de software e suporte do editor. Se a sua distribuição estiver em **fim de vida (EOL)**, planeje uma **atualização** ou uma **migração** para uma versão ainda suportada.

Para conhecer as datas de fim de vida e de fim de suporte das imagens e dos sistemas operacionais (VPS & Public Cloud), consulte nosso guia "[Public Cloud & VPS - Ciclo de vida e anúncios de fim de vida e suporte para imagens e distribuições](/pages/public_cloud/compute/image-life-cycle)".

## Quer saber mais? <a name="go-further"></a>

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Fale com a nossa [comunidade de utilizadores](/links/community).