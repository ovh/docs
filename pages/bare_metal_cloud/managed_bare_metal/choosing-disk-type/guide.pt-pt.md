---
title: Escolher o formato do disco
routes:
    canonical: '/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/quel_format_de_disque_choisir'
excerpt: Descubra os diferentes tipos de formatos de disco
updated: 2020-11-18
---


## Objetivo

VMware propõe três formatos de disco para as máquinas virtuais.

** Este manual explica as diferenças entre esses formatos **

## Instruções

### Thin provisioning

O *Thin provisioning* é um tipo de formato de disco, que utiliza exclusivamente o espaço necessário no datastore com base na necessidade.

É possível alocar um disco de 1 TB que será reconhecido como 1 TB pelo sistema operativo da VM, mas só ocupará no datastore o espaço ocupado pelo *guest OS* (por exemplo, 20 GB). 

Isto significa que é possível alocar num datastore de 1,2 TB uma capacidade de 50 TB (50 VM de 1 TB alocado), mas ocupar apenas 1 TB (20 GB ocupado/VM no nosso exemplo).

> [!warning]
>
> Nesta situação, é importante controlar o consumo de escrita dessas VM, para não aumentar de forma consequente a ocupação dos diferentes discos das VM e preencher o datastore.
> O datastore preenchido impedirá qualquer nova escrita e poderá provocar a interrupção das VM.
>

Não é possível liberar o espaço ocupado. 

Exemplo: se forem ocupados 40 GB num thin disk de 100 GB e que forem eliminados 20 GB de dados na VM, o espaço ocupado no datastore será sempre de 40 GB e o espaço alocado de 100 GB.


### Thick provisioning Eager zero

O *Thick provisioning Eager zero* é um tipo de formato de disco que ocupa todo o espaço alocado no datastore. 

Uma VM de 100 GB alocados em *thick* ocupará 100 GB de espaço no datastore.

O disco da VM é preenchido do zero no momento da criação do disco no volume VMFS.

### Thick provisioning Lazy zero

O *Thick provisioning Lazy zero* é um tipo de formato de disco que ocupa todo o espaço alocado no datastore.

Uma VM de 100 GB alocados em *thick* ocupará 100 GB de espaço no datastore.

O espaço alocado é reservado ao disco da VM, mas os zeros são escritos no momento em que a VM precisar de espaço em disco.

### Exemplo

Exemplo para as VM de 100 GB com um *Guest OS* de 40 GB:


|Tipo de disco|Espaço alocado|Block zeroed|Espaço ocupado|
|---|---|---|---|
|Eager Zero|Criação de VM|Criação de VM|100 GB|
|Lazy Zero|Criação de VM|Quando o block é escrito pela primeira vez|100 GB|
|Thin|Quando o block é escrito pela primeira vez|Quando o block é escrito pela primeira vez|40 GB|

### Formato do disco na OVHcloud

No armazenamento de tipo datastore de uma infraestrutura Managed Bare Metal, apenas está disponível o *Thin provisioning*.

No armazenamento vSan, estão disponíveis os 3 tipo de formato.

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
