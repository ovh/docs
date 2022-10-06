---
title: Como proteger o seu website?
excerpt: Saiba como reforçar a segurança do seu website 
slug: secure-website
section: Otimizar o seu site
order: 01
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 24/11/2021**

## Objetivo

Este guia permite-lhe adquirir conhecimentos fundamentais para assegurar a disponibilidade dos seus serviços, proteger a integridade dos seus dados e proteger o acesso às suas soluções. Apenas diz respeito aos websites alojados nas [soluções partilhadas da OVHcloud](https://www.ovhcloud.com/pt/web-hosting/).

É organizado por etapas, por ordem crescente de importância e de dificuldade técnica, o que significa que os primeiros passos são os mais indispensáveis. A segurança do seu site será medida pelo elemento que lhe diz respeito que está menos protegido. Recomendamos que realize o conjunto das ações descritas. No entanto, se encontrar dificuldades em realizar algumas das operações descritas aqui, não hesite em contactar a [comunidade OVHcloud](https://community.ovh.com/en/) ou os nossos [parceiros](https://partner.ovhcloud.com/pt/).

**Descubra como proteger o seu website.**

> [!warning]
>
> A OVHcloud disponibiliza-lhe serviços cuja configuração e gestão são da responsabilidade do cliente. O cliente é o único responsável pelo seu bom funcionamento.
>
> Este manual fornece as instruções necessárias para usar as funcionalidades básicas de um servidor. No entanto, caso encontre dificuldades, recomendamos que contacte um fornecedor especializado e/ou o editor do serviço. De facto, a OVHcloud não lhe poderá fornecer assistência. Para mais informações, aceda à secção deste manual intitulada: [Quer saber mais?](#gofurther)
>

## Requisitos

- um [plano OVHcloud Web Hosting](https://www.ovhcloud.com/pt/web-hosting/)
- ter os [detalhes de login](../aceder-espaco-de-armazenamento-ftp-alojamento-web/#1-recuperar-as-informacoes-de-acesso) para acessar o espaço de armazenamento do seu plano de hospedagem
- acesso ao [Painel de Controlo da Nuvem OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)
- acesso à [interface admin para o seu site](https://codex.wordpress.org/pt-br:Primeiros_Passos_com_o_WordPress){.external}

## Instruções

### Etapa 1: verifique a segurança dos seus aparelhos <a name="local"></a>

Este primeiro passo é fundamental. De facto, a infeção do seu computador com um software malicioso pode potencialmente dar acesso, a uma pessoa mal intencionada, a todas as apreensões efetuadas no seu teclado. Assim, as credenciais que utiliza para se ligar à Área de Cliente OVHcloud ou à interface de administração do seu site podem estar comprometidas.

Além disso, o fenómeno crescente dos [ransomware](https://www.ncsc.gov.uk/guidance/mitigating-malware-and-ransomware-attacks){.external} (cerca de 400 casos em França em 2020) pode não só levar à encriptação do conjunto dos seus dados pessoais, mas também pôr em perigo a sua atividade ao tornar inacessível o conjunto dos seus dados, aparelhos e softwares. 

Em primeiro lugar, verifique a segurança do seu computador Windows, MacOS ou Linux:

- verifique as atualizações da sua máquina;
- faça uma análise completa do seu computador, após ter atualizado o seu software antivírus/anti-malware;
- altere regularmente a palavra-passe do administrador do seu computador (para mais informações sobre a escolha das palavras-passe, siga as instruções deste [guia](../../customer/saber_tudo_sobre_o_identificador_de_cliente/#criar-uma-password-solida-e-unica)).

### Etapa 2: proteja a sua Área de Cliente OVHcloud

Para proteger a sua conta de cliente, [ative a dupla autenticação](../../customer/proteger-a-sua-conta-com-uma-2FA/) e siga as instruções deste [guia](../../customer/saber_tudo_sobre_o_identificador_de_cliente/).

Atualize as [informações da sua conta de cliente](../../customer/saber_tudo_sobre_o_identificador_de_cliente/#modificar-as-minhas-informacoes-pessoais) e adicione um **e-mail de segurança**.<br>
Em caso de perda dos seus dados de acesso e/ou de indisponibilidade do endereço de e-mail principal da sua conta de cliente OVHcloud, ser-nos-á indispensável um e-mail de SOS ou informações pessoais atualizadas para o ajudar a encontrar o acesso às suas soluções.

### Etapa 3: efetue backups regulares do seu site <a name="backup"></a>

> [!primary]
>
> Fazer o backup regular dos seus dados, independentemente da oferta, é o gesto mais importante em termos de segurança informática. Será sempre possível reinstalar um programa ou encomendar um novo aparelho, mas é muito difícil recuperar os dados depois de estes terem sido perdidos.
>
> A OVHcloud efetua regularmente backups dos seus dados na sua infraestrutura. No entanto, um erro de manipulação, como uma operação de eliminação lançada numa base de dados em produção, ou uma não renovação dos seus serviços, pode implicar a perda definitiva dos seus dados.
>

Primeiro, faça o backup dos dados que compõem o seu (ficheiros FTP **E** base de dados) seguindo as instruções deste [guia](../exportar-o-seu-website/). Importe-os no seu computador ou num suporte externo, do tipo servidor NAS ou pen USB.

Os softwares de gestão de websites (CMS) oferecem também a possibilidade de instalar plugins de backup automático.<br>
Consulte os fóruns oficiais do seu CMS preferido ou contacte a [comunidade OVHcloud](https://community.ovh.com/en/) a este respeito.

### Etapa 4: saiba como reconhecer os e-mails fraudulentos

Os e-mails de phishing também constituem uma ameaça para a segurança do seu site, pois podem conter ou levar à instalação de softwares maliciosos. Para saber como reconhecê-los e protegê-los, consulte este [guia](../../customer/fraudes-online-phishing/).

### Etapa 5: implementar a renovação automática

Em caso de não renovação dos seus serviços, a OVHcloud tem a obrigação legal, no final da subscrição, de eliminar integralmente os dados associados à sua oferta de alojamento, bem como a totalidade dos seus backups. Enviamos mensagens de aviso aos nossos clientes para lhes recordar os prazos de renovação.<br>
No entanto, estes e-mails de relance podem chegar aos seus spams, ou o endereço de e-mail associado à sua conta OVHcloud pode estar errado ou já não estar disponível.

Se o seu site tem um lugar preponderante na sua atividade profissional, [ative a renovação automática](../../billing/guia_de_utilizacao_da_renovacao_automatica_da_ovh/#aceder-a-parametrizacao-dos-seus-servicos) no conjunto dos seus serviços OVHcloud.<br>
Além disso, recomendamos que verifique regularmente a **validade dos métodos de pagamento** que registou.

### Etapa 6: verifique que o seu site está atualizado

Verifique regularmente as atualizações do seu site seguindo as instruções deste [guia](../site-desativado-por-hack/#22-atualizar-o-website).

Também pode usar uma versão recente da [linguagem PHP](../configurar_o_php_num_alojamento_web_alojamentos_2014_ovh/) no seu alojamento.

### Etapa 7: ative o https

Implemente a ligação encriptada ao seu website através do protocolo **HTTPS** seguindo este [guia](../ativar-https-website-certificado-ssl/). A ativação deste protocolo vai permitir encriptar o conjunto das informações que transitam pelo seu website (nomeadamente as introduções efetuadas pelos seus utilizadores nos seus formulários).

### Etapa 8: proteja os seus formulários

Os formulários dos websites são alvos privilegiados dos hackers/spammers. Proteja os seus formulários de qualquer ataque implementando plugins do tipo **"CAPTCHA"**.

### Etapa 9: implemente um plugin de segurança no seu site

Adicione ao seu site um plugin de segurança recomendado pelo editor do CMS:

- [WordPress](https://pt.wordpress.org/){.external}
- [Joomla](https://downloads.joomla.org/pt/){.external}
- [Drupal](https://www.drupal.org/){.external}
- [PrestaShop](https://www.prestashop.com/pt){.external}

### Etapa 10: verifique que o seu alojamento não contém ficheiros maliciosos

Este passo requer a ligação ao seu [espaço FTP](../aceder-espaco-de-armazenamento-ftp-alojamento-web/). Implica competências técnicas para reconhecer eventuais ficheiros maliciosos no seu alojamento. Se tiver dificuldades em efetuar esta verificação, não hesite em contactar os nossos [parceiros](https://partner.ovhcloud.com/pt/).

Em caso de dúvidas, consulte [o passo 1 deste manual](#local) e [altere a palavra-passe](../alterar-palavra-passe-utilizador-ftp/) do seu espaço FTP.

### Etapa 11: teste os backups do seu site

Os [backups dos dados](#backup) do seu site (ficheiros FTP e base de dados) devem ser efetuados com regularidade.

No entanto, não constituem uma segurança absoluta. Também deve testar os backups da sua base de dados para verificar que estes não são corrompidos.

Poderá efetuar estes testes localmente, por exemplo, através da importação dos seus dados para um software do tipo [WAMP](https://www.wampserver.com/){.external}. De seguida, certifique-se de que a sua solução local corresponde em todos os pontos à dos nossos [servidores de alojamento partilhado](https://webhosting-infos.hosting.ovh.net/).

Também pode criar uma **versão de teste** do seu site (ex: teste.meudominio.tld) noutra pasta do seu alojamento (será perfeitamente possível utilizar um template de base).

## Quer saber mais? <a name="gofurther"></a>

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, convidamo-lo a consultar as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.
