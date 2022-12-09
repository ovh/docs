---
title: "Gerir o espaço de armazenamento de uma conta de e-mail"
slug: manage-email-quota
excerpt: "Saiba como gerir e otimizar o espaço de armazenamento de um endereço de e-mail "
section: 'Diagnóstico'
order: 02
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 17/11/2022**

## Objetivo

Cada conta de e-mail da OVHcloud dispõe de um espaço de armazenamento dedicado. Gerir bem o seu espaço de armazenamento permite evitar a saturação, também chamada "overquota". Por predefinição, os e-mails que recebe e envia são armazenados no servidor da sua conta de e-mail. Também é possível armazenar os seus e-mails localmente no seu computador, através de um software de mensagens (Outlook, Mail de macOS, Thunderbird, etc.).

**Saiba como gerir e otimizar o espaço de armazenamento de um endereço de e-mail.**

## Requisitos

- Dispor de uma solução de e-mail OVHcloud previamente configurada (**MX Plan**, proposta entre as nossas [ofertas de alojamento web](https://www.ovhcloud.com/pt/web-hosting/), incluída num [alojamento Start10M gratuito](https://www.ovhcloud.com/pt/domains/free-web-hosting/) ou encomendada separadamente como solução autónoma, como o [**Hosted Exchange**](https://www.ovhcloud.com/pt/emails/hosted-exchange/) ou o [**Email Pro**](https://www.ovhcloud.com/pt/emails/email-pro/))
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, na secção `Web Cloud`{.action}.
- Dispor das informações de ligação aos endereços de e-mail em causa.

> [!primary]
>
> **Casos especiais**
>
> - Relativamente ao alojamento gratuito Start 10M: é obrigatório ativá-lo antes para poder criar um endereço de e-mail. Pode efetuar esta operação a partir da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, posicionando-se no domínio em questão.
> - No âmbito de um [alojamento web](https://www.ovhcloud.com/pt/web-hosting/){.external}, é necessário ativar a oferta MX Plan incluída antes de continuar a ler este manual. Para isso, consulte o nosso manual "[Ativar os endereços de e-mail incluídos no seu alojamento web](https://docs.ovh.com/pt/hosting/ativar-e-mail-alojamento-web/)".

## Prática <a name="instructions"></a>

A gestão do espaço de armazenamento da sua conta de e-mail será dividida em 3 etapas neste guia. Podem ser realizadas por ordem ou de forma independente, consoante as suas necessidades.

- [**Verificar**](#check-quota) o limite atual da sua conta de e-mail. Esta etapa permitir-lhe-á avaliar o seu consumo atual, tendo em vista as 2 etapas seguintes.
- [**Otimizar**](#optimise) a sua conta de e-mail. Esta etapa permite-lhe manter um espaço de armazenamento sem elementos supérfluos.
- [**Arquivar** ou **Alterar oferta de e-mail**](#archiveorswitch). Se a etapa anterior não for suficiente, encontrará as informações necessárias para configurar um espaço de arquivo local (no seu computador) para os seus e-mails através do seu software de correio. Encontrará igualmente as informações necessárias para alterar a oferta de e-mail da sua conta a favor de uma oferta que dispõe de um espaço de armazenamento mais importante.

![email](images/email-quota-intro.gif){.thumbnail}

### 1- **Verificar** o limite atual da sua conta de e-mail <a name="check-quota"></a>

Pode realizar esta ação a partir da Área de Cliente se tem a gestão do serviço de e-mail em causa, ou a partir do webmail se é apenas o utilizador da conta de e-mail.

#### A partir da Área de Cliente <a name="quotacontrolpanel"></a>

Na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, aceda à secção `Web Cloud`{.action} e siga as instruções indicadas na oferta:

> [!tabs]
> **E-mails (MXplan)**
>>
>> Clique em `E-mails`{.action} e escolha o nome do serviço MX Plan em causa. Aceda ao separador `Contas de e-mail`{.action}. Na nova janela, podem ver-se as contas de e-mail existentes. Na coluna `Tamanho`, pode ver o consumo em curso do armazenamento do seu endereço de e-mail.<br><br>
>>![email](images/email-quota-quotacontrolpanel01.png){.thumbnail}<br>
>>
> **Email Pro**
>>
>> Clique em `E-mail Pro`{.action} e escolha o nome da plataforma em questão. Aceda ao separador `Contas de e-mail`{.action}. Na nova janela, podem ver-se as contas de e-mail existentes. Na coluna `Tamanho`, pode ver o consumo em curso do armazenamento do seu endereço de e-mail.<br><br>
>>![email](images/email-quota-quotacontrolpanel02.png){.thumbnail}<br>
>>
> **Exchange**
>>
>> Clique em `Microsoft`{.action} / `Exchange`{.action} e escolha o nome da plataforma em questão. Aceda ao separador `Contas de e-mail`{.action}. Na nova janela, podem ver-se as contas de e-mail existentes. Na coluna `Tamanho`, pode ver o consumo em curso do armazenamento do seu endereço de e-mail.<br><br>
>>![email](images/email-quota-quotacontrolpanel03.png){.thumbnail}<br>
>>

#### A partir do webmail <a name="quotawebmail"></a>

Para se ligar ao webmail, aceda à página <https://www.ovhcloud.com/pt/mail/>e introduza as informações de ligação à sua conta de e-mail. De seguida, selecione o webmail correspondente à sua oferta:

> [!tabs]
> **OWA**: **E-mails (MXplan)** / **Email Pro** / **Exchange**
>>
>> Clique no botão <i class="icons-gear-concept icons-masterbrand-blue"></i>no canto superior direito do seu ecrã, clique em `Opções`{.action}. Clique em `A minha conta`{.action} na secção `Geral`{.action} na coluna da esquerda. Pode visualizar o limite atual da sua conta na parte inferior direita do formulário.<br><br>
>>![email](images/email-quota-webmail01.png){.thumbnail}<br>
>>
> **Roundcube**: **E-mails (MXplan)**
>>
>> Quando está conectado ao webmail Roundcube, o limite é visível na parte inferior esquerda, materializado por uma câmara e a percentagem consumida.<br><br>
>>![email](images/email-quota-webmail02.png){.thumbnail}<br>
>>

### 2- **Otimizar** a sua conta de e-mail <a name="optimise"></a>

Se a sua conta de e-mail estiver congestionada, isto significa que não poderá receber mais e-mails.<br>
Quando uma pessoa lhe envia um e-mail, recebe, em resposta automática, um e-mail de erro do tipo *"552, "5.2.2". A conta de e-mail à qual enviou uma mensagem esgotou a sua quota. "*.<br>
Quando a sua conta de e-mail estiver sobrecarregada, poderá sempre enviar e-mails para o seu lado. No entanto, estes e-mails não poderão ser armazenados na sua "caixa de envio".

#### Otimizar o espaço usado da sua conta de e-mail

Antes de efetuar qualquer operação na sua conta de e-mail, é necessário tomar conhecimento do conteúdo da sua conta de e-mail para eliminar todos os elementos supérfluos. Sugerimos que verifique alguns deles em particular:

- `1`{.action} **La Córdova (trash)**: esta contém os elementos que eliminou. Para evitar a acumulação de e-mails nesta pasta, aconselhamos que esvazie a lixeira regularmente.
- `2`{.action} **Os elementos enviados (sent mensagens)**: quando envia um e-mail, este é enviado ao destinatário. No entanto, também é conservado na sua conta de e-mail nos "elementos enviados". Sugerimos que purgue esta pasta regularmente ou arquive o seu conteúdo localmente no seu computador ou num espaço de armazenamento remoto do tipo "cloud".
- `3`{.action} **Os e-mails armazenados com anexos volumosos**: os e-mails que contenham anexos recebem mais espaço na sua conta de e-mail. Aconselhamos que armazene os elementos volumosos num espaço de armazenamento local (computador) ou remoto (cloud).
- `4`{.action}**Selecionar as pastas**: quando tem muitas pastas na sua conta de e-mail, é menos fácil medir o espaço ocupado na sua conta de e-mail. Faça regularmente o inventário das suas pastas e do seu conteúdo.

![email](images/email-quota-optimise01.png){.thumbnail}

#### Aumentar a capacidade da sua conta de e-mail

É possível aumentar a capacidade de armazenamento da sua conta de e-mail, se esta não atingiu a sua capacidade máxima. Consulte abaixo o procedimento a seguir em função da sua oferta:

> [!tabs]
> **E-mails (MXplan)**
>>
>> A capacidade de uma conta MXplan pode variar entre 2,5 MB e 5 GB. Se estiver saturado e a sua capacidade for inferior a 5GB, pode alterar a sua capacidade através da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).<br>
>> No separador `Contas de e-mail`{.action}, clique no botão <i class="icons-ellipsis icons-border-rounded icons-masterbrand-blue"></i>à direita da conta a modificar e, a seguir, em `Alterar`{.action}.
>> Na casa `Quota`{.action}, selecione o tamanho que lhe convém, clique em `Seguinte`{.action} e depois `Validar`{.action}.<br><br>
>> ![e-mail](images/email-quota-more01.png) {.thumbnail}<br>
>>
> **Email Pro**
>> 
>> A oferta Email Pro dispõe de uma capacidade única de 10 GB. Se precisar de um armazenamento maior, deverá passar para uma oferta com mais espaço. Para isso, leia a secção [mudar de oferta para aumentar a sua capacidade](#switchingoffer) deste guia.<br>
>>
> **Exchange**
>>
>> Se a sua conta Exchange atingir a saturação dos seus 50GB, é possível, para as ofertas **Hosted** e **Provider**, subscrever uma opção de extensão para aumentar a sua capacidade para 300GB.<br>
>> No separador `Contas de e-mail`{.action} da sua plataforma, clique no botão <i class="icons-ellipsis icons-border-rounded icons-masterbrand-blue"></i>à direita da conta a modificar e, a seguir, em `Aumentar a capacidade para 300GB`{.action}. Escolha o modo de faturação mais adequado para si e clique em `Validar`{.action}.<br><br>
>>![email](images/email-quota-more02.png){.thumbnail}<br>
>>
>> Se a sua conta Exchange já preencheu os seus 300GB de armazenamento numa oferta **Hosted** ou **Provider**, deverá libertar espaço na sua conta Exchange eliminando elementos supérfluos ou [arquivar os seus e-mails](#archiveorswitch) no seu computador local. Esta situação é igualmente válida para as contas Exchange de 50GB presentes numa oferta **Private**.
>>

### 3- **Arquivar** ou **mudar de oferta de e-mail** <a name="archiveorswitch"></a>

#### Arquivar os seus e-mails localmente no seu computador

> [!warning]
> 
> As informações que se seguem baseiam-se numa configuração IMAP da sua conta de e-mail, sendo esta a configuração mais comum. A configuração POP baseia-se num princípio de armazenamento dos e-mails em local. Neste contexto, não é pertinente arquivar os e-mails que já estão armazenados localmente no seu computador.

Quando configurou o seu endereço de e-mail no seu cliente de e-mail em IMAP, **por predefinição**, o conteúdo visível corresponde ao que está **sincronizado no servidor de e-mail**. Isto significa que os e-mails são carregados no seu computador mas desaparecem se forem eliminados do servidor. Para os **arquivar no seu computador**, deve configurar o seu software de mensagens.

![email](images/email-quota-step03-archive.png){.thumbnail}

Se desejar, pode libertar o espaço de armazenamento da sua conta de e-mail armazenando os seus e-mails diretamente no seu computador. Para isso, terá de recorrer a um software de mensagens instalado no seu computador.
O papel do software de e-mail será converter os seus e-mails em ficheiros, de modo a poder armazená-los no seu computador. No entanto, é necessário configurar a função de arquivo do seu software de e-mail. Os e-mails serão colocados numa pasta "local" e não diretamente no servidor da sua conta de e-mail.

Encontrará abaixo uma lista não exaustiva dos guias de configuração para os clientes de e-mail que utilizam:

- o protocolo IMAP sobre as ofertas **MXplan** e **E-mail Pro**;
- o protocolo MAPI sobre a oferta **Exchange** para o Outlook Windows;
- o protocolo EWS sobre a oferta **Exchange** para o Outlook macOS.

> [!tabs]
> **E-mails (MXplan)**
>>
>> Configuração de uma conta MX plan em **Windows*:<br><br>
>> - [Endereço do Windows 10](https://docs.ovh.com/gb/en/emails/mail-configuration-windows-10/) (English) (incluído com Windows)<br>
>> - [Outlook para Mxplan](https://docs.ovh.com/pt/emails/configuracao-outlook-2016/)
>> - [Thunderbird](https://docs.ovh.com/pt/emails/e-mails_partilhados_guia_de_configuracao_para_o_thunderbird/) (gratuito)<br><br>
>> Configuração de uma conta MX plan em **macOS**:<br><br>
>> - [Mail](https://docs.ovh.com/pt/emails/email_partilhado_guia_de_configuracao_de_mail_para_mac_-_el_capitan/) (incluído com macOS)<br>
>> - [Outlook](https://docs.ovh.com/pt/emails/configuracao-outlook-2016-mac/)<br>
>> - [Thunderbird](https://docs.ovh.com/pt/emails/email_partilhado_guia_de_configuracao_para_thunderbird/) (gratuito)<br>
>>
> **E-mail Pro**
>>
>> Configuração de uma conta E-mail Pro em **Windows*:<br><br>
>> - [Endereço do Windows 10](https://docs.ovh.com/gb/en/emails-pro/mail-configuration-windows-10/) (English) (incluído com Windows)<br>
>> - [Outlook](https://docs.ovh.com/pt/emails-pro/configuracao-outlook-2016/)<br>
>> - [Thunderbird](https://docs.ovh.com/pt/emails-pro/configuracao-thunderbird-emailpro-windows/) (gratuito)<br><br>
>> Configuração de uma conta E-mail Pro em **macOS**:<br><br>
>> - [Mail](https://docs.ovh.com/pt/emails-pro/configurar-email-pro-mail-macos/) (incluído com macOS)<br>
>> - [Outlook](https://docs.ovh.com/pt/emails-pro/configuracao-outlook-2016-mac/)<br>
>> - [Thunderbird](https://docs.ovh.com/pt/emails-pro/configuracao-thunderbird-emailpro-mac/) (gratuito)<br>
>>
> **Exchange**
>>
>> Configuração de uma conta Exchange em **Windows*:<br><br>
>> - [Endereço do Windows 10](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/mail-configuration-windows-10/) (English) (incluído com Windows)<br>
>> - [Outlook](https://docs.ovh.com/pt/microsoft-collaborative-solutions/configuracao-outlook-2016/)<br>
>> - [Thunderbird](https://docs.ovh.com/pt/microsoft-collaborative-solutions/exchange_20132016_configuracao_de_thunderbird/) (gratuito)<br><br>
>> Configuração de uma conta Exchange em **macOS**:<br><br>
>> - [Mail](https://docs.ovh.com/pt/microsoft-collaborative-solutions/exchange-configuracao-mail-mac/) (incluído com macOS)<br>
>> - [Outlook](https://docs.ovh.com/pt/microsoft-collaborative-solutions/configuracao-outlook-2016-mac/)<br>
>> - [Thunderbird](https://docs.ovh.com/pt/microsoft-collaborative-solutions/configuracao-exchange-thunderbird-mac/) (gratuito)<br>
>>

Depois de instalar o seu software de correio, siga as instruções abaixo para preparar a pasta do arquivo no seu software de correio eletrónico.

> [!tabs]
> **Outlook**
>>
>> No Outlook, certifique-se de que, na sua coluna da esquerda, a pasta "arquivo" ou "no meu computador" está presente para poder introduzir os elementos que deseja manter localmente no seu computador. Consulte a documentação da Microsoft para preparar a sua pasta de arquivo:<br><br>
>> - [Arquivo no Outlook para Windows](https://support.microsoft.com/pt-pt/office/arquivar-no-outlook-para-windows-25f75777-3cdc-4c77-9783-5929c7b47028){.external}<br>
>> - [Sobre as pastas do meu computador no Outlook para Mac](https://support.microsoft.com/pt-pt/office/acerca-das-pastas-no-meu-computador-no-outlook-para-mac-c91b8729-924d-4c25-a5f6-38883d0f763d){.external}<br>
>>
> **Mail macOS**
>>
>> A partir do e-mail no macOS, crie uma pasta que aparecerá na secção "No meu Mac" na coluna da esquerda. Para isso, siga a documentação da Apple:<br><br>
>> - [Criar ou eliminar caixas de correio no Mail](https://support.apple.com/pt-pt/guide/mail/mlhlp1021/15.0/mac/12.0){.external}<br>
>>
> **Thunderbird**
>>
>> Através do thunderbird a partir do Windows, macOS ou Linux, pode mover os seus e-mails para uma pasta da parte esquerda. Ajude-se com a documentação de Mozilla:<br><br>
>> - [Arquivo de mensagens](https://support.mozilla.org/pt-PT/kb/mensagens-arquivadas){.external}<br>
>>

#### Mudar de oferta para aumentar a sua capacidade <a name="switchingoffer"></a>

Selecione, no menu abaixo, a oferta atual da sua conta de e-mail:

> [!tabs]
> **E-mails (MXplan)**
>>
>> Se a capacidade da sua conta de e-mail já está a um máximo de 5GB, pode optar por uma migração para uma oferta [**Email Pro** de 10GB](https://www.ovhcloud.com/pt/emails/email-pro/) ou [**Hosted Exchange** de 50GB](https://www.ovhcloud.com/pt/emails/hosted-exchange/). Para isso, sugerimos que encomende a oferta mais adequada e siga a documentação "[Migrar um endereço de e-mail MX Plan para uma conta E-mail Pro ou Exchange](https://docs.ovh.com/pt/microsoft-collaborative-solutions/migracao-endereco-email-partilhado-vers-exchange/)". 
>>
> **Email Pro**
>>
>> A oferta Email Pro dispõe de uma capacidade única de 10GB. Pode optar por uma migração para uma oferta [**Hosted Exchange** de 50GB](https://www.ovhcloud.com/pt/emails/hosted-exchange/). Para isso, sugerimos que encomende a oferta mais adequada e siga o nosso manual "[Migrar os endereços de e-mail de uma plataforma de e-mail da OVHcloud para outra](https://docs.ovh.com/pt/microsoft-collaborative-solutions/migration-email-platform/)".
>>
> **Exchange**
>>
>> Se a sua conta Exchange atingir a saturação dos 50GB de espaço, é possível subscrever uma opção de extensão para aumentar a sua capacidade para 300GB. Apenas se a conta Exchange estiver presente numa oferta **Hosted** ou **Provider**.<br>
>> No separador `Contas de e-mail`{.action} da sua plataforma Exchange, clique no botão <i class="icons-ellipsis icons-border-rounded icons-masterbrand-blue"></i>à direita da conta a modificar e, a seguir, em `Aumentar a capacidade para 300GB`{.action}.<br><br>
>> ![email](images/email-quota-more02.png){.thumbnail}<br>
>>

## Saiba mais

[Migrar um endereço de e-mail MX Plan para uma conta E-mail Pro ou Exchange](https://docs.ovh.com/pt/microsoft-collaborative-solutions/migracao-endereco-email-partilhado-vers-exchange/)

[Migrar manualmente o seu endereço de e-mail](https://docs.ovh.com/pt/emails/migrar-os-enderecos-email-manualmente/)

[Migrar os endereços de e-mail de uma plataforma de e-mail OVHcloud para outra](https://docs.ovh.com/pt/microsoft-collaborative-solutions/migration-email-platform/)

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
