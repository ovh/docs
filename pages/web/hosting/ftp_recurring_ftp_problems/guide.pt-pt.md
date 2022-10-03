---
title: Resolver os erros recorrentes durante a utilização de um programa FTP
excerpt: Encontre aqui as anomalias mais frequentes associadas ao seu software FTP
slug: partilhando-os-problemas-ftp-recrutamento
section: FTP e SSH
order: 04
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 05/01/2022**

## Objetivo

A utilização de software FTP durante a ligação ao seu [alojamento Web Cloud](https://www.ovhcloud.com/pt/web-hosting/) pode causar várias anomalias. Este guia permitir-lhe-á resolver os problemas mais comuns.

**Descubra como corrigir os erros relacionados com o software FTP.**

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
>
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](https://partner.ovhcloud.com/pt/directory/) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção [Quer saber mais](#gofurther)?
>

## Requisitos

- Ter um [serviço de alojamento Web Cloud](https://www.ovhcloud.com/pt/web-hosting/).
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

## Instruções

### "Este servidor não suporta FTP em TLS" (FileZilla)

![filezilla_error](images/filezilla_error.png){.thumbnail}

Esta mensagem no software [FileZilla](https://docs.ovh.com/pt/hosting/partilhado_guia_de_utilizacao_do_filezilla/) indica que não ativou a opção SFTP ou SSH a partir da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt). Assim, as informações trocadas entre o seu servidor de alojamento OVHcloud e o seu computador não serão encriptadas.

Se os dados que deseja trocar por esta via não são confidenciais, clique em `OK`{.action}.

Caso contrário, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), na secção `Web Cloud`{.action} e, a seguir, clique em `Alojamentos`{.action}. Selecione o alojamento correspondente e escolha o separador `FTP-SSH`{.action}.

Se dispõe de um alojamento [Perso](https://www.ovhcloud.com/pt/web-hosting/personal-offer/), selecione a casa `Desativado`{.action} na coluna `SFTP`{.action} e aguarde alguns minutos.

Se dispõe de um alojamento [Pro](https://www.ovhcloud.com/pt/web-hosting/professional-offer/) ou [Performance](https://www.ovhcloud.com/pt/web-hosting/performance-offer/), clique no botão `...`{.action} à direita do utilizador FTP em causa, depois por `Alterar`{.action}.

Escolha `SFTP`{.action} ou `Ativado`{.action} (para ativar o protocolo SSH no seu alojamento), clique em `Seguinte`{.action} e depois em `Validar`{.action}. Aguarde alguns minutos.

> [!primary]
>
> Para qualquer outra mensagem de erro, consulte a secção `Diagnóstico` dos nossos guias de [Hosting](../).
>

### Transferi os meus ficheiros com um software FTP, mas o meu site não aparece.

Em primeiro lugar, verifique se os ficheiros e as pastas do seu site estão presentes na [pasta raiz](https://docs.ovh.com/pt/hosting/partilhado_colocar_o_meu_website_online/#23-carregar-os-ficheiros-para-o-espaco-de-armazenamento) do seu alojamento.

Se fez uma modificação nos seus [servidores ou zona DNS](https://docs.ovh.com/pt/domains/alojamento_partilhado_como_editar_a_minha_zona_dns/#compreender-a-nocao-de-dns) há menos de 48 horas, aguarde e reinicie regularmente os seus dispositivos para esvaziar a sua cache.

### As minhas credenciais FTP não funcionam.

Se não conseguir autenticar-se, altere a sua palavra-passe FTP de acordo com as instruções deste [guia](https://docs.ovh.com/pt/hosting/alterar-palavra-passe-utilizador-ftp/).

### Eu encontro erros aleatórios no meu site.

A falta de espaço no seu alojamento partilhado pode provocar disfunções no seu site quando o tenta alterar ou atualizar.

Para verificar o espaço de armazenamento restante no alojamento, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt). Clique em `Web Cloud`{.action} e depois em `Alojamentos`{.action}. Selecione o alojamento em causa.

A quantidade de dados registada no seu servidor de alojamento (exceto bases de dados) aparece na secção `Informações gerais`{.action} > `Espaço de disco`.

![disk_space](images/disk_space.png){.thumbnail}

### Não consigo transferir os meus ficheiros para o servidor FTP.

Verifique que o seu software FTP está ligado ao "Modo Passivo" (Modo de configuração de um servidor FTP no qual o servidor determina a porta de ligação).

Por exemplo, para o [Filezilla](https://docs.ovh.com/pt/hosting/partilhado_guia_de_utilizacao_do_filezilla/), clique em `Editar`{.action} e, a seguir, `Configurações`{.action}, `Ligação`{.action}, `FTP`{.action} e selecione o `Passivo (recomendado)`{.action}.

Limite igualmente o tamanho das suas transferências de dados (não poderá enviar mais de **5000 ficheiros e pastas** para os servidores partilhados OVHcloud numa única transferência). Se necessário, realize as suas importações várias vezes com base em pastas comprimidas.

Se dispõe de uma fórmula [Pro](https://www.ovhcloud.com/pt/web-hosting/professional-offer/) ou [Performance](https://www.ovhcloud.com/pt/web-hosting/performance-offer/), utilize de preferência o [protocolo SSH](https://docs.ovh.com/pt/hosting/partilhado_o_ssh_nos_alojamentos_partilhados/) para realizar as suas importações de ficheiros no espaço de armazenamento de ficheiros do seu alojamento.

### Não consigo eliminar o link simbólico "index.html" no meu espaço FTP

Esta ligação é instalada de forma padrão nos alojamentos partilhados da OVHcloud. Ele dá a seguinte apresentação:

![site_under_construction](images/site_under_construction.png){.thumbnail}

Se não utilizou a funcionalidade "[Módulo 1 clique](https://docs.ovh.com/pt/hosting/partilhado_guias_dos_modulos_dos_alojamentos_partilhados/)" para criar o seu site, deverá utilizar o software [Net2FTP](https://docs.ovh.com/pt/hosting/aceder-espaco-de-armazenamento-ftp-alojamento-web/#1-ligacao-atraves-de-ftp-explorer) acessível através da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) para eliminar manualmente a página "Site em construção".

## Quer saber mais? <a name="gofurther"></a>

[Utilização do software FileZilla com o seu alojamento](https://docs.ovh.com/pt/hosting/partilhado_guia_de_utilizacao_do_filezilla/)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, convidamo-lo a consultar as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
