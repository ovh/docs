---
title: "Tutorial - Utilizar o ficheiro htaccess com WordPress"
excerpt: "Descubra como proteger o seu blogue WordPress com um ou vários ficheiros htaccess"
updated: 2023-03-08
---

**Última atualização: 08/03/2023**

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Este tutorial explica-lhe como configurar certas funcionalidades do seu alojamento web com um ou vários ficheiros **.htaccess**, nomeadamente para modificar os parâmetros de uma parte ou do conjunto do seu website (reencaminhamentos, proibições de acesso, autorizações restritas, controlo da cache, etc.).

> [!warning]
>
> A OVHcloud disponibiliza serviços cuja configuração, gestão e responsabilidade lhe incumbem. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Colocamos à sua disposição este tutorial para o acompanhar o melhor possível em tarefas comuns. No entanto, se precisar de ajuda, recomendamos que recorra a um [fornecedor especializado](https://partner.ovhcloud.com/pt/directory/) ou [editor do CMS WordPress](https://wordpress.com/support/){.external}. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção [Quer saber mais?](#go-further) deste tutorial.
>

**Descubra como proteger o seu WordPress com um ou vários ficheiros htaccess.**

## Requisitos

- Ter um [alojamento web](https://www.ovhcloud.com/pt/web-hosting/) e ter instalado o WordPress.
- Ter capacidade para utilizar um cliente FTP como [FileZilla](https://filezilla-project.org/). Pode consultar o nosso guia "[Utilizar o FileZilla](/pages/web/hosting/ftp_filezilla_user_guide)".

Os ficheiros **.htaccess** podem ser criados e modificados com editores de texto como:

- [Bloco de notas](https://support.microsoft.com/pt-pt/windows/ajuda-no-bloco-de-notas-4d68c388-2ff2-0e7f-b706-35fb2ab88a8c){.external} do Windows;
- [Text Edit](https://support.apple.com/pt-pt/guide/textedit/welcome/mac){.external} em macOS; 
- [Notepad+](https://notepad-plus-plus.org/){.external}.

## FAQ

### O que é um ficheiro **.htaccess**?

Um ficheiro **.htaccess** permite configurar um servidor web. No caso de um alojamento web partilhado, trata-se do servidor web open source "**Apache**". A sintaxe deste ficheiro é definida pelo organismo que edita e mantém **Apache**. Contrariamente à maioria dos ficheiros de configuração de um servidor, os ficheiros **.htaccess** estão localizados nos diretórios dos websites, mais precisamente no espaço de armazenamento FTP do seu alojamento web. Um ficheiro **.htaccess** terá efeitos no diretório no qual está presente, bem como em todos os sub-diretórios presentes no interior.

As nossas ofertas de alojamento partilhado não permitem os ficheiros de configuração do servidor. No entanto, os ficheiros **.htaccess** dão a possibilidade de modificar certas características e comportamentos. Além disso, não é necessário reiniciar o servidor **Apache** para que as indicações e modificações escritas no ficheiro **.htaccess** sejam tomadas em conta. O conjunto das nossas ofertas de [alojamento web partilhado OVHcloud](https://www.ovhcloud.com/pt/web-hosting/) permitem configurar ficheiros **.htaccess**.

O ponto em frente ao nome do ficheiro **.htaccess** (que não tem extensão por si) designa um ficheiro escondido. Além disso, estes ficheiros não são acessíveis aos utilizadores externos que acedem ao seu website.

### O que é um servidor web?

Um servidor web é um software que permite o intercâmbio de informações numa rede ao utilizar o protocolo *HTTP*.<br>
Existem vários, dos quais *Apache*, *Nginx*, *Tomcat* ou ainda o módulo http incluído na *NodeJS*.

### Quais as precauções a tomar?

Uma má configuração do seu ficheiro **.htaccess** pode gerar erros no seu servidor (como um erro 500: *Internal Server Error*), ou tornar o seu serviço totalmente indisponível, mesmo para si. Tenha o hábito de fazer backups sistemáticos das versões dos seus ficheiros funcionais, de forma a que possa voltar a um estado anterior em caso de anomalia após uma modificação.

Da mesma forma, se não estiver habituado a manipular este tipo de ficheiro, faça um ensaio a cada elemento que altera. Desta forma, evitará perder tempo para encontrar a linha ou linhas que estão na origem do mau funcionamento do seu servidor web. Um erro de configuração ou uma simples falha de digitação podem comprometer a configuração do seu servidor web e, portanto, o seu funcionamento.

### Quais as ferramentas a utilizar?

- um cliente FTP para recuperar os seus ficheiros (FileZilla, Cyberduck);
- um editor de texto.

### Onde estão os ficheiros.htaccess no WordPress?

Tal como indicado na introdução, é possível ter vários ficheiros **.htaccess** no mesmo alojamento web. Cada um destes ficheiros define as regras para o diretório onde se situa, bem como os sub-diretórios que contém.

A maioria das alterações será efetuada ao nível da **raiz do website**. Instalado por predefinição, o ficheiro **.htaccess** colocado na raiz do site contém as seguintes linhas:

```bash
# BEGIN WordPress
# As diretivas (linhas) entre "BEGIN WordPress" e "END WordPress" são geradas
# de forma dinâmica, e devem ser modificados apenas através dos filtros WordPress.
# Qualquer modificação das diretivas situadas entre estes marcadores será sobrecarregada.

<IfModule mod_rewrite.c>
RewriteEngine On
RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>

# END WordPress
```

**Explicações do código acima**:

- **#** : caráter utilizado para colocar uma linha em comentário.
- **RewriteEngine On**: ativa o módulo Apache `mod_rewrite`, que permite a reescrita do URLs de forma rápida (permite também reencaminhar um URL para outro URL).
- **RewriteRule**: esta sintaxe escreve-se segundo o esquema `RewriteRule Modelo Substitution`. A escrita pode estar presente várias vezes no ficheiro **.htaccess** (é o caso no ficheiro predefinido que encontra na raiz da instalação do seu WordPress). A ordem de escrita no ficheiro é primordial, tenha cuidado quanto à ordem pela qual escreve as suas regras.
- **RewriteBase**: indica que a raiz do website é `/`.
- **RewriteCond**: trata-se de pré-condições para a regra que se segue diretamente. No nosso caso, a primeira condição exclui os URLs que contêm um caminho para um ficheiro real, enquanto a segunda exclui, ela, os sub-diretórios.

### Que posso adicionar num ficheiro **.htaccess** com WordPress?

Existem várias formas de definir e modificar os parâmetros que irão modificar o comportamento do servidor (existem, no entanto, algumas limitações em função do alojamento):

- modificar os ficheiros de configuração do seu servidor;
- adicionar ou alterar diretivas no ficheiro de configuração **wp-config.php** à raiz do seu website;
- alterar ou adicionar diretrizes no ficheiro **.htaccess** na raiz.

## Instruções

> [!warning]
>
> Antes de seguir os passos abaixo, é necessário reencaminhar o protocolo HTTP para HTTPS. Para isso, siga as instruções do nosso manual ["Ativar o HTTPS num website com certificado SSL"](/pages/web/hosting/ssl-activate-https-website#1-ativar-o-certificado-ssl-no-alojamento).

### Impedir a apresentação dos diretórios e sub-diretórios

Para evitar que o conjunto dos visitantes do seu website possa mostrar o conteúdo dos sub-diretórios (e acessoriamente dar informações aos piratas sobre os temas ou extensões utilizados), bloqueie a visualização do conteúdo ao adicionar esta linha ao seu ficheiro **.htaccess**:

```bash
Options All -Indexes
```

### Proteger o seu ficheiro de configuração

O seu ficheiro **wp-config.php**, presente na raiz do seu website, contém informações de configuração sensíveis. Impeça o acesso a este ficheiro ao adicionar as seguintes linhas ao seu ficheiro **.htaccess**:

```bash
<Files wp-config.php>
    order allow,deny
    deny from all
    satisfy all
</Files>
```

### Bloquear um endereço IP

Se identificou um endereço de IP malicioso, eis a linha a inserir no ficheiro **.htaccess*:

```bash
<Limit GET POST>
    order allow,deny deny from xxx.xxx.xxx.xxx
    allow from all
</Limit>
```

Neste exemplo, `xxx.xxx.xxx.xxx`, refere-se ao endereço de IP a bloquear.

Para mais informações, consulte o nosso guia sobre a [restrição do acesso por IP através do ficheiro .htaccess](/pages/web/hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website).

#### Bloquear um endereço IP a partir do diretório wp-admin (ou nos outros diretórios)

O diretório **wp-admin** permite-lhe ligar-se à sua interface de administração (o método também funciona com os outros diretórios, mas correspondem a URLs que não conduzem a uma interface específica). Para proteger este diretório, autorize especificamente o acesso a um ou vários endereços IP através do seguinte código a inserir no seu **.htaccess*:

```bash
<Limit GET POST PUT>
    order deny,allow deny from all
    allow from xxx.xxx.xxx.xxx
    allow from xxx.xxx.xxx.xxx
</Limit>
```

### Informações importantes a reter

- Faça o backup de uma versão funcional do seu ficheiro **.htaccess** antes de qualquer manipulação.
- Se as modificações que fez provocarem um erro, substitua (através do seu cliente FTP) o ficheiro **.htaccess** online pela versão anterior.
- Pode gerir certos parâmetros no seu ficheiro **wp-config.php**
- Os ficheiros **.htaccess** são particularmente eficazes para a gestão dos URLs, os reencaminhamentos e a segurança do seu website.

## Quer saber mais? <a name="go-further"></a>

Consulte o [tutorial disponível no site da Fundação Apache](https://httpd.apache.org/docs/2.4/en/howto/htaccess.html).

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/directory/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
