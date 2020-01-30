---
title: 'Carregar as variáveis de ambiente OpenStack'
excerpt: 'Aprenda a carregar as suas variáveis de ambiente para utilizar a API do OpenStack'
slug: carregar-as-variaveis-de-ambiente-openstack
legacy_guide_number: 1852
section: 'A partir da API e linhas de comandos'
---

**Última atualização: 20/11/2019**

## Objetivo

Carregar as variáveis de ambiente OpenStack no seu computador permitirá usar a API OpenStack e, assim, gerir a sua infraestrutura a partir daí.


## Requisitos
- Ter criado um utilizador OpenStack. Consulte [o respetivo guia](https://docs.ovh.com/pt/public-cloud/criar_um_acesso_a_interface_horizon/#como-criar-uma-conta-de-utilizador-openstack)
- Ter preparado o ambiente para usar o OpenStack. Para isso, consulte o seguinte guia: [Preparar o ambiente para utilizar a API OpenStack](https://docs.ovh.com/pt/public-cloud/preparar_o_ambiente_para_utilizar_a_api_openstack/)

## Instruções

### Etapa 1: recuperar as variáveis

Para recuperar as suas variáveis de ambiente, pode transferir o ficheiro OpenRC do seu utilizador OpenStack previamente criado.

Para isso, entre na rubrica `Users & Roles`{.action}, clique nas `...`{.action} do lado direito do seu utilizador, e selecione `Transferir o ficheiro RC do OpenStack`{.action}.

![openstack-variables](images/pciopenstackvariables1.png){.thumbnail}

Um ficheiro OpenRC corresponde a um utilizador e, também, a uma zona. Não pode gerir várias zonas num mesmo ficheiro.

### Etapa 2: carregar as variáveis

#### **Em Linux**

* Abra um terminal, ou ligue-se ao utilizador que fará as chamadas à API OpenStack
* Carregue o conteúdo do ficheiro no ambiente normal. A palavra-passe do utilizador Horizon correspondente ser-lhe-á então pedida.

```bash
admin@vpsxxxxxx:~$ source openrc.sh
Please enter your OpenStack Password:
```

Conforme indicado no guia [Aceder à interface Horizon](https://docs.ovh.com/pt/public-cloud/criar_um_acesso_a_interface_horizon/), a palavra-passe só é visível uma vez, no momento da sua criação.

Se se tiver esquecido da palavra-passe, terá de voltar a criá-la.

Se as CLI já tiverem sido instaladas, basta verificar o bom funcionamento:

```bash
admin@vpsxxxxxx:~$ nova list
+--------------------------------------+------+--------+------------+-------------+------------------------+
| ID                                   | Name | Status | Task State | Power State | Networks               |
+--------------------------------------+------+--------+------------+-------------+------------------------+
| 2278e269-a529-40cc-9a08-794fda9302d3 | deb8 | ACTIVE | -          | Running     | Ext-Net=xx.xxx.xx.xxx |
+--------------------------------------+------+--------+------------+-------------+------------------------+
```

É possível guardar no disco rígido a palavra-passe do utilizador Horizon. Para isso, substitua:

```bash
echo "Please enter your OpenStack Password: "
read -sr OS_PASSWORD_INPUT
export OS_PASSWORD=$OS_PASSWORD_INPUT
```

Por:

```bash
#echo "Please enter your OpenStack Password: "
#read -sr OS_PASSWORD_INPUT
export OS_PASSWORD="Palavra-passe do utilizador Horizon"
```

Por defeito, é preciso carregar este ambiente depois de cada início de sessão no ambiente normal. É possível tornar isso permanente adicionando o source openrc.sh ao ficheiro bashrc. Isto requer a fixação da palavra-passe no ficheiro.


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

Para aprender a utilizar o OpenStack: [Documentação OpenStack](https://docs.openstack.org/train/){.external}

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>
