---
title: 'Preparar o ambiente para utilizar a API OpenStack'
excerpt: 'Instale o ambiente OpenStack para controlar as suas instâncias através da API'
updated: 2024-01-22
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Sumário

É possível administrar os serviços Public Cloud através de comandos provenientes da consola do sistema, após o descarregamento e a instalação das ferramentas OpenStack.

Graças à API OpenStack, pode automatizar esta gestão gerando scripts.

> [!primary]
>
> OpenStack requer Python >=3.8.
> Este guia descreve a instalação do pacote `python-openstackclient` que agrupa a linha de comando para a maioria dos projetos OpenStack.
> O projeto Octavia (que alimenta o `Public Cloud Load Balancer`) não está incluído. Portanto, é necessário executar `pip3 install python-octaviaclient` além das instruções de instalação encontradas abaixo.

**Saiba como instalar estas ferramentas OpenStack.**

## Requisitos

- Dispor de um acesso **root** ao ambiente que pretende configurar.

## Instruções

### Em Debian

Abra o terminal ou estabeleça uma ligação em SSH ao ambiente que pretende preparar.

Atualize a cache dos pacotes através do comando `apt update`:

```sh
apt update
```

Utilize o comando abaixo para instalar os clientes OpenStack:

```sh
$ apt install python3-pip python3-venv -y
$ python3 -m venv env
$ source env/bin/activate
(env)$ pip3 install --upgrade pip
(env)$ pip3 install python-openstackclient
```

Nesta etapa, recomendamos que crie um utilizador especial para não usar o utilizador root.

Para aceder às ferramentas de ajuda, execute o seguinte comando:

```sh
openstack --help
```

> [!primary]
> 
> A documentação relativa à API OpenStack está disponível [nesta página](https://docs.openstack.org/python-openstackclient/latest/){.external}.
> 

### Em CentOS

Abra o terminal ou estabeleça uma ligação em SSH ao ambiente que pretende preparar.

Atualize a cache dos pacotes através do seguinte comando:

```sh
yum update -y
```

Utilize o comando abaixo para instalar os clientes OpenStack:

```sh
yum install python3-pip -y
$ python3 -m venv env
$ source env/bin/activate
(env)$ pip3 install --upgrade pip
(env)$ pip3 install python-openstackclient
```

Nesta etapa, recomendamos que crie um utilizador especial para não usar o utilizador root.

Para aceder às ferramentas de ajuda, execute o seguinte comando:

```sh
openstack --help
```

> [!primary]
> 
> A documentação relativa à API OpenStack está disponível [nesta página](https://docs.openstack.org/python-openstackclient/latest/){.external}.
> 

### Em Windows

Descarregue e instale a versão 3.12.0 de Python. Pode optar por adicionar automaticamente a linguagem de programação Python ao Path, selecionando esta opção na configuração da instalação:

![Instalação automática](1_preparation_openstack_environment_windows.png){.thumbnail}

Também pode realizar a instalação. Para isso, siga as instruções descritas abaixo:

#### 1 - Editar as variáveis do ambiente do sistema

Comece por escrever “Editar as variáveis do ambiente do sistema” no campo de busca e selecione o menu que aparece.

![Parâmetros das variáveis do ambiente](2_preparation_openstack_environment_windows.png){.thumbnail}

#### 2 - Editar os parâmetros do sistema

Passe para a janela `Opções avançadas`{.action} e clique em `Variáveis do ambiente`{.action} para editar os parâmetros.

![Parâmetros de desempenho](3_preparation_openstack_environment_windows.png){.thumbnail}

#### 3 - Configurar as variáveis do ambiente 

Na secção “Variáveis do sistema”, selecione “Novo”, atribua o nome “PYTHON_HOME” e adicione o caminho até Python.

![Adicionar o caminho de acesso](4_edit_system_variables.png){.thumbnail}

#### 4 - Adicionar o caminho para as variáveis

Depois de adicionar o Python, edite o “Path” (caminho) nas variáveis do sistema e adicione o seguinte no final do caminho:

`...;%PYTHON_HOME%\;%PYTHON_HOME%\Script`

#### 5 - Reiniciar o Windows

É necessário reiniciar o sistema para que as alterações sejam aplicadas.

#### 6 - Instalar o cliente OpenStack

Estando conectado como administrador, escreva “cmd” no campo de busca e selecione o símbolo do sistema quando aparecer. Instale o cliente OpenStack utilizando o seguinte comando:

```sh
pip install python-openstackclient
```

Se a operação se realizar corretamente, aparecerá um resumo:

![Instalação automática](5_preparation_openstack_environment_windows.png){.thumbnail}

No símbolo do sistema, pode verificar a versão instalada introduzindo “python-V” (não é relevante em que diretório se encontra).

![Verificação](6_preparation_openstack_environment_windows.png){.thumbnail}

### Em MacOS

Pode utilizar [HomeBrew](https://brew.sh), um gestor de pacotes para MacOS.

Abra o terminal e execute o seguinte comando:

```bash
brew install openstackclient
```

Para aceder às ferramentas de ajuda, execute o seguinte comando:

```sh
openstack --help
```

## Quer saber mais?

[Carregar as variáveis de ambiente OpenStack](loading_openstack_environment_variables1.).

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
