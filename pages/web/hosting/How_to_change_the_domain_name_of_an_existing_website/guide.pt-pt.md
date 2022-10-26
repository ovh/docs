---
title: "Como alterar o domínio de um site existente"
slug: how_to_change_the_domain_name_for_an_existing_website
excerpt: "Descubra como alterar o nome de domínio de um site existente"
section: "Casos de uso"
order: 02
---

**Última atualização: 13/10/2022**

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Durante a vida do seu website, poderá ser obrigado a mudar o nome de domínio do seu site.<br>O caso de utilização mais comum é uma mudança de nome de empresa.

Este tutorial tem como objetivo explicar os principais passos a seguir quando deseja mudar o nome de domínio de acesso ao seu website.

**Descubra como mudar o nome de domínio de um site existente.**

> [!warning]
>
> A OVHcloud disponibiliza serviços cuja configuração, gestão e responsabilidade lhe incumbem. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Colocamos à sua disposição este tutorial para o acompanhar o melhor possível em tarefas comuns. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](https://partner.ovhcloud.com/pt/). Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção ["Quer saber mais?"](#go-further) deste manual.
>

## Requisitos

- Dispor de um [nome de domínio](https://www.ovhcloud.com/pt/domains/).
- Dispor de um [alojamento partilhado OVHcloud](https://www.ovhcloud.com/pt/web-hosting/).
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

## Instruções

> [!warning]
>
> A alteração do nome de domínio para aceder ao seu site pode afetar o seu referenciamento. 
> Esteja atento às operações que vai efetuar ou contactar um [fornecedor especializado](https://partner.ovhcloud.com/pt/) no referenciamento, se necessário.
>

Para alterar o domínio de acesso ao seu website, deverá realizar várias etapas por uma ordem precisa.

### Etapa 1 - declarar o novo domínio no seu alojamento partilhado <a name="step1"></a>

Declare o seu novo nome de domínio através da nossa documentação sobre a [adição de um multi-site no seu alojamento partilhado](https://docs.ovh.com/pt/hosting/multisites-configurar-um-multisite-no-meu-alojamento-web/). Declare também o seu sub-domínio em `www` se deseja, por exemplo, que `www.NewDomain.tld` apareça também o seu website `NewDomain.tld`.

Para ser bem-sucedida na etapa 1, é necessário preencher várias condições:

- O seu novo domínio deve apontar para a mesma "pasta raiz" que o domínio utilizado atualmente para aceder ao seu site.
- Verifique que o seu novo domínio aponta para o endereço IP correto do seu alojamento partilhado. Para obter o endereço IP, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), vá à secção `Web cloud`{.action}, clique nos `Alojamentos`{.action}, selecione o seu alojamento e recupere **o IPv4** no separador `Informações gerais`{.action}.

> [!warning]
>
> Se ativar as opções **IP do país** ou **CDN** com o seu novo domínio, utilize o endereço IP correto através do nosso manual de recenseamento [o conjunto dos endereços IP dos nossos alojamentos partilhados](https://docs.ovh.com/pt/hosting/multisites-configurar-um-multisite-no-meu-alojamento-web/).
>
> Para encontrar o número do cluster onde está o seu alojamento, aceda à parte `Web cloud`{.action}, clique em `Alojamentos`{.action}, selecione o separador `FTP-SSH`{.action}. Visualizará o número do cluster no formulário **Servidor FTP e SFTP**: `ftp.cluster0XX.ovh.net` (onde os `X` representam o número de cluster).
>

> **Certificados SSL**
>
> Se o domínio inicialmente utilizado para aceder ao seu website dispuser de um certificado SSL, consulte os nossos dois guias para efetuar ou verificar as ações descritas imediatamente abaixo destes dois links:
> - [Gerir um certificado SSL no alojamento web](https://docs.ovh.com/pt/hosting/os-certificados-ssl-nos-alojamentos-web/)
> - [Ativar o HTTPS num website com certificado SSL](https://docs.ovh.com/pt/hosting/ativar-https-website-certificado-ssl/)
>
> Para o certificado SSL *Let's Encrypt* gratuito, basta-lhe ativar a opção `SSL` **a a partir de agora** para o seu novo domínio através do separador `multi-sites`{.action} do seu alojamento. A seguir, clique no botão `ações`{.action} na parte superior da tabela, indicando os seus multistas e depois `Regenerar o certificado SSL`{.action}. A regeneração demorará, no mínimo, 2 horas para ser realizada.
>
> Para os certificados SSL pagos *Sectigo DV* e *Sectigo EV* propostos pela OVHcloud, estes últimos são válidos apenas para um domínio e o seu subdomínio em `www`.<br>
> **Uma vez chegado a [etapa 3](#step3) deste guia**, deverá eliminar o seu certificado SSL pago a fim de subscrever outro para o seu novo domínio.<br>
> *Atenção, a eliminação é irreversível e nenhum reembolso será efetuado durante o resto do tempo do seu antigo certificado SSL. Certifique-se de que os passos 1 e 2 estão a ser realizados corretamente.*
>
> Para os outros certificados SSL *custom* que instalou por si mesmo, contacte o seu fornecedor de certificados SSL para conhecer as possibilidades que se lhe oferecem nesta situação.
>

Se todas as ações foram corretamente realizadas, as declarações em multi-sites dos seus domínios devem ser estritamente idênticas **exceto se utilizar um certificado SSL pago de tipo *Sectigo DV*, *Sectigo EV* ou *custom**.

![multi-sites](images/multisites.png){.thumbnail}

> [!primary]
>
> Depois de executar a etapa 1, é necessário aguardar um tempo máximo de propagação de 4 a 24 horas até que as alterações entrem em vigor.
>

Se o seu website não utiliza bases de dados e/ou não efetuar uma re-escritura de URL para o seu website, este deve já ser apresentado corretamente com o seu novo domínio. Neste caso, passe diretamente para [etapa 3](#step3) deste guia. Caso contrário, consulte o passo 2 abaixo.

### Etapa 2 - reescrita dos URLs no seu website com o novo domínio

A maioria dos sites utiliza bases de dados para funcionar. A arborescência destas últimas é geralmente construída em torno do domínio inicialmente utilizado para o seu site. São necessárias ações suplementares para estes websites.

> [!warning]
>
> Atenção, as operações descritas na etapa 2 são extremamente sensíveis e podem ter consequências graves para o seu website se não forem efetuadas com precaução. Se tiver alguma dúvida, não tente nada e recorra a um [fornecedor especializado](https://partner.ovhcloud.com/pt/).
>
> Antes de efetuar qualquer ação, aconselhamos que recupere um [backup do seu espaço de armazenamento FTP](https://docs.ovh.com/pt/hosting/restauracao-ftp-filezilla-area-de-cliente/) bem como um [backup da sua base de dados](https://docs.ovh.com/pt/hosting/partilhado_guia_de_exportacao_de_uma_base_de_dados_mysql/). Isto permitir-lhe-á restaurar o seu site em caso de manipulação incorreta.
>

Vamos distinguir dois tipos de websites: 

- os CMS (*Content Management System*) tais como WordPress, Joomla!, PrestaShop, Drupal, etc.
- os websites clássicos concebidos por si ou pelo seu prestador de serviços.

#### Caso n°1: o seu website é um CMS

A maioria dos CMS permite diretamente, a partir do seu espaço de administração *back office*, substituir o domínio inicialmente declarado para o seu site por outro.

Uma vez que os CMS são desenvolvidos por organismos terceiros não geridos pela OVHcloud, encontrará de seguida os links para a documentação oficial dos diferentes CMS propostos em instalação nos nossos alojamentos partilhados:


- WordPress: <https://wordpress.org/support/article/changing-the-site-url/>
- Joomla! : O editor deste programa não propõe, à data, documentação para alterar o domínio de acesso ao seu website. Sugerimos que contacte diretamente o editor sobre este assumpto. Para mais informações, consulte as páginas oficiais [docs.joomla.org](https://docs.joomla.org/){.external} ou [forum.joomla.org](https://forum.joomla.org/){.external}.
- Drupal: O editor deste programa não propõe, à data, documentação para alterar o domínio de acesso ao seu website. Sugerimos que contacte diretamente o editor sobre este assumpto. Para mais informações, consulte as páginas oficiais [drupal.org](https://drupal.org){.external} ou [drupal.fr](https://drupal.fr){.external}.
- PrestaShop: O editor deste programa não propõe, à data, documentação para alterar o domínio de acesso ao seu website. Sugerimos que contacte diretamente o editor sobre este assumpto. Para mais informações, clique em [aqui](https://help-center.prestashop.com){.external} para aceder à sua página oficial.

Note que, para estes CMS, também é possível efetuar as alterações diretamente [na base de dados](https://docs.ovh.com/pt/hosting/criar-base-de-dados/). Deverá alterar o URL de acesso ao seu site na tabela prevista para esse efeito.

Para os outros CMS não propostos em instalação automática pela OVHcloud, convidamo-lo igualmente a aproximar-se dos respetivos suportes para efetuar esta re-escritura com toda a segurança. 

#### Caso n°2: o seu website é um site "feito casa"

Para reescrever os seus URLs com o seu novo domínio, [ligue-se à base de dados do seu site](https://docs.ovh.com/pt/hosting/criar-base-de-dados/) e substitua o antigo domínio pelo novo na tabela correspondente. 

Não se esqueça de verificar no seu ficheiro `.htaccess` se existem re-escrituras de URL que não precisam de ser atualizadas com o seu novo domínio.

Se tiver contactado um fornecedor para a criação do seu site, contacte-o para que o modificação seja efetuada com segurança.

> [!success]
>
> Uma vez concluída a etapa 2, o seu site deve aparecer com o seu novo domínio.
>

### Etapa 3 - retirar o antigo nome de domínio <a name="step3"></a>

Para evitar o "*Duplicate-content*" e quando o seu novo domínio estiver plenamente operacional com o seu site, deverá eliminar a declaração em multi-sites para o seu antigo domínio através do guia sobre a gestão dos [multi-sites no seu alojamento partilhado](https://docs.ovh.com/pt/hosting/multisites-configurar-um-multisite-no-meu-alojamento-web/).

> [!warning]
>
> Não se esqueça de ocupar o seu certificado SSL *Sectigo EV*, *Sectigo DV* ou *Custom*, conforme especificado na [etapa 1](#step1).
>

Uma vez o domínio antigo retirado do separador multi-sites e registado na OVHcloud, poderá reencaminhá-lo através de um [reencaminhamento visível permanente 301](https://docs.ovh.com/pt/domains/reencaminhamento-dominio/). Isto permitirá que os visitantes sejam automaticamente reencaminhados para o seu site ao visualizar o seu novo domínio na barra de endereço/URL do seu browser.

## Quer saber mais? <a name="go-further"></a>

[Lista dos IP dos nossos alojamentos partilhados](https://docs.ovh.com/pt/hosting/multisites-configurar-um-multisite-no-meu-alojamento-web/)

[Gerir um certificado SSL no alojamento web](https://docs.ovh.com/pt/hosting/os-certificados-ssl-nos-alojamentos-web/)

[Ativar o HTTPS num website com certificado SSL](https://docs.ovh.com/pt/hosting/ativar-https-website-certificado-ssl/)

[Reencaminhar um domínio](https://docs.ovh.com/pt/domains/reencaminhamento-dominio/)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.