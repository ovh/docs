---
title: 'Carregar as variáveis de ambiente OpenStack'
excerpt: 'Aprenda a carregar as suas variáveis de ambiente para utilizar a API do OpenStack'
updated: 2024-07-15
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Carregar as variáveis de ambiente OpenStack no seu computador permitirá usar a API OpenStack e, assim, gerir a sua infraestrutura a partir daí.

## Requisitos

- Estar ligado à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).
- Ter criado um utilizador OpenStack. Consulte [o respetivo guia](/pages/public_cloud/compute/create_and_delete_a_user).
- Ter preparado o ambiente para usar o OpenStack. Para isso, consulte o seguinte guia: [Preparar o ambiente para utilizar a API OpenStack](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api).

## Instruções

### Etapa 1: recuperar as variáveis

Para recuperar as suas variáveis de ambiente, pode transferir o ficheiro OpenRC do seu utilizador OpenStack previamente criado.

Ligue-se à sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, aceda à secção `Public Cloud`{.action} e selecione o seu projeto Public Cloud no canto superior esquerdo.
<br> Na rubrica `Project Management`, clique em `Users & Roles`{.action}, clique nas `...`{.action} do lado direito do seu utilizador, e selecione `Transferir o ficheiro RC do OpenStack`{.action}.

![openstack-variables](images/pciopenstackvariables1e.png){.thumbnail}

Um ficheiro OpenRC corresponde a um utilizador e, também, a uma zona. Não pode gerir várias zonas num mesmo ficheiro.

### Etapa 2: carregar as variáveis

#### **Em Linux**

* Abra um terminal, ou ligue-se ao utilizador que fará as chamadas à API OpenStack.
* Carregue o conteúdo do ficheiro no ambiente normal. A palavra-passe do utilizador Horizon correspondente ser-lhe-á então pedida.

```bash
admin@vpsxxxxxx:~$ source openrc.sh
Please enter your OpenStack Password:
```

Como indicado em [este guia](/pages/public_cloud/compute/create_and_delete_a_user), a palavra-passe só é visível uma vez, no momento da sua criação.

Se se tiver esquecido da palavra-passe, terá de voltar a criá-la.

Se as CLI já tiverem sido instaladas, basta verificar o bom funcionamento:

```bash
(env)$ openstack server list
+--------------------------------------+------------+--------+-----------------------------------------------+-----------+--------+
| ID                                   | Name       | Status | Networks                                      | Image     | Flavor |
+--------------------------------------+------------+--------+-----------------------------------------------+-----------+--------+
| 8d7c67c0-38e1-4091-88d5-c14844c1f455 | b2-7-gra11 | ACTIVE | Ext-Net=2001:xxxx:xxx:xxx::xxxx, xx.xxx.xx.xx | Debian 12 | b2-7   |
+--------------------------------------+------------+--------+-----------------------------------------------+-----------+--------+
```

#### **Em Windows**

O ficheiro OpenRC não está concebido para ser lançado no Windows.

Tem, por isso, 2 soluções para carregar as variáveis de ambiente:

- Será necessário adaptar o ficheiro, alterando alguns comandos. Com efeito, **export** pode ser substituído por **set**:

```bash
set OS_PASSWORD="Palavra-passe do utilizador Horizon"
```

- É possível carregar as variáveis diretamente a partir dos parâmetros do sistema: Painel de configuração > Sistema > Parâmetros sistemas avançados > Variáveis de ambiente:

![public-cloud](images/pciopenstackvariables2.png){.thumbnail}

## Quer saber mais?

Para aprender a utilizar o OpenStack: [Documentação OpenStack](https://docs.openstack.org/){.external}

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
