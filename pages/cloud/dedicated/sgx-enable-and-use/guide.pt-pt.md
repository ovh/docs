---
title: 'Intel SGX num servidor Infraestrutura'
slug: ativar-e-usar-intel-sgx
excerpt: 'Como ativar o SGX no seu servidor Infraestrutura e instalar  a pilha de software Linux SGX'
section: 'Uso avançado'
---

**Última atualização a 17 de outubro de 2019**

## Sumário

Ativar Intel Software Guard Extensions no seu servidor, para poder executar aplicações SGX-ready  
O Intel SGX oferece recursos avançados de encriptação de segurança para hardware e RAM, com o objetivo de isolar partes do código e dos dados específicos de cada aplicação.

## Requisitos

- Um [servidor dedicado Infraestrutura](https://www.ovh.pt/servidores_dedicados/infra/){.external}, com a opção [SGX](https://www.ovh.pt/servidores_dedicados/software-guard-extensions/){.external}
- Acesso administrativo (raiz) à sua instância via SSH
- Acesso à [API OVH](https://api.ovh.com/console/){.external}
- Ubuntu 18.04 ou similar instalado no servidor

## Instruções

### Passo 1 - Aceda à consola API

Vá para <https://api.ovh.com/console/> e clique em  `Aceder`{.action} no canto superior direito da página.  
Na página seguinte, aceda com as credenciais da sua conta OVH.

### Passo 2 - Ative o SGX

Obtenha o nome do seu servidor na lista devolvida pela seguinte chamada:

> [!api]
>
> @api {GET} /dedicated/server

Verifique se o seu serviço tem a opção SGX, através da seguinte chamada: 

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/biosSettings/sgx

![SGX disabled](images/get-disabled.png){.thumbnail}

Em seguida, ative o SGX:

> [!api]
>
> @api {POST} /dedicated/server/{serviceName}/biosSettings/sgx/configure

![Configure SGX](images/post-configure.png){.thumbnail}

Verifique o progresso da tarefa de configuração, através de uma chamada a este endpoint com a taskld devolvida pela chamada anterior:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/task/{taskId}

![Get SGX configuration task ](images/get-task.png){.thumbnail}

Pode verificar se agora o estado está como ativado:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/biosSettings/sgx

![SGX enabled](images/get-enabled.png){.thumbnail}

### Passo 3 - Reinicie para aplicar as novas configurações BIOS

### Passo 4 - Instale a pilha de software SGX

Agora iremos instalar o driver Intel e o SDK para poder desenvolver e executar aplicações SGX.  

Primeiro, instale algumas dependências:
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

### Passo 5 - Reinicie para concluir a instalação

### Passo 6 - Utilize uma aplicação de amostra para validar a instalação

Construa uma das aplicação de amostra fornecidas:
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

### Passo 7 - Vá mais longe

Para ir mais longe (desenvolver a sua própria aplicação, registar-se para certificação remota, ...), aqui tem alguns recursos úteis :

- [Intel SGX](https://software.intel.com/en-us/sgx){.external}
- [Serviços de Certificação Intel SGX](https://software.intel.com/en-us/sgx/attestation-services){.external}
- [Documentação Intel SGX Linux-2.6](https://download.01.org/intel-sgx/linux-2.6/docs/){.external}
- [github.com/intel/linux-sgx](https://github.com/intel/linux-sgx){.external}
- [github.com/intel/linux-sgx-driver](https://github.com/intel/linux-sgx-driver){.external}
- [github.com/intel/sgx-ra-sample](https://github.com/intel/sgx-ra-sample){.external}