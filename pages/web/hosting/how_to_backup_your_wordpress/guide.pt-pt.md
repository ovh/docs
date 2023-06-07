---
title: "Tutorial - Faça o backup do seu site WordPress"
excerpt: "Descubra como guardar o conteúdo do WordPress e a base de dados do seu website"
updated: 2023-02-22
---

**Última atualização: 22/02/2023**

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Mesmo tomando todas as precauções de utilização, o seu website fica exposto a um potencial problema (erro de manipulação, esmagamento acidental de ficheiros, falha de configuração, falha de segurança ou pirataria) que pode ter como consequência a perda parcial ou total dos seus dados .<br>
O backup regular das informações do seu website é uma boa prática a adotar. Permite-lhe voltar a um estado anterior do seu site quando encontra uma avaria.

Num alojamento web partilhado, é responsável pelos backups do seu website. Mesmo que a OVHcloud proponha backups (não contratuais), recomendamos que realize também si backups regulares e que gira os seus próprios suportes de backup (disco rígido, pen USB, etc.) para uma maior precaução.

> [!warning]
>
> A OVHcloud disponibiliza serviços cuja configuração, gestão e responsabilidade lhe incumbem. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Colocamos à sua disposição este tutorial para o acompanhar o melhor possível em tarefas comuns. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](https://partner.ovhcloud.com/pt/directory/) ou ao [editor do CMS WordPress](https://wordpress.com/support/){.external}. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção ["Quer saber mais?"](#go-further) deste tutorial.
>

**Descubra como guardar o conteúdo do seu site WordPress e a sua base de dados.**

## Requisitos

- Ter um [alojamento web](https://www.ovhcloud.com/pt/web-hosting/) e ter instalado o WordPress

## Instruções

Pode efetuar um backup de duas formas: **manualmente** ou **através de uma extensão**.

A OVHcloud oferece um [serviço (não contratual) de backup automático de dados](/pages/web/hosting/ftp_save_and_backup), assim como a disponibilização destes backups. No entanto, é da sua responsabilidade implementar a sua própria política de restauro e determinar os pontos de restauro nos momentos que considere oportunos.

### Método n°1 - realizar um backup manual

O backup manual deve ser feito em duas etapas. Primeiro, deve guardar os ficheiros PHP do seu website e depois exportar a sua base de dados.

#### 1.1 - Salvaguarde os ficheiros do seu website

A recuperação faz-se através de um cliente FTP como o FileZilla. Para mais informações, consulte o nosso manual "[Utilizar o FileZilla com o seu alojamento OVHcloud](/pages/web/hosting/ftp_filezilla_user_guide)".

Quando se liga ao seu servidor através de FTP, deve recuperar (arrastando/largando) o conteúdo do diretório `www` na parte direita. Este diretório contém a totalidade dos ficheiros e diretórios do seu site WordPress (configuração, temas, media, etc.).

![Vista dos ficheiros e diretórios WordPress na raiz](images/how_to_backup_your_wordpress_1.png){.thumbnail}

Clique no diretório `www` e selecione a janela da esquerda para aceder ao diretório. A transferência dos ficheiros começará automaticamente.

Em caso de avaria no seu website, deverá realizar a operação inversa ao esmagar os ficheiros de destino.

#### 1.2 - Exportar a sua base de dados

Para exportar a sua base de dados aceda à interface _PHPMyAdmin_ através do URL que lhe foi comunicado aquando da subscrição do seu alojamento web.

> [!success]
>
> Não hesite em consultar o nosso guia sobre a [exportação de uma base de dados](/pages/web/hosting/sql_database_export).

![Acesso PHPMyAdmin - Página inicial](images/how_to_backup_your_wordpress_2.png){.thumbnail}

Clique em `Exportação`{.action} no topo da página:

![Acesso PHPMyAdmin - Exportar](images/how_to_backup_your_wordpress_3.png){.thumbnail}

Deixe as escolhas propostas por defeito: método de exportação rápido e formato SQL.

Clique em `Executar`{.action}, e poderá descarregar a sua base de dados completa no formato SQL (Structured Query Language).

![Acesso PHPMyAdmin - Exportar - Descarregamento](images/how_to_backup_your_wordpress_4.png){.thumbnail}

### Método n°2 - realizar um backup com uma extensão

Muitas extensões WordPress permitem gerir os seus backups. A mais popular é [UdraftPlus](https://wordpress.org/plugins/updraftplus/){.external} que conta vários milhões de instalações ativas. A versão gratuita é suficiente para guardar o seu website. A versão premium oferece mais opções como os backups incrementais, uma ferramenta de migração, o backup multi-site, mais opções sobre as clouds destinadas a armazenar os dados, etc.

Faça o download da extensão em formato `.zip` para o seu computador. Por razões de clareza, o ficheiro descarregado da extensão será renomeado **updraftplus.zip**.

#### 2.1 - Ligue-se à interface de administração para instalar a extensão

Por predefinição, trata-se do seu nome de domínio seguido de `/wp-admin`:

![Acesso administrador em wp-admin](images/how_to_backup_your_wordpress_5.png){.thumbnail}

Na página inicial, aceda à secção `Plugins`{.action} e clique em `Adicionar novo`{.action}:

![Adicionar uma extensão](images/how_to_backup_your_wordpress_6.png){.thumbnail}

Transfira a extensão ao clicar no botão `Percorrer`{.action}:

![Fazer upload da extensão](images/how_to_backup_your_wordpress_7.png){.thumbnail}

Clique em `Installar`{.action}:

![Instalar a extensão](images/how_to_backup_your_wordpress_8.png){.thumbnail}

Após a instalação, deverá ativar a extensão:

![Confirmação da instalação](images/how_to_backup_your_wordpress_9.png){.thumbnail}

Uma vez ativada, esta aparecerá na lista das extensões:

![Lista das extensões instaladas](images/how_to_backup_your_wordpress_10.png){.thumbnail}

#### 2.2 - Configure os seus backups

Na página acima mencionada, clique em `Opções`{.action} e, na página `UpdraftPlus Backup/Restore`, clique no separador `Opções
`{.action}:

![Página UpdraftPlus Backup/Restore](images/how_to_backup_your_wordpress_11.png){.thumbnail}

Defina o backup diário dos seus ficheiros e da sua base de dados:

![Page UpdraftPlus Regulations](images/how_to_backup_your_wordpress_12.png){.thumbnail}

Escolha o backup por e-mail.

Os backups serão enviados para o endereço de e-mail da conta de administrador (a conta que utiliza):

![Backup por endereço mail](images/how_to_backup_your_wordpress_13.png){.thumbnail}

No final da página, clique em `Guardar alterações`{.action} para validar.

#### 2.3 - Efetue o seu primeiro backup

Regresse ao separador `Backup/Restore`{.action} e clique no botão `Backup Agora`{.action}:

![Página UpdraftPlus Backup/Restaurar](images/how_to_backup_your_wordpress_14.png){.thumbnail}

Na nova janela, clique em `Backup Agora`{.action}:

![Página UpdraftPlus Modal Backup/Restaurar](images/how_to_backup_your_wordpress_15.png){.thumbnail}

Uma vez terminados os seus backups, receberá dois e-mails: um com o conteúdo do seu Wordpress, o outro com a base de dados do seu website.
Se não receber os e-mails, verifique o endereço de e-mail da conta que utiliza (na secção `Utilizadores`{.action}). Verifique também as pastas "SPAM / Correio indesejável".

### Com que frequência efetuar backups?

A frequência dos backups é determinada pela frequência com que o seu conteúdo é modificado. Um backup diário é útil se publicar o conteúdo no seu website todos os dias. Adapte a frequência às suas publicações. Tem a possibilidade de efetuar manualmente a atualização (é a opção que é proposta por defeito). Também é aconselhável efetuar um backup assim que instalar ou alterar um tema ou uma extensão.

### O que é preciso reter

- Integrar uma rotina de backups regulares é uma boa forma de proteger o conteúdo do seu website.
- Certifique-se de que os seus backups estão seguros.
- Efetue um backup antes de efetuar uma atualização e verifique depois se tudo está a funcionar corretamente no seu website. 

Ao aplicar estas boas práticas, poderá voltar a uma versão anterior saudável.

## Quer saber mais? <a name="go-further"></a>

- [Site oficial da WordPress](https://wordpress.org){.external}
- [Mais informações sobre os backups do seu alojamento web](/pages/web/hosting/hosting_technical_specificities#informacoes-sobre-backups-automaticos)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/directory/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>. 