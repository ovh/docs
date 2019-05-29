---
title: 'Gerir um certificado SSL num alojamento web'
slug: os-certificados-ssl-nos-alojamentos-web
excerpt: 'Saiba como gerir um certificado SSL no alojamento web da OVH'
section: SSL
order: 1
---

**Última atualização: 04/04/2019**

## Sumário

O seu alojamento web permite-lhe gerir um certificado SSL. Pode obter um destes certificados através da OVH ou importar o seu para o alojamento. Uma vez instalado, permitirá que um ou vários dos seus sites beneficiem de uma ligação SSL protegida e, portanto, que funcionem em HTTPS. 

**Saiba como gerir um certificado SSL no alojamento web da OVH.**

## Requisitos

- Ter um serviço de [alojamento web da OVH](https://www.ovh.pt/alojamento-partilhado/){.external}.
- Dispor de, pelo menos, [um domínio](https://www.ovh.pt/dominios/){.external}.
- Ter acesso à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, na secção `Web`{.action}.

## Instruções

Pode gerir o certificado SSL no alojamento web da OVH por meio de várias operações. Consulte este manual em função da operação que pretende realizar.

- [Ativar um certificado SSL no alojamento web](https://docs.ovh.com/pt/hosting/os-certificados-ssl-nos-alojamentos-web/#ativar-um-certificado-ssl-num-alojamento){.external}: permite-lhe ativar um certificado SSL no alojamento através de um serviço da OVH, gratuito ou pago, pela importação do seu próprio certificado SSL.

- [Ativar o certificado SSL num multi-site](https://docs.ovh.com/pt/hosting/os-certificados-ssl-nos-alojamentos-web/#ativar-o-ssl-num-multi-site){.external}: se o seu plano ou certificado SSL o permitem, pode fazer com que vários dos seus multi-sites beneficiem de uma ligação SSL protegida.

- [Regenerar o certificado SSL do alojamento](https://docs.ovh.com/pt/hosting/os-certificados-ssl-nos-alojamentos-web/#regenerar-o-certificado-ssl-do-alojamento){.external}: permite regenerar o certificado SSL do alojamento web quando acaba de o ativar num ou vários multi-sites. 

- [Eliminar o certificado SSL do alojamento](https://docs.ovh.com/pt/hosting/os-certificados-ssl-nos-alojamentos-web/#eliminar-o-certificado-ssl-do-alojamento){.external}: permite eliminar o certificado SSL do alojamento da OVH. Esta operação pode afetar o normal funcionamento dos sites que estejam a utilizar o certificado. 

### Ativar um certificado SSL num alojamento

O alojamento web da OVH permite-lhe ativar um [certificado SSL graças a várias soluções](https://www.ovh.com/pt/ssl/){.external}:

- o certificado SSL gratuito Let's Encrypt, [incluído num plano de alojamento web compatível](https://www.ovh.com/pt/ssl/){.external};
- um certificado SSL pago, [como opção num plano de alojamento web compatível](https://www.ovh.com/pt/ssl/){.external};
- a importação do seu próprio certificado SSL para o alojamento web da OVH.

Para iniciar a ativação do certificado, aceda à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, clique em `Alojamentos`{.action} na barra à esquerda e escolha o nome do alojamento em causa. Certifique-se de que está no separador `Informações gerais`{.action}. Na secção “Certificado SSL”, deve surgir a menção “Não”, o que indica que não há nenhum certificado instalado no alojamento. Clique no botão que representa os três pontos junto de “Certificado SSL” e, a seguir, em `Encomendar um certificado SSL`{.action}.

Pelo contrário, se surgir a menção “Sim”, isso significa que o alojamento já tem um certificado SSL instalado. Por isso, não poderá encomendar outro enquanto o existente estiver instalado.

![managessl](images/manage-ssl-step1.png){.thumbnail}

Na janela que aparecer, selecione o certificado SSL que pretende obter. Segundo o seu [plano de alojamento web](https://www.ovh.pt/alojamento-partilhado/){.external} ou a configuração deste último, é possível que não estejam disponíveis todas as soluções especificadas acima. Selecione a opção adequada e clique em `Seguinte`{.action}.

![managessl](images/manage-ssl-step2.png){.thumbnail}

Consoante a solução escolhida, podem ser necessárias etapas adicionais:

- **Se selecionou um certificado SSL gratuito**: não deverá ser necessária nenhuma ação adicional, exceto se um elemento técnico impedir a ativação do certificado SSL (nesse caso, surgirá um aviso na Área de Cliente a indicar-lhe os elementos que deve verificar) ou a validação do domínio para a atribuição do certificado SSL. Siga as instruções que surjam na mensagem de aviso.

- **Se selecionou um certificado SSL pago**: para obter o certificado, deverá seguir as etapas que se apresentarem para completar a encomenda. Pode ser necessária uma validação especial para certos tipos de certificados SSL. Assim, é possível que receba um ou vários e-mails a respeito dessa validação. Siga as indicações dadas por eles até finalizar a instalação.

- **Se selecionou a importação de um certificado SSL**: deverá introduzir as respetivas informações nos diferentes campos que surgirem. Recorra aos dados comunicados pela entidade que lhe forneceu o certificado. 

A instalação pode requerer um período de alguns minutos até vários dias, consoante o tipo de certificado selecionado. Para verificar se o certificado SSL já está instalado no alojamento web, aceda à Área de Cliente e clique no separador `Informações gerais`{.action}. Em “Certificado SSL”, deverá surgir a menção “Sim”. 

![managessl](images/manage-ssl-step4.png){.thumbnail}

Quando estiver instalado, prossiga para a operação “[Ativar o SSL num multi-site](https://docs.ovh.com/pt/hosting/os-certificados-ssl-nos-alojamentos-web/#ativar-o-ssl-num-multi-site){.external}”, de modo a assegurar-se de que os sites em causa estão a beneficiar de uma ligação SSL ativa.

### Ativar o SSL num multi-site

Consoante o [certificado SSL](https://www.ovh.com/pt/ssl/){.external} de que dispõe, tem a possibilidade de ativar uma ligação SSL protegida num ou vários dos seus multi-sites. Para isso, aceda à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, clique em `Alojamentos`{.action} na barra à esquerda e escolha o nome do alojamento correspondente. Por fim, clique no separador `Multi-site`{.action}.

Aparecerá uma tabela com todos os domínios adicionados ao seu alojamento. Na coluna “SSL”, poderá ver se a ligação SSL protegida está ativada ou desativada nos vários multi-sites. 

![managessl](images/manage-ssl-step5.png){.thumbnail}

Podem surgir três estados diferentes:

|Estados|Descrição|
|---|---|
|Ativado|Indica que o SSL já está ativado para este multi-site. Se o seu site não estiver em HTTPS, consulte o manual “[Ativar o HTTPS num website com certificado SSL](https://docs.ovh.com/pt/hosting/ativar-https-website-certificado-ssl/){.external}”.|
|Por gerar|Indica que o SSL foi ativado para este multi-site, mas que ainda não se encontra ativo a nível técnico. Para isso, precisa de regenerar o certificado SSL do alojamento para incluir o(s) novo(s) domínio(s).|
|Desativado|Indica que o SSL não está ativado para este multi-site. Para o ativar, siga as instruções apresentadas a seguir.|

Para ativar o SSL num multi-site, clique no ícone em forma de roda dentada à direita do multi-site em causa e depois em `Alterar`{.action}. Na janela que surgir, selecione a caixa `SSL`{.action} e prossiga as etapas até validar a modificação.

Quando a ativação for requerida, o estado da ligação SSL protegida do multi-site é atualizado em alguns segundos, antes de apresentar “A gerar / atualizar”. Repita a operação se pretender ativar o SSL noutros multi-sites. De seguida, pode passar à operação “[Regenerar o certificado SSL do alojamento](https://docs.ovh.com/pt/hosting/os-certificados-ssl-nos-alojamentos-web/#regenerar-o-certificado-ssl-do-alojamento){.external}”.

![managessl](images/manage-ssl-step6.png){.thumbnail}

### Regenerar o certificado SSL do alojamento

> [!primary]
>
> Esta operação refere-se apenas aos certificados que permitem ativar uma ligação protegida SSL em vários multi-sites.
>

Depois de ter ativado a ligação protegida SSL num ou vários dos multi-sites, o estado indica: “A gerar / atualizar”. Esta geração é indispensável para adicionar o/os domínios em causa ao certificado SSL do alojamento. 

Para isso, aceda à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, clique em `Alojamentos`{.action} na barra à esquerda e escolha o nome do alojamento correspondente. Certifique-se de que está no separador `Informações gerais`{.action}. Clique no botão que representa três pontos, junto de “Certificado SSL”, e selecione `Regenerar o certificado SSL`{.action}.

![managessl](images/manage-ssl-step7.png){.thumbnail}

Na janela que surgir, leia as informações apresentadas e clique no botão `Validar`{.action}. Aguarde até que a regeneração do certificado SSL seja efetuada. Isto poderá levar várias horas.

No entanto, tenha em conta que a Let's Encrypt, a autoridade que atribui o certificado SSL gratuito ao seu alojamento web, impõe um [limite de cinco regenerações por semana](https://letsencrypt.org/docs/rate-limits/){.external}. Assim, fique atento às diferentes regenerações que possa realizar a curto prazo, de modo a evitar um bloqueio temporário.

![managessl](images/manage-ssl-step8.png){.thumbnail}

### Eliminar o certificado SSL do alojamento

Se pretender, pode eliminar o certificado SSL atualmente instalado no seu alojamento web. Contudo, antes de realizar esta operação, **aconselhamos-lhe vivamente que se certifique de que a eliminação do certificado não vai perturbar a acessibilidade dos seus sites**. Tenha em consideração que os visitantes irão ver um erro de segurança caso acedam a um site que funciona em HTTPS mas que não beneficia de uma ligação protegida SSL. 

Como esta verificação se realiza diretamente na configuração do site, recomendamos que recorra a um fornecedor especializado se encontrar dificuldades. Não poderemos proporcionar-lhe assistência técnica. 

Quando estiver preparado para eliminar o certificado SSL, aceda à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, clique em `Alojamentos`{.action} na barra à esquerda e escolha o alojamento web em causa. Certifique-se de que está no separador `Informações gerais`{.action}. Clique no botão que representa três pontos junto de “Certificado SSL” e selecione a opção `Eliminar o certificado SSL`{.action}.

Na página que aparecer, valide a eliminação. Esta última será concluída em algumas horas. 

![managessl](images/manage-ssl-step9.png){.thumbnail}

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.