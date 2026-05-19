---
title: "Seguir e gerir os e-mails automáticos do seu alojamento web"
excerpt: "Saiba como seguir e gerir os e-mails automáticos enviados a partir do seu alojamento web OVHcloud"
updated: 2026-04-01
---

## Objetivo

Os e-mails automáticos são mensagens enviadas através de scripts. Geralmente com a ajuda da função "mail()" de PHP. São utilizados, por exemplo, para o formulário de contacto do seu website e permitem que os seus visitantes lhe enviem mensagens.

> [!primary]
>
> Este guia diz respeito principalmente aos e-mails enviados a partir de scripts localizados no seu [alojamento web OVHcloud](/links/web/hosting) com a ajuda da função "mail()" de PHP.
>
> Se deseja gerir os endereços de e-mail incluídos na sua oferta MX Plan ou na sua oferta de [alojamento web OVHcloud](/links/web/hosting), consulte a nossa documentação sobre os [E-mails partilhados - MX Plan](/products/web-cloud-email-collaborative-solutions-mx-plan).
>

> [!success]
>
> Embora recomendemos vivamente a utilização da função "mail()" de PHP, pode também enviar e-mails a partir do seu alojamento partilhado através de um script que utilize o [protocolo SMTP (Simple Mail Transfer Protocol)](#SMTP).
>

**Saiba como seguir e gerir os e-mails automáticos enviados a partir do seu alojamento web OVHcloud.**

## Requisitos

- Ter um plano de [alojamento web OVHcloud](/links/web/hosting).

<!-- CP-NAV-START:web-hosting -->
---

### Acesso à Área de Cliente OVHcloud

- **Link direto:** [Alojamentos](/links/control-panel/web-hosting)
- **Percurso de navegação:** `Web Cloud`{.action} > `Alojamentos`{.action} > Selecione o seu alojamento web

---
<!-- CP-NAV-END:web-hosting -->

## Instruções

### Apresentação da secção «Scripts e-mails»

<!-- CP-STEPS-START:email-scripts-overview -->
Para aceder à secção «Scripts e-mails», clique nos separadores abaixo para visualizar cada uma das **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e selecione o alojamento web em causa.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Na página que se apresenta, clique no separador `Mais`{.action} e depois em `Scripts e-mails`{.action}.
>>
>> ![More tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/more.png){.thumbnail}
>>
>> ![More tab 2](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/more-2.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Esta página permite-lhe seguir e gerir os e-mails automáticos enviados a partir do seu [alojamento web OVHcloud](/links/web/hosting).
>>
>> ![Página Scripts e-mails do alojamento web](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/email-scripts/tab.png){.thumbnail}
>>
>> A página apresenta várias informações que lhe permitem visualizar a atividade dos envios de e-mails automáticos gerados pelos seus scripts:
>>
>> - **Estado do serviço**: estado atual do serviço que realiza os envios de e-mails automáticos do seu alojamento web:
>>     - Se estiver verde (*«Ativado»* ou *«Force»*), significa que os envios estão operacionais.
>>     - Se estiver vermelho (*«Desativado»*, *«Bounce»* ou *«spam»*), os envios já não são efetuados.
>>
>>     Conforme este estado, a gestão dos envios será diferente.
>>
>> - **Relatório de erros para**: receba-o diariamente no endereço de e-mail da sua escolha. Defina-o através do botão `Alterar o destinatário`{.action}. Este relatório contém os e-mails enviados a partir do seu alojamento web que voltaram com erro para a OVHcloud. Um botão `E-mails em erro`{.action} também permite consultar estes relatórios a qualquer momento à direita da página `Scripts e-mails`{.action}.
>> - **Total de e-mails enviados**: número total de e-mails automáticos enviados desde a criação do seu alojamento web OVHcloud.
>> - **E-mails enviados hoje**: número total de e-mails automáticos enviados hoje.
>> - **Total de e-mails em erro**: número total de e-mails automáticos enviados desde a criação do seu alojamento web que voltaram com erro para a OVHcloud.
>> - **Histórico dos e-mails enviados**: gráfico que representa o histórico dos e-mails enviados a partir do seu alojamento web nos dias anteriores.
>>
>> À direita, vários botões permitem gerir os envios de e-mails automáticos a partir do seu alojamento web. Consoante o estado do serviço, alguns podem não estar disponíveis.
>>
>> - **Purgar os e-mails**: apaga os e-mails presentes na fila de espera e desbloqueia o envio de e-mails. Por razões de confidencialidade, os e-mails presentes na fila de espera não estão acessíveis do lado da OVHcloud. Só pode visualizar estes e-mails se tiverem sido previamente registados na base de dados do seu website antes de serem enviados.
>> - **E-mails em erro**: permite o acesso aos logs dos últimos e-mails que falharam no envio. Encontrará os endereços de e-mail em causa com o erro associado. Atenção, este histórico não será reiniciado, mesmo que decida `Purgar os e-mails`{.action} ou `Desbloquear o envio`{.action}.
>> - **Bloquear o envio**: bloqueia a distribuição dos envios de e-mails automáticos do seu alojamento web. Os e-mails gerados pelos seus scripts após o bloqueio não serão enviados, mas conservados numa fila de espera durante 72 horas no máximo.
>> - **Desbloquear o envio**: desbloqueia o envio dos e-mails automáticos do seu alojamento web. Os e-mails presentes na fila de espera serão também retomados para envio.
>>
>> Para realizar a ação pretendida, clique no botão correspondente e depois em `Validar`{.action}. Em certos casos, a ação pretendida pode levar vários minutos para ser plenamente efetiva.
<!-- CP-STEPS-END:email-scripts-overview -->

> [!primary]
>
> De forma a evitar uma utilização indesejada dos e-mails automáticos do seu alojamento web, recomendamos vivamente que implemente um sistema de segurança, como um «captcha», nos formulários do seu website que realizam envios de e-mails (um formulário de contacto, por exemplo).
>

Se verificar que os e-mails gerados pelos seus scripts já não são enviados enquanto o estado do serviço ainda permite os envios (*«Ativado»* ou *«Force»*), recomendamos que:

- **verifique os scripts que realizam os envios**: os scripts podem não conseguir enviar os e-mails devido a um erro de sintaxe. Verifique o conteúdo dos seus scripts, corrija-os se necessário e efetue uma nova tentativa.

- **teste o envio de um e-mail através de um script de teste**: crie um script de teste que realize o envio de um e-mail para o seu endereço pessoal com a ajuda do seguinte código:

```bash
<?php
$to = "RecipientEmail@address.tld"; 
$subject = "Test mail PHP"; 
$content = "The body/content of the Email";
$headers = "From: Website <SendingEmail@address.tld>\r\nReply-To: SendingEmail@address.tld";

if (mail($to, $subject, $content, $headers))
echo "The email has been sent successfully!";
else
echo "Email did not leave correctly!";
?>
```

Para o `$headers`, indique duas vezes o mesmo endereço de e-mail emissor.

Se receber corretamente a mensagem *The email has been sent successfully!* no endereço de e-mail que definiu na linha `$to`, isso indica que os scripts que realizam os seus envios contêm erros.

- **Certifique-se de que os seus envios não utilizam um servidor SMTP**: não especifique um servidor SMTP nos parâmetros dos seus scripts quando utiliza a função "mail()" de PHP. Se dispõe de uma interface para administrar os envios de e-mails a partir do seu website, modifique este parâmetro na configuração desta.

- **Verifique o tamanho total do seu e-mail**: o e-mail enviado não deve ultrapassar o tamanho total de **10 MB** (encapsulamento e cabeçalho incluídos). O próprio conteúdo do seu e-mail não deve, portanto, exceder **7/8 MB**.

### Gerir os estados «Desativado», «Bounce» e «spam» <a name="block-state"></a>

Nesta secção, encontrará os detalhes de cada estado na origem do bloqueio da sua função e-mail.

> [!warning]
>
> Antes de detalhar cada um destes estados, é necessário compreender os pontos que podem degradar a reputação do seu nome de domínio ou impedir a receção dos seus e-mails.
>
> Verifique os seguintes pontos previamente:
>
> - A configuração do [registo SPF](/pages/web_cloud/domains/dns_zone_spf) na zona DNS do nome de domínio.
> - A configuração do [registo DMARC](/pages/web_cloud/domains/dns_zone_dmarc) na zona DNS do nome de domínio, **apenas se o servidor de destino o exigir**.
> - Verifique a reputação do endereço IP na origem do envio ([o do seu alojamento web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_ip) no seu caso), com a ajuda de uma ferramenta como [MXtoolbox](https://mxtoolbox.com/) ou [Spamhaus](https://check.spamhaus.org/).
> - O e-mail não contém elementos suscetíveis de ser interpretados como spam. Encontre uma lista não exaustiva destes elementos na secção «[Caso n°3: Envio de e-mails legítimos considerados como spam](#elements-list-spam)» deste guia.
> - Na ausência de bloqueio do lado da OVHcloud e se o e-mail não foi recebido ou rejeitado pelo destinatário, contacte o destinatário para que este verifique se o e-mail não foi bloqueado ao nível do servidor de receção.

#### O estado «Desativado»

Este estado ocorre quando:

- foram enviados demasiados e-mails muito rapidamente;
- demasiados e-mails voltaram com erro;
- desativou você mesmo a funcionalidade a partir da sua [Área de Cliente OVHcloud](/links/manager).

<!-- CP-STEPS-START:resolve-disabled-status -->
Para desbloquear a situação, clique nos separadores abaixo para visualizar cada uma das **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e selecione o alojamento web em causa.
>>
> **Etapa 2**
>>
>> Na página que se apresenta, clique no separador `Mais`{.action} e depois em `Scripts e-mails`{.action}.
>>
> **Etapa 3**
>>
>> Clique em `Desbloquear o envio`{.action} e aguarde alguns minutos para que o serviço de envio fique novamente ativo.
<!-- CP-STEPS-END:resolve-disabled-status -->

#### O estado «Bounce»

Este estado ocorre quando uma certa percentagem dos seus e-mails enviados automaticamente voltou com erro.

<!-- CP-STEPS-START:resolve-bounce-status -->
Para desbloquear a situação, clique nos separadores abaixo para visualizar cada uma das **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e selecione o alojamento web em causa.
>>
> **Etapa 2**
>>
>> Na página que se apresenta, clique no separador `Mais`{.action} e depois em `Scripts e-mails`{.action}.
>>
> **Etapa 3**
>>
>> São possíveis duas opções:
>>
>> - Se clicar em `Desbloquear o envio`{.action}, o estado do serviço passará para *«Force»*. O rácio **e-mails que voltaram com erro / número total de envios de e-mails enviados** autorizado antes de um bloqueio será duplicado. O envio voltará a estar operacional alguns minutos após o desbloqueio.
>> - Se clicar em `Purgar os e-mails`{.action}, isso apagará todos os e-mails da fila de espera e o estado do serviço voltará para *«Ativado»* sem duplicar o rácio.
<!-- CP-STEPS-END:resolve-bounce-status -->

#### O estado «spam»

Este estado ocorre quando são emitidos e-mails considerados spam a partir do seu alojamento.

Geralmente, este bloqueio é acompanhado pelo envio de um e-mail intitulado **«Abuso com o seu alojamento domain.tld»** gerado automaticamente pelos nossos robôs de segurança:

![hosting](/pages/assets/screens/email-sending-to-customer/webhosting/email-script-disabled.png){.thumbnail}

São possíveis três casos em relação a esta situação:

- **Caso n°1: exploração de um formulário de contacto por um robot**:

Para corrigir esta situação, deve proteger todos os scripts capazes de emitir e-mails a partir do seu alojamento, com a ajuda de um sistema do tipo «Captcha».

<!-- CP-STEPS-START:resolve-spam-case-1 -->
Aceda de seguida à secção «Scripts e-mails» do seu alojamento. Para isso, clique nos separadores abaixo para visualizar cada uma das **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e selecione o alojamento web em causa.
>>
> **Etapa 2**
>>
>> Na página que se apresenta, clique no separador `Mais`{.action} e depois em `Scripts e-mails`{.action}.
>>
> **Etapa 3**
>>
>> Clique em `Purgar os e-mails`{.action}: isso apagará todos os e-mails da fila de espera e o estado do serviço voltará para *«Ativado»*. Neste caso, uma purga é obrigatória para apagar os spam em espera de envio.
<!-- CP-STEPS-END:resolve-spam-case-1 -->

- **Caso n°2: injeção de ficheiros maliciosos no seu alojamento**:

Para corrigir esta situação, deve efetuar pelo menos as seguintes ações:

- Analise os [logs do seu alojamento](/pages/web_cloud/web_hosting/logs_and_statistics) para identificar as falhas de segurança e os ficheiros infetados.
- Elimine ou corrija o(s) ficheiro(s)/módulo(s) malicioso(s).
- Para os CMS (WordPress, Joomla!, PrestaShop, Drupal, ...), atualize o CMS, o(s) plugin(s) e o tema associados.
- Proteja os seus formulários de contacto com um «captcha».

Se utilizar um CMS, privilegie a utilização de plugin(s)/tema(s) «oficial(is)».
Atualize o CMS, os plugins e o tema associados o mais regularmente possível para evitar que isso se repita.

<!-- CP-STEPS-START:resolve-spam-case-2 -->
Uma vez protegido o seu alojamento, clique nos separadores abaixo para visualizar cada uma das **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e selecione o alojamento web em causa.
>>
> **Etapa 2**
>>
>> Na página que se apresenta, clique no separador `Mais`{.action} e depois em `Scripts e-mails`{.action}.
>>
> **Etapa 3**
>>
>> Clique em `Purgar os e-mails`{.action}: isso apagará todos os e-mails da fila de espera e o estado do serviço voltará para *«Ativado»*.
<!-- CP-STEPS-END:resolve-spam-case-2 -->

Neste caso, uma purga é obrigatória para apagar os spam em espera de envio.

- **Caso n°3: Envio de e-mails legítimos considerados como spam** <a name="elements-list-spam"></a>

Se for a origem dos e-mails que geraram o bloqueio, encontrará abaixo alguns exemplos de **utilizações a evitar** aquando do envio de um e-mail (para que não seja considerado demasiado «facilmente» como spam):

- 3 palavras ou mais em maiúsculas no assunto/objeto do e-mail.
- Nenhum assunto/texto indicado no e-mail.
- O e-mail contém apenas uma imagem de tamanho superior a 1 MB e algumas palavras.
- O assunto do e-mail começa por: Hi, FREE, BUY, BUYING,....
- O e-mail contém mais de 70% de espaço em branco (abuso da tecla «ESPAÇO» ou «ENTER» do teclado).
- O tipo de letra utilizado para a redação do e-mail é extremamente grande.
- A cor do texto e a cor de fundo são idênticas para redigir o e-mail.
- O endereço IP público (IP do seu ponto de acesso à Internet por exemplo) está listado em organismos de reputação.
- O cabeçalho do e-mail enviado não respeita as RFC «e-mails» (normas ou padrões e-mail).
- O(s) link(s) presentes no e-mail estão incorretos.
- Um URL no e-mail não é seguro (exemplo: declarado em `https://` enquanto o URL só existe em `http://`).
- O e-mail contém termos de carácter pornográfico ou aproximado.
- O e-mail contém um executável (EXE, BAT, PIF, XML, XLSX ou documentos com «macros»), mesmo que esteja «zipado».

Se apesar disso o estado do serviço voltar para o estado *«spam»*, responda ao e-mail automático que recebeu precisando que tomou as medidas necessárias.

O nosso serviço antispam analisará a situação e o nosso suporte entrará em contacto para lhe explicar o procedimento de desbloqueio.

### Envio de e-mails com a ajuda de um script «SMTP» <a name="SMTP"></a>

> [!warning]
>
> A OVHcloud disponibiliza-lhe serviços cuja configuração, gestão e responsabilidade lhe incumbem. Assim, deverá certificar-se de que estes funcionam corretamente.
>
> No entanto, recomendamos que recorra a um [fornecedor especializado](/links/partner) se encontrar dificuldades. Não lhe poderemos prestar assistência. Para mais informações, aceda à secção [«Quer saber mais?»](#go-further) deste guia.
>

Embora recomendemos vivamente privilegiar a utilização da função "mail()" de PHP, os alojamentos partilhados permitem enviar e-mails através de um script que utiliza o protocolo SMTP (Simple Mail Transfer Protocol). O tamanho total do seu e-mail não poderá ultrapassar **10 MB** (ou seja, **7/8 MB sem encapsulamento**).

> [!warning]
> 
> Os e-mails emitidos com um script que utilize uma configuração SMTP não poderão ser geridos e seguidos a partir da sua [Área de Cliente OVHcloud](/links/manager).
> 

> [!primary]
>
> Se utilizar um endereço de e-mail OVHcloud e apenas neste caso, pode igualmente utilizar o `SMTPSecure` *«starttls»* ou *«tls»* com o `Port` **587**. No entanto, o `SMTPSecure` *«ssl»* com o `Port` **465** permanece a configuração a privilegiar na nossa infraestrutura.
> 

## Quer saber mais? <a name="go-further"></a>

[Consultar os logs do seu alojamento](/pages/web_cloud/web_hosting/logs_and_statistics)

[Corrigir a página «403 Forbidden» que aparece no seu site](/pages/web_cloud/web_hosting/diagnostic_403_forbidden)

[Restaurar o espaço de armazenamento FTP do seu alojamento](/pages/web_cloud/web_hosting/ftp_save_and_backup)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).
