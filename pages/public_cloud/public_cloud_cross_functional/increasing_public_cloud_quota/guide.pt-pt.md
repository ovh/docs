---
title: 'Aumentar as quotas Public Cloud'
excerpt: "Saiba como solicitar o aumento de quota para os seus recursos Public Cloud (RAM, CPU, espaço em disco, instâncias) diretamente a partir da sua Área de Cliente OVHcloud."
updated: 2026-05-05
---

## Objetivo

Por predefinição, o número de recursos (RAM, CPU, espaço em disco, número de instâncias, etc.) e de projetos que pode criar é limitado por razões de segurança.

Se desejar criar mais, será necessário aumentar a quota.

**Saiba como solicitar e aumentar uma quota de Public Cloud na sua Área de Cliente OVHcloud.**

## Requisitos

- [Ter um método de pagamento válido](/pages/account_and_service_management/managing_billing_payments_and_services/manage-payment-methods) na Área de Cliente OVHcloud.

## Instruções

<!-- CP-NAV-START:publiccloud-projects -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Public Cloud Projects](/links/control-panel/publiccloud-projects)
- **Caminho de navegação:** `Public Cloud`{.action} > Selecione o seu projeto

---
<!-- CP-NAV-END:publiccloud-projects -->

No menu à esquerda, clique em `Limite e regiões`{.action} em **Parâmetros**.

![Página Quota e Regiões a apresentar as quotas atuais do projeto por região](images/raisepciquota1.png){.thumbnail}

Esta página apresenta um resumo das quotas atuais do seu projeto por região. Um aviso aparece sempre que um recurso atinge 80 % da sua quota.

### Aumentar a sua quota de recursos

De acordo com critérios internos (antiguidade, existência de faturas pagas, etc.), pode solicitar aumentos de quota para os recursos dos seus projetos Public Cloud diretamente a partir da sua Área de Cliente OVHcloud.

> [!primary]
>
> Os novos utilizadores Public Cloud beneficiam de [200 € de crédito oferecido](/links/public-cloud/free-trial) ativado automaticamente aquando da criação do projeto, válido durante um mês. A elegibilidade ao aumento de quota depende de critérios como a antiguidade da conta e a existência de faturas pagas. Os utilizadores em período de teste podem, por isso, ter opções de aumento de quota limitadas enquanto a sua primeira fatura não for liquidada.
>

Tem a possibilidade de aumentar a sua quota de recursos manualmente ou automaticamente.

#### Aumentar automaticamente a sua quota de recursos com a funcionalidade "Quota autoscaling"

Esta opção permite-lhe solicitar um aumento automático e progressivo da sua quota de recursos. A quota será ajustada com base na sua utilização real **se ultrapassar 60 % da sua quota atual durante 30 dias consecutivos**, bem como de acordo com um conjunto de critérios internos e financeiros.

> [!primary]
>
> Este processo não é adequado para aumentos rápidos de quota.
>

No canto superior direito da página, a opção **Quota autoscaling** está disponível:

- Para saber mais sobre esta funcionalidade, clique no `?`{.action} ao lado desta opção.
- Ative a opção clicando no botão à direita da mesma. O seu estado passará de *Desativado* para *Ativado*.

![Botão de alternância Quota autoscaling definido como Ativado](images/autoscaling.png){.thumbnail}

Assim que ativado, o auto-scaling aumenta progressivamente a quota do seu projeto com base nas suas necessidades reais.

#### Aumentar manualmente a sua quota de recursos

> [!primary]
>
> Se precisar de aumentar a sua quota e o botão `Aumentar os meus limites`{.action} não estiver disponível na Área de Cliente, clique no botão `Contactar o Apoio ao Cliente`{.action}.
>

![Botão Contactar o Apoio ao Cliente visível na página das quotas da Área de Cliente](images/contact_support_quota.png){.thumbnail}

Este procedimento permite um aumento rápido e significativo das suas quotas (por exemplo: escalamento rápido, instâncias GPU, etc.). Este método baseia-se na compra imediata de um crédito, do qual todos os consumos cloud serão automaticamente deduzidos.

Pode adquirir diferentes montantes de crédito.

Clique no botão `Aumentar os meus limites`{.action}.

![Botão Aumentar os meus limites na secção de quotas do Public Cloud](images/raisepciquota2.png){.thumbnail}

Em seguida, clique na seta pendente ao lado de `Selecione o volume`{.action} para apresentar a lista de quotas disponíveis. Esta secção indica igualmente o montante a pagar para beneficiar desses recursos.

![Lista pendente a apresentar os níveis de quota disponíveis com os custos associados](images/selectquotas.png){.thumbnail}

A tabela abaixo apresenta os recursos obtidos para cada quota:

|Quota|Instâncias|CPU/Cores|RAM (GB)|Tamanho dos volumes (TB)|Volumes (número máximo)|Backups|Tamanho da cópia de segurança (TB)|Floating IPs|Octavia Load Balancer|Gateway (Routers)|
|---|---|---|---|---|---|---|---|---|---|---|
|20 VMs|20|40|430|20|200|1200|120|30|10|4|
|50 VMs|50|64|507|20|500|3000|300|75|25|10|
|100 VMs|100|128|1015|40|1000|6000|600|300|50|10|
|200 VMs|200|512|4063|80|2000|12000|1200|600|50|50|

Assim que selecionar o seu volume, clique em `Confirmar`{.action}. O seu pagamento será processado o mais rapidamente possível.

> [!warning]
>
> **Qualquer aumento manual de quota é faturado imediatamente.**
>
> Após clicar no botão `Confirmar`{.action}, o pedido é automaticamente criado e o montante é deduzido do seu método de pagamento predefinido.
>

Para uma vista mais detalhada dos seus recursos, aceda à [interface Horizon](https://horizon.cloud.ovh.net/auth/login/). Após iniciar sessão, clique em `Projeto`{.action} e, em seguida, em `Visão geral`{.action}.

### Aumentar a quota dos seus projetos Public Cloud

Existem duas situações principais em que poderá ter necessidade de um ajuste de quota:

1. **Número máximo de projetos atingido**: se atingiu o número máximo de projetos Public Cloud autorizados na sua Área de Cliente e pretende criar novos, terá de submeter um pedido à nossa equipa de apoio.

2. **Outros tipos de pedidos de quota**: para qualquer outro limite (CPU, RAM, armazenamento, etc.) ou necessidade específica relativamente aos seus projetos Public Cloud, também pode contactar o suporte para solicitar um aumento.

> [!primary]
>
> Os pedidos de quota são tratados manualmente pela nossa equipa. O prazo de processamento pode variar consoante a complexidade do pedido. Recomendamos que submeta o seu pedido o mais cedo possível para evitar qualquer bloqueio nos seus projetos.

Para acelerar o processamento, por favor indique no seu pedido:

- o tipo de quota a aumentar (número de projetos, recursos, etc.);
- o uso previsto e a justificação da necessidade;
- o período ou duração desejada para o aumento.

### Quotas específicas e recursos particulares

Para certos recursos ou serviços, podem aplicar-se quotas específicas. Para mais informações:

**Quota S3**<sup>1</sup>: consulte a documentação oficial "[Object Storage - Limitações técnicas (EN)](/pages/storage_and_backup/object_storage/s3_limitations)".

**Quota Managed Kubernetes Service (MKS)**: consulte a documentação oficial "[ETCD Quotas, usage, troubleshooting and error (EN)](/pages/public_cloud/containers_orchestration/managed_kubernetes/etcd-quota-error)".

## Quer saber mais?

Fale com a nossa [comunidade de utilizadores](/links/community).

<sup>1</sup>: S3 is a trademark of Amazon Technologies, Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies, Inc.
