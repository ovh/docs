---
title: "Casos de uso - Como alterar o domínio de um site existente"
excerpt: "Descubra como alterar o nome de domínio de um site existente"
updated: 2025-10-28
---

## Objetivo

Durante a vida do seu website, poderá ser obrigado a mudar o nome de domínio do seu site.<br>O caso de utilização mais comum é uma mudança de nome de empresa.

Este tutorial tem como objetivo explicar os principais passos a seguir quando deseja mudar o nome de domínio de acesso ao seu website.

**Descubra como mudar o nome de domínio de um site existente.**

> [!warning]
>
> A OVHcloud disponibiliza serviços cuja configuração, gestão e responsabilidade lhe incumbem. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Colocamos à sua disposição este tutorial para o acompanhar o melhor possível em tarefas comuns. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](/links/partner). Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção ["Quer saber mais?"](#go-further) deste manual.
>

## Requisitos

- Dispor de um [nome de domínio](/links/web/domains).
- Dispor de um [alojamento partilhado OVHcloud](/links/web/hosting).
- Ter acesso à [Área de Cliente OVHcloud](/links/manager).

## Instruções

> [!warning]
>
> A alteração do nome de domínio para aceder ao seu site pode afetar o seu referenciamento. 
> Esteja atento às operações que vai efetuar ou contactar um [fornecedor especializado](/links/partner) no referenciamento, se necessário.
>

Para alterar o domínio de acesso ao seu website, deverá realizar várias etapas por uma ordem precisa.

### Etapa 1 - declarar o novo domínio no seu alojamento partilhado <a name="step1"></a>

Declare o seu novo nome de domínio com a nossa documentação sobre [como adicionar um site web ao seu alojamento partilhado](/pages/web_cloud/web_hosting/multisites_configure_multisite). Declare também o seu subdomínio em `www` se quiser, por exemplo, que `www.NewDomain.tld` também mostre o seu site, em adição a `NewDomain.tld`.

Para ser bem-sucedida na etapa 1, é necessário preencher várias condições:

- O seu novo domínio deve apontar para a mesma "pasta raiz" que o domínio utilizado atualmente para aceder ao seu site.
- Verifique que o seu novo domínio aponta para o endereço IP correto do seu alojamento partilhado. Para obter o endereço IP, aceda à [Área de Cliente OVHcloud](/links/manager), vá à secção `Web cloud`{.action}, clique nos `Alojamentos`{.action}, selecione o seu alojamento e recupere **o IPv4** no separador `Informações gerais`{.action}.

> [!warning]
>
> Se ativar as opções **IP do país** ou **CDN** com o seu novo domínio, utilize o endereço IP correto através do nosso manual de recenseamento [o conjunto dos endereços IP dos nossos alojamentos partilhados](/pages/web_cloud/web_hosting/multisites_configure_multisite).
>
> Para encontrar o número do cluster onde está o seu alojamento, aceda à parte `Web cloud`{.action}, clique em `Alojamentos`{.action}, selecione o separador `FTP-SSH`{.action}. Visualizará o número do cluster no formulário **Servidor FTP e SFTP**: `ftp.cluster0XX.ovh.net` (onde os `X` representam o número de cluster).
>

> **Certificados SSL**
>
> Se o domínio inicialmente utilizado para aceder ao seu site web tem um certificado SSL, consulte os nossos 2 guias:
> - [Gerir um certificado SSL no alojamento web](/pages/web_cloud/web_hosting/ssl_on_webhosting)
> - [Ativar o HTTPS num website com certificado SSL](/pages/web_cloud/web_hosting/ssl-activate-https-website)

Se todas as ações foram corretamente realizadas, as declarações dos seus nomes de domínio devem ser estritamente idênticas **a menos que utilize um certificado SSL pago do tipo *Sectigo DV*, *Sectigo EV* ou *custom***.

![multi-sites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/all-domain-same-config-enable.png){.thumbnail}

> [!primary]
>
> Depois de executar a etapa 1, é necessário aguardar um tempo máximo de propagação de 4 a 24 horas até que as alterações entrem em vigor.
>

Se o seu website não utiliza bases de dados e/ou não efetuar uma re-escritura de URL para o seu website, este deve já ser apresentado corretamente com o seu novo domínio. Neste caso, passe diretamente para [etapa 3](#step3) deste guia. Caso contrário, consulte o passo 2 abaixo.

### Etapa 2 - reescrita dos URLs no seu website com o novo domínio

A maioria dos sites utiliza bases de dados para funcionar. A arborescência destas últimas é geralmente construída em torno do domínio inicialmente utilizado para o seu site. São necessárias ações suplementares para estes websites.

> [!warning]
>
> Atenção, as operações descritas na etapa 2 são extremamente sensíveis e podem ter consequências graves para o seu website se não forem efetuadas com precaução. Se tiver alguma dúvida, não tente nada e recorra a um [fornecedor especializado](/links/partner).
>
> Antes de efetuar qualquer ação, aconselhamos que recupere um [backup do seu espaço de armazenamento FTP](/pages/web_cloud/web_hosting/ftp_save_and_backup) bem como um [backup da sua base de dados](/pages/web_cloud/web_hosting/sql_database_export). Isto permitir-lhe-á restaurar o seu site em caso de manipulação incorreta.
>

Vamos distinguir dois tipos de websites: 

- os CMS (*Content Management System*) tais como WordPress, Joomla!, PrestaShop, Drupal, etc.
- os websites clássicos concebidos por si ou pelo seu prestador de serviços.

#### Caso n°1: o seu website é um CMS

A maioria dos CMS permite diretamente, a partir do seu espaço de administração *back office*, substituir o domínio inicialmente declarado para o seu site por outro.

Uma vez que os CMS são desenvolvidos por organismos terceiros não geridos pela OVHcloud, encontrará de seguida os links para a documentação oficial dos diferentes CMS propostos em instalação nos nossos alojamentos partilhados:

- WordPress: <https://wordpress.org/support/article/changing-the-site-url/>
- Joomla! : O editor deste programa não propõe, à data, documentação para alterar o domínio de acesso ao seu website. Sugerimos que contacte diretamente o editor sobre este assumpto. Para mais informações, consulte as páginas oficiais [docs.joomla.org](https://docs.joomla.org/) ou [forum.joomla.org](https://forum.joomla.org/).
- Drupal: O editor deste programa não propõe, à data, documentação para alterar o domínio de acesso ao seu website. Sugerimos que contacte diretamente o editor sobre este assumpto. Para mais informações, consulte as páginas oficiais [drupal.org](https://drupal.org) ou [drupal.fr](https://drupal.fr).
- PrestaShop: O editor deste programa não propõe, à data, documentação para alterar o domínio de acesso ao seu website. Sugerimos que contacte diretamente o editor sobre este assumpto. Para mais informações, clique em [aqui](https://help-center.prestashop.com) para aceder à sua página oficial.

Note que, para estes CMS, também é possível efetuar as alterações diretamente [na base de dados](/pages/web_cloud/web_hosting/sql_create_database). Deverá alterar o URL de acesso ao seu site na tabela prevista para esse efeito.

Para os outros CMS não propostos em instalação automática pela OVHcloud, convidamo-lo igualmente a aproximar-se dos respetivos suportes para efetuar esta re-escritura com toda a segurança. 

#### Caso n°2: o seu website é um site "feito casa"

Para reescrever os seus URLs com o seu novo domínio, [ligue-se à base de dados do seu site](/pages/web_cloud/web_hosting/sql_create_database) e substitua o antigo domínio pelo novo na tabela correspondente. 

Não se esqueça de verificar no seu ficheiro `.htaccess` se existem re-escrituras de URL que não precisam de ser atualizadas com o seu novo domínio.

Se tiver contactado um fornecedor para a criação do seu site, contacte-o para que o modificação seja efetuada com segurança.

> [!success]
>
> Uma vez concluída a etapa 2, o seu site deve aparecer com o seu novo domínio.
>

### Etapa 3 - retirar o antigo nome de domínio <a name="step3"></a>

Para evitar o "*Duplicate-content*" e quando o seu novo nome de domínio estiver plenamente operacional com o seu site web, deverá eliminar a declaração do seu antigo nome de domínio no seu site web com o guia sobre a gestão dos [sites web no seu alojamento partilhado](/pages/web_cloud/web_hosting/multisites_configure_multisite).

> [!warning]
>
> Não se esqueça de ocupar o seu certificado SSL *Sectigo EV*, *Sectigo DV* ou *Custom*, conforme especificado na [etapa 1](#step1).
>

Assim que o seu antigo nome de domínio estiver dissociado do seu site web no seu alojamento web e se estiver registado na OVHcloud, poderá redirecioná-lo com uma [redirecionamento permanente visível 301](/pages/web_cloud/domains/redirect_domain_name). Isto permitirá que os seus visitantes sejam automaticamente redirecionados para o seu site, visualizando o seu novo domínio na barra de endereços/URL do seu navegador.

## Quer saber mais? <a name="go-further"></a>

[Lista dos IP dos nossos alojamentos partilhados](/pages/web_cloud/web_hosting/multisites_configure_multisite)

[Gerir um certificado SSL no alojamento web](/pages/web_cloud/web_hosting/ssl_on_webhosting)

[Ativar o HTTPS num website com certificado SSL](/pages/web_cloud/web_hosting/ssl-activate-https-website)

[Reencaminhar um domínio](/pages/web_cloud/domains/redirect_domain_name)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).