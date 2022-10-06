---
title: "Reencaminhar um domínio gerido pela OVHcloud"
slug: reencaminhamento-dominio
excerpt: "Descubra os diferentes tipos de reencaminhamento e como criar um reencaminhamento para um domínio gerido pela OVHcloud"
section: Geral
order: 01
---

**Última atualização: 06/10/2022**

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

O reencaminhamento de um domínio consiste em reencaminhá-lo para um novo destino. Existem diferentes tipos de reencaminhamentos, cada um deles respondendo a uma necessidade específica.

**Descubra diferentes formas de reencaminhar o seu domínio**

## Requisitos

- Dispor de um [nome de domínio](https://www.ovhcloud.com/pt/domains/)
- Ter acesso ao seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.
- Estar conectado ao seu alojamento web (para um reencaminhamento através de um ficheiro [.htaccess](#htaccess_rewrite).

## Instruções

#### Compreender o reencaminhamento de um domínio

Esta funcionalidade permite reencaminhar um domínio/subdomínio para:

- outro domínio/subdomínio já existente:
    - **Exemplo**: `domain.tld`
- um URL (Uniform Resource Locator) de site Internet:
    - **Exemplos**: `http://www.domain.tld/welcome/` ou `https://www.domain.tld/welcome/` (se o domínio-alvo dispuser de um certificado SSL compatível).

Estas ações podem ser realizadas de várias formas:

- **A partir da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)**. em que um assistente de configuração permite configurar o seu reencaminhamento.
- **Através de um método que requer programação**. Deverá criar você mesmo o reencaminhamento num ficheiro (geralmente um [.htaccess](#htaccess_rewrite)).

> [!warning]
>
> O reencaminhamento pode afetar o referenciamento do seu website. 
> Esteja atento às operações que vai efetuar ou contactar um [fornecedor especializado](https://partner.ovhcloud.com/pt/) no referenciamento, se necessário.
>
> Atenção: um reencaminhamento criado a partir da[Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) não permite reencaminhar um URL em `https://` para outro domínio ou URL. 
> Para criar este tipo de reencaminhamento, deverá obrigatoriamente passar por [uma re-escritura de URL](https://docs.ovh.com/pt/hosting/partilhado_htaccess_rescrita_de_urls_gracas_ao_mod_write/) através de um ficheiro ".htaccess", por exemplo.

### Reencaminhar um domínio a partir da Área de Cliente

Ligue-se à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, aceda à secção `Web Cloud`{.action}, selecione o domínio a reencaminhar na secção `Noms de domínio`{.action} e clique no separador `Redirecção`{.action}.

A tabela apresenta os reencaminhamentos ativos para o seu domínio. Pode gerir os seus reencaminhamentos existentes utilizando o botão `...`{.action} à direita de cada linha.

Clique no botão `Para Adicionar um reencaminhamento`{.action}.

![Apresentação do menu reencaminhamento](images/RedirectionPanel.png){.thumbnail}

Estão disponíveis três opções de reencaminhamento a partir da[Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) e cada uma delas é composta por **5 etapas** sucessivas. 

> O separador `Reencaminhamento`{.action} apresenta uma quarta opção que permite apontar rapidamente o seu domínio para as entradas DNS A, AAAA e CNAME.<br>
> Uma vez que não se trata propriamente de um "reencaminhamento", esta opção não será detalhada neste guia.
>
> Para mais informações sobre as entradas DNS, consulte o nosso manual sobre [registos DNS](https://docs.ovh.com/pt/domains/alojamento_partilhado_como_editar_a_minha_zona_dns/).
>

Encontre aqui os três tipos de reencaminhamentos detalhados etapa a etapa.

> [!primary]
>
> Independentemente da opção de reencaminhamento escolhida, a propagação das alterações pode demorar entre 4 e 24 horas.
>

##### Opção 1: reencaminhamento visível permanente para um endereço web

Esta opção permite, após a introdução do domínio reencaminhado, apresentar o domínio alvo na barra de endereços do seu browser em vez do domínio reencaminhado.

- **Exemplo**: se reencaminhar `domain1.tld` para `domain2.tld`, é que está a apontar para a barra de endereços no seu browser.

![Gif1](images/redirect1.gif){.thumbnail}

> Este reencaminhamento "standard" devolverá um código HTTP 301.

> [!success]
> Clique nos separadores abaixo para mostrar sucessivamente cada uma das 5 etapas.

> [!tabs]
> **Etapa 1**
>>
>> Na janela, o domínio a reencaminhar já aparece. Introduza o formulário **unicamente** se deseja reencaminhar um *subdomínio*.
>>
>> A casa `Reencaminhamento também`{.action} pode ser selecionada para reencaminhar o seu subdomínio para `www` para o mesmo destino que escolher para o seu domínio/subdomínio.
>>
>> ![Etapa 1](images/Step1.png){.thumbnail}
>>
>> Clique em `Seguinte`{.action} para passar ao passo 2.
>>
> **Etapa 2**
>>
>> Selecione `Para um endereço Web`{.action}.
>>
>> ![Etapa 2](images/Step2.png){.thumbnail}
>>
>> Clique em `Seguinte`{.action} para passar ao passo 3.
>>
> **Etapa 3**
>>
>> Selecione `Com um reencaminhamento visível`{.action} entre as duas opções indicadas.
>>
>> ![Etapa 3](images/Step3Visi.png){.thumbnail}
>>
>> Clique em `Seguinte`{.action} para passar ao passo 4.
>>
> **Etapa 4**
>>
>> Selecione `Permanente (301)`{.action} entre as duas opções indicadas e introduza o domínio ou o URL alvo do seu reencaminhamento no formulário `Endereço web`{.action} que é apresentado.
>>
>> ![Etapa 4](images/Step4VisiPerma.png){.thumbnail}
>>
>> Clique em `Seguinte`{.action} para passar ao passo 5.
>>
> **Etapa 5**
>>
>> Neste último passo, certifique-se de que as informações apresentadas estão corretas.
>>
>> ![Etapa 5](images/Step5VisiPerma.png){.thumbnail}
>>
>> Clique em `Validar`{.action} para validar a sua configuração.
>> 
>> > [!primary]
>> >
>> > Se a mensagem "*Existem reencaminhamentos a partir dos domínios que deseja reencaminhar que entram em conflito com os reencaminhamentos que deseja adicionar*" aparece, pode selecionar a casa `Confirmar o esmagamento do reencaminhamento existente`{.action} para forçar a aplicação do seu reencaminhamento.
>> >
>> > Atenção, a configuração anterior será então desativada e eliminada.
>> >
>>

##### Opção 2: reencaminhamento visível temporário para um endereço web

Tal como para a opção 1, esta opção permite apresentar, após a introdução do domínio reencaminhado, o domínio alvo na barra de endereços do seu browser em vez do domínio reencaminhado.

No entanto, esta deve ser utilizada de forma pontual, por exemplo para acontecimentos efémeros.<br>
De facto, o posicionamento nos motores de busca é menos eficiente do que com um reencaminhamento **visível permanente** do tipo 301 (código HTTP).

- **Exemplo**: se reencaminhar `domain1.tld` para `domain2.tld`, é que está a apontar para a barra de endereços no seu browser.

![Gif1](images/redirect1.gif){.thumbnail}

> Este reencaminhamento irá devolver um código HTTP 302.

> [!success]
> Clique nos separadores abaixo para mostrar sucessivamente cada uma das 5 etapas.

> [!tabs]
> **Etapa 1**
>>
>> Na janela, o domínio a reencaminhar já aparece. Introduza o formulário **unicamente** se deseja reencaminhar um *subdomínio*.
>>
>> A casa `Reencaminhamento também`{.action} pode ser selecionada para reencaminhar o seu subdomínio para `www` para o mesmo destino que escolher para o seu domínio/subdomínio.
>>
>>![Etapa 1](images/Step1.png){.thumbnail}
>>
>> Clique em `Seguinte`{.action} para passar ao passo 2.
>>
> **Etapa 2**
>>
>> Selecione `Para um endereço Web`{.action}.
>>
>>![Etapa 2](images/Step2.png){.thumbnail}
>>
>> Clique em `Seguinte`{.action} para passar ao passo 3.
>>
> **Etapa 3**
>>
>> Selecione `Com um reencaminhamento visível`{.action} entre as duas opções indicadas.
>>
>> ![Etapa 3](images/Step3Visi.png){.thumbnail}
>>
>> Clique em `Seguinte`{.action} para passar ao passo 4.
>>
> **Etapa 4**
>>
>> Selecione `Temporário (302)`{.action} de entre as duas opções indicadas e introduza o domínio ou o URL alvo do seu reencaminhamento no formulário `Endereço web`{.action} que aparecerá.
>>
>> ![Etapa 4](images/Step4VisiTempo.png){.thumbnail}
>>
>> Clique em `Seguinte`{.action} para passar ao passo 5.
>>
> **Etapa 5**
>>
>> Neste último passo, certifique-se de que as informações apresentadas estão corretas.
>>
>> ![Etapa 5](images/Step5VisiTempo.png){.thumbnail}
>>
>> Clique em `Validar`{.action} para validar a sua configuração.
>> 
>> > [!primary]
>> >
>> > Se a mensagem "*Existem reencaminhamentos a partir dos domínios que deseja reencaminhar que entram em conflito com os reencaminhamentos que deseja adicionar*" aparece, pode selecionar a casa `Confirmar o esmagamento do reencaminhamento existente`{.action} para forçar a aplicação do seu reencaminhamento.
>> >
>> > Atenção, a configuração anterior será então desativada e eliminada.
>> >
>>

##### Opção 3: reencaminhamento invisível para um endereço web

Este reencaminhamento permite, após a introdução do domínio reencaminhado, deixá-lo afixado na barra de endereços do seu browser, em vez de o substituir pelo domínio-alvo.<br>
**Atenção, esta ação não é compatível com todos os sites e afeta o referenciamento do seu site.**.

- **Exemplo**: se reencaminhar `domain1.tld` para `domain2.tld`, é que aponte para o domínio `domain1.tld` que está no seu browser.

![Gif2](images/redirect2.gif){.thumbnail}

O reencaminhamento invisível funciona com um identificador HTML *iFrame*. que permite ao seu domínio reencaminhado integrar na sua própria página HTML o conteúdo da outra página correspondente ao domínio alvo.

Esta encapsulação permite impedir os visitantes do seu site de visualizar o domínio alvo

> Esta opção devolverá um código HTTP 200.

> [!warning]
>
> Atenção, as páginas encapsuladas com um balizo *iFrame* podem não ser lidas nos smartphones. O seu conteúdo não é geralmente tomado em conta pelos motores de pesquisa para o referenciamento e indexação do seu site.
>

> [!success]
> Clique nos separadores abaixo para mostrar sucessivamente cada uma das 5 etapas.
>

> [!tabs]
> **Etapa 1**
>>
>> Na janela, o domínio a reencaminhar já aparece. Introduza o formulário **unicamente** se deseja reencaminhar um *subdomínio*.
>>
>> A casa `Reencaminhamento também`{.action} pode ser selecionada para reencaminhar o seu subdomínio para `www` para o mesmo destino que escolher para o seu domínio/subdomínio.
>>
>>![Etapa 1](images/Step1.png){.thumbnail}
>>
>> Clique em `Seguinte`{.action} para passar ao passo 2.
>>
> **Etapa 2**
>>
>> Selecione `Para um endereço Web`{.action}.
>>
>>![Etapa 2](images/Step2.png){.thumbnail}
>>
>> Clique em `Seguinte`{.action} para passar ao passo 3.
>>
> **Etapa 3**
>>
>> Selecione `Com um reencaminhamento invisível`{.action} entre as duas opções indicadas.
>>
>>![Etapa 3](images/Step3Invi.png){.thumbnail}
>>
>> Clique em `Seguinte`{.action} para passar ao passo 4.
>>
> **Etapa 4**
>>
>> Selecione `Temporário (iframe)`{.action} de entre as duas opções indicadas e introduza o domínio ou o URL alvo do seu reencaminhamento no formulário `Endereço web`{.action} que é apresentado.
>>
>>![Etapa 4](images/Step4Invi.png){.thumbnail}
>>
>> São disponibilizados três parâmetros opcionais nesta etapa:
>>
>> - **Título**: o do seu website. Aparecerá como título de página no separador dos browsers.<br>
>> - **Palavras-chave**: podem ser utilizados pelos motores de busca para referenciar parcialmente a página.<br>
>> - **Descrição**: diz respeito ao seu website. Será utilizada pelos motores de busca nos seus resultados.
>>
>> Clique em `Seguinte`{.action} para passar ao passo 5.
>>
> **Etapa 5**
>>
>> Neste último passo, certifique-se de que as informações apresentadas estão corretas.
>>
>>![Etapa 5](images/Step5Invi.png){.thumbnail}
>>
>> Clique em `Validar`{.action} para validar a sua configuração.
>> 
>> > [!primary]
>> >
>> > Se a mensagem "*Existem reencaminhamentos a partir dos domínios que deseja reencaminhar que entram em conflito com os reencaminhamentos que deseja adicionar*" aparece, pode selecionar a casa `Confirmar o esmagamento do reencaminhamento existente`{.action} para forçar a aplicação do seu reencaminhamento.
>> >
>> > Atenção, a configuração anterior será então desativada e eliminada.
>> >
>>

### Reencaminhar um nome de domínio através de um ficheiro ".htaccess" <a name="htaccess_rewrite"></a>

> [!warning]
>
> A OVHcloud disponibiliza serviços cuja configuração, gestão e responsabilidade lhe incumbem. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Esta secção do manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](https://partner.ovhcloud.com/pt/). Não lhe poderemos fornecer assistência nas etapas abaixo indicadas. Para mais informações, aceda à secção deste manual intitulada ["Quer saber mais?"](#go-further).
>

Os ficheiros ".htaccess" são ficheiros de configuração nos quais podem ser especificados comandos. Ao executar o código do seu website pelo servidor web (Apache), os comandos serão interpretados e assim executados.<br>
Entre estes comandos, é possível criar reencaminhamentos.

Manipular um ficheiro ".htaccess" pode tornar o seu site inacessível. Em caso de dúvida, contacte um [fornecedor especializado](https://partner.ovhcloud.com/pt/) .

Encontre o conjunto da nossa documentação no ".htaccess" na secção ["Quer saber mais?"](#go-further) deste manual.

> [!success]
>
> Aconselhamos que **realize um backup do seu ficheiro .htaccess** antes de efetuar alterações. Desta forma, poderá restabelecer a versão anterior do ficheiro em caso de manipulação incorreta.
>

Encontrará abaixo 4 variáveis para realizar reencaminhamentos através do ficheiro ".htaccess".

##### Variável 1 - "Redirect permanente"

Esta variável permite reencaminhar um site no seu conjunto, ou apenas parte de um site, para outro site ou para outra parte de um site. Os visitantes são automaticamente reencaminhados para o endereço/URL correto quando tentam aceder ao seu site através do endereço/URL histórico.

> [!tabs]
> Código a inserir no ".htaccess" 
>>
>> Para reencaminhar um site inteiro:
>>
>>```bash
>>Redirect permanent / http://domainTarget.tld/
>>```
>>
>> Para reencaminhar um diretório para outro:
>>
>>```bash
>>Redirect permanent /old_folder http://domain.tld/new_folder
>>```
>>
>> Para reencaminhar um ficheiro para outro:
>>
>>```bash
>>Redirect permanent /old_file.php http://domain.tld/new_file.php
>>```
>>
> Código HTTP
>>
>> O script devolverá um código HTTP 301. Isto avisará os robôs dos motores de busca de que precisa de atualizar as suas ligações para o novo endereço/URL.
>>

##### Variável 2 - "Redirect gone"

Esta variável é útil para os ficheiros eliminados. Substitui a mensagem *404 documento não encontrado* por uma mensagem mais explícita de tipo *410 o documento já não existe*. O visitante do seu site foi informado que o ficheiro que está a tentar chamar já não existe.

> [!tabs]
> Código a inserir no ".htaccess" 
>>
>>```bash
>>Redirect gone /fileDeleted.html
>>```
>>
> Código HTTP
>>
>> O script devolverá um código HTTP 410.
>>

##### Variável 3 - "Redirect seeother"

Se alterar a extensão de um ficheiro, a variável *seeother* permite-lhe modificar o tipo de ficheiro. O visitante que tentar aceder ao antigo ficheiro será automaticamente reencaminhado para o com a extensão correta.

> [!tabs]
> Código a inserir no ".htaccess" 
>>
>>```bash
>>Redirect seeother /example.doc http://domain.tld/example.pdf
>>```
>>
> Código HTTP
>>
>> O script devolverá um código HTTP 303.
>>

##### Variável 4 - "Redirect Temp"

Esta variável pode ser utilizada quando transfere temporariamente os ficheiros para outro site. Os visitantes que tentam aceder ao seu site através do endereço histórico/URL são automaticamente reencaminhados para o novo endereço/URL temporário.

> [!tabs]
> Código a inserir no ".htaccess" 
>>
>>```bash
>>Redirect temp / http://OtherWebsite.tld/site/
>>```
>>
> Código HTTP
>>
>> O script devolverá um código HTTP 302.
>>

## Quer saber mais? <a name="go-further"></a>

[Bloquear o acesso ao meu website para alguns endereços IP através de um ficheiro ".htaccess" ](https://docs.ovh.com/pt/hosting/partilhado_htacess_como_impedir_que_certos_ips_acedam_ao_meu_website/).

[Proteger a interface de administração do seu site através do ".htaccess" ](https://docs.ovh.com/pt/hosting/partilhado-htaccess-como-protecao-acesso-a-um-diretorio-por-autenticacao/).

[Reescrever as URLs graças ao "mod_rewrite"](https://docs.ovh.com/pt/hosting/partilhado_htaccess_rescrita_de_urls_gracas_ao_mod_write/).

[Como editar a minha zona DNS?](https://docs.ovh.com/pt/domains/alojamento_partilhado_como_editar_a_minha_zona_dns/)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
