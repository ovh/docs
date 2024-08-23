---
title: "Alojamento web - Passar o seu website em HTTPS"
excerpt: "Saiba como passar o seu website em HTTPS após ter ativado um certificado SSL"
updated: 2024-02-26
---

## Objetivo

Graças ao seu alojamento web da OVHcloud, pode beneficiar de um [certificado SSL](/links/web/hosting-options-ssl). Este último permite dispor de uma ligação segura a um ou vários dos seus websites, estando, por conseguinte, acessíveis através de *HTTPS*. Para isso, são necessárias várias etapas para que os seus sites possam utilizar esta ligação segura.

**Saiba como passar o seu website para HTTPS após ter ativado um certificado SSL.**

## Requisitos

- Dispor de um [certificado SSL](/links/web/hosting-options-ssl){.external} instalado no seu [alojamento web OVHcloud](/links/web/hosting){.external}.
- Ter pelo menos um website instalado e acessível no alojamento web da OVHcloud.
- Ter acesso à [Área de Cliente OVHcloud](/links/manager){.external}, parte `Web Cloud`{.action}.

## Instruções

A segurança assume um lugar cada vez mais importante na Internet. Muitos dedicam uma atenção especial à confidencialidade dos seus dados e à forma como estes transitam na web. De forma geral, os internautas confiam mais em websites que permitam uma partilha segura, especialmente quando os dados comunicados são sensíveis. 

Quando visita um Web site com uma ligação segura, o browser da Internet informa-o na sua barra de endereço (URL) através de vários meios, tais como: 

- um logótipo (geralmente um cadeado);
- uma mensagem;
- um código de cores; 
- o protocolo utilizado, *HTTPS* em vez de *HTTP*.

O facto de o seu website possuir ou não uma ligação segura torna-se cada vez mais visível.

![httpswebsite](/pages/assets/screens/other/browsers/urls/url-not-secure.png){.thumbnail}

**Tornar o website em *HTTPS* pode ser uma operação sensível**. De facto, a maior parte das ações a realizar serão efetuadas no código fonte do seu website. Se não forem efetuadas corretamente, poderá verificar uma diminuição do referenciamento (SEO) nos resultados propostos pelos motores de pesquisa (Google, Yahoo!, bing, etc.), ou mesmo uma inacessibilidade total do seu website.

> [!warning]
>
> A OVHcloud oferece-lhe serviços cuja configuração, gestão e responsabilidade é da sua responsabilidade. Assim, deverá assegurar o seu bom funcionamento.
> 
> Este guia fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](/links/partner). Não poderemos proporcionar-lhe assistência técnica. Para mais informações, consulte a secção ["Quer saber mais?"](#go-further) deste guia.
>

Encontre aqui as principais etapas descritas no resto deste guia para passar o seu website em *HTTPS*:

- [Etapa 1 - Ativar o certificado SSL no alojamento web](#enable-ssl): permite ativar ou verificar se o certificado SSL está corretamente instalado no alojamento web/web site em causa.
- [Etapa 2 - Verificar o ambiente técnico do seu website](#check-environment): permite verificar que a passagem do seu website em *HTTPS* não provocará avarias antes de efetuar qualquer alteração.
- [Passo 3 - Ativar o *HTTPS* no website](#https-enable): permite que o seu website utilize o protocolo *HTTPS*. O método exposto neste guia não é universal e dependerá do website utilizado.
- [Etapa 4 - Verificar o bom funcionamento do website](#check-your-website): permite verificar que o website funciona corretamente após a ativação do *HTTPS*.

### Etapa 1 - Ativar o certificado SSL no alojamento web <a name="enable-ssl"></a>

Para ativar um certificado SSL no alojamento web ou verificar se já está instalado um certificado SSL no site, consulte o guia: "[Gerir um certificado SSL no alojamento web](/pages/web_cloud/web_hosting/ssl_on_webhosting)".

### Etapa 2 - Verifique o ambiente técnico do seu website <a name="check-environment"></a>

Antes de efetuar qualquer alteração na configuração do website, certifique-se de que este está pronto para utilizar corretamente o protocolo *HTTPS*. Não existe um procedimento universal, uma vez que depende do próprio website.

As informações em baixo são, por isso, genéricas. Recomendamos que, em caso de dificuldades, recorra a um [fornecedor especializado](https://partner.ovhcloud.com/pt/diretory/).

#### 2.1 - Evite misturar conteúdos HTTP e HTTPS

Quando o website é apresentado em *HTTPS*, deve evitar misturar conteúdos *HTTP* e *HTTPS* numa mesma página e no conjunto do website. Assim, se o seu website deve aparecer em *HTTPS*, certifique-se de que a integralidade do seu conteúdo se carrega em *HTTPS*.

Se não for o caso, irá propor no seu website conteúdos considerados como mistos (*Mixed Content*) pelos browsers, ou seja, conteúdos considerados potencialmente não seguros numa página declarada segura.

Podem ser encontrados dois casos *Mixed Content*:

- **O website apresenta-se corretamente, mas a barra de endereço** contém uma advertência. O conteúdo considerado passivo (imagens, vídeos, etc.) pelo seu navegador é carregado na sua página a partir de uma fonte não segura.

- **Algumas partes do website não são apresentadas e aparece um aviso na barra de endereço**. Foi bloqueado conteúdo considerado ativo pelo seu browser (scripts, iframe, ficheiros CSS, etc.) e proveniente de uma fonte não segura.

Certifique-se de que todos os conteúdos carregados a partir do seu website provêm de uma fonte segura.

![httpswebsite](/pages/assets/screens/other/browsers/urls/connection-isnt-secure.png){.thumbnail}

Note que, mesmo que o seu alojamento disponha de um certificado SSL, o conteúdo alojado neste último pode ser carregado em *HTTP* ou em *HTTPS*. Isto depende da forma como identificou estes conteúdos no código do seu website. Verifique que todo o conteúdo carregado pelo seu website utiliza o protocolo *HTTPS*.

Por exemplo, tenha uma atenção especial aos endereços que utiliza no código do seu website. Se possível:

- dê preferência à utilização de endereços relativos, como: `../img/header.png`;
- evite os endereços absolutos que incluem o protocolo *HTTP*, como: `http://domain.tld/img/header.png`.

Se necessário, adapte o código do seu website em conformidade. 

Se utilizar um "site chave-na-mão" (WordPress, PrestaShop, Drupal, Joomla!), a estrutura destes sites já foi concebida para passar a *HTTPS*. Você não deve ter que fazer qualquer alteração no código do seu site.

#### 2.2 - Evite gerar conteúdos duplicados

Em função da forma como o website está codificado, certifique-se de que este não será acessível através de diferentes endereços, por exemplo, utilizando o primeiro *HTTP* e o segundo *HTTPS*. Se isso acontecer, o mesmo conteúdo ficará acessível a partir de vários endereços diferentes, o que os motores de busca consideram como conteúdo duplicado ( *duplicate content*).

Este fenómeno pode diminuir o nível de referenciamento (SEO) do seu website. Verifique que o seu código "força" a utilização do *HTTPS*, através de uma regra de re-escritura a colocar no código do seu website quando pretender ativar o *HTTPS*.

Repare que, se utilizar um "site chave-na-mão", a sua estrutura irá gerir automaticamente as regras de re-escritura. Por isso, não deverá ter de efetuar qualquer alteração no código do seu website.

### Etapa 3 - Ativar o HTTPS no website <a name="https-enable"></a>

Se o seu alojamento web dispuser de um certificado SSL ativo, o [multisite](/pages/web_cloud/web_hosting/multisites_configure_multisite) beneficiar de uma ligação SSL ativa e o seu website estiver pronto para utilizar *HTTPS*, pode ativá-lo.

> [!warning]
>
> Antes de começar, recomendamos que guarde um backup completo do website. Esta cópia de segurança deve conter não só os ficheiros presentes no [espaço de armazenamento FTP](/pages/web_cloud/web_hosting/ftp_save_and_backup), mas também os ficheiros de [base de dados](/pages/web_cloud/web_hosting/sql_database_export) se o website utilizar uma.
>
> A partir desta etapa, as ações devem ser realizadas diretamente a partir dos ficheiros que compõem o seu website. Não hesite em contactar um [fornecedor especializado](/links/partner) se encontrar dificuldades.
>

Existem várias formas de ativar o *HTTPS* no seu website. Para esta operação, é necessário realizar operações na configuração do website que utiliza. As informações apresentadas a seguir podem ajudá-lo neste processo de ativação, mas também podem revelar-se incompletas ou desadequadas à sua situação em termos de utilização.

- **Utiliza um "site chave na mão" (WordPress, PrestaShop, Drupal, Joomla!, etc.)** :

A ativação do *HTTPS* pode ser feita a partir da interface de gestão do website. O nome e a manipulação para ativar o *HTTPS* variam em função do "site chave-na-mão" que utiliza. 

Por exemplo, pode ter um parâmetro intitulado "Forcer *HTTPS*" a ativar ou dever modificar o link completo do seu website para adicionar um `s`: "**http**://domain.tld" tornar-se-á então "**https**://domain.tld".

Se necessita de ajuda para realizar esta operação a partir da interface de gestão do seu "CMS", consulte a documentação oficial do editor do seu website. 

- **Utiliza um website codificado por si (ou por um prestador de serviços)**: 

A ativação do *HTTPS* deve com certeza ser efetuada diretamente no código do seu website. Se tiver os conhecimentos necessários, modifique o código do site de forma a adaptá-lo à utilização do *HTTPS*. Contacte o programador do seu website se tiver dúvidas quanto às instruções a seguir. 

Se necessário, encontrará a seguir alguns exemplos de scripts que devem ser inseridos num ficheiro **.htaccess**. No entanto, estes não substituem a ajuda de um webmaster. Substitua o domínio `domain.tld` presente no primeiro script pelo seu próprio domínio e adapte-o se necessário.

```bash
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://domain.tld/$1 [R,L]
```

Este primeiro exemplo de script tem o efeito de reencaminhar todos os URL recebidos via a porta 80 em *HTTP* para o URL seguro em *HTTPS* `https://domain.tld/`.

```bash
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

Este segundo exemplo de script tem o efeito de transformar todos os URL recebidos via o protocolo *HTTP* em *HTTPS*, conservando intacto o resto do URL situado depois dos `://`.

Para este segundo exemplo, verifique se todos os seus nomes de domínio ou subdomínios alvo têm um certificado SSL ativo.

**Atenção**, para as ofertas de alojamento [Cloud Web](/links/web/hosting-cloud-web-offer), o script a utilizar é o seguinte:

```bash
RewriteEngine On
RewriteCond %{ENV:HTTPS} !on
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
```

### Etapa 4 - Verifique o bom funcionamento do seu website <a name="check-your-website"></a>

Uma vez o *HTTPS* ativado no seu website, verifique que este está a funcionar corretamente e que todo o seu conteúdo se apresenta como antes da manipulação. Para isso, aceda ao website, verifique se não há nenhuma mensagem de aviso e examine as diferentes secções verificando que não há problemas de visualização. 

Se encontrar algum problema, tente resolvê-lo o mais rapidamente possível ou faça a máquina traseira desativando o *HTTPS*. Em caso de verdadeira necessidade, dispõe igualmente da cópia de segurança completa do seu website realizada no [etapa 3](#https-enable).

Se o website se apresentar corretamente e não aparecer nenhum aviso após a ativação do *HTTPS*, a operação foi corretamente executada. Se deseja ativar o *HTTPS* noutro website, repita todas as operações descritas neste manual.

## Quer saber mais? <a name="go-further"></a>

[Gerir um certificado SSL num alojamento web](/pages/web_cloud/web_hosting/ssl_on_webhosting)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).