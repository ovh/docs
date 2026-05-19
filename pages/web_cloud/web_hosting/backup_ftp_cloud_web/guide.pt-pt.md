---
title: "Recuperar o backup do espaço FTP do seu alojamento Cloud Web"
excerpt: "Saiba como recuperar um backup do espaço FTP do seu alojamento Cloud Web"
updated: 2026-03-31
---

## Objetivo

O seu alojamento Cloud Web dispõe de um espaço de armazenamento no qual pode alojar os seus sites ou aplicações.

**Saiba como recuperar um backup do espaço FTP do seu alojamento Cloud Web**. 

> [!primary]
> 
> Os backups propostos pela OVHcloud para os alojamentos Cloud Web são não contratuais. Estes são disponibilizados para completar os seus próprios meios de backup em situações urgentes. Assim, recomendamos que realize regularmente as suas próprias salvaguardas de segurança para evitar possíveis perdas de dados.
> 
> Quando efetuar uma salvaguarda de segurança para o seu site e utilizar uma base de dados, faça também um backup desta. Não hesite em consultar o nosso guia para [recuperar um backup da sua base de dados](/pages/web_cloud/web_hosting/sql_database_export).
> 

**Saiba como recuperar e restaurar um backup FTP do seu alojamento Cloud Web.**

## Requisitos

- Ter um [alojamento Cloud Web](/links/web/hosting-cloud-web-offer)
- Ter acesso ao endereço de e-mail associado ao seu ID de cliente.

<!-- CP-NAV-START:web-hosting -->
---

### Acesso à Área de Cliente OVHcloud

- **Ligação direta:** [Alojamentos](/links/control-panel/web-hosting)
- **Caminho de navegação:** `Web Cloud`{.action} > `Alojamentos`{.action} > Selecione o seu alojamento web

---
<!-- CP-NAV-END:web-hosting -->

## Instruções

Um alojamento Cloud Web dispõe de backups automáticos ativados nas seguintes frequências:

- no mesmo dia, efetuada depois das 00h00.
- no dia anterior, efetuada depois das 00h00.
- antes, após as 00h00.
- no domingo anterior, efetuada depois das 01h00.

Só os backups mencionados acima podem ser propostos pela OVHcloud, desde que o seu alojamento Cloud Web já existisse nas datas indicadas e sob reserva das disponibilidades da infraestrutura no momento do pedido do backup.

### Recuperar um backup

Contrariamente aos alojamentos partilhados OVHcloud, é impossível efetuar um restauro do espaço FTP com um clique a partir da Área de Cliente OVHcloud.

É gerado um link de download do backup que é enviado por e-mail para o endereço de e-mail associado ao identificador de cliente administrador do alojamento Cloud Web.

<!-- CP-STEPS-START:access-ftp-backup -->
Clique nos separadores abaixo para visualizar cada uma das **5** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Aceda à página [Alojamentos](/links/control-panel/web-hosting) e selecione o Cloud Web em causa.
>>
>> ![Alojamentos](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Selecione o separador `FTP - SSH`{.action} e clique no botão `Gerar um backup`{.action} à direita.
>>
>> ![Botão Gerar um backup](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/ftp-ssh/generate-a-backup.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Na janela que se abre, selecione um dos backups disponíveis e clique em `Seguinte`{.action}.
>>
>> ![Seleção do backup](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/ftp-ssh/generate-a-backup-step-1.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Aparecerá uma segunda janela indicando que o link de download do ficheiro de backup lhe será enviado por e-mail e que nenhum restauro automático no seu alojamento Cloud Web será feito pela OVHcloud.
>>
>> ![Confirmação da geração do backup](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/ftp-ssh/generate-a-backup-step-2.png){.thumbnail}
>>
>> Clique em `Confirmar`{.action} para confirmar o seu pedido.
>>
> **Etapa 5**
>>
>> Se a geração do backup foi iniciada com sucesso, a seguinte mensagem aparecerá na sua Área de Cliente OVHcloud:
>>
>> ![Mensagem de progresso do backup](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/ftp-ssh/message-backup-progress.png){.thumbnail}
>>
>> A geração do backup demora entre 10 e 15 minutos.
<!-- CP-STEPS-END:access-ftp-backup -->

### Descarregar o backup

Uma vez finalizada a geração do backup, receberá um e-mail no endereço de e-mail associado ao identificador administrador do seu alojamento Cloud Web.

Este e-mail contém um link de download **válido para 9 dias** a contar a partir da receção do e-mail:

![E-mail de download do backup](/pages/assets/screens/email-sending-to-customer/cloud-web/backup-information.png){.thumbnail}

O ficheiro assim descarregado está no formato *.tar.gz*.

### Restaurar o seu backup

Depois de fazer o download dos seus ficheiros, poderá [ligar-se ao seu espaço FTP](/pages/web_cloud/web_hosting/ftp_connection) através de um software FTP como o [Filezilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide) e, em seguida, substituir os ficheiros que pretende pelos que recuperou.

> [!primary]
>
> Utilize as portas indicadas na [Área de Cliente OVHcloud](/links/manager) para as ligações SFTP e SSH, pois a porta 22 não estará funcional para o seu alojamento Cloud Web.
>

## Quer saber mais? 

[Aceder ao espaço de armazenamento do alojamento Web](/pages/web_cloud/web_hosting/ftp_connection)

[Ligar-se através do software Filezilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](/links/partner).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Fale com nossa [comunidade de utilizadores](/links/community).