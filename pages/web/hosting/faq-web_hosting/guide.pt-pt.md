---
title: FAQ
excerpt: 'Encontre aqui as questões mais comuns sobre os alojamentos web da OVHcloud'
slug: faq-alojamento
section: Introdução
---

**Última atualização: 28/07/2020**

## FAQ sobre os alojamentos web da OVHcloud


### O que fazer se o meu site tiver um problema de funcionamento? 

Há várias razões que podem explicar um problema de funcionamento do seu site. A fim de identificar a causa, comece por verificar que todos os seus serviços se encontram renovados e ativos. Para isso, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}. Depois, consulte os [trabalhos em curso](https://web-cloud.status-ovhcloud.com/){.external}. Se todos os seus serviços se encontrarem ativos e nenhum trabalho em curso estiver a afetar o seu site, realize um diagnóstico mais aprofundado recorrendo aos nossos [guias de diagnóstico](../){.external}.

**Truques e dicas**: Se o seu site ficar subitamente indisponível no seguimento de uma manipulação da sua parte, pode restaurar o conteúdo a partir da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}. Para isso, aceda ao separador `FTP - SSH` do seu alojamento e clique no botão `Restaurar um backup`{.action}, situado à direita do ecrã. Pode igualmente aceder à seguinte documentação: [Restaurar o espaço de armazenamento do alojamento web](../restauracao-ftp-filezilla-area-de-cliente/).

### Como configurar o meu alojamento? 

Para configurar o seu alojamento, comece por aceder à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}. Depois, na rubrica `Alojamento`, pode gerir os certificados SSL, as versões PHP, os CDN, os multisites, as bases de dados...

**Truques e dicas**: De modo a facilitar a configuração do seu alojamento, sugerimos que consulte a rubrica <br> «Introdução», que pode encontrar [aqui](../).

### Como criar ou eliminar um elemento no meu produto/serviço (conta de e-mail, base de dados...)?

Para criar ou eliminar um elemento, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} e a seguir selecione o produto em causa (`E-mail`, `Base de dados`, `Módulos`). Assim, poderá fazer o seu produto evoluir conforme desejar.

**Truques e dicas**: a partir da [Área de Cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, pode realizar backups regulares das suas bases de dados.

### Como gerir as minhas palavras-passe? 

Para gerir as suas palavras-passe, antes de mais tem de aceder à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}. Se tiver esquecido o ID ou a palavra-passe, clique em `ID ou palavra-passe esquecidos`{.action}, na janela de login. Receberá um e-mail para dar início a um processo de reinicialização.
Pode também consultar o guia [Definir e gerir a palavra-passe da sua conta](../../customer/gerir-a-palavra-passe/){.external}.

Quando estiver conectado à Área de Cliente, pode gerir os diferentes acessos, como: 

* o acesso ao servidor FTP e às bases de dados: para o fazer, aceda à rubrica `Alojamento` da [Área de Cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external} e selecione o produto/serviço em causa;
* o acesso aos e-mails: a partir da [Área de Cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, clique na rubrica `E-mail`.

**Truques e dicas**: No caso de um serviço E-mail Pro ou Exchange, pode igualmente gerir os acessos a partir dos webmails respetivos.

### Como pôr o meu site em linha? 

Para pôr o seu site em linha na OVHcloud, deve dispor de um domínio, que corresponderá ao endereço a partir do qual o site ficará acessível (por exemplo: ovh.com). Também deve dispor de um alojamento web. Se desejar, pode consultar este guia: [Publicar um site num alojamento web](../partilhado_colocar_o_meu_website_online/)

**Truques e dicas**: Para o ajudar a criar o seu site, a OVHcloud disponibiliza módulos 1 clique (por exemplo, Wordpress, Prestashop, Joomla ou Drupal). Encontre-os [aqui](https://www.ovhcloud.com/pt/web-hosting/uc-website/). Também pode consultar a nossa [documentação](../partilhado_guias_dos_modulos_dos_alojamentos_partilhados/).

### Como migrar o meu site e os meus e-mails para a OVHcloud? 

Para migrar o seu site e os seus e-mails para a OVHcloud, deve dispor de um [serviço de alojamento web](https://www.ovhcloud.com/pt/web-hosting/){.external}, bem como de um [serviço de e-mail OVHcloud](https://www.ovhcloud.com/pt/emails/){.external}. De seguida, poderá ligar-se ao servidor FTP do seu alojamento, de modo a transferir para ele os ficheiros do site. Se dispõe atualmente de uma base de dados, sugerimos que realize o respetivo backup. 

Para migrar os e-mails, tem de recriar as suas contas na OVHcloud e, depois, utilizar a nossa ferramenta de migração [OMM (OVH Mail Migrator)](https://omm.ovh.net/), que encontrará [aqui](https://omm.ovh.net/). 

Cumpridas estas etapas, poderá alterar a zona DNS do seu domínio, para que ela possa, dentro de 1 a 24 horas, apontar para a nossa infraestrutura. Se desejar informações complementares, consulte o guia [Como migrar um site e e-mails para a OVH](../migrar-site-para-ovh/).

**Truques e dicas**: Quanto à transferência dos seus ficheiros, pode utilizar um programa como o Filezilla ou o Cyberduck, recorrendo à nossa [documentação](../partilhado_guia_de_utilizacao_do_filezilla/).

### Como alojar vários sites num alojamento partilhado?

Se é um utilizador experiente, pode alojar vários sites num alojamento partilhado. Para isso, deve associar outro domínio ou um subdomínio ao alojamento. O procedimento para associar ou desassociar um domínio encontra-se explicado [neste guia](../multisites-configurar-um-multisite-no-meu-alojamento-web/).

### O que fazer se, após a publicação do site, a página «Parabéns» da OVHcloud continua em exibição?

Durante a instalação do alojamento, a OVHcloud cria uma página de espera enquanto realiza a transferência dos ficheiros do seu site. Se transferir simplesmente os ficheiros para a pasta «www» sem eliminar o conteúdo criado pela OVHcloud, arrisca-se a encontrar este problema. 

De modo a corrigi-lo, deve eliminar ou renomear o ficheiro «index.html» criado pela OVHcloud no seu alojamento.
Talvez seja útil simplesmente renomeá-lo: assim, poderá reativá-lo a qualquer momento e usá-lo como página de espera. 

**Mais informação útil**: os ficheiros do seu site devem ser colocados na pasta «www» para que o site fique online.

### Como fazer evoluir a minha oferta de alojamento web?

Se pretender alterar a sua oferta atual para uma oferta superior, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, na rubrica `Web Cloud`{.action}. Depois, clique em `Alojamentos`{.action} na barra de serviços situada à esquerda e selecione o plano correspondente.

No separador `Informações gerais`, no quadro `Subscrição`, clique no botão `...`{.action} à frente "Oferta" e depois clique em `Alterar oferta`{.action}. Siga as seguintes instruções para finalizar a sua encomenda. A nova oferta inclui um prorata temporis do tempo restante da sua oferta atual.

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
