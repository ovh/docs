---
title: "Tutorial - Utilizar WooCommerce com o CMS WordPress"
excerpt: "Descubra como utilizar a solução WooCommerce com o CMS WordPress"
updated: 2023-02-23
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>
  
## Objetivo

Saiba como criar uma loja online com a extensão open source **WooCommerce** com o Content Management System (CMS) **WordPress**. 

> [!warning]
>
> A OVHcloud disponibiliza serviços cuja configuração, gestão e responsabilidade lhe incumbem. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Colocamos à sua disposição este tutorial para o acompanhar o melhor possível em tarefas comuns. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](/links/partner), ao [editor do CMS WordPress](https://wordpress.com/support/){.external} ou ao [editor do WooCommerce](https://woocommerce.com/){.external}. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção ["Quer saber mais?"](#go-further) deste tutorial.
>
  
## Requisitos

- Ter um plano de [alojamento web](/links/web/hosting) que contenha, pelo menos, uma base de dados.
- Dispor de um [nome de domínio](/links/web/domains).
- Ter previamente [instalado WordPress](/pages/web_cloud/web_hosting/cms_install_1_click_modules) no seu alojamento web.

Se ainda não o fez, recomendamos que coloque o seu website em HTTPS antes de prosseguir com este tutorial, utilizando o guia "[Ativar o HTTPS num website com certificado SSL](/pages/web_cloud/web_hosting/ssl-activate-https-website)".
  
## Instruções
  
**WooCommerce** é uma extensão de **WordPress**. Instala-se como qualquer extensão.

### Instalação

Inicie sessão na sua interface de administração digitando `/wp-admin` ou `/wp-login` na sua barra de pesquisa após o URL do seu nome de domínio (o redireccionamento é feito automaticamente):

![Admin page of WordPress](/pages/assets/screens/other/cms/wordpress/woocommerce/admin-login.png){.thumbnail}

No menu à esquerda, vá a `Plugins`{.action} e clique em `Adicionar novo`{.action}:

![Dashboard, Plugins, Add new](/pages/assets/screens/other/cms/wordpress/woocommerce/plugins.png){.thumbnail}

Na nova página `Adicionar plugins`{.action}, introduza "woocommerce" na barra de pesquisa, no canto superior direito, e clique em `Installar`{.action} na caixa relativa à extensão **WooCommerce**:

![Install WooCommerce](/pages/assets/screens/other/cms/wordpress/woocommerce/add-plugin-woocommerce-install-now.png){.thumbnail}

Clique agora em `Activar`{.action}:

![Ativate WooCommerce](/pages/assets/screens/other/cms/wordpress/woocommerce/add-plugin-woocommerce-activate.png){.thumbnail}

### Configuração 

#### Método 1 - utilização do assistente de configuração

Se ainda não configurou a sua extensão **WooCommerce**, um assistente de configuração ajuda-o a introduzir as informações relativas ao seu site de vendas online. Introduza o formulário e clique em `Continuar`{.action}:

![Setup Wizard - Store Details](/pages/assets/screens/other/cms/wordpress/woocommerce/woocommerce-store-details.png){.thumbnail}

De seguida, selecione o(s) seu(s) domínio(s) de atividade:

![Setup Wizard - Industry](/pages/assets/screens/other/cms/wordpress/woocommerce/woocommerce-industry.png){.thumbnail}

Escolha o tipo de produtos que deseja vender no seu website (algumas opções são pagas):

![Setup Wizard - Product Tipes](/pages/assets/screens/other/cms/wordpress/woocommerce/woocommerce-product-types.png){.thumbnail}

A seguir, especifique a natureza da sua atividade:

![Setup Wizard - Business Details](/pages/assets/screens/other/cms/wordpress/woocommerce/woocommerce-business-details.png){.thumbnail}

Adicione funcionalidades opcionais (e gratuitas) se desejar:

![Setup Wizard - Business Details, free feature](/pages/assets/screens/other/cms/wordpress/woocommerce/woocommerce-business-details-2.png){.thumbnail}

Por fim, selecione um dos temas propostos:

![Setup Wizard - Choose a theme](/pages/assets/screens/other/cms/wordpress/woocommerce/woocommerce-theme.png){.thumbnail}

**WooCommerce** solicita-lhe para criar uma conta a fim de utilizar a extensão **Jetpack**, extensão instalada automaticamente além da extensão **WooCommerce**. Esta criação de conta é facultativa, terá acesso às funções limitadas de **Jetpack** sem ter de se autenticar.

A sua loja online foi configurada com os parâmetros gerais.

#### Método n°2 - configuração manual

Clique em `Plugins`{.action} para listar as extensões instaladas e depois `Plugins instalados`. Aparecerá a lista das suas extensões. Clique em `Opções`{.action} no módulo **WooCommerce**:

![Setup Wizard - Extensão, WooCommerce, Settings](/pages/assets/screens/other/cms/wordpress/woocommerce/plugins-woocommerce.png){.thumbnail}

Também tem acesso a estas configurações ao clicar diretamente em `WooCommerce`{.action} e depois em `Opções`{.action}:

![Setup Wizard - WooCommerce, Settings](/pages/assets/screens/other/cms/wordpress/woocommerce/dashboard-woocommerce-settings.png){.thumbnail}

### Pagamentos

A página de regulação compreende vários separadores:

![Setup Wizard - WooCommerce, Settings, Tabs](/pages/assets/screens/other/cms/wordpress/woocommerce/woocommerce-general.png){.thumbnail}

#### Geral

Este separador permite-lhe definir os seguintes elementos:

- endereço da empresa
- zonas de venda e de entrega,
- localização predefinida do cliente (opcional)
- ativação/anulação das taxas
- cupões
- dados monetários (divisa do site, apresentação).

![Setup Wizard - WooCommerce, Settings, General tab](/pages/assets/screens/other/cms/wordpress/woocommerce/woocommerce-general-currency.png){.thumbnail}

#### Produtos

A gestão dos produtos faz-se através de um conjunto de sub-rubricas:

- **Geral**: serve para definir elementos como a página inicial que será apresentada de forma padrão (loja, menções legais, cabaz, etc.), as unidades de medida, a possibilidade ou não de fazer comentários sobre produtos ou notas.
- **Inventário**: serve para configurar ou não a gestão do seu stock e configurar o comportamento do website (stock decrescente quando um objeto está no carrinho, limiares de alerta, possibilidade de ocultar os produtos que já não estão armazenados).
- **Produtos descarregáveis**: diz respeito aos casos de disponibilização de documentos a descarregar pelos utilizadores.
- **Ficheiros de download aprovados**: especifica o ou os diretórios no servidor onde os ficheiros serão telecarregados.
- **Avançado**: serve para configurar de forma mais precisa os atributos dos produtos.

#### Expedição

Se ativou as extensões predefinidas oferecidas gratuitamente durante a instalação, dispõe da extensão [WooCommerce Shipping](https://woocommerce.com/woocommerce-shipping/){.external}. Caso contrário, poderá efetuar a instalação através do menu `Plugins`{.action}.

- **Zonas de expedição**: permite definir e configurar zonas de expedição.
- **Opções de entrega**: serve para configurar a aplicação em tudo o que diz respeito às despesas de expedição.
- **Classes de expedição**: podem ser utilizadas para agrupar produtos similares por tipo de remessa.

#### Pagamentos

Este separador serve para ativar/desativar os métodos de pagamento propostos no seu website. Recorra à [documentação oficial](https://woocommerce.com/document/payments/) para configurar o(s) seu(s) método(s) de pagamento.

#### Contas e confidencialidade

Esta rubrica reúne todas as funcionalidades relativas à gestão das contas e dos dados pessoais.

#### E-mails

Permite configurar os *e-mails tipo* enviados pela aplicação (inscrição, comandos, anulações de encomenda, etc.).

#### Integração

Para geolocalizar os seus clientes em função do seu endereço IP, pode, nesta sub-rubrica, introduzir a chave da licença de [MaxMind](https://www.maxmind.com/){.external}, serviço pago de geolocalização.

#### Avançado

- **Instalação das páginas**: útil para modificar as páginas para as quais serão reencaminhados os utilizadores durante o processo de encomenda.
- **API REST**: secção que permite configurar e configurar os acessos ao WooCommerce através da sua API REST.
- **Webhook**: gerir as suas funções de lembrete HTTP.
- **Antiga API**: reativar a antiga API de WooCommerce (desativada de forma padrão).
- **WooCommerce.com**: ativar ou desativar o tracking da atividade do seu site de vendas online pela WooCommerce, ter sugestões para extensões dedicadas (a maioria paga).
- **Funcionalidades**: página que reúne as funcionalidades em teste em WooCommerce ou recentemente adicionadas.
  
## Quer saber mais? <a name="go-further"></a>

Alguns links úteis:

- O [sítio oficial do WordPress](https://wordpress.org){.external}.
- A extensão [Jetpack](https://jetpack.com/){.external}.
- The [WooCommerce](https://woocommerce.com/){.external}
- A loja [WooCommerce extensões](https://woocommerce.com/products/){.external}

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).