---
title: Como proteger o seu website? excerpt: Saiba como reforçar a segurança do seu website slug: secção secure-website: Otimizar o seu website 1
---

“Última atualização: 24/11/2021”.

## Sumário

Este guia permite-lhe adquirir conhecimentos fundamentais para assegurar a disponibilidade dos seus serviços, proteger a integridade dos seus dados e proteger o acesso às suas soluções. Apenas diz respeito aos websites alojados nas [soluções partilhadas da OVHcloud](https://www.ovhcloud.com/fr/web-hosting/).

É organizado por etapas, por ordem crescente de importância e de dificuldade técnica, o que significa que os primeiros passos são os mais indispensáveis. A segurança do seu site será medida pelo elemento que lhe diz respeito que está menos protegido. Recomendamos que realize o conjunto das ações descritas. No entanto, se encontrar dificuldades em realizar algumas das operações descritas aqui, não hesite em contactar a [comunidade OVHcloud](https://community.ovh.com/) ou os nossos [parceiros](https://partner.ovhcloud.com/fr/).

**Saiba como proteger o seu website.**

> [!warning]
>
> A OVHcloud disponibiliza-lhe serviços cuja configuração e gestão são da responsabilidade do cliente. O cliente é o único responsável pelo seu bom funcionamento.
>
> Este manual fornece as instruções necessárias para usar as funcionalidades básicas de um servidor. No entanto, caso encontre dificuldades, recomendamos que contacte um fornecedor especializado e/ou o editor do serviço. De facto, a OVHcloud não lhe poderá fornecer assistência. Para mais informações, aceda à secção deste manual intitulada: “Quer saber mais?”
>

## Requisitos

- um [plano OVHcloud Web Hosting](https://www.ovh.co.uk/web-hosting)
- ter os [detalhes de login](../log-in-to-storage-ftp-web-host/#step-1-retrieve-your-login-information) para acessar o espaço de armazenamento do seu plano de hospedagem
- acesso ao [Painel de Controlo da Nuvem OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)
- acesso à [interface admin para o seu site](https://wordpress.org/support/article/first-steps-with-wordpress/){.external}

## Instruções

### etapa 1 Verifique a segurança dos seus aparelhos <a name="local"></a>

Este primeiro passo é fundamental. De facto, a infeção do seu computador com um software malicioso pode potencialmente dar acesso, a uma pessoa mal intencionada, a todas as apreensões efetuadas no seu teclado. Assim, as credenciais que utiliza para se ligar à Área de Cliente OVHcloud ou à interface de administração do seu site podem estar comprometidas.

Além disso, o fenómeno crescente dos [pacotes de software](https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/rancongiciels-ransomwares)) {.external} (cerca de 400 casos em França em 2020) pode não só levar à encriptação do conjunto dos seus dados pessoais, mas também pôr em perigo a sua atividade ao tornar inacessível o conjunto dos seus dados, aparelhos e softwares. 

Em primeiro lugar, verifique a segurança do seu computador Windows, Mac ou Linux:

- verifique as atualizações da sua máquina;
- faça uma análise completa do seu computador, após ter atualizado o seu software antivírus/anti-malware;
- altere regularmente a palavra-passe do administrador do seu computador (para mais informações sobre a escolha das palavras-passe, siga as instruções deste [guia](../../customer/tout-savoir-sur-identifiant-client/)).

### etapa 2 Proteja a sua Área de Cliente OVHcloud

Para proteger a sua conta de cliente, siga as instruções deste [guia](../../customer/tout-savoir-sur-identifiant-client/).

Atualize as [informações da sua conta de cliente](../tout-savoir-sur-identifiant-client/#modifier-mes-informations-personnelles) e adicione um **e-mail de segurança**.<br>
Em caso de perda dos seus dados de acesso e/ou de indisponibilidade do endereço de e-mail principal da sua conta de cliente OVHcloud, ser-nos-á indispensável um e-mail de SOS ou informações pessoais atualizadas para o ajudar a encontrar o acesso às suas soluções.

### etapa 3 Efetue backups regulares do seu site <a name="backup"></a>

> \[!primary]
>
> Fazer o backup regular dos seus dados, independentemente da oferta, é o gesto mais importante em termos de segurança informática. Será sempre possível reinstalar um programa ou encomendar um novo aparelho, mas é muito difícil recuperar os dados depois de estes terem sido perdidos.
>
> A OVHcloud efetua regularmente backups dos seus dados na sua infraestrutura. No entanto, um erro de manipulação, como uma operação de eliminação lançada numa base de dados em produção, ou uma não renovação dos seus serviços, pode implicar a perda definitiva dos seus dados.
>

Primeiro, faça o backup dos dados que compõem o seu (ficheiros FTP **E** base de dados) seguindo as instruções deste [guia](../exporter-son-site-web/). Importe-os no seu computador ou num suporte externo, do tipo servidor NAS ou pen USB.

Os softwares de gestão de websites (CMS) oferecem também a possibilidade de instalar plugins de backup automático.<br>
Consulte os fóruns oficiais do seu CMS preferido ou contacte a [comunidade OVHcloud](https://community.ovh.com/) a este respeito.

### etapa 4 Saiba como reconhecer os e-mails fraudulentos

Os e-mails de phishing também constituem uma ameaça para a segurança do seu site, pois podem conter ou levar à instalação de softwares maliciosos. Para saber como reconhecê-los e protegê-los, consulte este [guia](../customer/arnaques-fraude-phishing/).

### etapa 5 Implementar a renovação automática

Em caso de não renovação dos seus serviços, a OVHcloud tem a obrigação legal, no final da subscrição, de eliminar integralmente os dados associados à sua oferta de alojamento, bem como a totalidade dos seus backups. Enviamos mensagens de aviso aos nossos clientes para lhes recordar os prazos de renovação.<br>
No entanto, estes e-mails de relance podem chegar aos seus spams, ou o endereço de e-mail associado à sua conta OVHcloud pode estar errado ou já não estar disponível.

Especialmente se não tiver a possibilidade de efetuar backups regulares e o seu site tiver um lugar preponderante na sua atividade profissional, [ative a renovação automática](../../billing/renouvellement-automatique-ovh/#acceder-au-parametrage-de-vos-services) no conjunto dos seus serviços OVHcloud.<br>
Além disso, recomendamos que verifique regularmente a validade dos métodos de pagamento que registou.

### etapa 6 Verifique que o seu site está atualizado

Verifique regularmente as atualizações do seu site seguindo as instruções deste [guia](../site-ferme-pour-hack/#22-mettre-a-jour-votre-site-internet).

Também pode usar uma versão recente da [linguagem PHP](../configurer-le-php-sur-son-hebergement-web-mutu-2014/) no seu alojamento.

### etapa 7 Ative o https

Implemente a ligação encriptada ao seu site através do protocolo **HTTPS**, seguindo este [guia](../passer-site-internet-https-ssl/).

### etapa 8 Proteja os seus formulários

Os formulários dos websites são alvos privilegiados dos hackers/spammers. Proteja os seus formulários de qualquer ataque implementando plugins do tipo **"CAPTCHA"**.

### etapa 9 Implemente um plugin de segurança no seu site

Adicione ao seu site um plugin de segurança recomendado pelo editor do CMS:

- [Wordpress](https://wordpress.com/fr/){.external}
- [Joomla](https://www.joomla.fr/){.external}
- [Drupal](https://www.drupal.fr/){.external}
- [Prestashop](https://www.prestashop.com/fr){.external}

### etapa 10 Verifique que o seu alojamento não contém ficheiros maliciosos

Este passo requer a ligação ao seu [espaço FTP](../connexion-espace-stockage-ftp-hebergement-web/). Implica competências técnicas para reconhecer eventuais ficheiros maliciosos no seu alojamento. Se tiver dificuldades em efetuar esta verificação, não hesite em contactar os nossos [parceiros](https://partner.ovhcloud.com/fr/).

Em caso de dúvidas, consulte [o passo 1 deste manual](#local) e [altere a palavra-passe](../modifier-mot-de-passe-utilisateur-ftp/) do seu espaço FTP.

### etapa 11 Teste os backups do seu site

Os [backups dos dados](#backup) do seu site (ficheiros FTP e base de dados) devem ser efetuados com regularidade.

No entanto, não constituem uma segurança absoluta. Também deve testar os backups da sua base de dados para verificar que estes não são corrompidos.

Poderá efetuar estes testes localmente, por exemplo, através da importação dos seus dados para um software do tipo [WAMP](https://www.wampserver.com/) {.external}. De seguida, certifique-se de que a sua solução local corresponde em todos os pontos à dos nossos [servidores de alojamento partilhado]().

Também pode criar uma **versão de teste** do seu site (ex: teste.meudominio.tld) noutra pasta do seu alojamento (será perfeitamente possível utilizar um template de base).

## Quer saber mais?

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/fr/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, convidamo-lo a consultar as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/fr/support-levels/).

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/>.
