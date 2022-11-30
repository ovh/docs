---
título: Enterprise File Storage - Conceitos de performance
excerpt: "Descubra os conceitos relacionados com o aprovisionamento, o acompanhamento e o teste de desempenho da solução Enterprise File Storage"
slug: netapp/performances
Secção: Enterprise File Storage
order: 011
---

**Última atualização: 30/11/2022**

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Descubra os conceitos relacionados com o aprovisionamento, o acompanhamento e o teste de desempenho da solução [Enterprise File Storage](https://www.ovhcloud.com/pt/storage-solutions/enterprise-file-storage/).

## Instruções

### Acompanhamento das performances

A noção de "nível de serviço" é um elemento importante da oferta Enterprise File Storage. Define os níveis de desempenho alcançáveis para cada serviço provisionado. O desempenho de um sistema de ficheiros é geralmente definido por vários elementos: 

- o débito; 
- IOPS (ou número de operações de entrada-saída por segundo);
- o tamanho do bloco;
- o modelo de acesso sequencial ou aleatório.

Atualmente, o Enterprise File Storage fornece e garante objetivos de desempenho de **64 MB/s por To e 4000 IOPS por To**. As capacidades provisionadas dos serviços têm assim um impacto direto sobre as performances disponíveis para o seu serviço.

Esta informação é importante quando desenvolve a sua arquitetura de armazenamento. Vejamos três exemplos:

- **Exemplo n°1**: a sua aplicação necessita de um débito teórico de cerca de **430 MB/s**. Para isso, deve aprovisionar pelo menos **7 TB** de armazenamento. Com efeito, um cálculo rápido (**450/64 = 6,72**) permite estimar a capacidade mínima necessária para atingir este caudal.

- **Exemplo n°2**: a sua infraestrutura requer **4500 IOPS** e um volume de dados de **1 TB**. Para isso, é necessário aprovisionar ***2 TB** para obter os **4500 IOPS necessários**. Mais especificamente neste caso, beneficiará de **8000 IOPS** sobre a capacidade provisionada. Trata-se de aprovisionar o seu serviço de forma a assegurar o nível de desempenho desejado.

- **Exemplo n°3**: a sua aplicação não requer performance particular, mas um volume de armazenamento superior a **60 TB**. Neste caso, é preferível orientar-se para o serviço de armazenamento [NAS-HA](https://www.ovhcloud.com/pt/storage-solutions/nas-ha/), mais económico e que permite atingir capacidades superiores a 58 TB por serviço.

### volumes e qualidade de serviços (QoS)

Relembramos que um volume é uma partição do serviço (também chamada "pool" ou "pool de capacidade"). Aquando da sua encomenda, aprovisionará uma capacidade para o seu serviço. Uma vez o serviço entregue, será obrigado a criar os seus volumes ao colocar à disposição uma quota que vai de 100GB a 29TB por volume. 

Encontre aqui a hierarquia de um serviço de armazenamento Enterprise File Storage:

![Enterprise File Storage Perf 1](images/Netapp_Hierarchie_2.png)

Enterprise File Storage ainda não permite a modificação da QoS de forma manual. A QoS é definida ao nível do serviço (pool).

### Como maximizar as performances do seu sistema de ficheiros

Para maximizar o desempenho da sua Enterprise File Storage, é importante ter em conta alguns elementos:

- Não se esqueça de reservar a sua Enterprise File Storage no mesmo datacenter que as suas cargas de trabalho. As latências entre os datacenters podem ser elevadas e afetar as performances globais da sua aplicação.
- Para uma maior fiabilidade e uma largura de banda otimizada, favoreça os servidores das últimas gerações pois dispõem das novas interfaces de rede.
- Identifique a largura de banda pública disponível nos servidores clientes, de forma a garantir a compatibilidade com as performances provisionadas e assim maximizar os débitos.

### Teste de desempenho

Para realizar os seus próprios testes de desempenho e para o familiarizar com os níveis de serviço do Enterprise File Storage, recomendamos a utilização de ferramentas como [FIO](https://github.com/axboe/fio), uma ferramenta de avaliação muito popular. Fornece numerosas opções ajustáveis para simular a carga de trabalho desejada e fornece estatísticas detalhadas sobre o comportamento do armazenamento sob carga. Também está disponível gratuitamente numa vasta gama de sistemas operativos.

É importante testar as performances da sua Enterprise File Storage no mesmo datacenter que as suas cargas de trabalho. As latências entre os datacenters são demasiado elevadas durante o funcionamento normal para que tal avaliação seja pertinente.

Antes de iniciar o teste, verifique se o cliente utilizado para este benchmark tem acesso ao seu serviço Enterprise File Storage e a um volume de teste. Se ainda não o fez, pode seguir o guia de [gestão a partir da Área de Cliente OVHcloud](https://docs.ovh.com/pt/storage/file-storage/netapp/control-panel/).

#### Banco de teste

A ferramenta [FIO](https://github.com/axboe/fio) permite-lhe testar vários cenários e modificar vários parâmetros de teste: 

- o número de imagens; 
- o tamanho das imagens;
- o tamanho do bloco;
- a duração do teste; 
- o número de FIO workers;
- o modelo de acesso (leitura/escrita/sequencial/aleatório), etc.

Encontre mais informações sobre [a documentação do FIO](https://fio.readthedocs.io/en/latest/index.html){.external}.

## Quer saber mais?

Fale com a nossa comunidade de utilizadores no Discord: <https://discord.gg/jW2FgBJ72h>


