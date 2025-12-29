---
title: 'Aumentar as quotas Public Cloud'
excerpt: 'Saiba como solicitar o aumento das suas quotas Public Cloud'
updated: 2025-12-17
---

## Objetivo

Por predefinição, o número de recursos (RAM, CPU, espaço em disco, número de instâncias..) e de projetos que pode criar é limitado por razões de segurança.

Se desejar criar mais, será necessário aumentar a quota.

**Saiba como solicitar e aumentar uma quota de Public Cloud na sua área de cliente OVHcloud.**

## Requisitos

- Estar ligado à [Área de Cliente OVHcloud](/links/manager).
- [Ter um método de pagamento válido](/pages/account_and_service_management/managing_billing_payments_and_services/manage-payment-methods) na Área de Cliente OVHcloud.

## Instruções

### Aumentando sua cota de recursos

De acordo com critérios internos (antiguidade, existência de faturas pagas, etc.), agora você tem autonomia para solicitar aumentos de cotas relacionadas aos seus projetos de nuvem pública.

Tem a possibilidade de aumentar a sua quota de recursos manualmente ou automaticamente.

#### Aumentar automaticamente o seu quota de recursos através da opção "Quota autoscaling"

Esta opção permite-lhe solicitar um aumento automático e progressivo do seu quota de recursos. O quota será ajustado com base na sua utilização real **se ultrapassar 60 % do seu quota atual durante 30 dias consecutivos**, bem como de acordo com um conjunto de critérios internos e financeiros.

> [!primary]
>
> **Nota**: Este processo não é adequado para aumentos rápidos de quota.
>

Inicie sessão no seu [área de cliente OVHcloud](/links/manager), aceda à secção `Public Cloud`{.action} e selecione o seu projeto Public Cloud.

No menu à esquerda, clique em `Limite e regiões`{.action} em **Parametros**.

No canto superior direito da página que aparece, encontre a opção **Quota autoscaling**:

- Para saber mais sobre esta funcionalidade, clique no `?`{.action} ao lado desta opção.
- Ative a opção clicando no botão à direita da mesma. O seu estado passará de *Desativado* para *Ativado*.

![auto scaling](images/autoscaling.png){.thumbnail}

Assim que ativado, o auto-scaling aumentará progressivamente o quota do seu projeto com base nas suas necessidades reais.

#### Aumentar manualmente o seu quota de recursos

> [!primary]
>
> Se precisar de aumentar a sua quota e o botão `Aumentar o meus limites`{.action} não estiver disponível na Área de Cliente, clique no botão `Contactar o Apoio ao Cliente`{.action}.
>

![Contact Support](images/contact_support_quota.png){.thumbnail}

Este procedimento permite um aumento rápido e significativo dos seus quotas (por exemplo: escalação rápida, instâncias GPU, etc.). Este método baseia-se na compra imediata de um crédito, do qual todas as consumos cloud serão automaticamente deduzidos.

É possível comprar diferentes créditos.

Aceda à [Área de Cliente OVHcloud](/links/manager), vá à secção `Public Cloud`{.action} e selecione o projeto Public Cloud em causa.

No menu à esquerda, clique em `Limite e regiões`{.action} em **Parametros**.

![access quota](images/raisepciquota1.png){.thumbnail}

Esta página apresenta um resumo dos quotas atuais do seu projeto por região. Um aviso aparece sempre que um recurso atinge 80 % do seu quota.

Para solicitar um aumento de quota, clique em `Aumentar os meus limites`{.action}.

![raise-pci-quota](images/raisepciquota2.png){.thumbnail}

Em seguida, clique na seta descendente ao lado de "Selecione o volume" para exibir a lista de cotas atualmente disponíveis para atualizar seus recursos. Esta seção apresenta igualmente o montante a pagar para beneficiar destes recursos.

![select quota](images/selectquotas.png){.thumbnail}

A tabela abaixo mostra os recursos obtidos para cada cota:

|Quota|Instâncias|CPU/Cores|RAM (GB)|Tamanho do volume (TB)|Volumes|Backups|Tamanho da cópia de segurança (TB)|Floating IPs|Octavia Load Balancer|Gateway (Routers)|
|---|---|---|---|---|---|---|---|---|---|---|
|20 VMs|20|40|430|20|200|1200|120|30|10|4|
|50 VMs|50|64|507|20|500|3000|300|75|25|10|
|100 VMs|100|128|1015|40|1000|6000|600|300|50|10|
|200 VMs|200|512|4063|80|2000|12000|1200|600|50|50|

Assim que selecionar o seu volume, clique em `Confirmar`{.action}. O seu pagamento será processado o mais rapidamente possível.

> [!warning]
>
> **Todo aumento manual de quota é faturado imediatamente.**
>
> Após clicar no botão `Confirmar`{.action}, o pedido é automaticamente criado e o montante é deduzido do seu método de pagamento predefinido.
>

### Aumentar o quota dos seus projetos Public Cloud

Existem duas situações principais em que poderá ter necessidade de um ajuste de quota:

1. **Número máximo de projetos atingido**: Se atingiu o número máximo de projetos Public Cloud autorizados no seu espaço cliente e pretende criar novos, terá de submeter um pedido à nossa equipa de apoio.

2. **Outros tipos de pedidos de quota**: Para qualquer outro limite (CPU, RAM, armazenamento, etc.) ou necessidade específica relativamente aos seus projetos Public Cloud, também pode contactar o suporte para solicitar um aumento.

> [!primary]
>
> **Nota**: Os pedidos de quota são tratados manualmente pela nossa equipa. O prazo de processamento pode variar consoante a complexidade do pedido. Recomendamos que submeta o seu pedido o mais cedo possível para evitar qualquer bloqueio nos seus projetos.

Para acelerar o processamento, por favor indique no seu pedido:

- o tipo de quota a aumentar (número de projetos, recursos, etc.);
- o uso previsto e a justificação da necessidade;
- o período ou duração desejada para o aumento.

### Quotas específicos e recursos particulares

Para certos recursos ou serviços, podem aplicar-se quotas específicos. Para mais informações:

**Quota S3**<sup>1</sup>: Consulte a documentação oficial "[Object Storage - Limites técnicos (EN)](/pages/storage_and_backup/object_storage/s3_limitations)".

**Quota Managed Kubernetes Service (MKS)**: Consulte a documentação oficial "[ETCD Quotas, usage, troubleshooting and error](/pages/public_cloud/containers_orchestration/managed_kubernetes/etcd-quota-error)".

## Quer saber mais?

Fale com a nossa [comunidade de utilizadores](/links/community).

<sup>1</sup>: S3 is a trademark of Amazon Technologies, Inc. OVHcloud’s service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies, Inc.