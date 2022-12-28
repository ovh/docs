---
title: 'Ativar Intel SGX no seu servidor dedicado'
slug: ativar-e-usar-intel-sgx
excerpt: 'Ative a opção SGX no seu servidor Infraestrutura ou Advance e instale a pilha de software SGX para Linux'
section: 'Utilização avançada'
---

**Última atualização: 31/08/2022**

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Sumário

Ativar o Intel Software Guard Extensions no seu servidor, para poder executar aplicações preparadas para SGX  
O Intel SGX oferece funcionalidades avançadas de encriptação de segurança para hardware e RAM, com o objetivo de isolar partes do código e dos dados específicas de cada aplicação.

## Requisitos

- Um servidor dedicado [Infraestrutura](https://www.ovhcloud.com/pt/bare-metal/infra/){.external} ou [Advance](https://www.ovhcloud.com/pt/bare-metal/advance/), com a opção [SGX](https://www.ovhcloud.com/pt/bare-metal/intel-software-guard-extensions/){.external}
- Acesso administrativo (raiz) ao servidor via SSH
- Acesso à [API OVHcloud](https://api.ovh.com/){.external}
- Ubuntu 18.04 ou semelhante instalado no servidor

> [!warning]
>
> Entre a gama Advance, apenas os servidores abaixo, equipados com um CPU Intel, são compatíveis com a tecnologia Intel SGX:
>
> - Advance-1
> - Advance-2
> - Advance-6
> - Advance-APAC

## Instruções

### A partir da Área de Cliente OVHcloud

Ligue-se à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), aceda à secção `Bare Metal Cloud`{.action} e selecione o servidor no qual deseja ativar SGX na secção **Servidores dedicados** do menu à esquerda.

#### Ativação da opção

Desça até à zona `Funcionalidades de nível avançado` e clique em `...`{.action} em face de "Segurança - Intel SGX (Software Guard Extension)". Selecione `Ativar SGX`{.action} no menu pendente.

![ativação SGX](images/enable_sgx.png){.thumbnail}

No ecrã seguinte, clique no botão `Ativar`{.action}.

![ativação SGX](images/enable_sgx2.png){.thumbnail}

Pode optar por ativar SGX com uma quantidade específica de memória reservada ou ativá-la permitindo ao seu software reservar automaticamente a memória de que precisa. Depois de escolher, clique em `Confirmar`{.action}.

![ativação SGX](images/manage_sgx.png){.thumbnail}

Aparecerá um pop-up de confirmação, confirme que tomou conhecimento que a ativação da tecnologia Intel SGX requer o(s) reboot(s) do seu servidor.

![ativação SGX](images/confirmation-popup_sgx.png) {.thumbnail}

> [!warning]
>
> Em função do servidor, esta ação levará 1 a várias reinicializações do mesmo.

#### Desativação da opção

Desça até à zona `Funcionalidades de nível avançado` e clique em `...`{.action} em face de "Segurança - Intel SGX (Software Guard Extension)". Selecione `Alterar SGX`{.action} no menu pendente. Escolha a opção `Desativar`{.action} e clique em `Confirmar`{.action}.

![Desativação do SGX](images/disable_sgx.png){.thumbnail}

> [!warning]
>
> Em função do servidor, esta ação levará 1 a várias reinicializações do mesmo.

Consulte este guia na [etapa 3](#sgx-softwares) abaixo.

### A partir da API OVHcloud

#### Passo 1 - Aceder à consola da API

Aceda a <https://api.ovh.com/console/> e clique em `Iniciar sessão`{.action} no canto superior direito da página.  
Na página seguinte, inicie a sessão com as credenciais da sua conta OVHcloud.

#### Passo 2 - Ativar o SGX

Obtenha o nome do seu servidor na lista devolvida pela seguinte chamada:

> [!api]
>
> @api {GET} /dedicated/server

Verifique se o seu serviço tem a opção SGX, chamando:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/biosSettings/sgx

![SGX disabled](images/get-disabled.png){.thumbnail}

Em seguida, ative o SGX:

> [!warning]
>
> Em função do servidor, esta ação levará 1 a várias reinicializações do mesmo.

> [!api]
>
> @api {POST} /dedicated/server/{serviceName}/biosSettings/sgx/configure

![Configure SGX](images/post-configure.png){.thumbnail}

Verifique o progresso da tarefa de configuração, chamando este endpoint com a taskId devolvida pela chamada anterior:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/task/{taskId}

![Get SGX configuration task](images/get-task.png){.thumbnail}

Pode verificar se o estado está agora ativado:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/biosSettings/sgx

![SGX enabled](images/get-enabled.png){.thumbnail}

#### Passo 3 Instalar a pilha de software SGX <a name="sgx-softwares"></a>

Agora iremos instalar o driver Intel e o SDK para poder desenvolver e executar aplicações SGX.

Primeiro, vamos instalar algumas dependências:

```bash
sudo apt-get install build-essential ocaml ocamlbuild automake autoconf libtool wget python libssl-dev libcurl4-openssl-dev protobuf-compiler libprotobuf-dev debhelper cmake git
```

Em seguida, descarregue, construa e instale a pilha de software SGX:

```bash
BASE_DIR=/opt/intel
[[ -d $BASE_DIR ]] || sudo mkdir -p $BASE_DIR && sudo chown `whoami` $BASE_DIR
cd $BASE_DIR

git clone https://github.com/intel/linux-sgx.git

cd linux-sgx
git checkout sgx_2.6
./download_prebuilt.sh
make -j 6
make sdk_install_pkg -j 6
make deb_pkg -j 6
$BASE_DIR/linux-sgx/linux/installer/bin/sgx_linux_x64_sdk_2.6.100.51363.bin --prefix=$BASE_DIR/

sudo dpkg -i $BASE_DIR/linux-sgx/linux/installer/deb/libsgx-urts_2.6.100.51363-bionic1_amd64.deb $BASE_DIR/linux-sgx/linux/installer/deb/libsgx-enclave-common_2.6.100.51363-bionic1_amd64.deb
```

Descarregue e instale o driver:

```bash
wget https://download.01.org/intel-sgx/linux-2.6/ubuntu18.04-server/sgx_linux_x64_driver_2.5.0_2605efa.bin
chmod +x sgx_linux_x64_driver_2.5.0_2605efa.bin
sudo ./sgx_linux_x64_driver_2.5.0_2605efa.bin
```

#### Passo 4 - Reiniciar para concluir a instalação

#### Passo 5 - Utilizar uma aplicação exemplo para validar a instalação

Construa uma das aplicações exemplo fornecidas:

```bash
BASE_DIR=/opt/intel
cd $BASE_DIR/sgxsdk/SampleCode/LocalAttestation/
source $BASE_DIR/sgxsdk/environment
make SGX_DEBUG=0 SGX_MODE=HW SGX_PRERELEASE=1
```

Execute-a:

```bash
ovh@nsXXXX:/opt/intel/sgxsdk/SampleCode/LocalAttestation$ ./app 

Available Enclaves
Enclave1 - EnclaveID 2
Enclave2 - EnclaveID 3
Enclave3 - EnclaveID 4

Secure Channel Establishment between Source (E1) and Destination (E2) Enclaves successful !!!

Enclave to Enclave Call between Source (E1) and Destination (E2) Enclaves successful !!!

Message Exchange between Source (E1) and Destination (E2) Enclaves successful !!!

Secure Channel Establishment between Source (E1) and Destination (E3) Enclaves successful !!!

Enclave to Enclave Call between Source (E1) and Destination (E3) Enclaves successful !!!

Message Exchange between Source (E1) and Destination (E3) Enclaves successful !!!

Secure Channel Establishment between Source (E2) and Destination (E3) Enclaves successful !!!

Enclave to Enclave Call between Source (E2) and Destination (E3) Enclaves successful !!!

Message Exchange between Source (E2) and Destination (E3) Enclaves successful !!!

Secure Channel Establishment between Source (E3) and Destination (E1) Enclaves successful !!!

Enclave to Enclave Call between Source (E3) and Destination (E1) Enclaves successful !!!

Message Exchange between Source (E3) and Destination (E1) Enclaves successful !!!

Close Session between Source (E1) and Destination (E2) Enclaves successful !!!

Close Session between Source (E1) and Destination (E3) Enclaves successful !!!

Close Session between Source (E2) and Destination (E3) Enclaves successful !!!

Close Session between Source (E3) and Destination (E1) Enclaves successful !!!

Hit a key....
```

## Quer saber mais?

Seguem-se alguns recursos úteis que lhe permitem ir mais longe (desenvolver a sua própria aplicação, registar-se para atestado remoto...):

- [Intel SGX](https://software.intel.com/en-us/sgx){.external}
- [Serviços de Atestado Intel SGX](https://software.intel.com/en-us/sgx/attestation-services){.external}
- [Documentação Intel SGX Linux-2.6](https://download.01.org/intel-sgx/linux-2.6/docs/){.external}
- [github.com/intel/linux-sgx](https://github.com/intel/linux-sgx){.external}
- [github.com/intel/linux-sgx-driver](https://github.com/intel/linux-sgx-driver){.external}
- [github.com/intel/sgx-ra-sample](https://github.com/intel/sgx-ra-sample){.external}
