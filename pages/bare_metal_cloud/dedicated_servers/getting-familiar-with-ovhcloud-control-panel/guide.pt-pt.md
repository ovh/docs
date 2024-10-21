---
title: "Clientes Kimsufi e So you Start - Familiarizar-se com a Área de Cliente OVHcloud"
excerpt: "Saiba como navegar na Área de Cliente OVHcloud"
updated: 2024-04-04
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

A OVHcloud anuncia o agrupamento de todos os servidores dedicados Kimsufi, So you Start e Rise numa linha de produtos denominada Eco, de forma a oferecer-lhe uma melhor visão do conjunto das nossas configurações. Devido a estas alterações, poderá desde já gerir todos os seus serviços, independentemente da sua gama, a partir da Área de Cliente OVHcloud. Para o acompanhar nesta alteração caso tenha optado por um servidor da linha de produtos Eco, criámos este guia para lhe apresentar a Área de Cliente OVHcloud e as suas opções.

**Este manual explica-lhe como familiarizar-se com a Área de Cliente OVHcloud.**

> [!warning]
> Tenha em conta que, apesar da alteração da interface de cliente, algumas opções podem não estar disponíveis para os servidores Kimsufi e So you Start.
>

## Instruções

### Painel de controlo

![painel de controlo](images/OVHclouddashboard.png){.thumbnail}

Se adquiriu um servidor da linha de produto Eco, o seu painel de controlo será doravante o da Área de Cliente OVHcloud. Este painel de controlo da OVHcloud apresenta um resumo de todos os seus serviços. Esta interface tem várias secções que lhe permitem aceder instantaneamente a um serviço.<br>
A coluna à direita dá-lhe acesso às suas informações pessoais, ao seu identificador de cliente e ao seu nível de suporte (se for caso disso).<br>
Propõe igualmente um conjunto de atalhos e ligações úteis.

### Aceder ao servidor

![acessos servidores](images/listserversOVHcloud.png){.thumbnail}

Nas interfaces Kimsufi e So you Start, o painel de controlo permite-lhe ver o seu servidor/lista de servidores.<br>
Na Área de Cliente OVHcloud, clique primeiro no menu `Bare Metal Cloud`{.action} e depois em `Servidores dedicados`{.action} para apresentar os seus servidores.<br>
Se possui vários servidores, o botão `Todos os meus servidores`{.action} permite-lhe listá-los para um acesso fácil.

### Interface Servidor

No menu `Servidores Dedicados`{.action}, clique no servidor à sua escolha para aceder à sua interface.

![server interface](images/serverinterface01.png){.thumbnail}

![server interface](images/serverinterface02.png){.thumbnail}

**Informações gerais**: nesta secção, encontre todas as informações relativas ao seu servidor.

- Nome: clique nas `...`{.action} junto a esta opção para modificar o nome do seu servidor.
- Boot: clique nas `...`{.action} junto a esta opção para alterar o netboot do seu servidor em *modo rescue*, *modo normal* (no disco rígido) ou *modo network*.
- Último sistema operativo (SO) instalado pela OVHcloud: clique nas `...`{.action} junto a esta opção para instalar/reinstalar o seu servidor.

**Estado dos serviços**

- Estado: clique nas `...`{.action} junto a esta opção para reiniciar ou eliminar o seu servidor.
- Monitorização: clique em `Configurar`{.action} para alterar as [configurações de monitoramento do seu servidor](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server#monitoring-server).

**Rede**

- IPV4: clique nas `...`{.action} junto a esta opção para gerir o seu IP.
- Reverse: clique nas `...`{.action} junto a esta secção para entrar/modificar a sua reverse DNS.

**DNS secundário**: configure o seu DNS secundário aqui. Para mais informações consulte [este guia](/pages/bare_metal_cloud/dedicated_servers/adding-secondary-dns-on-dedicated-server).

**Backup Storage** (disponível apenas nos servidores OVHcloud e nos servidores So you Start, incluindo os da linha Eco): encomende e configure o seu backup storage aqui. Para mais informações consulte [este guia](/pages/bare_metal_cloud/dedicated_servers/services_backup_storage).

**Intervenções**: encontre aqui as intervenções em curso e passadas no seu servidor.

**IPMI** (disponível apenas nos servidores OVHcloud e certos servidores So you Start, incluindo os da linha Eco): aceda aqui à ferramenta IPMI ou ao KVM IP do seu servidor. Para mais informações sobre a utilização desta ferramenta, consulte [este guia](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers).

**Tarefas**: visualize aqui as tarefas recentes efetuadas no seu servidor.

Para mais informações sobre a gestão do seu servidor dedicado através da Área de Cliente OVHcloud, consulte [este guia](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server).

### Secção IP

Para aceder à secção **IP** da sua Área de Cliente OVHcloud, clique no menu `Bare Metal Cloud`{.action} e abra `Network`{.action}. A seguir, clique em `IP`{.action}.

![secção ip](images/manageIP2023.png){.thumbnail}

### Separação Licenças (não disponível no Kimsufi)

Para aceder ao separador **Licenças** na Área de Cliente OVHcloud, clique no menu `Bare Metal Cloud`{.action} e depois em `Licenças`{.action}:

![licença](images/managelicencesOVHcloud.png){.thumbnail}

### Suporte, faturação e gestão de conta

Na Área de Cliente Kimsufi ou So you Start, estas opções estão disponíveis no canto superior direito sob separadores individuais.<br>
Na Área de Cliente OVHcloud, estas opções estão agrupadas num espaço comum. Clique no seu nome no canto superior direito e clique nas suas iniciais para aceder à secção `Gerir a minha conta`.

![factu](images/accountOVHcloud.png){.thumbnail}

- **Informações gerais**: nesta secção, pode visualizar as informações da sua conta, a sua última fatura e aceder a diferentes atalhos.
- **Segurança**: esta rubrica permite-lhe gerir os parâmetros de segurança da sua conta. Para mais informações, consulte [este guia](/pages/account_and_service_management/account_information/all_about_username).
- **E-mails recebidos**: nesta secção, encontrará o conjunto dos e-mails que a OVHcloud lhe enviou, para além dos pedidos de assistência.
- **O meu nível de suporte** (apenas disponível para os serviços OVHcloud): nesta secção, encontrará mais informações sobre o nível de suporte proposto pela OVHcloud.
- **Gestão dos utilizadores**: esta rubrica permite-lhe gerir os seus utilizadores. Para mais informações consulte [este guia](/pages/account_and_service_management/account_information/ovhcloud-users-management).
- **Mis faturas**: a partir desta rubrica, pode consultar as suas faturas, seguir os pagamentos efetuados com o seu método de pagamento predefinido e consultar as suas disponibilidades. Para mais informações, consulte [este guia](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management).
- **Mis serviços**: esta secção permite-lhe visualizar o conjunto dos seus serviços e os seus contratos.
- **Formas de pago**: nesta rubrica, terá acesso ao seu método de pagamento atual, à sua conta pré-paga bem como aos seus vouchers OVHcloud. Também poderá adicionar/eliminar um método de pagamento. Para obter mais informações sobre a gestão dos seus métodos de pagamento, consulte [este guia](/pages/account_and_service_management/managing_billing_payments_and_services/manage-payment-methods).
- **Mis pedidos**: consulte as suas encomendas a partir desta página. Para mais informações, consulte [este guia](/pages/account_and_service_management/managing_billing_payments_and_services/managing_ovh_orders).
- **Mis contactos** : nesta secção, pode visualizar e gerir os contactos associados aos seus serviços. No separador **Os meus pedidos**, encontrará os pedidos de modificação de dados enviados a partir da sua conta de cliente, bem como os pedidos de gestão de serviços recebidos. Para mais informações sobre a gestão dos seus contactos de serviços, consulte [este guia](/pages/account_and_service_management/account_information/managing_contacts).
- **Os meus pedidos de assistência**: esta secção permite-lhe abrir/visualizar o conjunto dos seus pedidos de assistência.

## Saiba mais

Veja aqui alguns guias adicionais que o ajudarão nos seus primeiros passos:

[Aceder à Área de Cliente OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-login).<br>
[Definir e gerir a palavra-passe da sua conta](/pages/account_and_service_management/account_information/manage-ovh-password).<br>
[Proteger a minha conta OVHcloud e gerir as minhas informações pessoais](/pages/account_and_service_management/account_information/all_about_username).<br>
[Como gerir os contactos (gestores) dos serviços OVHcloud](/pages/account_and_service_management/account_information/managing_contacts).<br>
[Criar chaves SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated).<br>
[Quais são os endereços IP do monitoring OVHcloud?](/pages/bare_metal_cloud/dedicated_servers/network_ip_monitoring).

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique em [esta ligação](https://www.ovhcloud.com/pt/professional-services/) para obter um orçamento e solicitar uma análise personalizada do seu projecto aos nossos especialistas da equipa de Serviços Profissionais.

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
