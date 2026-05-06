---
title: "Reencaminhar um domínio gerido pela OVHcloud"
excerpt: "Descubra os diferentes tipos de reencaminhamento e como criar um para um domínio gerido pela OVHcloud"
updated: 2026-03-27
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objetivo

O reencaminhamento de um domínio consiste em reencaminhá-lo para um novo destino. Existem diferentes tipos de reencaminhamento, cada um respondendo a uma necessidade específica.

**Descubra as diferentes formas de reencaminhar o seu domínio**

## Requisitos

- Ter um [domínio](/links/web/domains)
- Estar ligado ao seu alojamento web (para um reencaminhamento através de um ficheiro [.htaccess](#htaccess_rewrite)).

<!-- CP-NAV-START:web-domains -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Nomes de domínio](/links/control-panel/web-domains)
- **Caminho de navegação:** `Web Cloud`{.action} > `Nomes de domínio`{.action} > Selecione o seu nome de domínio

---
<!-- CP-NAV-END:web-domains -->

## Instruções

### Compreender o reencaminhamento de um domínio

Esta funcionalidade permite reencaminhar um domínio/subdomínio para:

- outro domínio/subdomínio já existente:
    - **Exemplo**: `domain.tld`
- um URL (Uniform Resource Locator) de um website:
    - **Exemplos**: `http://www.domain.tld/welcome/` ou `https://www.domain.tld/welcome/` (se o domínio de destino dispuser de um certificado SSL compatível).

Estas ações podem ser realizadas de várias formas:

- **A partir da [Área de Cliente OVHcloud](/links/manager)**, onde um assistente de configuração permite configurar o reencaminhamento.
- **Através de um método que requer programação**. Terá de criar o reencaminhamento num ficheiro (geralmente um [.htaccess](#htaccess_rewrite)).

> [!warning]
>
> A implementação de um reencaminhamento pode ter consequências no referenciamento SEO do website.
> Tenha cuidado com as operações que vai realizar ou contacte um [prestador especializado](/links/partner) em referenciamento SEO, se necessário.
>
> Atenção: um reencaminhamento criado a partir da [Área de Cliente OVHcloud](/links/manager) não permite reencaminhar um URL em `https://` para outro domínio ou outro URL.
> Para criar este tipo de reencaminhamento, deverá utilizar obrigatoriamente [uma reescrita de URL](/pages/web_cloud/web_hosting/htaccess_url_rewriting_using_mod_rewrite) através de um ficheiro ".htaccess", por exemplo.
>

### Reencaminhar um domínio a partir da Área de Cliente

Para além dos reencaminhamentos de "apontamento" para os registos DNS A, AAAA e CNAME, estão disponíveis 3 opções de reencaminhamento a partir da [Área de Cliente OVHcloud](/links/manager).

Se necessário, consulte a nossa documentação sobre os [registos DNS](/pages/web_cloud/domains/dns_zone_records).

> [!warning]
>
> Para utilizar uma das 3 opções seguintes, a zona DNS ativa do domínio deve ser gerida na Área de Cliente OVHcloud. Estas opções de reencaminhamento vão modificar a configuração da zona DNS para funcionar.
>
> Caso contrário, os reencaminhamentos não funcionarão.

> [!primary]
>
> Independentemente da opção de reencaminhamento escolhida, a alteração necessita de um tempo de propagação de 4 a 24 horas no máximo para ser plenamente efetiva.

**Clique na opção pretendida para apresentar o conteúdo.**

/// details | Opção 1 - Reencaminhamento visível permanente para um endereço web

Esta opção permite, após a introdução do domínio reencaminhado, apresentar o domínio de destino na barra de endereços do navegador em vez do domínio reencaminhado.

- **Exemplo**: se reencaminhar `domain1.tld` para `domain2.tld`, é `domain2.tld` que será apresentado na barra de endereços do navegador.

![Gif1](/pages/assets/schemas/domains/visible-redirection.gif){.thumbnail}

> Este reencaminhamento "standard" devolve um código HTTP 301.

<!-- CP-STEPS-START:configure-redirect-permanent -->
Clique nos separadores abaixo para ver cada um dos **7** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Nomes de domínio](/links/control-panel/web-domains) e escolha o domínio correspondente.
>>
>> ![Nomes de domínio](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Passo 2**
>>
>> Clique no separador `Reencaminhamento`{.action}: a tabela apresenta os reencaminhamentos ativos para o seu domínio. De seguida, clique em `Adicionar um reencaminhamento`{.action}.
>>
>> ![Apresentação do menu reencaminhamento](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection.png){.thumbnail}
>>
> **Passo 3**
>>
>> Na janela, o domínio a reencaminhar já aparece. Preencha o formulário **apenas** se pretender reencaminhar um *subdomínio*.
>>
>> A caixa `Reencaminhar também`{.action} pode ser selecionada para reencaminhar também o subdomínio em `www` para o mesmo destino escolhido para o domínio/subdomínio.
>>
>> ![Passo 1](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-1.png){.thumbnail}
>>
>> Clique em `Seguinte`{.action}.
>>
> **Passo 4**
>>
>> Selecione `Para um endereço Web`{.action}.
>>
>> ![Passo 4](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-2-to-a-web-adress.png){.thumbnail}
>>
>> Clique em `Seguinte`{.action}.
>>
> **Passo 5**
>>
>> Selecione `Com um reencaminhamento visível`{.action} entre as duas opções indicadas.
>>
>> ![Passo 5](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-3-a-visible-redirection.png){.thumbnail}
>>
>> Clique em `Seguinte`{.action}.
>>
> **Passo 6**
>>
>> Selecione `Permanente (301)`{.action} entre as duas opções indicadas e introduza o domínio ou o URL de destino do reencaminhamento no campo `Endereço web`{.action} que aparece.
>>
>> ![Passo 6](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-4-permanent.png){.thumbnail}
>>
>> Clique em `Seguinte`{.action}.
>>
> **Passo 7**
>>
>> Neste último passo, certifique-se de que as informações apresentadas estão corretas.
>>
>> ![Passo 7](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-5-permanent.png){.thumbnail}
>>
>> Clique em `Confirmar`{.action} para validar a configuração.
>>
>> > [!primary]
>> >
>> > Se aparecer a mensagem "*Existem reencaminhamentos a partir dos nomes de domínio que pretende reencaminhar que entram em conflito com os reencaminhamentos que pretende adicionar*", pode selecionar a caixa `Confirmar a substituição do reencaminhamento existente`{.action} para forçar a aplicação do reencaminhamento.
>> >
>> > Atenção, a configuração anterior será desativada e eliminada.
>> >
>>
<!-- CP-STEPS-END:configure-redirect-permanent -->

///

/// details | Opção 2 - Reencaminhamento visível temporário para um endereço web

Tal como a opção 1, esta opção permite apresentar, após a introdução do domínio reencaminhado, o domínio de destino na barra de endereços do navegador em vez do domínio reencaminhado.

No entanto, esta opção deve ser utilizada de forma pontual, por exemplo para eventos temporários.

O posicionamento nos motores de busca é menos eficiente do que com um reencaminhamento **visível permanente** de tipo 301 (código HTTP).

- **Exemplo**: se reencaminhar `domain1.tld` para `domain2.tld`, é `domain2.tld` que será apresentado na barra de endereços do navegador.

![Gif1](/pages/assets/schemas/domains/visible-redirection.gif){.thumbnail}

> Este reencaminhamento devolve um código HTTP 302.

<!-- CP-STEPS-START:configure-redirect-temporary -->
Clique nos separadores abaixo para ver cada um dos **7** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Nomes de domínio](/links/control-panel/web-domains) e escolha o domínio correspondente.
>>
>> ![Nomes de domínio](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Passo 2**
>>
>> Clique no separador `Reencaminhamento`{.action}: a tabela apresenta os reencaminhamentos ativos para o seu domínio. De seguida, clique em `Adicionar um reencaminhamento`{.action}.
>>
>> ![Apresentação do menu reencaminhamento](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection.png){.thumbnail}
>>
> **Passo 3**
>>
>> Na janela, o domínio a reencaminhar já aparece. Preencha o formulário **apenas** se pretender reencaminhar um *subdomínio*.
>>
>> A caixa `Reencaminhar também`{.action} pode ser selecionada para reencaminhar também o subdomínio em `www` para o mesmo destino escolhido para o domínio/subdomínio.
>>
>> ![Passo 3](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-1.png){.thumbnail}
>>
>> Clique em `Seguinte`{.action}.
>>
> **Passo 4**
>>
>> Selecione `Para um endereço Web`{.action}.
>>
>> ![Passo 4](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-2-to-a-web-adress.png){.thumbnail}
>>
>> Clique em `Seguinte`{.action}.
>>
> **Passo 5**
>>
>> Selecione `Com um reencaminhamento visível`{.action} entre as duas opções indicadas.
>>
>> ![Passo 5](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-3-a-visible-redirection.png){.thumbnail}
>>
>> Clique em `Seguinte`{.action}.
>>
> **Passo 6**
>>
>> Selecione `Temporário (302)`{.action} entre as duas opções indicadas e introduza o domínio ou o URL de destino do reencaminhamento no campo `Endereço web`{.action} que aparece.
>>
>> ![Passo 6](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-4-temporary.png){.thumbnail}
>>
>> Clique em `Seguinte`{.action}.
>>
> **Passo 7**
>>
>> Neste último passo, certifique-se de que as informações apresentadas estão corretas.
>>
>> ![Passo 7](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-5-temporary.png){.thumbnail}
>>
>> Clique em `Confirmar`{.action} para validar a configuração.
>>
>> > [!primary]
>> >
>> > Se aparecer a mensagem "*Existem reencaminhamentos a partir dos nomes de domínio que pretende reencaminhar que entram em conflito com os reencaminhamentos que pretende adicionar*", pode selecionar a caixa `Confirmar a substituição do reencaminhamento existente`{.action} para forçar a aplicação do reencaminhamento.
>> >
>> > Atenção, a configuração anterior será desativada e eliminada.
<!-- CP-STEPS-END:configure-redirect-temporary -->

///

/// details | Opção 3 - Reencaminhamento invisível para um endereço web

Este reencaminhamento permite, após a introdução do domínio reencaminhado, deixá-lo na barra de endereços do navegador em vez de o substituir pelo domínio de destino.

**Atenção, esta ação não é compatível com todos os websites e afeta o referenciamento SEO do website.**

- **Exemplo**: se reencaminhar `domain1.tld` para `domain2.tld`, é `domain1.tld` que será apresentado na barra de endereços do navegador.

![Gif2](/pages/assets/schemas/domains/invisible-redirection.gif){.thumbnail}

O reencaminhamento invisível funciona com uma tag HTML *iFrame*. Esta permite que o domínio reencaminhado integre na sua própria página HTML o conteúdo da outra página correspondente ao domínio de destino.

Este encapsulamento impede os visitantes do website de visualizar o domínio de destino.

> Esta opção devolve um código HTTP 200.

> [!warning]
>
> Atenção, as páginas encapsuladas com uma tag *iFrame* podem não ser apresentadas nos smartphones. O seu conteúdo geralmente não é tido em conta pelos motores de busca para o referenciamento SEO e a indexação do website.

<!-- CP-STEPS-START:configure-redirect-invisible -->
Clique nos separadores abaixo para ver cada um dos **7** passos.

> [!tabs]
> **Passo 1**
>>
>> Aceda à página [Nomes de domínio](/links/control-panel/web-domains) e escolha o domínio correspondente.
>>
>> ![Nomes de domínio](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Passo 2**
>>
>> Clique no separador `Reencaminhamento`{.action}: a tabela apresenta os reencaminhamentos ativos para o seu domínio. De seguida, clique em `Adicionar um reencaminhamento`{.action}.
>>
>> ![Apresentação do menu reencaminhamento](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection.png){.thumbnail}
>>
> **Passo 3**
>>
>> Na janela, o domínio a reencaminhar já aparece. Preencha o formulário **apenas** se pretender reencaminhar um *subdomínio*.
>>
>> A caixa `Reencaminhar também`{.action} pode ser selecionada para reencaminhar também o subdomínio em `www` para o mesmo destino escolhido para o domínio/subdomínio.
>>
>> ![Passo 3](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-1.png){.thumbnail}
>>
>> Clique em `Seguinte`{.action}.
>>
> **Passo 4**
>>
>> Selecione `Para um endereço Web`{.action}.
>>
>> ![Passo 4](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-2-to-a-web-adress.png){.thumbnail}
>>
>> Clique em `Seguinte`{.action}.
>>
> **Passo 5**
>>
>> Selecione `Com um reencaminhamento invisível`{.action} entre as duas opções indicadas.
>>
>> ![Passo 5](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-3-with-an-invisible-redirection.png){.thumbnail}
>>
>> Clique em `Seguinte`{.action}.
>>
> **Passo 6**
>>
>> Selecione `Temporário (iframe)`{.action} entre as duas opções indicadas e introduza o domínio ou o URL de destino do reencaminhamento no campo `Endereço web`{.action} que aparece.
>>
>> ![Passo 6](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-4-iframe.png){.thumbnail}
>>
>> Três parâmetros opcionais estão disponíveis neste passo:
>>
>> - **Título**: o título do website. Será apresentado como título da página no separador do navegador.
>> - **Palavras-chave**: podem ser utilizadas pelos motores de busca para referenciar parcialmente a página.
>> - **Descrição**: relativa ao website. Será utilizada pelos motores de busca nos seus resultados.
>>
>> Clique em `Seguinte`{.action}.
>>
> **Passo 7**
>>
>> Neste último passo, certifique-se de que as informações apresentadas estão corretas.
>>
>> ![Passo 7](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-5-iframe.png){.thumbnail}
>>
>> Clique em `Confirmar`{.action} para validar a configuração.
>>
>> > [!primary]
>> >
>> > Se aparecer a mensagem "*Existem reencaminhamentos a partir dos nomes de domínio que pretende reencaminhar que entram em conflito com os reencaminhamentos que pretende adicionar*", pode selecionar a caixa `Confirmar a substituição do reencaminhamento existente`{.action} para forçar a aplicação do reencaminhamento.
>> >
>> > Atenção, a configuração anterior será desativada e eliminada.
<!-- CP-STEPS-END:configure-redirect-invisible -->

### Reencaminhar um domínio através de um ficheiro ".htaccess" <a name="htaccess_rewrite"></a>

> [!warning]
>
> A OVHcloud disponibiliza serviços cuja configuração, gestão e responsabilidade são da sua responsabilidade. Cabe-lhe a si assegurar o seu bom funcionamento.
>
> Disponibilizamos esta parte do guia para o acompanhar nas tarefas mais habituais. No entanto, recomendamos que contacte um [prestador especializado](/links/partner) se encontrar dificuldades. Não poderemos prestar-lhe assistência nos passos documentados abaixo. Encontre mais informações na secção "[Quer saber mais?](#go-further)" deste guia.
>

Os ficheiros ".htaccess" são ficheiros de configuração nos quais podem ser especificados comandos. Quando o código do website é executado pelo servidor web (Apache), os comandos são interpretados e executados.

Entre estes comandos, é possível criar reencaminhamentos.

Manipular um ficheiro ".htaccess" pode tornar o website inacessível. Em caso de dúvida, contacte um [prestador especializado](/links/partner).

Encontre toda a documentação sobre o ".htaccess" na secção "[Quer saber mais?](#go-further)" deste guia.

> [!success]
>
> Recomendamos que **faça uma cópia de segurança do ficheiro .htaccess** antes de efetuar alterações. Assim, poderá restabelecer a versão anterior do ficheiro em caso de erro.
>

Encontrará abaixo 4 variáveis para realizar reencaminhamentos através do ficheiro ".htaccess".

#### Variável 1 - "Redirect permanent"

Esta variável permite reencaminhar um website na sua totalidade, ou apenas uma parte, para outro website ou outra parte de um website. Os visitantes são automaticamente reencaminhados para o endereço/URL correto quando tentam aceder ao website através do endereço/URL anterior.

> [!tabs]
> Código a colocar no ".htaccess"
>>
>> Para reencaminhar um website inteiro:
>>
>>```bash
>>Redirect permanent / http://domainTarget.tld/
>>```
>>
>> Para reencaminhar um diretório para outro:
>>
>> ```bash
>>Redirect permanent /old_folder http://domain.tld/new_folder
>>```
>>
>> Para reencaminhar um ficheiro para outro:
>>
>> ```bash
>>Redirect permanent /old_file.php http://domain.tld/new_file.php
>>```
>>
> Código HTTP
>>
>> O script devolve um código HTTP 301. Isto informa os robots dos motores de busca que devem atualizar os seus links para o novo endereço/URL.
>>

#### Variável 2 - "Redirect gone"

Esta variável é útil para ficheiros eliminados. Substitui a mensagem *404 documento não encontrado* por uma mensagem mais explícita do tipo *410 o documento já não existe*. O visitante do website é informado de que o ficheiro a que tenta aceder já não existe.

> [!tabs]
> Código a colocar no ".htaccess"
>>
>>```bash
>>Redirect gone /fileDeleted.html
>>```
>>
> Código HTTP
>>
>> O script devolve um código HTTP 410.
>>

#### Variável 3 - "Redirect seeother"

Se alterar a extensão de um ficheiro, a variável *seeother* permite modificar o tipo. O visitante que tenta aceder ao ficheiro anterior é automaticamente reencaminhado para o que tem a extensão correta.

> [!tabs]
> Código a colocar no ".htaccess"
>>
>>```bash
>>Redirect seeother /example.doc http://domain.tld/example.pdf
>>```
>>
> Código HTTP
>>
>> O script devolve um código HTTP 303.
>>

#### Variável 4 - "Redirect Temp"

Esta variável pode ser utilizada quando desloca temporariamente ficheiros para outro website. Os visitantes que tentam aceder ao website através do endereço/URL anterior são automaticamente reencaminhados para o novo endereço/URL temporário.

> [!tabs]
> Código a colocar no ".htaccess"
>>
>>```bash
>>Redirect temp / http://OtherWebsite.tld/site/
>>```
>>
> Código HTTP
>>
>> O script devolve um código HTTP 302.

///

## Quer saber mais? <a name="go-further"></a>

[Bloquear o acesso ao website para determinados endereços IP através de um ficheiro ".htaccess"](/pages/web_cloud/web_hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website).

[Proteger a interface de administração do website através do ".htaccess"](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password).

[Reescrever os URLs graças ao "mod_rewrite"](/pages/web_cloud/web_hosting/htaccess_url_rewriting_using_mod_rewrite).

[Realizar outras operações com o ficheiro ".htaccess"](/pages/web_cloud/web_hosting/htaccess_what_else_can_you_do).

[Como editar a minha zona DNS?](/pages/web_cloud/domains/dns_zone_records)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com a nossa [comunidade de utilizadores](/links/community).
