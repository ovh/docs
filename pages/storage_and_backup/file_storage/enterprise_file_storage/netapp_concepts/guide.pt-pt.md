---
title: Enterprise File Storage - Conceitos
excerpt: "Descubra os princípios de funcionamento da oferta Enterprise File Storage"
updated: 2022-04-07
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Enterprise File Storage permite-lhe beneficiar de volumes de armazenamento NFS inteiramente geridos pela OVHcloud. Neste guia de início rápido, descubra os conceitos associados ao seu serviço Enterprise File Storage, bem como os seus limites.

**Descubra como funciona a oferta Enterprise File Storage.**

## Na Prática

### Enterprise File Storage, o que é?

Enterprise File Storage é uma oferta de sistema de ficheiros gerida pela OVHcloud e baseada na solução NetApp&#174; ONTAP.

Pode encomendar um ou vários espaços de armazenamento entre 1TB e 58TB na sua conta, com uma granularidade de 1 TB.

### Princípio de funcionamento dos serviços

Quando encomenda, através da sua conta OVHcloud, um serviço Enterprise File Storage entre 1 e 58 TB, recebe um espaço de armazenamento NFS.

A conta OVHcloud é, por predefinição, o contacto administrador, técnico e de faturação do serviço. Encontre mais informações no nosso guia "[Gerir os contactos dos seus serviços»](/pages/account_and_service_management/account_information/managing_contact)".

![Enterprise File Storage 1](images/Netapp_Concept_1.png)

> [!primary]
>
> Cada serviço só pode pertencer a uma única conta OVHcloud (NIC-handle). No entanto, os contactos técnicos e faturação podem ser alterados em benefício de outras contas.
>

### Princípio de funcionamento dos seus volumes

Assim que tiver encomendado o seu serviço Enterprise File Storage, tem à sua disposição um serviço correspondente a uma capacidade de armazenamento. Neste serviço, pode criar um ou vários volumes, cada volume corresponde a uma partição.
<br>Estes volumes permitem-lhe armazenar ficheiros e são acessíveis em rede através de um endereço IP fornecido pela OVHcloud.

![Enterprise File Storage 2](images/Netapp_Concept_2.png)

> [!primary]
>
> - Cada volume pertence a um serviço, mas um serviço pode conter vários volumes.
>
> - O tamanho de um volume não pode ultrapassar o tamanho total do serviço menos o espaço alocado às snapshots que ele contém.
>
> - O tamanho de um volume é evolutivo, tanto no sentido ascendente como no sentido descendente.
>

Encontre mais informações no guia ["Gerir os seus volumes"](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_volumes).

### Princípio de funcionamento das ACL

Por razões de segurança, um volume não é imediatamente acessível através do seu caminho. É necessário criar regras na ACL do volume para permitir que os utilizadores acedam ao volume.

Estas regras são constituídas por um endereço IP de origem da sua rede no formato x.x.x.x/x e por um tipo de direitos, quer seja apenas leitura (RO) ou leitura/escrita (RW).

![Enterprise File Storage 3](images/Netapp_Concept_3.png)

> [!primary]
>
> Pode criar uma ou várias regras por volume.
>

Encontre mais informações no guia ["Gerir as ACL de um volume"](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_volume_acl).

### Princípio de funcionamento das snapshots

A tecnologia de snapshots do Enterprise File Storage oferece uma solução de proteção de dados local no mesmo equipamento para restauros de ficheiros únicos.

Uma snapshot Enterprise File Storage é uma imagem de um volume numa data e hora precisas.

A criação demora apenas alguns segundos, independentemente do tamanho do volume, da capacidade utilizada ou do nível de atividade no volume.

A snapshot é uma cópia dos metadados do volume num determinado instante (instantâneo da tabela dos inodes).

O consumo diário constatado das snapshots situa-se entre 1 e 5% da capacidade do volume para numerosas aplicações. Por conseguinte, a cada criação de volume, a OVHcloud reserva 5% da sua capacidade para as snapshots do mesmo.

![Enterprise File Storage 4](images/Netapp_Concept_4.png)

Encontre mais informações no guia ["Gerir as snapshots de um volume"](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_volume_snapshots).

### Limites da oferta Enterprise File Storage

- Um serviço com um tamanho atribuído e dedicado entre 1 TB e 58 TB
- A granularidade de um serviço é de 1TB
- O número de volumes por serviço está limitado a 10 volumes por TB (por exemplo, 50 volumes para um serviço de 5 TB)

#### Limites dos volumes

- Um volume não pode ultrapassar o tamanho de 29 TB menos os 5% reservados para as snapshots (1.45TB) ou seja, 27,55 TB
- O tamanho mínimo de um volume é de 100 GB
    - Granularidade de tamanho para um volume: 1 GB
    - Tamanho máximo de ficheiro: 16 TB

#### Limites das snapshots

- Um volume não pode ter mais de 200 snapshots.
- Número máximo de políticas de snapshot por volume: 1
- Número máximo de regras por política de snapshot: 4

#### Limites ligados às ACL

- Um volume tem um endereço IP na rede interna 10.x.x.x da OVHcloud.
- Número máximo de vRack (private network service) associados ao serviço: 0 (o suporte da tecnologia vRack ainda não está disponível)
- Número máximo de acessos list: 1 por volume
- Número máximo de IPs por access list: 16 IPs por access list

#### Limites de desempenho

- Largura de banda mínima por TB: sem mínimo
- Largura de banda máxima por TB: 64 MB/s e 4000 IOPS

### Cálculo de um volume

> [!primary]
>
> Qual é a diferença entre Terabyte (TB) e Tebibyte (TiB)?
>
> - T, o prefixo "tera-", é uma métrica e um standard IT que utiliza a base-10. Assim, 1 TB = 10^12 bytes = 10000000000 bytes = 1000 GB.
>
> - Ti, o prefixo "Tebi-", foi criado mais tarde como um dos prefixos binários que são atualmente padrões IEC/ISO e que utilizam a base-2. Isso significa 1024^4=2^40. Portanto 1 TiB = 1099511627776 bytes= 1024 GiB.
>
> - Os computadores usam a base 2, de modo que a quantidade de armazenamento que você pode ver em seu sistema operativo é expressa em TiB. Os fornecedores de armazenamento tendem a utilizar TB, uma vez que é um número maior que o TiB.
>
> - O problema é que eles são semelhantes (2,4%) no KB, mas no TB, há uma diferença de 10% e o aumento é exponencial.
>
> - **Para Enterprise File Storage, porque queremos ser transparentes consigo, entregaremos o volume em TiB mesmo se vir o TB como unidade, porque o grande público utiliza o TB.**
>
> - Assim, se encomendar um serviço Enterprise File Storage de 1 TB, disporá na realidade de 1 TiB = 1,09951 TB.
>

## Saiba mais

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique em [esta ligação](https://www.ovhcloud.com/pt/professional-services/) para obter um orçamento e solicitar uma análise personalizada do seu projecto aos nossos especialistas da equipa de Serviços Profissionais.

Junte-se à nossa comunidade de utilizadores <https://community.ovh.com/en/>.
