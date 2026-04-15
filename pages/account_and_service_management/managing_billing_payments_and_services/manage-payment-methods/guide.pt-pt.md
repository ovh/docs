---
title: Gerir os meus métodos de pagamento
excerpt: Aprenda a adicionar e gerir os seus métodos de pagamento dentro da Área de Cliente OVHcloud
updated: 2025-04-28
---

## Objetivo

A Área de Cliente OVHcloud permite-lhe guardar e gerir vários métodos de pagamento.

## Requisitos

- Dispor de um método de pagamento válido

<!-- CP-NAV-START:billing-payment-methods -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Métodos de pagamento](/links/control-panel/billing-payment-methods)
- **Caminho de navegação:** Clique no seu nome no canto superior direito > `Os meus métodos de pagamento`{.action}

---
<!-- CP-NAV-END:billing-payment-methods -->

## Instruções <a name="payment_methods"></a>

<!-- CP-STEPS-START:instructions-overview -->
Na página [Os meus métodos de pagamento](/links/control-panel/billing-payment-methods), encontrará um quadro que indica os métodos de pagamento registados na sua conta de cliente.

![hubpayment](/pages/assets/screens/control_panel/product-selection/right-menu/my-payment-methods.png){.thumbnail}

Nela pode:

- Adicionar um método de pagamento
- Alterar o seu método de pagamento padrão
- Modificar a descrição do seu método de pagamento
- Eliminar um método de pagamento
<!-- CP-STEPS-END:instructions-overview -->

### Adicionar um método de pagamento

<!-- CP-STEPS-START:register-payment-method -->
Aquando da sua primeira encomenda, é-lhe pedido que registe um método de pagamento para assegurar a renovação do seu serviço por débito automático.

Este método de pagamento é então utilizado por defeito para todas as suas renovações e é-lhe proposto para pagar novas encomendas.

Tem a possibilidade de registar outros métodos de pagamento, para que eles lhe sejam propostos durante as suas novas encomendas ou utilizados por defeito para os seus futuros débitos.

É possível registar 2 tipos de métodos de pagamento:

- Cartão bancário
- Conta PayPal

Para isso, basta clicar no botão `Adicionar um método de pagamento`{.action}.

![manage-payment-methods](images/managepaymentmethods2.png){.thumbnail}

Escolha o método de pagamento que deseja utilizar: 

![choose-payment-method-no-sepa](images/choose-payment-method-no-sepa.png){.thumbnail}

Siga as etapas sucessivas de registo do método de pagamento. Na primeira etapa, é-lhe proposto que selecione a opção `Pretendo selecionar este método de pagamento predefinido após à sua validação.`{.action}, de forma a que ele seja utilizado para as suas futuras compras ou débitos automáticos.

#### Cartão bancário

![credit-card-no-sepa](images/credit-card-no-sepa.png){.thumbnail}

Para registar um novo cartão de crédito, será redirecionado para a interface segura do nosso prestador de pagamentos. É efetuada uma tentativa de débito junto do seu organismo bancário para validar o número e a validade do seu cartão.<br>
Nenhum montante será debitado e o seu cartão de crédito será ativado ao fim de alguns minutos.

#### Conta PayPal

![paypal_no_sepa](images/paypal_no_sepa.png){.thumbnail}

Clique no botão `PayPal`{.action}. Será então aberta uma janela de contexto para se ligar à sua conta PayPal® e registar esta como método de pagamento autorizado junto da OVHcloud.

A sua conta PayPal® será ativada dentro de alguns minutos.
<!-- CP-STEPS-END:register-payment-method -->

### Alterar o seu método de pagamento padrão

<!-- CP-STEPS-START:change-default-payment-method -->
As faturas de renovação dos seus serviços são sempre debitadas no seu método de pagamento padrão. Se pretender alterar este método, terá primeiro de adicionar um novo método de pagamento na sua Área de Cliente.

Clique, então, no botão `...`{.action} à direita do novo método de pagamento, e em `Definir este método de pagamento por predefiniçao`{.action}.

![manage-payment-methods](images/managepaymentmethods3.png){.thumbnail}

> **Pretendo substituir o meu método de pagamento predefinido por outro, como fazer?**
>
> - Etapa 1: adicione o novo método de pagamento
> - Etapa 2: defina o novo método de pagamento como método de pagamento padrão
> - Etapa 3: elimine o método de pagamento antigo
>
<!-- CP-STEPS-END:change-default-payment-method -->

### Eliminar um método de pagamento

<!-- CP-STEPS-START:delete-payment-method -->
Se já não quiser usar um dos métodos de pagamento, poderá eliminá-lo clicando no botão `...`{.action} à direita do método de pagamento. Clique, então, em `Eliminar este método de pagamento`{.action}.

![manage-payment-methods](images/managepaymentmethods4.png){.thumbnail}

Se deseja eliminar a integralidade dos seus métodos de pagamento, o conjunto dos seus serviços deve ser [renovado manualmente](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#a-renovacao-manual).
<!-- CP-STEPS-END:delete-payment-method -->

#### Eliminar um método de pagamento através das API OVHcloud

A eliminação de um método de pagamento pode ser realizada através das API, ligando-se a [https://eu.api.ovh.com/](/links/api).

Comece por obter a ID do método de pagamento:

> [!api]
>
> @api {v1} /me GET /me/payment/method
>

De seguida, elimine o método de pagamento utilizando o ID que obteve na etapa anterior:

> [!api]
>
> @api {v1} /me DELETE /me/payment/method/{paymentMethodId}
>

> [!primary]
>
> Para mais informações, consulte o guia [Primeiros passos com as API OVHcloud](/pages/manage_and_operate/api/first-steps).
>
> Em caso de dificuldades para identificar os seus métodos de pagamento através das API OVHcloud, utilize a função `Alterar a descrição`{.action} (botão `...`{.action} à direita do ecrã) na parte relativa aos [Métodos de pagamento](#payment_methods) da página [Os meus métodos de pagamento](/links/control-panel/billing-payment-methods).
>

### Conta pré-paga

#### O que é a conta pré-paga?

<!-- CP-STEPS-START:prepaid-account-overview -->
A *conta pré-paga* está presente na página [Os meus métodos de pagamento](/links/control-panel/billing-payment-methods) assim que for criada. Permite-lhe creditar antecipadamente à sua conta de cliente e utilizar estes fundos para o pagamento das suas encomendas e das suas faturas de renovação.

Ao creditar regularmente à sua conta, certificar-se-á de que a [renovação automática](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#a-renovacao-automatica) dos seus serviços nunca será interrompida por falta de pagamento.

Para isso, aceda à página [Os meus métodos de pagamento](/links/control-panel/billing-payment-methods) e selecione o separador `Conta pré-paga`{.action}.

![prepaid-account](images/prepaid-account.png){.thumbnail}
<!-- CP-STEPS-END:prepaid-account-overview -->

#### Como funciona?

A cada prazo, quando possui serviços parametrizados para a *renovação automática*, o montante da sua fatura é debitado prioritariamente na sua conta pré-paga.

Na ausência de fundos suficientes, o saldo da sua conta passará em negativo e ficará a aguardar pagamento.

Se dispõe de um método de pagamento válido registado na sua conta de cliente, este montante será automaticamente debitado nas 24 horas e o seu saldo reposto a zero. Isto sem qualquer impacto no estado dos seus serviços.

No entanto, se não registou nenhum método de pagamento, deverá pagar este saldo a partir da Área de Cliente dentro de 7 dias, para evitar qualquer interrupção do serviço.

Se não possui nenhum método de pagamento registado, recomendamos que parametrize um **limite de alerta** para garantir que dispõe dos fundos suficientes para as suas próximas faturas:

<!-- CP-STEPS-START:prepaid-account-alert -->
![warning_prepaid_account](images/warning_prepaid_account.png){.thumbnail}

Se o crédito disponível na sua conta pré-paga desce abaixo do limite definido, ser-lhe-á imediatamente enviado um e-mail de notificação.
<!-- CP-STEPS-END:prepaid-account-alert -->

#### Como creditar à sua conta pré-paga?

<!-- CP-STEPS-START:prepaid-account-credit -->
No separador `A minha conta pré-paga`{.action}, clique no botão `Creditar`{.action}.

![credit-prepaid-account](images/credit-prepaid-account.png){.thumbnail}

Na nova janela, indique o montante a creditar, clique em `Seguinte`{.action} e depois em `Encomendar`{.action}.

![order-prepaid-account](images/order-prepaid-account.png){.thumbnail}

Na nota de encomenda que aparece, selecione o método de pagamento à sua escolha e efetue o pagamento da sua encomenda.
<!-- CP-STEPS-END:prepaid-account-credit -->

## Quer saber mais?

Fale com nossa [comunidade de utilizadores](/links/community).