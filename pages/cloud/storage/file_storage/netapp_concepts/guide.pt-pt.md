---
title: Enterprise File Storage - Conceitos
slug: netapp/concepts
excerpt: "Descubra os princípios de funcionamento da oferta Enterprise File Storage"
section: Enterprise File Storage
order: 1
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 27/10/2021**

## Objetivo

A oferta OVHcloud Enterprise File Storage permite-lhe encomendar pools de capacidade e gerir assim volumes de ficheiros acessíveis numa rede.
Neste guia de arranque rápido, descubra os conceitos associados à sua oferta Enterprise File Storage bem como os limites da oferta.

**Saiba como funciona a oferta Enterprise File Storage.**

## Instruções

### Enterprise File Storage, o que é?

Enterprise File Storage é uma oferta de sistema de ficheiros gerida pela OVHcloud e baseada na solução NetApp&#174; ONTAP Software-Defined Storage.

Pode encomendar um ou vários espaços de armazenamento entre 1TiB e 29TiB na sua conta.

> [!primary]
>
> Qual é a diferença entre Terabyte (TB) e Tebibyte (TiB)?
>
> - T, o prefixo "tera-" é uma métrica e um standard IT que utiliza a base-10. Portanto, 1 TB = 1012 bytes = 100000000000 bytes = 1000 GB.
>
> - Ti, o prefixo "Tebi-", foi criado mais tarde como um dos prefixos binários que são atualmente padrões IEC/ISO e que utiliza a base-2. Isto significa 10244=240. Portanto 1 TiB = 109951162776 bytes = 1024 GiB.
>
> - Os computadores utilizam a base 2, pelo que a quantidade de armazenamento que pode ver no seu sistema operativo é expressa em TiB. Os fornecedores de armazenamento tendem a utilizar o TB, uma vez que este é um número superior ao TiB.
>
> - O problema é que são semelhantes (2,4%) ao nível do KB, mas ao nível do TB, existe uma diferença de 10% e o aumento é exponencial.
>
> - Para o Enterprise File Storage, porque queremos ser transparentes consigo, entregaremos o volume em TiB mesmo que veja o TB como unidade, porque o grande público utiliza o TB.
>
> - Assim, se encomendar um serviço Enterprise File Storage de 1 TB, disporá de facto de 1 TiB = 1,09951 TB.
>

### Princípio de funcionamento das capacidades pools

Quando encomenda, através da sua conta OVHcloud, um serviço Enterprise File Storage entre 1 e 29 TB, recebe uma capacidade pool NetApp&#174;.

A conta OVHcloud é por predefinição o contacto administrador, técnico e faturação do serviço. Para mais informações, consulte o nosso manual ["Como gerir os contactos (gestores) dos serviços OVHcloud"](https://docs.ovh.com/pt/customer/gestao_dos_contactos/).

![Enterprise File Storage 1](images/Netapp_Concept_1.PNG)

> [!primary]
>
> Cada capacidade pool só pode pertencer a uma única conta OVHcloud (NIC-handle). No entanto, os contactos técnicos e de faturação podem ser alterados para outras contas.
>

### Princípio de funcionamento dos seus volumes

Uma vez a oferta Enterprise File Storage em serviço, pode criar um ou vários volumes na sua capacidade pool.
<br>Estes volumes permitem-lhe armazenar ficheiros e são acessíveis em rede através de um endereço IP fornecido pela OVHcloud.
<br>A criação de um volume aciona automaticamente a criação de um caminho de acesso principal, bem como três caminhos de acesso secundários.

![Enterprise File Storage 2](images/Netapp_Concept_2.PNG)

> [!primary]
>
> - Cada volume pertence a uma única capacidade pool, mas uma capacidade pool pode conter vários volumes.
>
> - O tamanho de um volume não pode ultrapassar o tamanho total da capacidade pool menos o espaço atribuído às snapshots que contém.
>
> - O tamanho de um volume é escalável, tanto em alta como em baixa.
>

Para mais informações, consulte o guia ["Gerir volumes"](https://docs.ovh.com/pt/storage/netapp-volumes/).

### Princípio de funcionamento dos ACL

Por razões de segurança, um volume não é imediatamente acessível através do seu caminho de acesso. É necessário criar regras na lista de controlo de acesso (ACL) do volume para permitir o acesso dos utilizadores.

Estas regras são constituídas por um endereço de IP source da sua rede em formato x.x.x.x/x e um tipo de permissões, seja leitura apenas (RO) ou leitura/escrita (RW).

![Enterprise File Storage 3](images/Netapp_Concept_3.PNG)

> [!primary]
>
> Pode criar uma ou várias regras por volume.
>

Para mais informações, consulte o guia ["Gerir os ACL de um volume"](https://docs.ovh.com/pt/storage/netapp-volume-acl/).

### Princípio de funcionamento das snapshots

A tecnologia das snapshots de Enterprise File Storage oferece uma solução de proteção local de dados no mesmo equipamento para os restauros de ficheiros únicos.

Uma snapshot Enterprise File Storage é uma imagem de um volume com uma data e uma hora precisas.

A criação demora apenas alguns segundos, independentemente do volume, da capacidade utilizada ou do nível de atividade sobre o volume.

O snapshot é uma cópia dos metadados do volume num determinado momento (instantâneo do índice).

O consumo diário das snapshots varia entre 1 % e 5 % da capacidade do volume para numerosas aplicações. Por isso, a OVHcloud reserva 5% da sua capacidade para cada criação de volume.

![Enterprise File Storage 4](images/Netapp_Concept_4.PNG)

Para mais informações, consulte o guia ["Gerir as snapshots de um volume"](https://docs.ovh.com/pt/storage/netapp-volume-snapshots/).

### Limites da oferta Enterprise File Storage para a fase de testes externos (Beta)

Veja abaixo os limites das capacidades pools da oferta Enterprise File Storage:

- Uma capacidade pool tem um tamanho atribuído e dedicado compreendido entre 1TiB e 29TiB.
- Uma capacidade pool está limitada a 20 volumes por TiB.

Seguem-se os limites dos volumes:

- Um volume não pode ultrapassar o tamanho de 29 TiB menos os 5% reservados para as snapshots (1.45TiB) ou seja, 27,55 TiB.
- O tamanho mínimo de um volume é de 1GBB.
- Um volume não pode ter mais de 255 snapshots.
- Um volume tem um endereço IP na rede interna em 10.x.x da OVHcloud.

## Saiba mais

Junte-se à nossa comunidade de utilizadores <https://community.ovh.com/en/>.
