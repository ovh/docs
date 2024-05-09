---
title: "Resolver os erros recorrentes durante a utilização de um programa FTP"
excerpt: "Encontre aqui as anomalias mais frequentes associadas ao seu software FTP"
updated: 2022-01-05
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

A utilização de software FTP durante a ligação ao seu [alojamento Web Cloud](hosting.) pode causar várias anomalias. Este guia permitir-lhe-á resolver os problemas mais comuns.

**Descubra como corrigir os erros relacionados com o software FTP.**

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
>
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](partner.) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção [Quer saber mais](ftp_recurring_ftp_problems_#go-further.)?
>

## Requisitos

- Ter um [serviço de alojamento Web Cloud](hosting.).
- Ter acesso à [Área de Cliente OVHcloud](manager.).

## Instruções

### "Este servidor não suporta FTP em TLS" (FileZilla)

![doesnt-support-ftp-on-tls](doesnt-support-ftp-on-tls.png){.thumbnail}

Esta mensagem no software [FileZilla](ftp_filezilla_user_guide1.) indica que não ativou a opção SFTP ou SSH a partir da [Área de Cliente OVHcloud](manager.). Assim, as informações trocadas entre o seu servidor de alojamento OVHcloud e o seu computador não serão encriptadas.

Se os dados que deseja trocar por esta via não são confidenciais, clique em `OK`{.action}.

Caso contrário, aceda à [Área de Cliente OVHcloud](manager.), na secção `Web Cloud`{.action} e, a seguir, clique em `Alojamentos`{.action}. Selecione o alojamento correspondente e escolha o separador `FTP-SSH`{.action}.

Se dispõe de um alojamento [Perso](hosting-personal-offer.), selecione a casa `Desativado`{.action} na coluna `SFTP`{.action} e aguarde alguns minutos.

Se dispõe de um alojamento [Pro](hosting-professional-offer.) ou [Performance](hosting-performance-offer.), clique no botão `...`{.action} à direita do utilizador FTP em causa, depois por `Alterar`{.action}.

Escolha `SFTP`{.action} ou `Ativado`{.action} (para ativar o protocolo SSH no seu alojamento), clique em `Seguinte`{.action} e depois em `Validar`{.action}. Aguarde alguns minutos.

> [!primary]
>
> Para qualquer outra mensagem de erro, consulte a secção `Diagnóstico` dos nossos guias de [Hosting](web-cloud-hosting1.).
>

### Transferi os meus ficheiros com um software FTP, mas o meu site não aparece.

Em primeiro lugar, verifique se os ficheiros e as pastas do seu site estão presentes na [pasta raiz](hosting_how_to_get_my_website_online#23-carregar-os-ficheiros-para-o-espaco-de-armazenamento.) do seu alojamento.

Se fez uma modificação nos seus [servidores ou zona DNS](dns_zone_edit#compreender-a-nocao-de-dns.) há menos de 48 horas, aguarde e reinicie regularmente os seus dispositivos para esvaziar a sua cache.

### As minhas credenciais FTP não funcionam.

Se não conseguir autenticar-se, altere a sua palavra-passe FTP de acordo com as instruções deste [guia](ftp_change_password1.).

### Eu encontro erros aleatórios no meu site.

A falta de espaço no seu alojamento partilhado pode provocar disfunções no seu site quando o tenta alterar ou atualizar.

Para verificar o espaço de armazenamento restante no alojamento, aceda à [Área de Cliente OVHcloud](manager.). Clique em `Web Cloud`{.action} e depois em `Alojamentos`{.action}. Selecione o alojamento em causa.

A quantidade de dados registada no seu servidor de alojamento (exceto bases de dados) aparece na secção `Informações gerais`{.action} > `Espaço de disco`.

![disk_space](find-disk-space.png){.thumbnail}

### Não consigo transferir os meus ficheiros para o servidor FTP.

Verifique que o seu software FTP está ligado ao "Modo Passivo" (Modo de configuração de um servidor FTP no qual o servidor determina a porta de ligação).

Por exemplo, para o [Filezilla](ftp_filezilla_user_guide1.), clique em `Editar`{.action} e, a seguir, `Configurações`{.action}, `Ligação`{.action}, `FTP`{.action} e selecione o `Passivo (recomendado)`{.action}.

Limite igualmente o tamanho das suas transferências de dados (não poderá enviar mais de **5000 ficheiros e pastas** para os servidores partilhados OVHcloud numa única transferência). Se necessário, realize as suas importações várias vezes com base em pastas comprimidas.

Se dispõe de uma fórmula [Pro](hosting-professional-offer.) ou [Performance](hosting-performance-offer.), utilize de preferência o [protocolo SSH](ssh_on_webhosting1.) para realizar as suas importações de ficheiros no espaço de armazenamento de ficheiros do seu alojamento.

### Não consigo eliminar o link simbólico "index.html" no meu espaço FTP

Esta ligação é instalada de forma padrão nos alojamentos partilhados da OVHcloud. Ele dá a seguinte apresentação:

![site-under-construction](site-under-construction.png){.thumbnail}

Se não utilizou a funcionalidade "[Módulo 1 clique](cms_install_1_click_modules1.)" para criar o seu site, deverá utilizar o software [Net2FTP](ftp_connection#1-ligacao-atraves-de-ftp-explorer.) acessível através da [Área de Cliente OVHcloud](manager.) para eliminar manualmente a página "Site em construção".

## Quer saber mais? <a name="go-further"></a>

[Utilização do software FileZilla com o seu alojamento](ftp_filezilla_user_guide1.)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](partner.).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, convidamo-lo a consultar as nossas diferentes [ofertas de suporte](support.).

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.