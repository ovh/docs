---
title: "Como alterar a palavra-passe de um CMS"
excerpt: "Saiba como alterar a palavra-passe de administrador do seu CMS diretamente através da interface de administração do CMS ou utilizando o phpMyAdmin a partir da Área de Cliente OVHcloud"
updated: 2024-10-15
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

Perdeu o acesso à sua interface de administração WordPress, PrestaShop, Joomla! ou Drupal? Ou pretende apenas reforçar a segurança do seu website alterando a palavra-passe de administrador? Neste guia, encontrará instruções passo a passo, quer diretamente através da interface de administração do CMS ou utilizando o phpMyAdmin a partir da Área de Cliente OVHcloud.

**Saiba como alterar a palavra-passe de administrador nos CMS WordPress, PrestaShop, Joomla! e Drupal, de forma a garantir a segurança e o acesso ótimo ao seu website.**

## Requisitos

- Ter um [plano de alojamento web](/links/web/hosting) que permite a instalação de um módulo em 1 clique.
- Ter criado um módulo 1 clique no seu alojamento web (se ainda não realizou esta instalação, siga as instruções deste [guia](/pages/web_cloud/web_hosting/cms_install_1_click_modules)).
- Ter acesso à [Área de Cliente OVHcloud](/links/manager) (apenas para a parte associada ao phpMyAdmin).

## Instruções

Existem vários métodos para alterar a palavra-passe de administrador do seu CMS em função da sua situação:

- [através de correio eletrónico automático (esqueceu-se da palavra-passe)](#via-email)
- [através da interface de administração do seu CMS](#via-cms)
- [via phpMyAdmin a partir da Área de Cliente OVHcloud](#via-phpmyadmin)

> [!warning]
>
> A OVHcloud disponibiliza serviços cuja configuração, gestão e responsabilidade lhe incumbem. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Colocamos à sua disposição este tutorial para o acompanhar o melhor possível em tarefas comuns. No entanto, se precisar de ajuda, recomendamos que recorra a um [fornecedor especializado](/links/partner) ou ao editor do CMS. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção [Quer saber mais?](#go-further) deste tutorial.
>
> Para contactar os diferentes editores dos CMS acima mencionados, consulte as ligações às respetivas páginas oficiais:
>
> - [WordPress](https://wordpress.com/support/){.external}
> - [Joomla!](https://www.joomla.org/){.external}
> - [Drupal](https://www.drupal.org/){.external}
> - [PrestaShop](https://www.prestashop.com/en/support){.external}

### Alterar a palavra-passe de administrador através do e-mail automático (palavra-passe esquecida) <a name="via-email"></a>

Ainda tem acesso aos e-mails e à interface de ligação? Este método é o mais rápido, evitando aceder aos parâmetros do CMS ou passar pelo phpMyAdmin.

> [!tabs]
> WordPress
>>
>> Para alterar a sua palavra-passe de administrador WordPress através da opção "Palavra-passe Esquecida", siga os passos da secção "[Through the automatic emailer](https://wordpress.org/documentation/article/reset-your-password/#through-the-automatic-emailer)" da documentação oficial do WordPress.
>>
> PrestaShop
>>
>> Aceda à interface de ligação PrestaShop do seu website (do tipo `https://your-domain.com/admin/`) e clique "Palavra-passe esquecida" para receber um e-mail convidando-o a reinicializar a sua palavra-passe.
>>
> Joomla!
>>
>> Altere a sua palavra-passe de administrador Joomla! através da opção "Palavra-passe Esquecida", siga os passos indicados na secção "[Frontend](https://docs.joomla.org/Resetting_a_user_password/en)" da documentação oficial do Joomla!.
>>
> Drupal
>>
>> Para alterar a palavra-passe do administrador Drupal usando a opção "palavra-passe esquecida", siga estes passos:
>>
>> - Aceda à interface de ligação administrador.
>> - Clique no link "Pedir uma nova palavra-passe".
>> - Na caixa de diálogo que surgir, introduza o nome de utilizador ou o endereço de e-mail associado à conta de administrador.
>> - Clique "Enviar uma nova palavra-passe" ou "E-mail nova palavra-passe".
>> - Abra o e-mail recebido e clique no link fornecido.
>> - Introduza a sua nova palavra-passe e confirme.
>> - Volte para a página de login do Drupal e conecte-se com a nova palavra-passe que você acabou de definir.

### Alterar a palavra-passe de administrador através do CMS <a name="via-cms"></a>

Tem acesso à interface de administração do CMS e conhece a sua palavra-passe atual? Altere a palavra-passe diretamente a partir das definições da sua conta de administrador.

> [!tabs]
> WordPress
>> Para alterar a sua palavra-passe de administrador WordPress através da interface de gestão do CMS, siga os passos da secção "[To Change Your Password](https://wordpress.org/documentation/article/reset-your-password/#to-change-your-password)" da documentação oficial do WordPress.
>>
> PrestaShop
>>
>> A documentação oficial do PrestaShop não explica como alterar a palavra-passe de administrador através da interface de ligação. Consulte a [documentação oficial do PrestaShop](https://help-center.prestashop.com/hc/en-us/articles/10799006732818-Recover-your-admin-password) para encontrar um método alternativo de atualização da palavra-passe.
>>
> Joomla!
>>
>> Altere a palavra-passe do administrador Joomla! através da interface de administração. Siga os passos indicados na secção "[Backend](https://docs.joomla.org/Resetting_a_user_password/en)" da documentação oficial do Joomla!.
>>
> Drupal
>>
>> A documentação oficial do Drupal não explica como alterar a palavra-passe de administrador através da interface de login. Consulte [documentação oficial do Drupal](https://www.drupal.org/node/44164) para encontrar um método alternativo de atualização da palavra-passe.

### Alterar a palavra-passe de administrador através do phpMyAdmin a partir da Área de Cliente OVHcloud <a name="via-phpMyAdmin"></a>

Já não tem acesso à interface de administração do CMS ou não pode utilizar a funcionalidade "Esqueceu-se da Palavra-passe" porque o endereço de e-mail associado está inacessível? Utilize o phpMyAdmin a partir da [Área de Cliente OVHcloud](/links/manager) para repor a palavra-passe diretamente a partir da base de dados.

Aceda à sua [Área de Cliente OVHcloud](/links/manager) e selecione `Web Cloud`{.action}. Clique em `Alojamentos`{.action} e escolha a oferta em causa. No separador `Bases de dados`{.action}", identifique a base de dados utilizada pelo seu CMS, clique no botão `...`{.action} e depois em `Aceder ao phpMyAdmin`{.action}.

Introduza as credenciais da base de dados (nome de utilizador e palavra-passe) definidas durante a criação da base de dados. Depois de se conectar ao phpMyAdmin, clique no respetivo separador abaixo.

> [!tabs]
> WordPress
>>
>> Siga as etapas da secção "[Through phpMyAdmin](https://wordpress.org/documentation/article/reset-your-password/#through-phpmyadmin)" da documentação oficial do WordPress.
>>
> PrestaShop
>>
>> Siga as etapas da secção "[You do not have access to your e-mail address](https://help-center.prestashop.com/hc/en-us/articles/10799006732818-Recover-your-admin-password)" da documentação oficial do PrestaShop.
>>
> Joomla!
>>
>> Siga as etapas indicadas na secção "[Resetting in phpMyAdmin](https://docs.joomla.org/Resetting_a_user_password/en)" da documentação oficial do Joomla!.
>>
> Drupal
>>
>> Depois de se conectar ao phpMyAdmin, siga estas etapas:
>>
>> - Selecione a base de dados que o Drupal utiliza para o seu website.
>> - Localize a tabela `users_field_data` (para Drupal 8 e versões posteriores) ou users (para Drupal 7 e versões anteriores).
>> - Encontre o utilizador administrador com `uid = 1`.
>> - Clique em `Modify`.
>> - No campo `pass`, selecione `MD5` na coluna `Function` à direita do campo.
>> - Digite uma nova palavra-passe na coluna do valor.
>> - Valide e guarde as modificações.

## Quer saber mais? <a name="go-further"></a>

[Como gerir o seu módulo em 1 clique](/pages/web_cloud/web_hosting/cms_manage_1_click_module)

[Tutorial - Instalar manualmente WordPress](/pages/web_cloud/web_hosting/cms_manual_installation_wordpress)

[Tutorial - Instalar manualmente Joomla!](/pages/web_cloud/web_hosting/cms_manual_installation_joomla)

[Tutorial - Instalar manualmente Drupal](/pages/web_cloud/web_hosting/cms_manual_installation_drupal)

[Tutorial - Instalar manualmente PrestaShop](/pages/web_cloud/web_hosting/cms_manual_installation_prestashop)
 
Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).
 
Fale com nossa [comunidade de utilizadores](/links/community).