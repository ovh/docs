---
title: "O que fazer em caso de erro 500 Internal Server Error?"
excerpt: "Diagnosticar os casos mais comuns de erros 500"
updated: 2023-11-22
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Os erros 500 "Internal Server Error" podem afetar a totalidade ou parte do seu site, ser aleatórios ou permanentes. Podem também aparecer sob a forma de uma página em branco.

![error500](http-500.png){.thumbnail}

Por vezes, provêm também de uma atualização efetuada **automaticamente** por um componente do seu site e, portanto, ocorrem sem ação da sua parte.

**Saiba como diagnosticar os casos mais comuns de erros 500.**

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
>
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](partner.) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção [Quer saber mais](diagnostic_fix_500_internal_server_error_#go-further.) ?
>

## Requisitos

- Dispor de uma [oferta de alojamento partilhado](hosting.)
- Ter acesso à [Área de Cliente OVHcloud](manager.)
- Estar atualizado em [pagamentos](invoice_management#pay-bills.) e [renovações](how_to_use_automatic_renewal#renewal-management.) dos serviços associados (nome de domínio e alojamento web)

## Instruções

Antes de prosseguir, verifique o seu site em vários dispositivos e browsers. Se o erro 500 não aparece em certos casos (por exemplo, num browser diferente do seu), é porque não está relacionado com os seus serviços OVHcloud. Reinicie os seus dispositivos e contacte um técnico informático próximo da sua casa.

Um site é constituído por um **código fonte** (os ficheiros em .php, por exemplo, visíveis durante uma ligação ao seu alojamento em [FTP](ftp_connection1.), ao qual se junta frequentemente uma **base de dados**.
<br>Apesar do erro 500, é fortemente aconselhado efetuar um backup local do conjunto dos seus dados antes de qualquer outra manipulação :

- Siga este [guia](ftp_filezilla_user_guide1.) para obter uma cópia do código fonte.
- Se o seu site utiliza uma base de dados, consulte também este [documento](sql_database_export1.) para obter uma cópia.

No caso de um erro 500, é perfeitamente possível efetuar um [restauro](diagnostic_fix_500_internal_server_error_#restore.) do seu site. No entanto, é preferível efetuar um diagnóstico aprofundado para determinar a origem exata do erro.

### Verificar os logs do seu alojamento

Consulte primeiro este [guia](logs_and_statistics1.) para procurar a causa do erro 500 nos logs do seu alojamento.

### Passar o seu site em modo de desenvolvimento

Para que apareçam eventuais erros PHP, passe o seu alojamento em modo de `desenvolvimento` graças a estas [indicações](configure_your_web_hosting#2-alterar-a-configuracao-do-alojamento-web.).

### Testar o ficheiro.htaccess

Um erro 500 pode estar associado a uma anomalia num ficheiro `.htaccess`. Este ficheiro está geralmente localizado no primeiro nível da pasta que contém o seu site no seu FTP.

Para o verificar, [ligue-se FTP](ftp_connection1.) ao seu alojamento.

De seguida, renomeie este ficheiro em `.htaccess.old` e volte a testar o seu site.

Se este último estiver de novo acessível, então o `.htaccess` está em causa. Por conseguinte, deverá ser alterado. Se desejar, contacte um dos nossos [parceiros](partner.) a este respeito.

### Verificar permissões nas pastas e nos ficheiros

Os ficheiros e os dossiers que constituem o seu site possuem um certo nível de "permissões" em leitura, escrita e execução. Isto para as proteger contra qualquer manipulação maliciosa ou incorreta.

Um erro 500 pode estar associado a um nível de direitos de acesso incorreto em alguns dos dossieres ou ficheiros do seu site.

Para aceder a estes ficheiros, ligue-se ao seu alojamento através de FTP, seguindo a nossa [documentação](ftp_connection1.).

O guia "[Partilhado : Guia de utilização do FileZilla](ftp_filezilla_user_guide#permissoes-de-pastas-e-ficheiros.)" ajudá-lo-á a verificar os seguintes elementos :

- A **raiz** do seu alojamento (Trata-se do diretório notado `/` ou `.` no seu software FTP) deve ter obrigatoriamente permissões 705 (são permissões padrão). Aconselhamos que não altere este nível de direitos.
- Os dossiers devem estar em permissões 705.
- Os ficheiros devem estar em permissões 604.

### Aceder aos detalhes dos erros nos seus scripts

Por razões de segurança, o seu website oculta eventuais detalhes sobre a origem do erro 500 a qualquer pessoa que se lhe ligue por um browser.

Se pretender ter acesso a estes detalhes, poderá aceder ao seu site através de uma [ligação ssh](ssh_on_webhosting1.) a partir da fórmula de alojamento [Pro](hosting-professional-offer.) ou superior.

### Verificar o estado da base de dados

Para qualquer erro 500 que possa estar relacionado com a base de dados do seu website, consulte o nosso manual ["Resolver os erros mais frequentes associados às bases de dados"](diagnosis_database_errors1.).

### Restaurar o seu site para o estado anterior <a name="restore"></a>

> [!warning]
>
> O restauro do código fonte do seu site dirá respeito ao conjunto dos sites do seu alojamento OVHcloud.
>
> Durante o restauro, o conteúdo do seu espaço FTP ou da sua base de dados é substituído por um backup. Assim, não poderá recuperar os dados presentes no servidor imediatamente antes do restauro.
>

Para restaurar o código fonte do seu site, consulte o nosso manual "[Restaurar o espaço de armazenamento do alojamento web](ftp_save_and_backup1.)".

Se o seu site tiver uma base de dados, consulte o nosso manual "[Importar um backup para a base de dados de um alojamento web](sql_importing_mysql_database#restaurar-um-backup-a-partir-da-area-de-cliente.)" para a restaurar para um estado anterior.

Por fim, se o erro 500 aparecer após uma atualização da versão PHP do seu alojamento, consulte o nosso guia "[Mudar a versão de PHP do alojamento web](configure_your_web_hosting1.)" para voltar à configuração anterior.

## Saiba mais <a name="go-further"></a>

[O que fazer se o meu site está inacessível?](diagnostic-website-not-accessible1.)

[O que fazer em caso de erro « Sua conexão não é particular »?](diagnostic-not-secured1.)

[O que fazer em caso de página « Index of »?](diagnostic-index-of1.)

[O que fazer em caso de página "403 forbidden"?](diagnostic_403_forbidden1.)

[Resolver os erros mais frequentes associados às bases de dados](diagnosis_database_errors1.)

[O meu site é lento. O que fazer?](diagnostic_slownesses1.)

[Resolver o erro “Site não instalado”](multisites_website_not_installed1.)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](partner.).

Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>.