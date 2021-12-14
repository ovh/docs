---
title: 'Atualizar a firewall CISCO ASA'
excerpt: 'Saiba como atualizar a firewall CISCO ASA'
slug: atualizar-firewall-cisco-asa
section: 'Uso avançado'
---

> [!primary]
> **End of support for the Cisco ASA Firewall feature on dedicated servers**
>
> OVHcloud announces the end of its support for the Cisco ASA Firewall feature for dedicated servers. More information is available on [this page](https://docs.ovh.com/gb/en/dedicated/cisco-asa-eol/).
>

**Última atualização: 28/05/2018**

## Sumário

Para proteger ao máximo o seu sistema, a firewall CISCO Adaptive Security Appliance (ASA) deve beneficiar dos últimos patches de atualização. Estes permitem remediar eventuais falhas de segurança.

**Este guia explica como efetuar a atualização da sua firewall CISCO ASA.**

## Requisitos

- Ter acesso à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.


## Instruções

### Desativar a ASA a partir da Área de Cliente.

O procedimento de atualização vai necessitar de várias reinicializações. Portanto, aconselhamos que desative a ASA para não deixar o servidor indisponível durante a atualização.

Para isso, aceda à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, na secção `Dedicado`{.action}. Escolha o seu servidor dedicado e depois a `Firewall Cisco ASA`{.action}. Por fim, clique com o botão direito em `Desativar a firewall Cisco ASA`{.action} 

![Desativação da ASA](images/customer_panel_asa_disable.png){.thumbnail}

### Gravar a configuração

#### Primeiro método: através do ASDM

Conecte-se ao Cisco Adaptive Security Device Manager (ou ASDM). Depois escolha `File`{.action} e `Save Running Configuration to Flash`{.action}:

![Gravar a configuração através do ASDM](images/asa1.jpg){.thumbnail}

#### Segundo método: em SSH

Conecte-se à ASA em SSH:

```sh
user@desk:~$ ssh adminovh@IP_ASA

adminovh@IP_ASAs password:
Type help or '?' for a list of available commands.

asa12345> en
Password: ********
```

Depois execute o comando seguinte:

```sh
asa12345# write memory

Building configuration...
Cryptochecksum: 4b86b1e4 2e731d6b 9d1fc491 a5eae0f3
6854 bytes copied in 1.20 secs (6854 bytes/sec)
[OK]
```


### Gravar a configuração

Crie um ficheiro local; por exemplo: `backupAsa.txt`. Conecte-se ao ASDM, aceda a  `Tools`{.action} e depois a `Backup Configurations`{.action}.

![Gravar a configuração via ASDM 1](images/asa2.jpg){.thumbnail}

No menu contextual que se abrir, escolha o ficheiro local que criou anteriormente (com `Browse Local...`{.action}), depois grave a configuração com `Backup`{.action}.

![Gravar a configuração via ASDM 2](images/asa3.jpg){.thumbnail}


### Reiniciar a ASA

Esta etapa é importante, pois é necessário assegurar-se de que a ASA está a funcionar e acessível após uma simples reinicialização.

#### Primeiro método: através do ASDM

Conecte-se ao Cisco Adaptive Security Device Manager, depois selecione `Tools`{.action} e `System Reload...`{.action}:

![Reiniciar a ASA via ASDM 1](images/asa5.jpg){.thumbnail}

Para uma reinicialização imediata, na janela que surgiu, selecione: `Reload Start Time` > `Now`{.action} > `Schedule Reload`{.action}.

![Reiniciar a ASA via ASDM 2](images/asa6.jpg){.thumbnail}

![Reiniciar a ASA via ASDM 3](images/asa7.jpg){.thumbnail}


#### Segundo método: em SSH

Conecte-se à ASA em SSH e execute o comando `reload`:

```sh
asa12345# reload

Proceed with reload? [confirm]
***
*** --- START GRACEFUL SHUTDOWN ---
Shutting down isakmp
Shutting down File system

***
*** --- SHUTDOWN NOW ---
```

A reinicialização para carregar a configuração vai levar alguns minutos.


### Reativar a ASA a partir da Área de Cliente

Tal como para a primeira etapa, aceda à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, na secção `Dedicado`{.action}. Escolha o seu servidor dedicado e depois a `Firewall Cisco ASA`{.action}. Por fim, clique com o botão direito em `Ativar a firewall Cisco ASA`{.action}.

![Ativação da ASA](images/customer_panel_asa_enable.png){.thumbnail}


Após a reinicialização, quando a ASA estiver ativa, verifique que todos os serviços do seu servidor estão a funcionar. Se não houver problemas, passe à fase seguinte. Se encontrar bloqueios, efetue as verificações adequadas para resolver os problemas antes de passar às fases seguintes.


### Desativar novamente a ASA a partir da Área de Cliente

Agora é preciso desativar a ASA como na primeira etapa.

Para isso, aceda à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, na secção `Dedicado`{.action}. A seguir escolha o seu servidor dedicado e depois a `Firewall Cisco ASA`{.action}. Por fim, clique com o botão direito em `Desativar a firewall Cisco ASA`{.action}.

![Desativação da ASA](images/customer_panel_asa_disable.png){.thumbnail}


### Verificar o ficheiro binário atualmente utilizado

#### Primeiro método: através do ASDM

Conecte-se ao Cisco Adaptive Security Device Manager, aceda a `Device Information`{.action} e depois a `General`{.action}. Aqui encontrará a sua versão da ASA e do ASDM. Aconselhamos que aponte essa informação e a guarde.

![Verificar os ficheiros binários via ASDM](images/asa9.jpg){.thumbnail}


#### Segundo método: em SSH

Conecte-se em SSH e execute o comando seguinte:


```sh
asa12345# sh run | i bin

boot system disk0:/asa847-30-k8.bin
asdm image disk0:/asdm-771.bin
```

- *boot system*\: a versão da ASA
- *asdm image*\: a versão do ASDM


### Verificar qual ficheiro binário deve ser utilizado

Para encontrar o ficheiro binário a utilizar, recorra ao quadro seguinte:

|Versão atual ASA|Primeira versão para a qual atualizar|A seguir atualizar para|
|---|---|---|
|8.2(x) e anteriores|8.4(6)|9.1(3) e seguintes|
|8.3(x)|8.4(6)|9.1(3) e seguintes|
|8.4(1) até 8.4(4)|8.4(6) ou 9.0(2+)|9.1(3) e seguintes|
|8.4(5+)|Nenhuma|9.1(3) e seguintes|
|8.5(1)|9.0(2+)|9.1(3) e seguintes|
|8.6(1)|9.0(2+)|9.1(3) e seguintes|
|9.0(1)|9.0(2+)|9.1(3) e seguintes|
|9.0(2+)|Nenhuma|9.1(3) e seguintes|
|9.1(1)|9.1(2)|9.1(3) e seguintes|
|9.1(2+)|Nenhuma|9.1(3) e seguintes|
|9.2(x)|Nenhuma|9.2(2) e seguintes|

Por exemplo, se a sua ASA funciona na versão 8.4(2), primeiro é preciso atualizar o seu sistema para a versão 8.4(6) e depois atualizar para 8.4(7+) ou 9.2+.


Para mais informações, recorra à [documentação Cisco](https://www.cisco.com/c/en/us/td/docs/security/asa/migration/upgrade/upgrade.html){.external}.

> [!primary]
>
> Para firewalls Cisco ASA com 256 MB de memória, aconselhamos que apenas atualize a versão 8.4(x). As versões 9.1(x) e 9.2(x) vão utilizar praticamente todos os 256 MB sem estar em produção.
>

Pode verificar a versão que possui através de uma destas duas soluções:

- Em SSH, com este comando:

```
asa12345# sh ver| i RAM

Hardware: ASA5505, 512 MB RAM, CPU CPU Geode 500 MHz
```

- No ASDM, secção `Tools`{.action}, depois `Command Line Interface...`{.action}:

![Verificar a versão do ficheiro binário no ASDM 1](images/asa10.jpg){.thumbnail}

![Verificar a versão do ficheiro binário no ASDM 2](images/asa11.jpg){.thumbnail}


### Suprimir os ficheiros binários não utilizados

Antes de adicionar os novos ficheiros binários, convém suprimir os antigos.

#### Primeiro método: através do ASDM

Conecte-se ao Cisco Adaptive Security Device Manager. A seguir aceda a `Tools`{.action} e depois a `File Management...`{.action}.

![Suprimir os ficheiros binários não utilizados no ASDM 1](images/asa12.jpg){.thumbnail}

Suprima os ficheiros binários (*.bin*) não utilizados. No disco já só lhe restará um ficheiro para a ASA e outro para o ASDM.

![Suprimir os ficheiros binários não utilizados no ASDM 2](images/asa13.jpg){.thumbnail}


#### Segundo método: em SSH

Conecte-se à sua ASA em SSH e depois suprima os ficheiros depois de os ter listado:

```sh
asa12345# sh flash: | i bin

128 26995116 Apr 18 2017 23:55:52 asdm-771.bin
144 23016144 Dec 12 2016 14:35:07 asdm-721-150.bin
138 25214976 Nov 18 2017 23:29:54 asa847-30-k8.bin
```

```sh
asa12345# delete flash:asdm-781-150.bin

Delete filename [asdm-721-150.bin]?
Delete disk0:/asdm-721-150.bin? [confirm]
```

### Adicionar e instalar os ficheiros binários ASDM

#### Primeiro método: através do ASDM

Conecte-se ao Cisco Adaptive Security Device Manager. Aceda a `Tools`{.action} e depois clique em `Upgrade Software from Local Computer...`{.action}.

![Adicionar e instalar os ficheiros binários ASDM via ASDM 1](images/asa14.jpg){.thumbnail}

No ecrã seguinte escolha:

- *Image to upload*: ASDM;
- *Local File Patch*: digite `Browse Local Files`{.action} e escolha a sua versão do ficheiro binário do ASDM.

Valide a sua escolha clicando em `Upload Image`{.action}, depois valide com `Yes`{.action} para confirmar que esta imagem deve tornar-se a imagem de inicialização:

![Adicionar e instalar os ficheiros binários ASDM via ASDM 2](images/asa15.jpg){.thumbnail}

![Adicionar e instalar os ficheiros binários ASDM via ASDM 3](images/asa16.jpg){.thumbnail}


#### Segundo método: em SSH

Deve colocar previamente o ficheiro binário num servidor FTP e configurar a ASA em SSH para o utilizar e guardar a configuração:

```sh
asa12345# copy ftp://USER:PASSWORD@FTP_IP/FOLDER/asdm-781.bin flash:asdm-781.bin

Address or name of remote host [FTP_IP]?

Source username [USER]?

Source password [PASSWORD]?

Source filename [asdm-781.bin]?

Destination filename [asdm-781.bin]?

Accessing ftp://USER:PASSWORD@FTP_IP/FOLDER/asdm-781.bin...!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Writing file disk0:/asdm-781.bin...
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
25025404 bytes copied in 41.690 secs (610375 bytes/sec)
```

```sh
asa12345# conf t

asa12345(config)# asdm image disk0:/asdm-781.bin
asa12345(config)# end

asa12345# write memory
```

### Adicionar e instalar os novos ficheiros binários ASA

#### Primeiro método: através do ASDM

Conecte-se ao Cisco Adaptive Security Device Manager. Aceda a `Tools`{.action} e depois clique em `Upgrade Software from Local Computer...`{.action}.

![Adicionar e instalar os ficheiros binários ASA via ASDM 1](images/asa14.jpg){.thumbnail}

No ecrã seguinte escolha:

- *Image to upload*: ASA;
- *Local File Patch*: digite `Browse Local Files`{.action} e escolha a sua versão do ficheiro binário da ASA.

 
Valide a sua escolha clicando em `Upload Image`{.action}, depois valide com `Yes`{.action} para confirmar que esta imagem deve tornar-se a imagem de inicialização:

![Adicionar e instalar os ficheiros binários ASA via ASDM 2](images/asa18.jpg){.thumbnail}

![Adicionar e instalar os ficheiros binários ASA via ASDM 3](images/asa20.jpg){.thumbnail}


#### Segundo método: em SSH

Conecte-se em SSH e execute os comandos seguintes:

```sh
asa12345# copy ftp://USER:PASSWORD@FTP_IP/FOLDER/asa-924.bin flash:asa-924.bin

Address or name of remote host [FTP_IP]?

Source username [USER]?

Source password [PASSWORD]?

Source filename [asa-924.bin]?

Destination filename [asa-924.bin]?

Accessing ftp://USER:PASSWORD@FTP_IP/FOLDER/asa-924.bin...!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Writing file disk0:/asa-924.bin...
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
28057462 bytes copied in 46.270 secs (609345 bytes/sec)

asa12345# conf t

asa12345(config)# asdm image disk0:/asa-924.bin

asa12345(config)# end

asa12345# write memory
```
 

### Reiniciar a ASA

Esta etapa é importante, pois é indispensável assegurar-se de que a ASA está a funcionar e acessível após uma simples reinicialização.

#### Primeiro método: através do ASDM

Conecte-se ao Cisco Adaptive Security Device Manager. Selecione `Tools`{.action} e depois `System Reload...`{.action}:

![Reiniciar a ASA via ASDM 1](images/asa5.jpg){.thumbnail}

Para uma reinicialização imediata, na janela que surgiu, selecione em `Reload Start Time`: `Now`{.action}, depois clique em `Schedule Reload`{.action}:

![Reiniciar a ASA via ASDM 2](images/asa6.jpg){.thumbnail}

![Reiniciar a ASA via ASDM 3](images/asa7.jpg){.thumbnail}


#### Segundo método: em SSH

Conecte-se à ASA em SSH e execute o comando `reload`:

```sh
asa12345# reload

Proceed with reload? [confirm]
***
*** --- START GRACEFUL SHUTDOWN ---
Shutting down isakmp
Shutting down File system

***
*** --- SHUTDOWN NOW ---
```

A reinicialização para carregar a configuração vai levar alguns minutos.

 

> [!warning]
>
> Se nesta etapa não consegue adicionar o ficheiro binário da ASA, reinicie para atualizar o ASDM e suprima o ficheiro binário ASDM inutilizado para libertar espaço.
> 
> A seguir atualize o ficheiro binário ASA seguindo os passos descritos acima.
>

 

### Corrigir a configuração

Durante a atualização da ASA nas versões anteriores à 8.4.6, encontrará esta nova configuração após a reinicialização:

```sh
asa12345# sh run | i permit-

no arp permit-nonconnected
```


A configuração deve ser corrigida como se segue:

```sh
asa12345# conf t
asa12345(config)# aarp permit-nonconnected
asa12345(config)# end
asa12345# write memory

Building configuration...
Cryptochecksum: 4b86b1e4 2e731d6b 9d1fc491 a5eae0f3
6854 bytes copied in 1.20 secs (6854 bytes/sec)
[OK]
```

![Firewall Cisco ASA atualizada](images/asa10.jpg){.thumbnail}

![Firewall Cisco ASA atualizada](images/asa23.jpg){.thumbnail}



### Reativar a ASA a partir da Área de Cliente

Tal como para a primeira etapa, aceda à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, na secção `Dedicado`{.action}. A seguir escolha o seu servidor dedicado e depois a `Firewall Cisco ASA`{.action}. Por fim, clique com o botão direito em `Ativar a firewall Cisco ASA`{.action}.

![Ativação da ASA](images/customer_panel_asa_enable.png){.thumbnail}



A sua ASA está atualizada.

![Firewall Cisco ASA atualizada](images/asa22.jpg){.thumbnail}



## Quer saber mais?

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.