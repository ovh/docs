---
title: "Recuperar o backup do espaço FTP do seu alojamento Cloud Web"
slug: backup_ftp_cloud_web
section: Backups
order: 01
---

**Última atualização: 13/09/2022**

> [!primary]
>
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

O seu alojamento Cloud Web dispõe de um espaço de armazenamento no qual pode alojar os seus sites ou aplicações.

**Saiba como recuperar um backup do espaço FTP do seu alojamento Cloud Web**.

> [!primary]
> 
> Os backups propostos pela OVHcloud para os alojamentos Cloud Web são não contratuais. Estes são disponibilizados para completar os seus próprios meios de backup em situações urgentes. Assim, recomendamos que realize regularmente as suas próprias salvaguardas de segurança para evitar possíveis perdas de dados.
> 
> Quando efetuar uma salvaguarda de segurança para o seu site e utilizar uma base de dados, faça também um backup desta. Não hesite em consultar o nosso guia para [recuperar um backup da sua base de dados](https://docs.ovh.com/pt/hosting/partilhado_guia_de_exportacao_de_uma_base_de_dados_mysql/).
> 

**Saiba como recuperar e restaurar um backup FTP do seu alojamento Cloud Web.**

## Requisitos

- Ter um [alojamento Cloud Web](https://www.ovhcloud.com/pt/web-hosting/cloud-web-offer/){.external}
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.
- Ter acesso ao endereço de e-mail associado ao seu ID de cliente.

## Instruções

Um alojamento Cloud Web dispõe de backups automáticos ativados nas seguintes frequências:

- no mesmo dia, efetuada depois das 00h00.
- no dia anterior, efetuada depois das 00h00.
- antes, após as 00h00.
- no domingo anterior, efetuada depois das 01h00.

Só os backups mencionados acima podem ser propostos pela OVHcloud, desde que o seu alojamento Cloud Web já existisse nas datas indicadas e sob reserva das disponibilidades da infraestrutura no momento do pedido do backup.

### Recuperar um backup

Contrariamente aos alojamentos partilhados OVHcloud, é impossível efetuar um restauro do espaço FTP com um clique a partir da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

É gerado um link de download do backup que é enviado por e-mail para o endereço de e-mail associado ao identificador de cliente administrador do alojamento Cloud Web.

#### Etapa 1 - Gerar o link de recuperação enviado por e-mail

Para gerar o link de recuperação, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, aceda à secção `Web Cloud`{.action}, clique em `Alojamentos`{.action} e, a seguir, no Cloud Web em causa. 

Selecione o separador `FTP - SSH`{.action} e clique no botão `Gerar um backup`{.action} à direita.

![backupftpcw](images/GenerateABackup.png){.thumbnail}

Na nova janela, selecione um dos backups disponíveis e clique em `Seguinte`{.action}.

![backupftpcw](images/GenerateABackup2.png){.thumbnail}

Aparecerá uma segunda janela que lhe indicará que o link de recuperação do ficheiro de backup lhe será enviado por e-mail e que nenhum restauro automático no seu alojamento Cloud Web será feito pela OVHcloud.

![backupftpcw](images/GenerateABackup3.png){.thumbnail}

Clique em `Confirmar`{.action} para validar o seu pedido.

Se a geração do backup está bem lançada, na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, aparecerá a seguinte mensagem:

![backupftpcw](images/BackupInProgress.png){.thumbnail}

A geração do backup demora entre 10 e 15 minutos para ser realizado.

#### Etapa 2 - Recuperar o backup

Uma vez finalizada a geração do backup, receberá um e-mail no endereço de e-mail associado ao identificador administrador do seu alojamento Cloud Web.<br>
Este e-mail contém um link de download **válido para 9 dias** a contar a partir da receção do e-mail:

![backupftpcw](images/mailBackup.png){.thumbnail}

O ficheiro assim descarregado está no formato *.tar.gz*.

### Restaurar o seu backup

Depois de fazer o download dos seus ficheiros, poderá [ligar-se ao seu espaço FTP](https://docs.ovh.com/pt/hosting/aceder-espaco-de-armazenamento-ftp-alojamento-web/) através de um software FTP como o [Filezilla](https://docs.ovh.com/pt/hosting/partilhado_guia_de_utilizacao_do_filezilla/) e, em seguida, substituir os ficheiros que pretende pelos que recuperou.

> [!primary]
>
> Utilize as portas indicadas na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} para as ligações SFTP e SSH, pois a porta 22 não estará funcional para o seu alojamento Cloud Web.
>

## Quer saber mais? 

[Aceder ao espaço de armazenamento do alojamento Web](https://docs.ovh.com/pt/hosting/aceder-espaco-de-armazenamento-ftp-alojamento-web/){.external}

[Ligar-se através do software Filezilla](https://docs.ovh.com/pt/hosting/partilhado_guia_de_utilizacao_do_filezilla/)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>

