---
title: "Tutorial - Operações realizáveis com um ficheiro .htaccess"
slug: what_else_can_you_do_with_the_htaccess_file
excerpt: "Descubra alguns exemplos de operações que podem ser realizadas com um ficheiro .htaccess"
section: Reescrita e autenticação
order: 04
updated: 2023-05-23
---

**Última atualização: 23/05/2023**

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Este tutorial tem como objetivo apresentar as principais funcionalidades do ficheiro ".htaccess" para o seu alojamento Web.

O ficheiro ".htaccess" é um ficheiro de configuração (HTTP) Apache executado pelo servidor Web do seu alojamento Web. Permite definir regras específicas para um diretório e o conjunto dos seus sub-diretórios. Vários ficheiros ".htaccess" podem ser criados no [espaço FTP](/pages/web/hosting/ftp_connection/) do seu alojamento Web. 

Se ainda não existir no seu espaço FTP, pode adicioná-lo criando um ficheiro que designará "**.htaccess**" no diretório para o qual deseja aplicar uma ou várias das regras descritas neste tutorial.

Para utilizar corretamente o ficheiro ".htaccess", deve conhecer e respeitar as seguintes regras: 

- **um único** ficheiro ".htaccess" por diretório ou sub-diretório para evitar os conflitos entre diferentes ficheiros ".htaccess";
- o ficheiro ".htaccess" é invisível para os internautas que visitam o seu website;
- as regras declaradas num ficheiro ".htaccess" aplicam-se a todo o diretório onde o ficheiro ".htaccess" está instalado, bem como a todos os subdiretórios desse mesmo diretório.

> [!warning]
>
> A OVHcloud disponibiliza serviços cuja configuração, gestão e responsabilidade lhe incumbem. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](https://partner.ovhcloud.com/pt/directory/) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção ["Quer saber mais?"](#go-further) deste manual.
>
> Os exemplos que se seguirão serão colocados num ficheiro ".htaccess". Atenção, as regras que define neste ficheiro têm consequências diretas no seu website. Verifique sempre as regras que adicionou antes de as aplicar ao seu website. 
> 

**Descubra as principais operações que podem ser realizadas com um ficheiro ".htaccess".**

## Requisitos

- Dispor de um [alojamento partilhado OVHcloud](https://www.ovhcloud.com/pt/web-hosting/)

## Instruções

### Autorizar ou restringir o acesso a um diretório ou a um website para um ou vários endereços IP

Esta funcionalidade é muito útil e reforça a segurança dos seus websites. Pode ajudar a reduzir os riscos de pirataria no seu website.

Para mais informações consulte o nosso tutorial: ["Como bloquear o acesso ao meu site para alguns endereços IP através de um ficheiro .htaccess? "](/pages/web/hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website/).

### Definir uma password de acesso encriptada para aceder a um diretório ou a um website

Através do ficheiro ".htaccess", pode implementar um acesso protegido (por uma palavra-passe encriptada) aos dados presentes no seu alojamento.

Para mais informações, consulte o nosso tutorial ["Proteger a interface de administração do seu site por um ficheiro .htaccess"](/pages/web/hosting/htaccess_protect_directory_by_password/).

### Especificar um ficheiro de índice diferente

Por predefinição, o ficheiro **index** de um diretório é *index.html*, *index.htm* ou *index.php*. Se preferir que seja outro ficheiro, pode adicionar uma linha deste tipo no seu ".htaccess":

```bash
DirectoryIndex File_Name
```

Por exemplo, se deseja utilizar a página **receção.html** como página de índice, adicione a seguinte linha:

```bash
DirectoryIndex linha.html
```

### Impedir a listagem do conteúdo de um diretório

Para impedir que os utilizadores da Internet listem todos os ficheiros contidos num diretório na ausência de ficheiro **index** (.cgi, .html, .php, etc.), crie um ficheiro "**.htaccess**" contendo a seguinte linha:

```bash
Options -Indexes
```

### Efetuar a re-escritura do URL

Graças ao módulo **mod_rewrite** do servidor Web HTTP Apache pré-instalado no seu alojamento Web, esta funcionalidade permite reencaminhar:

- todos os pedidos HTTP para um único ficheiro do seu website;
- uma parte dos pedidos HTTP para um único ficheiro do seu website;
- o seu domínio para o seu subdomínio em "www";
- os pedidos dirigidos a uma pasta específica, sem apresentar a pasta em causa;
- automaticamente um visitante para o seu website em HTTPS quando o consulta com um URL em HTTP.

Encontre mais informações no nosso tutorial: ["Rescrever o URL de acesso ao meu website graças ao mod_rewrite através do ficheiro .htaccess"](/pages/web/hosting/htaccess_url_rewriting_using_mod_rewrite/).

#### Reencaminhar as mensagens de erro

Para personalizar e/ou reencaminhar as suas mensagens de erro para uma página web, crie um ficheiro "**.htaccess**" contendo a seguinte linha de código:

```bash
ErrorDocument Error_Code_Number Message_Or_Destination
```

Substitua apenas "**Error_Code_Number**" pelo número do código de erro HTTP Apache correspondente. 

Encontre mais informações sobre esta funcionalidade na [documentação oficial Apache](https://httpd.apache.org/docs/trunk/en/custom-error.htmll){.external}.

Os códigos de erro HTTP mais comuns são:

- 401: Authorization required: este erro é gerado quando um visitante introduz um login/palavra-passe incorreto durante o acesso a um ficheiro ou diretório protegido.
- 403: Access denied: este erro aparece no acesso a um diretório no qual o ficheiro *index.html* (ou *index.cgi*, etc.) está ausente e se a configuração do servidor proíbe a visualização dos ficheiros do diretório.
- 404: Not Found: o ficheiro que o visitante está tentando ver não existe.
- 500: Internal Server Error: este erro aparece quando um script não foi executado corretamente ou o script ou os direitos do script estão incorretos.

Substitua **"Message_Or_Destination"** pela ação a efetuar. Para mostrar uma mensagem diretamente, introduza a mensagem correspondente entre aspas. Para reencaminhar para uma página precisa, insira o caminho de acesso a esta página. 

Encontre aqui dois exemplos concretos:

- Deseja indicar *"Lamentamos, não tem direito de aceder a este ficheiro"* se o visitante encontra um erro **403**. Adicione a linha abaixo no ficheiro ".htaccess":

```bash
ErrorDocument 403 "Lamentamos, não tem direito de aceder a este ficheiror"
```

- Deseja reenviar os erros **404** para a sua página personalizada *404.html* (para o seu domínio : domain.tld). Adicione a linha abaixo no ficheiro ".htaccess":

```bash
ErrorDocument 404 http://domain.tld/404.html
```

Também pode reencaminhar um erro para um script **C**ommon **G**ateway **I**Interface (**CGI**). Pode codificar um script em **CGI** para, por exemplo, efetuar as seguintes ações:
 
- mostrar uma mensagem;
- reencaminhar o visitante para outro ficheiro de acordo com o URL inicialmente solicitado (disponível na variável de ambiente **REQUEREST_URI**);
- enviar um e-mail.

Por exemplo, para reencaminhar um erro para um script **CGI**, adicione a seguinte linha no seu ficheiro ".htaccess":

```bash
ErrorDocument 404 /cgi-bin/erro.cgi?type=404
```

A linha acima reencaminha o visitante que encontra um erro **404** para o seu script *erro.cgi*. O Conselho executará as diretivas nele contidas, especificamente em relação ao erro **404**.

## Quer saber mais? <a name="go-further"></a>

[Aceder ao espaço FTP do alojamento web](/pages/web/hosting/ftp_connection/)

[Bloquear o acesso ao meu website para alguns endereços IP através de um ficheiro .htaccess?](/pages/web/hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website/)

[Proteger a interface de administração do seu site com um ficheiro .htaccess](/pages/web/hosting/htaccess_protect_directory_by_password/)

[Reescrever o URL de acesso ao meu website graças ao mod_rewrite através do ficheiro .htaccess](/pages/web/hosting/htaccess_url_rewriting_using_mod_rewrite/)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/directory/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>. 