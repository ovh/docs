---
title: "Como gerir Intel SGX num servidor dedicado"
excerpt: "Descubra como ativar a opção SGX no seu servidor dedicado e instalar a pilha de software SGX para Linux"
updated: 2025-11-20
---

## Objetivo

A ativação das Intel Software Guard Extensions (SGX) no seu servidor permite executar aplicações compatíveis com SGX. As Intel SGX fornecem funcionalidades avançadas de encriptação de segurança de hardware e memória RAM, para isolar partes específicas de código e dados para cada aplicação.

**Este guia explica como ativar a funcionalidade SGX, através do área de cliente OVHcloud ou através da API OVHcloud.**

## Requisitos

- Aceder ao [área de cliente OVHcloud](/links/manager) ou à [API OVHcloud](/links/api)
- Ter um servidor dedicado compatível com [a opção SGX](/links/bare-metal/sgx) no seu conta OVHcloud
- Dispor das credenciais recebidas por e-mail após a instalação
- Ubuntu 24.04 ou equivalente está instalado no servidor

## Instruções

### Ativar SGX

A ativação do SGX é possível a partir do área de cliente OVHcloud, da API OVHcloud ou do BIOS do seu servidor.

> [!tabs]
> **Via área de cliente OVHcloud**
>>
>> **1 - Conexão ao área de cliente OVHcloud**
>>
>> Conecte-se ao [área de cliente OVHcloud](/links/manager), aceda à secção `Bare Metal Cloud`{.action} e clique em `Servidores dedicados`{.action}. Selecione em seguida o servidor no qual pretende ativar o SGX.
>>
>> **2 - Ativar SGX**
>>
>> A partir do separador `Informações gerais`{.action}, no quadro **Funcionalidades de nível avançado**, clique em `...`{.action} ao lado da menção **Segurança - Intel SGX (Software Guard Extensions)** e selecione `Ativar SGX`{.action} no menu suspenso.
>>
>> ![Ativação SGX](images/enable_sgx.png){.thumbnail}
>>
>> Na tela seguinte, clique no botão `Ativar`{.action}.
>>
>> ![Ativação SGX](images/enable_sgx2.png){.thumbnail}
>>
>> Pode escolher ativar o SGX com uma quantidade específica de memória reservada ou permitindo que a sua aplicação reserve automaticamente a memória de que necessita. Após a sua escolha, clique em `Confirmar`{.action}.
>>
>> ![Gestão SGX](images/manage_sgx.png){.thumbnail}
>>
>> Uma janela de confirmação aparecerá. Confirme que compreendeu que a ativação da tecnologia Intel SGX provocará um reinício do seu servidor.
>>
>> ![Ativação SGX](images/confirmation-popup_sgx.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Isto provocará um ou mais reinícios do seu servidor, dependendo do seu modelo.
>>
> **Via API OVHcloud**
>>
>> **1 - Conexão à consola API**
>>
>> Na página das [API OVHcloud](/links/console):
>>
>> - Clique em `Authentication`{.action} no canto superior esquerdo.
>> - Clique depois em `Login with OVHcloud SSO`{.action}.
>> - Introduza as suas credenciais OVHcloud.
>> - Clique no botão `Authorize`{.action} para autorizar as chamadas às APIs a partir deste site.
>>
>> **2 - Ativar SGX**
>>
>> Obtenha o nome do seu servidor na lista devolvida pela seguinte chamada:
>>
>> > [!api]
>> >
>> > @api {v1} /dedicated/server GET /dedicated/server
>>
>> Verifique se o seu serviço dispõe da opção SGX utilizando este chamada:
>>
>> > [!api]
>> >
>> > @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/biosSettings/sgx
>>
>> ![SGX desativado](images/get-disabled.png){.thumbnail}
>>
>> Ative o SGX utilizando o nome do servidor:
>>
>> > [!warning]
>> >
>> > Isto provocará um ou mais reinícios do seu servidor, dependendo do seu modelo.
>>
>> > [!api]
>> >
>> > @api {v1} /dedicated/server POST /dedicated/server/{serviceName}/biosSettings/sgx/configure
>>
>> ![Configuração SGX](images/post-configure.png){.thumbnail}
>>
>> Verifique o progresso da tarefa de configuração chamando este ponto final com o *taskId* devolvido pela chamada anterior:
>>
>> > [!api]
>> >
>> > @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/task/{taskId}
>>
>> ![Obter a tarefa de configuração SGX](images/get-task.png){.thumbnail}
>>
>> Pode verificar que o estado está ativado:
>>
>> > [!api]
>> >
>> > @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/biosSettings/sgx
>>
>> ![SGX ativado](images/get-enabled.png){.thumbnail}
>>
> **Configuração manual no BIOS**
>>
>> **1 - Iniciar uma sessão Remote KVM**
>>
>> Conecte-se ao [área de cliente OVHcloud](/links/manager), aceda à secção `Bare Metal Cloud`{.action} e clique em `Servidores dedicados`{.action}. Selecione em seguida o servidor no qual pretende ativar o SGX.
>>
>> A partir do separador `IPMI / KMV`{.action}, inicie uma sessão Remote KVM:
>>
>> ![Iniciar uma sessão Remote KVM](images/manager.png){.thumbnail}
>>
>> **2 - Ativar SGX**
>>
>> Em seguida, a partir do KVM, inicie um reinício do servidor e entre no BIOS (normalmente premindo a tecla `DEL`{.action} ou `F2`{.action}).
>>
>> No BIOS, dirija-se à parte `Advanced` > `Processor Configuration`.
>>
>> Ative as Opções TME e SGX e configure o tamanho PRMRR desejado:
>>
>> ![Ativar SGX](images/sgx_bios.png){.thumbnail}
>>
>> Guarde as alterações premindo a tecla `F10`{.action}. Uma janela de confirmação aparecerá, confirme com a opção `Yes`.
>>
>> O seu servidor reiniciará depois no seu sistema operativo.
>>

### Instalar a pilha de software SGX

Use os seguintes comandos para instalar o SDK da Intel para poder desenvolver e executar aplicações SGX.

Primeiro, instale algumas dependências:

```bash
sudo apt update
sudo apt install autoconf automake build-Essential cmake debhelper git libcurl4-openssl-dev libprotobuf-dev libssl-dev libtool lsb-release ocaml ocamlbuild protobuf-compiler python-is-python3 reprepro wget perl unzip pkgconf libboost-dev libboost-system-dev libboost-thread-dev libsystemd0
```

Em seguida, descarregue o código fonte e prepare os submódulos e os binários prontos a usar:

```bash
BASE_DIR=/opt/intel
[[ -d $BASE_DIR ]] || sudo mkdir -p $BASE_DIR && sudo chown `whoami` $BASE_DIR
cd $BASE_DIR
 
git clone https://github.com/intel/linux-sgx.git
 
cd linux-sgx
git checkout sgx_2.26
make preparation
```

Construa e instale o SDK SGX:

```bash
make sdk_install_pkg
$ ./linux/installer/bin/sgx_linux_x64_sdk_2.26.100.0.bin --prefix=$BASE_DIR/
```

### Testar a aplicação de exemplo no modo simulador

Para construir e executar o código de exemplo *LocalAttestation* no modo simulador:

```bash
BASE_DIR=/opt/intel
cd $BASE_DIR/sgxsdk/SampleCode/LocalAttestation/
source $BASE_DIR/sgxsdk/environment
 
make clean
SGX_MODE=SIM make
cd bin
./app
succeed to load enclaves.
succeed to establish secure channel.
Succeed to exchange secure message...
Succeed to close Session...
```

### Construir e instalar o PSW Intel SGX

O software Intel SGX Platform Software (PSW) fornece bibliotecas de software que permitem executar aplicações SGX no modo hardware. Para criar o repositório Debian local que aloja os pacotes, execute os seguintes comandos:

```bash
BASE_DIR=/opt/intel
cd $BASE_DIR/linux-sgx
make deb_local_repo
```

Crie o seguinte ficheiro para adicionar o repositório local de pacotes Debian ao sistema de configuração dos repositórios:

```bash
$ cat /etc/apt/sources.list.d/sgx.sources
Types: deb
URIs: file:/opt/intel/linux-sgx/linux/installer/deb/sgx_debian_local_repo
Suites: noble
Components: main
trusted: yes
```

Em seguida, instale os seguintes pacotes:

```bash
sudo apt update
sudo apt-get install libsgx-epid libsgx-quote-ex libsgx-dcap-ql
```

### Testar a aplicação de exemplo no modo hardware (opcional)

Para construir e executar o código de exemplo *LocalAttestation* no modo hardware:

```bash
BASE_DIR=/opt/intel
cd $BASE_DIR/sgxsdk/SampleCode/LocalAttestation/
source $BASE_DIR/sgxsdk/environment
 
make clean
SGX_MODE=HW make
cd bin
./app
succeed to load enclaves.
succeed to establish secure channel.
Succeed to exchange secure message...
Succeed to close Session...
```

## Quer saber mais?

Para ir mais longe (desenvolver a sua própria aplicação, inscrever-se na atestado remoto, etc.), aqui estão algumas recursos úteis:

- [Intel SGX](https://software.intel.com/en-us/sgx)
- [Intel SGX Attestation services](https://software.intel.com/en-us/sgx/attestation-services)
- [Intel SGX linux-2.26 documentation](https://download.01.org/intel-sgx/sgx-linux/2.26/docs/)
- [github.com/intel/linux-sgx](https://github.com/intel/linux-sgx)