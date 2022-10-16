---
title: Alojamento partilhado Seguimento dos emails automatizados
excerpt: Seguimento dos seus emails enviados a partir de um website num alojamento partilhado OVHcloud
slug: alojamento_partilhado_seguimento_dos_emails_automatizados
section: Diagnóstico
Order: 09
---

**Última atualização: 12/10/2022**

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Os e-mails automatizados são mensagens enviadas através de scripts. Geralmente com a ajuda da função "mail()" de PHP. São utilizados, por exemplo, para o formulário de contacto do seu website e permitem que os seus visitantes lhe enviem mensagens.

> [!primary]
>
> Este guia trata principalmente dos e-mails enviados a partir de scripts situados no seu [alojamento web da OVHcloud](https://www.ovhcloud.com/pt/web-hosting/) com a ajuda da função "mail()" de PHP.
>
> Se pretender gerir os endereços de e-mail incluídos na sua oferta MX Plan ou na sua oferta de[alojamento web OVHcloud](https://www.ovhcloud.com/pt/web-hosting/){.external}, consulte a nossa documentação sobre os [E-mails partilhados - MX Plan](https://docs.ovh.com/pt/emails/).
>

> [!success]
>
> Mesmo que recomendemos vivamente que utilize a função "mail()" de PHP, pode igualmente enviar e-mails a partir do seu alojamento partilhado, passando por um script que utiliza o [protocolo SMTP (Simple Mail Transfer Protocol)](#SMTP).
>

**Descubra como seguir e gerir os e-mails automatizados enviados a partir do seu alojamento web da OVHcloud.**

## Requisitos

- Ter um serviço de [alojamento web da OVHcloud](https://www.ovhcloud.com/pt/web-hosting/){.external}.
- Ter acesso ao seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

## Instruções

O acompanhamento e a gestão dos e-mails automatizados do seu alojamento web OVHcloud efetuam-se a partir do seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}. Uma vez conectado, aceda à secção `Web Cloud`{.action}, clique em `Alojamentos`{.action} e escolha o alojamento em causa na lista. A seguir, clique no separador `Plus`{.action} e depois em `Scripts emails`{.action}.

![hosting](images/monitoring-automatic-emails-step1.png){.thumbnail}

A página que aparece permite-lhe seguir e gerir os e-mails automatizados enviados a partir do seu [alojamento web da OVHcloud](https://www.ovhcloud.com/pt/web-hosting/).

### Apresentação da parte "Scripts emails"

![hosting](images/Interface.png){.thumbnail}

A página apresenta várias informações que lhe permitem visualizar a atividade dos envios de e-mails automatizados gerados a partir dos seus scripts:

- **Estado do serviço**: estado atual do serviço que efetua os envios de e-mails automatizados do seu alojamento web:
    - Se for verde (*"Ativado"* ou * "Force"*), significa que os envios estão operacionais. 
    - Se for vermelho (*"Desativado"*, * "Bola"* ou * "SPAM"*), os envios deixam de ser efetuados. <br>

    De acordo com este estado, a gestão dos envios será diferente.

- **Relatório de erros a**: receba-o diariamente no endereço de e-mail à sua escolha. Defina-a graças ao botão `Alterar o destinatário`{.action}. Este relatório inclui os e-mails enviados a partir do seu alojamento web com rendimentos de erro na OVHcloud. Um botão `Emails em erro`{.action} também permite consultar estes relatórios a qualquer momento, à direita da página `Scripts emails`{.action}.
- **Total dos e-mails enviados**: número total de e-mails automatizados enviados desde a criação do seu alojamento web da OVHcloud.
- **E-mails enviados hoje**: número total de e-mails automatizados enviados apenas hoje.
- **Total dos e-mails em erro**: número total de e-mails automatizados enviados após a criação do seu alojamento web que regressaram em erro à OVHcloud.
- **Histórico dos e-mails enviados**: gráfico que representa o histórico dos e-mails enviados a partir do seu alojamento web nos dias anteriores.

À direita, vários botões permitem gerir os envios de e-mails automatizados a partir do seu alojamento web. Em função do estado do serviço, alguns podem não estar disponíveis.

- **Bloquear o envio**: bloqueia a distribuição dos envios de e-mails automatizados do seu alojamento web. Os e-mails gerados pelos seus scripts após o bloqueio não serão enviados, mas conservados numa fila de espera durante 72 horas, no máximo.
- **Desbloquear o envio**: desbloqueie o envio dos e-mails automatizados do seu alojamento web. Os e-mails presentes na fila de espera serão igualmente recolocados em distribuição.
- **Purgar os e-mails** : apaga os e-mails presentes na fila de espera e desbloqueia o envio de emails.

Para realizar a ação desejada, clique no botão correspondente e depois em `Valider`{.action}. Em certos casos, a ação desejada pode demorar dezenas de minutos para ser plenamente efetiva.

> [!primary]
>
> Para evitar uma utilização indesejável dos e-mails automatizados do seu alojamento web, recomendamos vivamente que implemente um sistema de segurança, como um "captcha" nos formulários do seu website que enviam e-mails (um formulário de contacto, por exemplo).
>

Se verificar que os e-mails gerados a partir dos seus scripts já não são enviados quando o estado do serviço permite sempre os envios (*"Ativado"* ou *"Force"*), recomendamos que:

- **verificar os scripts que realizam os envios**: os scripts podem não ser bem sucedidos no envio dos e-mails devido a um erro de sintaxe. Verifique o conteúdo dos seus scripts, corrija-os se necessário e efetue um novo ensaio.

- **testar o envio de um e-mail através de um script de teste** : crie um script de teste que realize o envio de um e-mail para o seu endereço pessoal com a ajuda do seguinte código:

```bash
<?php
$to = "RecipientEmail@adress.tld"; 
$subject = "Test mail PHP"; 
$content = "The body/content of the Email";
$headers = "From: Website <SendingEmail@address.tld>\r\nReply-To: SendingEmail@address.tld";

if (mail($to, $subject, $content, $headers))
echo "The email has been sent successfully!";
else
echo "Email did not leave correctly!";
?>
```

`$headers` indique o mesmo endereço de e-mail emissor duas vezes.

Se receber corretamente a mensagem *The email has been sent successfully!* no endereço de e-mail que definiu para a linha `$to`, isto indica que os scripts que efetuam os seus envios contêm erros.

- **Certifique-se de que os seus envios não utilizam um servidor SMTP**: não especifique um servidor SMTP nos parâmetros dos seus scripts quando utiliza a função "mail()" de PHP. Se dispõe de uma interface para administrar os envios de e-mails a partir do seu website, altere este parâmetro na configuração deste último.

- **Verifique o tamanho total do seu e-mail**: O e-mail enviado não deve ultrapassar o tamanho total de **10 MB** (incluindo encapsulamento e cabeçalho). Assim, o conteúdo do seu e-mail não deverá exceder **7/8 MB**.

### Gerir os estados "Desativado", "Bouence" e "SPAM"

#### O estado "Desativado"

Este estado ocorre quando:

- demasiados e-mails foram enviados muito rapidamente;
- demasiados e-mails foram devolvidos em erro;
- desativou a funcionalidade a partir do seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

Para desbloquear a situação, aceda à secção `Web Cloud`{.action}, clique em `Alojamentos`{.action} e escolha o alojamento em causa na lista. A seguir, clique no separador `Plus`{.action} e depois em `Scripts emails`{.action}.

Finalmente, clique em `Libertar o envio`{.action} e aguarde alguns minutos para que o serviço de envio fique novamente ativo.

#### O estado "Bolsa"

Esta situação ocorre quando uma determinada percentagem dos seus e-mails enviados automaticamente volta em erro.

Para desbloquear a situação, aceda à secção `Web Cloud`{.action}, clique em `Alojamentos`{.action} e escolha o alojamento em causa na lista. A seguir, clique no separador `Plus`{.action} e depois em `Scripts emails`{.action}.

Duas opções são possíveis:

- Se clicar em `Libertar o envio`{.action}, o estado do serviço passará para *"Força"*. O rácio **e-mails devolvidos em erro / número total de envios de e-mails enviados** autorizado antes de um bloqueio será duplicado. O envio estará de novo operacional alguns minutos após o desbloqueio.
- Se clicar em `Purger os e-mails`{.action}, este sistema apagará todos os e-mails da fila de espera e o estado do serviço passará a *"Ativado"* sem duplicar o rácio.

#### O estado "SPAM"

Este estado ocorre quando os e-mails considerados como SPAM são enviados a partir do seu alojamento.

Geralmente, este bloqueio é acompanhado pelo envio de um e-mail intitulado **"Abuso com o seu alojamento domain.tld"** gerado automaticamente pelos nossos robôs de segurança:

![hosting](images/AbuseMail.png){.thumbnail}

São possíveis três casos relativamente a esta situação:

- **Caso n°1: exploração de um formulário de contacto por um robô**:

Para corrigir esta situação, deve proteger todos os scripts com capacidade para enviar e-mails a partir do seu alojamento, utilizando um sistema do tipo "Captcha".

De seguida, aceda à secção `Web Cloud`{.action}, clique em `Alojamentos`{.action} e escolha o alojamento em causa na lista. A seguir, clique no separador `Plus`{.action} e depois em `Scripts emails`{.action}.

A seguir, clique em `Purger os e-mails`{.action}, e o estado do serviço eliminará todos os e-mails da fila de espera. O estado do serviço será novamente indicado em *"Ativado"*.

Neste caso, é obrigatória uma purga para eliminar os SPAM que aguardam envio.

- **Caso n°2: injeção de ficheiros maliciosos no seu alojamento**:

Para corrigir esta situação, deve realizar pelo menos as seguintes ações:

- Analise os [logs do seu alojamento](https://docs.ovh.com/pt/hosting/partilhado_consultar_as_estatisticas_e_os_logs_do_meu_site/) para identificar as falhas de segurança e os ficheiros infetados.
- Elimine ou corrija o(s) ficheiro(s)/módulo(s) malicioso(s).
- Para os CMS (Wordpress, Joomla, Prestashop, Drupal, ...), atualize o CMS, o(s) plugin(s) e o tema associados.
- Proteja os seus formulários de contacto com um "captcha".

Se utilizar um CMS, escolha plugin(s)/tema(s) "oficial(ais)".
Atualize o CMS, os plugins e o tema associados o mais regularmente possível para evitar que isso se repita.

Depois de proteger o alojamento, aceda à secção `Web Cloud`{.action}, clique em `Alojamentos`{.action} e escolha o alojamento em causa na lista. A seguir, clique no separador `Plus`{.action} e depois em `Scripts emails`{.action}.

A seguir, clique em `Purger os e-mails`{.action}, e o estado do serviço eliminará todos os e-mails da fila de espera. O estado do serviço será novamente indicado em *"Ativado"*.

Neste caso, é obrigatória uma purga para eliminar os SPAM que aguardam envio.

- **Caso n°3: Envio de e-mails legítimos considerados como SPAM** :

Se é o responsável pelos e-mails que causaram o bloqueio, encontrará abaixo alguns exemplos de**usos a evitar** aquando do envio de um e-mail (para que não seja considerado demasiado "facilmente" como SPAM):

- 3 palavras ou mais em maiúsculas no assumpto/objeto do e-mail.
- Não há assumpto/texto indicado no e-mail.
- O e-mail contém apenas uma imagem de tamanho superior a 1 MB e algumas palavras.
- O assumpto do e-mail começa por: Hi, FREE, BUY, BUYING,....
- O e-mail contém mais de 70% de branco (abuso da tecla "ESPACE" ou "ENTRADA" do teclado).
- A polícia de escrita utilizada para a redação do e-mail é extremamente grande.
- A cor da escrita e a cor de fundo são idênticas para redigir o e-mail.
- O endereço IP público (IP do seu ponto de acesso à Internet, por exemplo) está listado em organismos de reputação.
- O cabeçalho do e-mail enviado não respeita os RFC "e-mails" (normas ou standards de e-mails).
- O link ou links presentes no e-mail estão incorretos.
- Um URL no e-mail não está seguro (exemplo: declarada em `https://`, enquanto o URL existe apenas em `http://`)
- O e-mail contém termos de caráter pornográfico ou de proximidade.
- O e-mail contém um executável (EXE, BAT, PIF, XML, XLSX ou documentos com "macros"), mesmo que seja "zipado".

Se, apesar disso, o estado do serviço voltar ao estado *"SPAM"*, responda ao e-mail automático que recebeu especificando que fez o necessário.

O nosso serviço antisspam irá analisar a situação e o nosso suporte irá voltar para lhe explicar o procedimento de desbloqueio.

### Envio de e-mails com um script "SMTP" <a name="SMTP"></a>

> [!warning]
>
> A OVHcloud disponibiliza serviços cuja configuração, gestão e responsabilidade lhe incumbem. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Colocamos à sua disposição a parte que vai seguir para o acompanhar melhor nas suas tarefas comuns. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](https://partner.ovhcloud.com/pt/). Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção [#go-further](#go-further) deste manual.
>

Embora recomendamos vivamente que privilegie a utilização da função "mail()" de PHP, os alojamentos partilhados permitem enviar e-mails passando por um script que utiliza o protocolo SMTP (Simple Mail Transfer Protocol). O tamanho total do seu e-mail não poderá ultrapassar **10 MB** (ou seja, **7/8 MB sem encapsulamento**).

> [!warning]
> 
> Os e-mails emitidos com um script utilizando uma configuração SMTP não poderão ser geridos e acompanhados a partir do seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).
> 

Para isso, pode utilizar o seguinte script substituindo apenas os valores `Host`, Username e `Password` pelos seus próprios parâmetros SMTP:

```bash
$mail->Host = "your.smtp.server";
$mail->SMTPAuth = true; 
$mail->SMTPSecure = "ssl";
$mail->Port = 465; 
$mail->Username = "e-mail@adress.tld"; 
$mail->Password = "YourEmailPassword"; 
```

> [!primary]
>
> Se utilizar um endereço de e-mail da OVHcloud e apenas neste caso, pode também utilizar o `SMTPSecure` *"startls"* ou *"tls"* através do `Port` **587**. No entanto, o `SMTPSecure` *"ssl"* com o `Port` **465** deve ser privilegiado.
>

## Quer saber mais? <a name="go-further"></a>

[Consultar os logs do seu alojamento](https://docs.ovh.com/pt/hosting/partilhado_consultar_as_estatisticas_e_os_logs_do_meu_site/)

[Corrigir a página 403 Forbidden que aparece no seu site](https://docs.ovh.com/pt/hosting/diagnostico-403-forbidden/)

[Restaurar o espaço de armazenamento FTP do seu alojamento](https://docs.ovh.com/pt/hosting/restauracao-ftp-filezilla-area-de-cliente/)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).
 
Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.