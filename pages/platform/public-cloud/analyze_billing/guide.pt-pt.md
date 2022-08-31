---
title: 'Informações sobre o método de faturação cloud'
slug: informacoes-sobre-o-metodo-de-faturacao-cloud
section: Gestão do projeto
excerpt: 'Saiba mais sobre o método de faturação dos produtos Public Cloud'
order: 2
---

**Última atualização: 30/08/2022**

## Introdução

Um dos princípios do cloud computing baseia-se na faturação **pay as you go**, ou seja, o cliente paga aquilo que utiliza.

O método de faturação standard para alugar recursos informáticos baseia-se geralmente num contrato com uma duração determinada mais ou menos longa (12 meses, habitualmente) e um compromisso entre as duas partes durante esse período. No entanto, o cloud computing oferece um sistema de faturação mais flexível, **onde pode pagar no final do mês pelo tempo durante o qual utilizou os recursos**.

Este sistema é semelhante ao de certas operadoras que faturam ao final do mês o número de minutos de comunicação consumidos. Aqui, a OVHcloud fatura as horas durante as quais o servidor, o espaço de armazenamento ou outro serviço foi utilizado.

**Este documento explica os conceitos de faturação da oferta Public Cloud.**

## Requisitos

* um projeto [Public Cloud](https://www.ovhcloud.com/pt/public-cloud/) criado na sua conta OVHcloud;
* uma [Instância Public Cloud](https://www.ovhcloud.com/pt/public-cloud/){.external}
* ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

## Princípio geral

O objetivo consiste em fornecer uma faturação que corresponde melhor à utilização do serviço. Para isso, é necessário tornar a faturação granular. É por essa razão que a unidade é o tempo, contabilizado em horas neste caso.

Para cada recurso sujeito a faturação, um contador de hora começa quando o recurso é criado e acaba quando é eliminado. Isto funciona de acordo com o princípio de “cada hora começada é devida”.

No final do mês, multiplicamos cada contador pela taxa à hora do recurso. Para obter a fatura global, basta adicionar todos os contadores previamente carregados.

Todos os projetos cloud têm a sua própria faturação, que reúne todos os recursos faturados durante o mês. Esta fatura é gerada no primeiro dia do mês a seguir.


### Exemplo

> [!warning]
Tenha em conta que uma instância horária é faturada à hora, independentemente do momento em que a instância é criada. Se pretender usufruir de 60 minutos de utilização durante uma hora de faturação, deve iniciar a sua instância à marca da hora, por exemplo às 13h00 ou às 14h00.
>

Este exemplo permitirá compreender melhor o funcionamento:

- um utilizador lança uma instância B2-15 no dia 4 do mês, às 09h40
- no dia 8 do mês, às 10h00, adiciona 250 GB de volume adicional (Classic Volume)
- elimina tudo no dia 12 do mesmo mês às 16h30, depois de concluir o que tinha de fazer com esses recursos

Para a instância, das 09h40 do dia 4 às 16h30 do dia 12 do mesmo mês, existem 200 horas iniciadas, que são faturadas a 0,111€ por hora.

Para o armazenamento, das 10h00 do dia 8 às 16h30 do dia 12 do mesmo mês, existem 103 horas iniciadas, Cada GB do Classic Volume tem um custo de 0,04€/mês (0,0000555556€/hora).

No final do mês, este será o total da fatura:

- 200 x 0,111
- 103 x 250 x 0,0000555556

Ou seja, 23,63€.

> [!primary]
>
> Os preços aqui indicados não são contratuais e são
> exemplos.
> 

## Instruções 

### Consultar as faturas

Para consultar as faturas de um projeto, aceda ao separador `Public Cloud`{.action} da Área de Cliente OVHcloud, selecione o projeto cloud correspondente na barra lateral e clique em `Billing Control`{.action} e em `Histórico`{.action}.

![public-cloud](images/pci-billing-information1-2021.png){.thumbnail}

Nesse ecrã, terá a possibilidade de:

- ver os detalhes dos recursos expandindo cada secção
- navegar no histórico, do mês anterior ao mês seguinte

### Consultar o consumo atual

O consumo atual (mês corrente) também pode ser consultado através do separador `O meu consumo atual`{.action}.

![public-cloud](images/pci-billing-information2-2021.png){.thumbnail}

A primeira parte **Já faturado** diz respeito aos recursos faturados mensalmente (ver também as instâncias com faturação mensal mais abaixo). Estes recursos são a exceção do “Pay as you go”. O compromisso é mensal e podem ser pagos com antecedência, ou seja, no primeiro dia do mês paga-se para utilizar estes recursos durante os 30 dias seguintes. O objetivo consiste em usufruir de uma vantagem comercial. Nesta página de consumo atual, já pagou estes recursos no primeiro do mês corrente.

A segunda parte “**Próxima faturação**” diz respeito a todos os recursos “Pay as you go”. Representa o seu consumo desde o início do mês até hoje.

Além disso, também poderá obter uma `Estimativa da minha próxima fatura`{.action} (no próximo dia 1) baseada numa projeção de utilização referente à situação atual, e à utilização prevista para o resto do mês.


> [!primary]
>
> Estas informações são indicativas, pois a situação pode
> mudar a qualquer momento, dependendo das suas ações (adição ou eliminação de
> recursos).
> 

![public-cloud](images/pci-billing-information3-2021.png){.thumbnail}

Se pretender receber um aviso quando a projeção de consumo ultrapassar um determinado limite, pode fazê-lo a partir desta página. Quando a projeção ultrapassa o limite configurado, é-lhe enviado um e-mail com esta informação.

### As instâncias

Os preços das instâncias cloud (ou servidores cloud) são indicados na interface do cliente da OVHcloud antes de iniciar uma instância. Também podem ser consultados diretamente na [página de preços](https://www.ovhcloud.com/pt/public-cloud/prices/){.external}.


> [!primary]
>
> A largura de banda das instâncias não é faturada.
> 

Cada modelo de instância está disponível consoante dois modelos de faturação: à hora ou mensal.

> [!warning]
>
> A faturação de uma instância acaba quando a instância é eliminada
> de forma definitiva. Se a instância tiver um estado como “Interrompida”, “Em pausa” ou outro, o contador de faturação continuará
> a funcionar porque a instância não foi eliminada.
> Em ambos os métodos de faturação, a unidade de tempo começada é faturada.
> 

#### Preço à hora

Este preço baseia-se no modelo “Pay as you go” explicado mais acima.

Estas instâncias são pagas no primeiro dia do mês seguinte para as horas consumidas durante o mês corrente.

##### **Suspender (shelve) uma instância**

Para as instâncias horários, é possível suspender (*shelve*) uma instância para libertar os recursos que lhe são dedicados, conservando o mesmo endereço IP. Neste caso, os dados do seu disco local são armazenados numa instância criada quando uma instância está reservada/suspensa. Apenas a imagem instantânea será faturada.

> [!warning]
>
> Este processo só está funcional para as instâncias faturadas à hora, não pára a faturação da sua instância, mas reduz os seus custos.
>

Para mais informações sobre o procedimento a seguir, consulte este [guia](https://docs.ovh.com/pt/public-cloud/suspender_ou_colocar_em_pausa_uma_instancia/)

#### Preço mensal

Este preço oferece um desconto de cerca de 50% relativamente ao preço à hora: é a exceção da faturação típica cloud.

Cada mês iniciado é facturado, mesmo que a instância seja apagada antes do final do mês.

### Armazenamento

As ofertas de armazenamento são anunciadas com um preço por GB/mês. Para ver o preço por GB por hora, basta dividir o preço mensal por 720, que corresponde ao número médio de horas num mês. O resultado deste cálculo permite saber quanto custa um elemento armazenado por hora.

O cálculo é: (preço do GB por mês / 720) x número de horas x o número de GB

O número de GB por hora corresponde à quantidade máxima de GB armazenados durante uma hora. Por exemplo: se um utilizador tiver 15 GB às 16h20, 17 GB às 16h40 e 14 GB às 16h50, a OVHcloud irá cobrar 17 GB para o período de 16h-17h.

Os preços de armazenamento estão disponíveis diretamente no [site da OVHcloud](https://www.ovhcloud.com/pt/public-cloud/storage/){.external}.

#### Volumes adicionais

Os volumes adicionais são simplesmente faturados por GB fornecido, com um preço diferente dependendo da gama.

#### Backup de volumes adicionais

Os backups de volumes adicionais são faturados da mesma forma que os próprios volumes.

#### Snapshots de volumes adicionais

As snapshots de volumes adicionais são faturadas da mesma forma que os próprios volumes.

#### Snapshots e imagens de instância

As snapshots de instâncias como as imagens (excluindo o catálogo de imagens fornecido pela OVHcloud) são faturadas a um preço fixo por GB/mês, independentemente da instância original ou do tipo de imagem. Aceda à [página de preços](https://www.ovhcloud.com/pt/public-cloud/prices/){.external} para saber mais.

#### Object Storage

São faturados dois elementos para o Object Storage:

- o armazenamento dos objetos, ou seja o volume realmente consumido em GB
- o tráfego de saída, ou seja, o volume de dados enviados do serviço, incluído no corpo dos pedidos (body HTTP)

> [!primary]
>
> O tráfego de saída entre o serviço de armazenamento de objetos e as instâncias é
> faturado como se o tráfego de saída fosse enviado pela Internet.
> 

> [!warning]
>
> A consulta de objetos através da Área de Cliente OVHcloud também é considerada
> como sendo tráfego de saída.
> 


#### Arquivos

São faturados três elementos para o armazenamento de arquivos:

- o armazenamento dos arquivos, ou seja o volume realmente consumido em GB
- o tráfego de entrada, ou seja, o volume de dados recebidos no serviço, incluído no corpo dos pedidos (body HTTP)
- o tráfego de saída, ou seja, o volume de dados enviados do serviço, incluído no corpo dos pedidos (body HTTP)

> [!primary]
>
> O tráfego de saída entre o serviço de arquivamento e as instâncias é faturado
> como se o tráfego de saída fosse enviado pela Internet.
> 

## Quer saber mais?

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.