---
title: "Tutorial - Reescrever o URL de acesso ao meu site graças ao mod_rewrite através do ficheiro .htaccess"
excerpt: "Descubra como reescrever o URL de acesso ao seu site graças ao mod_rewrite através do ficheiro .htaccess"
slug: partilhado_htaccess_rescrita_de_urls_gracas_ao_mod_write
section: Reescrita e autenticação
order: 03
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 22/12/2022** 
  
## Objetivo

O "**mod_rewrite**" é um dos módulos disponíveis no servidor Web HTTP **Apache**. **Apache** é instalado em toda a nossa infraestrutura de alojamento partilhado. Este servidor web permite gerir o conjunto dos pedidos HTTP enviados para o seu alojamento web.

Por exemplo, é o Apache que recupera os pedidos HTTP gerados pelos browsers dos visitantes do seu site e que lhes devolve o conteúdo pedido pelos mesmos pedidos. De seguida, os browsers apresentam o conteúdo do seu website ao visitante.

O "**mod_rewrite**" permite, por exemplo, reescrever e reencaminhar:

- um visitante que introduz o seu URL em "HTTP" diretamente para o URL do seu website em "HTTPS";
- o conjunto dos URLs utilizados para o seu website para uma pasta ou um ficheiro específico;
- um visitante que introduz o seu URL sem "www" diretamente para o URL do seu website com os "www".

O "**mod_rewrite**" oferece uma infinidade de possibilidades. Apresentamos a seguir alguns exemplos de utilização mais comuns.

> [!success]
>
> Se pretender aprofundar os seus conhecimentos sobre a utilização do "**mod_rewrite**" do Apache ou se o exemplo que procura não está presente no tutorial que se seguirá, consulte a [documentação oficial do Apache](https://httpd.apache.org/docs/2.4/en/mod/mod_rewrite.html).
>

**Descubra como reescrever o URL de acesso ao seu site graças ao mod_rewrite através do ficheiro .htaccess**
  
## Requisitos

- Dispor de um [alojamento partilhado OVHcloud](https://www.ovhcloud.com/pt/web-hosting/)
  
## Instruções

> [!warning]
>
> A OVHcloud disponibiliza serviços cuja configuração, gestão e responsabilidade lhe incumbem. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](https://partner.ovhcloud.com/pt/). Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção [Quer saber mais?](#go-further) deste manual.
>
> Os exemplos que se seguem são colocados num ficheiro ".htaccess". Atenção, as regras que define neste ficheiro têm consequências diretas no seu website. Verifique sempre as regras que adicionou antes de as aplicar ao seu website.
>

O ficheiro ".htaccess" no qual vai configurar o "**mod_rewrite**" do Apache pode ser colocado em várias pastas diferentes. Deve apenas respeitar a regra de **um** ficheiro ".htaccess" por pasta ou sub-pasta.

Os parâmetros definidos num ficheiro ".htaccess" aplicam-se ao diretório onde está presente, bem como a todos os seus sub-diretórios.

Para editar (ou criar) diretórios, aceda ao espaço FTP do seu alojamento. Caso seja necessário, consulte o guia "[Aceder ao meu espaço de armazenamento](https://docs.ovh.com/pt/hosting/aceder-espaco-de-armazenamento-ftp-alojamento-web/)".

Encontre aqui alguns exemplos entre os mais comuns de utilização do "**mod_rewrite**" do Apache. Alguns deles também podem favorecer o referenciamento SEO do seu website.

### Reencaminhar todos os pedidos HTTP para um único ficheiro do seu site

Editar o ficheiro ".htaccess" presente na raiz do diretório que contém o seu website. Introduza o seguinte código no seu interior (substituindo no nosso exemplo **test.php** pelo nome do seu próprio ficheiro):

```bash
RewriteEngine On
RewriteRule .* test.php
```

No nosso exemplo, todos os pedidos efetuados para o seu website são reencaminhados para o ficheiro **test.php** .

### Reencaminhar uma parte dos pedidos HTTP para um único ficheiro do seu website

Editar o ficheiro ".htaccess" presente na raiz do diretório que contém o seu website. Introduza o seguinte código no seu interior (substituindo no nosso exemplo os valores **thetest** e **/test_wslash/test.php** pelos nomes dos seus próprios ficheiros):

```bash
RewriteEngine On
RewriteRule thetest /test_wslash/test.php
```

No nosso exemplo, todos os pedidos HTTP que contenham **/thetest** são reencaminhados para o ficheiro **/test_wslash/test.php**.

### Reencaminhar o seu domínio para o seu subdomínio em "www"

Esta regra de re-escritura força o endereço/URL do seu website a ser reescrito com o seu subdomínio em "www".

Editar o ficheiro ".htaccess" presente na raiz do diretório que contém o seu website. Introduza o seguinte código no seu interior (substituindo no nosso exemplo **domain.tld** pelo seu próprio domínio):

```bash
RewriteEngine on
RewriteCond %{HTTP_HOST} ^domain.tld$
RewriteRule ^(.*) http://www.domain.tld/$1 [QSA,L,R=301]
```

Esta re-escritura de URL pode favorecer o referenciamento SEO do seu website.

### Reencaminhar os pedidos para um dossier em particular sem apresentar o dossier em questão

Quando utiliza um alojamento partilhado OVHcloud, o seu nome de domínio (por exemplo **domain.tld**) é declarado em `Multisites` para apresentar o conteúdo de uma pasta alvo que também se chama `Pasta raiz`. Pode personalizar o nome deste `Pasta raiz`.

Para mais informações, consulte o nosso manual sobre a [configuração de um multi-site num alojamento partilhado](https://docs.ovh.com/pt/hosting/multisites-configurar-um-multisite-no-meu-alojamento-web/).

Alguns utilizadores não colocam os seus websites diretamente na base do `Pasta raiz`. Eles criam uma sub-pasta (por exemplo: **MyWebsite**) no seu `Pasta raiz` para colocar o seu website.

Neste caso, o URL para aceder ao site terá a seguinte forma: **http://domain.tld/MyWebsite**

Se o seu website não está presente diretamente no `Pasta raiz` que foi declarado em multi-sites para o seu domínio e não deseja apresentar o nome da pasta no URL do seu website, edite o ficheiro ".htaccess" presente na raiz do diretório que contém o seu website. 

Introduza o seguinte código no seu interior (substituindo no nosso exemplo os valores **domain.tld** pelo seu nome de domínio e **MyWebsite** pelo nome da sua própria pasta):

```bash
RewriteEngine on
RewriteCond %{HTTP_HOST} ^domain.tld
RewriteCond %{REQUEST_URI} !^/MyWebsite
RewriteRule ^(.*)$ /MyWebsite/
```

No nosso exemplo, isto obriga o endereço do seu site a ser do tipo **http://domain.tld**, ao passo que a página chamada é **http://domain.tld/MyWebsite**.

### Reencaminhar automaticamente um visitante para o seu website em HTTPS quando o consulta com um URL em HTTP

Os certificados SSL permitem encriptar as trocas efetuadas em HTTP com o seu website. Isto impede que pessoas ou robôs maliciosos recolham os dados trocados entre o site e o visitante, como por exemplo dados bancários.

Se não dispõe de um certificado SSL, consulte o nosso guia sobre a [gestão de um certificado SSL num alojamento partilhado OVHcloud](https://docs.ovh.com/pt/hosting/os-certificados-ssl-nos-alojamentos-web/).

Alguns dos seus visitantes podem esquecer-se de introduzir o URL de acesso ao seu site em **https://** : isto representa um risco não negligenciável para os dados trocados entre o seu website e os seus browsers.

Para evitar isso, edite o ficheiro ".htaccess" presente na raiz do diretório que contém o seu website. Introduza o seguinte código no seu interior (substituindo no nosso exemplo **domain.tld** pelo seu próprio domínio):

```bash
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.domain.tld/$1 [R,L]
```

No nosso exemplo, todos os pedidos efetuados com um URL em "**http://**" serão automaticamente reescritos em "**https://**". Assim, os visitantes serão reencaminhados para o seu site em "**https://**".
  
## Quer saber mais? <a name="go-further"></a>

[Bloquear o acesso ao meu website para determinados endereços IP através de um ficheiro .htaccess](https://docs.ovh.com/pt/hosting/partilhado_htacess_como_impedir_que_certos_ips_acedam_ao_meu_website/)

[Proteger a interface de administração do seu site por um ficheiro .htaccess](https://docs.ovh.com/pt/hosting/partilhado-htaccess-como-protecao-acesso-a-um-diretorio-por-autenticacao/)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>. 