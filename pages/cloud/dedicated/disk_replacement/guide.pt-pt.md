---
title: 'Substituir um disco com defeito'
slug: substituicao-disco
excerpt: 'Saiba como identificar um disco com defeito e pedir a sua substituição'
section: 'RAID e discos'
updated: 2018-06-21
---

**Última atualização: 20/06/2018**

## Sumário

Se verificar que um disco tem problemas ou que o nosso sistema lhe enviou uma notificação por e-mail para o avisar da falha de um disco, deverá tomar as medidas necessárias para o substituir o mais rápido possível.

**Este guia explica-lhe como identificar um disco defeituoso e como fazer o pedido de substituição junto dos nossos serviços.**

> [!warning]
>
> A utilização e a gestão dos serviços OVHcloud são da responsabilidade do cliente. Como não temos acesso a estas máquinas, não podemos administrá-las nem fornecer-lhe assistência. O cliente é o único responsável pela gestão e pela segurança do serviço.
> 
> Este guia fornece as instruções necessárias para usar as funcionalidades básicas de um servidor dedicado. Se encontrar alguma dificuldade relacionada com o processo, deverá contactar um serviço especializado. Para mais informações, aceda à secção deste guia intitulada: «Quer saber mais?»
> 


## Requisitos

- Estar conectado em SSH ao [servidor dedicado OVHcloud](https://www.ovh.pt/servidores_dedicados/){.external} com acesso *root* (Linux).


## Instruções

### Fazer backup dos dados

Antes de mais, **é necessário fazer um backup dos seus dados**. O único objetivo de um RAID, com a exceção do RAID 0, é proteger os dados contra as falhas dos discos. Quando um disco fica inutilizável, todos os dados dependem da integridade do(s) disco(s) restante(s).

Embora seja raro que dois discos tenham problemas em simultâneo, esta situação não é impossível.
Não se substituirá nenhum disco sem:

-	uma confirmação da sua parte quanto ao backup dos dados;
-	uma confirmação de que aceita, com plena consciência, a potencial perda dos dados no seguimento da substituição do disco.


### Como detetar um disco com problemas

Sempre que receber um alerta por e-mail ou que constate uma falha, é indispensável que verifique a integridade de todos os seus discos. Se dois discos que fazem parte de um mesmo conjunto RAID apresentarem problemas, substituiremos em primeiro lugar o que apresentar mais erros.

#### Servidor com recurso a um RAID por software

Se possui um servidor que recorre a RAID por software, consulte o guia [«RAID por software»](https://docs.ovh.com/pt/dedicated/raid-soft/) para encontrar os discos instalados no seu servidor.

Quando tiver encontrado o caminho de acesso aos discos, pode testá-los da seguinte forma através do comando `smartctl`:

```sh
smartctl -a /dev/sdX
```

> [!primary]
>
> Não se esqueça de substituir `/dev/sdX` pelo caminho de acesso ao seu disco, sendo sdX o disco em causa, isto é, sdA, sdB, etc.
> 

Isto também permitirá que obtenha o número de série (*Serial Number*) do(s) disco(s) a substituir, de modo a comunicar essa informação ao técnico. 

Eis um exemplo do resultado apresentado:

```sh
smartctl -a /dev/sda

>>> smartctl 5.41 2011-06-09 r3365 [x86_64-linux-3.14.32-xxxx-grs-ipv6-64] (local build)                                                                                          
>>> Copyright (C) 2002-11 by Bruce Allen, http://smartmontools.sourceforge.net

>>> === START OF INFORMATION SECTION ===
>>> Device Model:     TOSHIBA DT01ACA050
>>> Serial Number:    5329T58NS
>>> LU WWN Device Id: 5 000039 ff6d28993
>>> Firmware Version: MS1OA750
>>> User Capacity:    500 107 862 016 bytes [500 GB]
>>> Sector Sizes:     512 bytes logical, 4096 bytes physical
>>> Device is:        Not in smartctl database [for details use: -P showall]
>>> ATA Version is:   8
>>> ATA Standard is:  ATA-8-ACS revision 4
>>> Local Time is:    Thu Nov 24 15:51:25 2016 CET
>>> SMART support is: Available - device has SMART capability.
>>> SMART support is: Enabled
```

Portanto, a linha importante no nosso caso será a seguinte:

**`Serial Number:    5329T58N`**

#### Servidor com recurso a um RAID por hardware

Se possui um servidor que recorre a RAID por hardware, consulte o guia [«RAID por hardware» - EN](https://docs.ovh.com/gb/en/dedicated/raid-hard/){.external} e realize o procedimento adequado ao seu tipo de controlador RAID para encontrar os caminhos de acesso aos discos.

Quando tiver encontrado o caminho de acesso aos discos, pode testá-los da seguinte forma através do comando `smartctl`:

```sh
smartctl -d megaraid,N -a /dev/sdX
```

> [!primary]
>
> Não se esqueça de substituir /dev/sdX pelo caminho de acesso ao seu disco, sendo sdX o disco em causa, isto é, sdA, sdB, etc.
> 


> [!warning]
>
> Em certos casos, poderá obter a mensagem seguinte: `/dev/sda [megaraid_disk_00][SAT]: Device open changed type from 'megaraid' to 'sat'`.
> 
> Então, terá de substituir `megaraid` por `sat+megaraid` como se segue: `smartctl -d sat+megaraid,N -a /dev/sdX`.
> 

No caso de uma placa RAID LSI, pode testar os discos utilizando o comando `smartctl`, tal como se descreve a seguir:

```sh
smartctl -a /dev/sgY
```

O número do RAID deve ser especificado (/dev/sg0 = 1.º RAID, /dev/sg1 = 2.º RAID, etc.).


#### Servidor com um disco NVMe

No caso de um disco NVMe, será preciso pôr o servidor em modo [« Rescue-pro »](https://docs.ovh.com/pt/dedicated/rescue_mode/), no qual a ferramenta **nvme-cli** está instalada de forma padrão.

Então será necessário utilizar o comando `nvme list` para obter os números de série dos discos:

```sh
root@rescue:~# nvme list
>>> Node          SN                  Model                 Namespace Usage                     Format       FW Rev
>>> ------------- ------------------- --------------------- --------- ------------------------ ------------- --------
>>> /dev/nvme0n1  CVPF636600YC450RGN  INTEL SSDPE2MX450G7   1         450.10  GB / 450.10  GB   512  B + 0 B MDV10253
>>> /dev/nvme1n1  CVPF6333002Y450RGN  INTEL SSDPE2MX450G7   1         450.10  GB / 450.10  GB   512  B + 0 B MDV10253
```


### Pedir a substituição do disco

#### Substituir o disco a frio (desligando o servidor)

Para pedir a substituição de um disco, basta criar um ticket junto do serviço de apoio técnico, a partir da [Área de Cliente OVHcloud](https://www.ovh.com/manager/dedicated/index.html#/ticket){.external}. De modo a acelerar o processo, é conveniente fornecer os elementos ligados aos testes. Aqui fica uma lista do que é preciso:

- **O número de série do disco a substituir, bem como de todos os outros discos sem problemas**. Para obter o número de série do disco a substituir, consulte [este guia](https://docs.ovh.com/pt/dedicated/obter-numero-serie-disco/). Se por alguma razão não conseguir obter o número de série do disco, queira mencioná-lo no ticket e comunicar-nos o número de série do(s) disco(s) a não substituir. 

Como já indicado, os números de todos os discos são importantes. Eles serão transmitidos ao técnico no datacenter e evitarão a ocorrência de erros durante a operação.

- **A data e a hora do início da intervenção**. Deve prever uma curta interrupção do serviço, mas pode planear a intervenção para qualquer hora do dia ou da noite, num dos sete dias da semana.

- **A confirmação de que fez o backup dos dados ou de que aceita a potencial perda destas informações.**


#### Substituir o disco a quente (sem desligar o servidor)

> [!primary]
>
> Este tipo de substituição só é possível para os servidores [FS-MAX](https://www.ovh.pt/servidores_dedicados/armazenamento/1801fs05.xml){.external} e para os servidores [Big-HG](https://www.ovh.pt/servidores_dedicados/hg/1801bhg01.xml){.external} com recurso a uma placa RAID.
> 

No caso de uma substituição a quente num servidor com uma placa MegaRAID, quando a intervenção for programada ser-lhe-á pedido que faça piscar o LED do disco a substituir, para facilitar o trabalho dos técnicos.

Se o seu servidor dispõe de uma placa MegaRAID, estes são os comandos a utilizar:

- para fazer piscar o LED:

```sh
MegaCli -PdLocate -start -physdrv[E0:S0] -a0
```

- para interromper o piscar do LED:

```sh
MegaCli -PdLocate -stop -physdrv[E0:S0] -a0
```

> [!primary]
>
> Equivalente através do comando `storcli`:
>
> - para fazer piscar o LED:
>
> ```sh
> storcli /c0/e0/s0 start locate
> ```
>
> - para interromper o piscar do LED:
>
> ```sh
> storcli /c0/e0/s0 stop locate
> ```
>


> [!primary]
>
> Apesar deste procedimento, não se esqueça de especificar no ticket de assistência o número de série e a *slot* do disco.
> 

### Após a substituição

Se possui um servidor em RAID por hardware, o RAID vai restabelecer-se de forma autónoma. Atenção: o *auto-rebuild*, ativado de forma padrão, não deve ter sido desativado por si. O processo de ressincronização pode levar alguns minutos e prejudicar o desempenho de leitura/escrita do RAID.

Se possui um servidor em RAID por software, convém que execute manualmente a ressincronização dos discos. Para isso, consulte a documentação associada ao [«RAID por software»](https://docs.ovh.com/pt/dedicated/raid-soft/).


## Quer saber mais?

[«RAID por software»](https://docs.ovh.com/pt/dedicated/raid-soft/)

[«RAID por hardware» - EN](https://docs.ovh.com/gb/en/dedicated/raid-hard/){.external}

[Modo rescue](https://docs.ovh.com/pt/dedicated/rescue_mode/)


Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
