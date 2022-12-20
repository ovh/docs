---
title: "Casos de uso - Conselhos após a pirataria do seu website"
excerpt: "Descubra os nossos conselhos para reparar o seu website pirateado"
slug: piratagem_do_seu_website_wordpress_conselhos_e_casos_praticos
section: "Tutoriais"
order: 01
---

**Última atualização: 15/11/2022**

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>
  
## Objetivo

Este tutorial tem como objetivo ajudá-lo quando verificar que o seu website foi hackeado. Encontra-se em seguida **os 4 passos a realizar por ordem** para corrigir esta situação.

A pirataria pode manifestar - se de várias formas (lista não exaustiva):

- o seu website deixou de aparecer corretamente ou de forma nenhuma, sem nenhuma alteração (FTP, SQL ou DNS) da sua parte;
- o seu website é reencaminhado para outro website;
- o seu website gera "anúncios" intempestivos (Pop-ups, janelas de erros, etc);
- a base de dados do seu website está subitamente preenchida;
- recebe a partir do seu alojamento SPAM gerados por scripts infetados.

**Descubra os nossos conselhos para reparar o seu website pirateado**

> [!warning]
>
> A OVHcloud disponibiliza serviços cuja configuração, gestão e responsabilidade lhe incumbem. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Colocamos à sua disposição este tutorial para o acompanhar o melhor possível em tarefas comuns. No entanto, se encontrar dificuldades, recomendamos que recorra a um [fornecedor especializado](https://partner.ovhcloud.com/pt/). Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção [Quer saber mais?](#go-further) deste manual.
>

## Requisitos

- Ter [oferta de alojamento Web Cloud](https://www.ovhcloud.com/pt/web-hosting/) com o seu website alojado em cima.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).

## Instruções

A pirataria de um website está sistematicamente ligada a **pelo** menos um dos seguintes pontos:

- falta de atualizações do website;
- um software de espião presente num dos dispositivos que utiliza para administrar o seu website;
- a utilização de um plugin ou de um tema "não oficial", nomeadamente se utiliza um Content Managment System (CMS) como WordPress, Joomla!, PrestaShop ou Drupal;
- palavras-passe (FTP, SQL, back office para os CMS, etc) demasiado curtas ou demasiado fáceis de encontrar, tanto mais quando nunca são alteradas;
- um script do seu site que abre deliberadamente portas ao nível do seu alojamento Web *** verificar o que é recebido por estas portas;
- direitos de acesso FTP "CHMOD" demasiado permissivos.

**A pirataria de um website não vem de uma falha de segurança do alojamento web.** Apenas os scripts/ficheiros que aloja estão em condições de dar ordens ao alojamento. Podem pedir-lhe ou não que abra determinadas portas de acesso fechadas por predefinição ou que execute ou não certas ações.<br>
Os scripts ordenam, o alojamento executa.

### Etapa 1 - scanner o conjunto dos seus aparelhos

Realize uma análise antivírus e anti-spywares de todos os dispositivos (PC, Mac, smartphone/Iphone, tablet,...) a partir dos quais gere a administração ou a gestão do seu website.

> [!warning]
>
> Se utiliza dispositivos que funcionam sob *Linux*, *Mac OS* ou outros sistemas operativos para os quais é geralmente estipulado que não existe risco de ter um vírus ou um software "espião", **realize, no entanto, esta análise**.
>
> **Nenhum sistema operativo está imune ao malware/malware.**
>

> [!success]
>
> Recomendamos que utilize vários antivírus/anti-spywares (gratuitos ou pagos) para cada um dos seus aparelhos.
> Efetivamente, alguns vírus ou spywares podem persistir em função do software antivírus utilizado.
> Existem versões anti-vírus/anti-spywares que pode instalar "localmente" no seu dispositivo ou utilizar diretamente "online" na Internet.
>

Se for encontrado um vírus ou um software de espião, elimine-o com o seu software antivírus/anti-spywares **antes** de passar à etapa seguinte.

### Etapa 2 - modificar as palavras-passe <a name="step2"></a>

Quando um website for hackeado, altere, por precaução, todas as palavras-passe relacionadas com o mesmo.

No que diz respeito à OVHcloud, utilize a nossa documentação para:

- [Alterar a palavra-passe de acesso ao seu identificador de cliente OVHcloud](https://docs.ovh.com/pt/customer/gerir-a-palavra-passe/).
- [Proteger o acesso à sua Área de Cliente OVHcloud com uma dupla autenticação](https://docs.ovh.com/pt/customer/proteger-a-sua-conta-com-uma-2FA/).
- [Alterar a palavra-passe de acesso ao espaço de armazenamento FTP do seu alojamento Web](https://docs.ovh.com/pt/hosting/alterar-palavra-passe-utilizador-ftp/).
- [Alterar palavra-passe de acesso à base de dados](https://docs.ovh.com/pt/hosting/alterar-palavra-passe-base-de-dados/).

Também recomendamos que utilize um [gestor de palavras-passe](https://docs.ovh.com/pt/customer/gerir-a-palavra-passe/#utilizar-um-gestor-de-palavras-passe).

> [!warning]
> 
> Ao alterar a palavra-passe da sua base de dados, não se esqueça de atualizar também a palavra-passe no ficheiro de configuração do seu website. Caso contrário, a ligação entre a base de dados e os ficheiros presentes no espaço de armazenamento FTP do seu alojamento Web será interrompida e o seu site apresentará um "erro ao aceder à sua base de dados".
>

> [!primary]
>
> Se utilizar um CMS como WordPress, Joomla!, PrestaShop ou Drupal, consulte a documentação oficial do seu CMS para alterar a palavra-passe de acesso ao espaço de administração do seu CMS ("Back office").
>

#### Etapa 3 - procurar os ficheiros maliciosos e as falhas de segurança

> [!warning]
>
> Se encontrar dificuldades para efetuar as ações descritas abaixo, recorra a um prestador de [serviços especializado](https://partner.ovhcloud.com/pt/) em cibersegurança.
>

Utilize o nosso manual sobre [estatísticas e logs do seu alojamento web](https://docs.ovh.com/pt/hosting/partilhado_consultar_as_estatisticas_e_os_logs_do_meu_site/) para pesquisar os elementos maliciosos injetados no seu website. As informações podem ser encontradas nos logs "web". 

Comece a procurar a partir da data na qual constatou a pirataria, e volte ao histórico dos seus logs.

Identifique os pedidos "POST" que saem do normal. Geralmente, os ficheiros maliciosos têm nomes alfanuméricos sem nenhum significado particular (**exemplos** : az78e4jFn.txt, oij8bh4.html, udh73hd45.php, mlkjc23d.js, ...).

Consulte o endereço IP que efetuou o pedido malicioso. De seguida, verifique esse endereço nos seus logs para consultar o conjunto das ações pedidas no seu site por este IP.

> [!primary]
>
> Geralmente, vários endereços IP maliciosos chamam, durante o mesmo período, os scripts maliciosos presentes na sequência de pirataria.
> Levem o tempo de analisar todos os logs do seu alojamento.
>

Comunique assim até às falhas de segurança presentes no seu site lendo os ficheiros maliciosos que encontra.

> [!success]
>
> Vários websites (não geridos pela OVHcloud) podem permitir-lhe obter informações sobre os endereços IP maliciosos. Pode utilizar um deles para recuperar informações tais como o fornecedor do IP, a sua geolocalização, o gestor, etc...
>
> Se tem a certeza absoluta de que se trata de um IP malicioso, pode bloquear o acesso ao seu alojamento seguindo a nossa documentação sobre as [restrições de acesso através do ficheiro ".htaccess"](https://docs.ovh.com/pt/hosting/partilhado_htacess_como_impedir_que_certos_ips_acedam_ao_meu_website/).
> 

### Etapa 4 - eliminar os elementos maliciosos e corrigir as falhas de segurança

Nesta etapa, são possíveis três casos: 

> [!alert]
>
> **Importante*: Em qualquer caso, se eliminar os códigos maliciosos sem corrigir as falhas de segurança, o pirata informático poderá voltar a explorá-los para voltar a introduzir o código malicioso no seu alojamento. Poderia até criar uma nova porta das traseiras.
>
> O restauro numa data anterior à pirataria requer uma atualização **imediata** e a realização indispensável de uma **auditoria de segurança**, a fim de identificar todas as falhas de segurança.
>

#### Caso nº 1 - A OVHcloud dispõe de um backup do seu website (espaço de armazenamento FTP e base de dados)

Em função da data de pirataria do seu site (menos de 14 dias), a OVHcloud pode fornecer-lhe uma cópia de segurança (não contratual).

Para isso, consulte os nossos 3 guias sobre o assumpto:

- [Restaurar o espaço de armazenamento FTP do seu alojamento Web](https://docs.ovh.com/pt/hosting/restauracao-ftp-filezilla-area-de-cliente/)
- [Recuperar o backup SQL da sua base de dados](https://docs.ovh.com/pt/hosting/partilhado_guia_de_exportacao_de_uma_base_de_dados_mysql/)
- [Importar o backup SQL para a sua base de dados](https://docs.ovh.com/pt/hosting/partilhado_guia_de_importacao_de_uma_base_de_dados_mysql/)

Façam coincidir ao máximo as datas de restauro do seu espaço de armazenamento FTP e da sua base de dados SQL.

>[!warning]
>
> A OVHcloud dispõe de robôs de segurança que podem detetar ações maliciosas realizadas a partir do seu alojamento. Estes últimos desativam o seu alojamento e notificam-no por e-mail de que o seu alojamento foi desativado.
> Além deste e-mail, uma página "403 Forbidden" aparece normalmente quando tenta aceder ao seu website.
>
> Se o seu alojamento estiver desativado, os robôs de restauro automático disponíveis a partir do seu [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt) também serão desativados.
> Deve obrigatoriamente efetuar um restauro "manual" do seu site, eliminar os elementos maliciosos residuais e corrigir todas as falhas de segurança presentes neste backup. Isto **antes** de reativar o alojamento.
>
> Para reativar o alojamento Web, siga as instruções indicadas no passo 4 deste [guia](https://docs.ovh.com/pt/hosting/diagnostico-403-forbidden/).
>

O seu website deverá reaparecer se estas ações foram corretamente realizadas.

### Caso n°2 - dispõe do seu próprio backup antes da pirataria

Para isso, consulte os nossos 2 guias sobre o assumpto:

- [Restaurar o espaço de armazenamento FTP do seu alojamento Web](https://docs.ovh.com/pt/hosting/restauracao-ftp-filezilla-area-de-cliente/)
- [Importar o backup SQL para a sua base de dados](https://docs.ovh.com/pt/hosting/partilhado_guia_de_importacao_de_uma_base_de_dados_mysql/)

>[!warning]
>
> A OVHcloud dispõe de robôs de segurança que podem detetar ações maliciosas realizadas a partir do seu alojamento. Estes últimos desativam o seu alojamento e notificam-no por e-mail de que o seu alojamento foi desativado.
> Além deste e-mail, uma página "403 Forbidden" aparece normalmente quando tenta aceder ao seu website.
>
> Se o seu alojamento estiver em estado "desativado", efetue um restauro "manual" do seu site, elimine os elementos maliciosos residuais e corrija todas as falhas de segurança presentes neste backup. Isto **antes** de reativar o alojamento.
>
> Para reativar o alojamento Web, siga as instruções indicadas no passo 4 deste [guia](https://docs.ovh.com/pt/hosting/diagnostico-403-forbidden/).
>

O seu website deverá reaparecer se estas ações foram corretamente realizadas.

#### Caso n°3 - não está disponível nenhum backup para o seu website

Deverá eliminar manualmente os ficheiros e os códigos maliciosos previamente detetados no [Etapa 2](#step2) deste guia e corrigir as falhas de segurança do seu site.

Para aceder ao espaço de armazenamento do alojamento, consulte o [nosso guia](https://docs.ovh.com/pt/hosting/aceder-espaco-de-armazenamento-ftp-alojamento-web/) sobre o assumpto.

> [!warning]
>
> A OVHcloud dispõe de robôs de segurança que podem detetar ações maliciosas realizadas a partir do seu alojamento. Estes últimos desativam o seu alojamento e notificam-no por e-mail de que o seu alojamento foi desativado.
> Além deste e-mail, uma página "403 Forbidden" aparece normalmente quando tenta aceder ao seu website.
>
> Se o seu alojamento está "desativado", elimine os elementos maliciosos residuais e corrija todas as falhas de segurança presentes neste backup **antes** de reativar o alojamento.
>
> Para reativar o alojamento Web, siga as instruções indicadas no passo 4 deste [guia](https://docs.ovh.com/pt/hosting/diagnostico-403-forbidden/).
>

O seu website deverá reaparecer se estas ações foram corretamente realizadas.

### Etapa 5 - Atualizar o seu site

Atualize o seu website ao nível do código fonte, dos parâmetros de segurança de que dispõe, das versões de linguagem que utiliza (nomeadamente o PHP).

Verifique as permissões de acesso FTP "CHMOD" para cada uma das pastas e ficheiros alojados no seu espaço de armazenamento.
Por predefinição, recomendamos que se utilizem ao máximo as permissões "CHMOD" **705** para os dossiers e **604** para os ficheiros.
Encontre mais detalhes sobre as permissões "CHMOD" na secção "Informações úteis" do nosso [tutorial sobre a utilização do cliente FTP Filezilla](https://docs.ovh.com/pt/hosting/partilhado_guia_de_utilizacao_do_filezilla/#useful-information).

Se utilizar um CMS (Wordpress, Joomla!, PrestaShop, Drupal, etc.), atualize os seus plugins, o seu tema e o CMS em si.
Privilegie a utilização de plugins/temas "oficiais" e mantenha o seu website atualizado o mais regularmente possível e de forma exaustiva.

Proteja os seus formulários de contacto com um sistema do tipo "Captcha", para evitar que robôs maliciosos emitam SPAM desta forma. Se a função "mail()" de PHP tiver sido bloqueada no seu alojamento, consulte o [nosso guia](https://docs.ovh.com/pt/hosting/alojamento_partilhado_seguimento_dos_emails_automatizados/) para resolver este bloqueio.

Consulte também o nosso manual sobre [como proteger o seu website](ttps://docs.ovh.com/pt/hosting/secure-website/) para minimizar o risco de novos ataques.

## Quer saber mais? <a name="go-further"></a>

[Aceder ao espaço de armazenamento do alojamento web](https://docs.ovh.com/pt/hosting/aceder-espaco-de-armazenamento-ftp-alojamento-web/)

[Alterar a configuração do alojamento web](https://docs.ovh.com/pt/hosting/modificar_o_ambiente_de_execucao_do_meu_alojamento_web//)

[Ativar firewall da aplicação](https://docs.ovh.com/pt/hosting/partilhado_ativacao_da_firewall/)

[Otimizar as performances do seu site](https://docs.ovh.com/pt/hosting/partilhado_guia_de_otimizacao_das_performances_do_seu_site/)

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>. 
