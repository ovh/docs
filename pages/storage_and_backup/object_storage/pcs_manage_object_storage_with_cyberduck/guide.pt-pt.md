---
title: Object Storage Swift - Utilizar o Object Storage com CyberDuck
excerpt: 'Saiba como utilizar o Object Storage com Cyberduck'
updated: 2021-06-18
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

O Object Storage da OVHcloud é uma solução de armazenamento gerida principalmente através da API OpenStack.

Se não está familiarizado com a gestão do armazenamento em linha de comandos, algumas soluções gráficas utilizam a API OpenStack. CyberDuck é uma destas soluções e é facilmente configurável.

**Saiba como utilizar o Cyberduck para gerir o seu Object Storage através de uma interface gráfica baseada nas API OpenStack.**

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
>
> Este guia explica como implementar algumas medidas para otimizar a performance e a segurança do seu sistema. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](https://partner.ovhcloud.com/pt/directory/) e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção «Quer saber mais?» deste guia.
>

## Requisitos

- Descarregar e instalar [Cyberduck](https://cyberduck.io/).
- Ter os dados de utilizador (*OS_USERNAME*) e os projetos (*OS_PROJECT_NAME* ou *OS_TENANT_NAME*) disponíveis para o descarregar o ficheiro "OpenRC" no menu [Users and Roles](/pages/public_cloud/compute/loading_openstack_environment_variables#etapa-1-recuperar-as-variaveis) da sua [Área de Cliente Public Cloud da OVHcloud](/links/manager).
- Ter a palavra-passe de utilizador OpenStack.

Se já não conhece a sua palavra-passe de utilizador OpenStack, pode alterá-la através [deste manual](/pages/public_cloud/compute/change_openstack_user_password_in_horizon).

## Instruções

**Este guia foi atualizado com base na versão 7.9.2 do Cyberduck para MacOS.**

> [!primary]
>
> Consoante a fonte de download do seu ficheiro OpenRC (a partir do Horizon ou a partir do seu Espaço Cliente OVHcloud), o seu identificador de projeto pode ser designado *OS_PROJECT_NAME* ou *OS_TENANT_NAME*.
>

Em Cyberduck, abra uma ligação "OpenStack Swift (Keystone 3)".

![pca-cyberduck](images/login.png){.thumbnail}

Queira introduzir as seguintes informações:

- Servidor: auth.cloud.ovh.net
- Projeto:Domínio:Username: OS_PROJECT_NAME:default:OS_USERNAME
- Password: a palavra-passe do seu utilizador OpenStack

A seguir, clique em `Connecter`{.action}. Uma vez ligado, terá acesso à arborescência das suas pastas e ficheiros.

![pca-cyberduck](images/successful-login.png){.thumbnail}

> [!primary]
>
> Em caso de dificuldade de ligação, pode descarregar o perfil de ligação Cyberduck para OpenStack Swift (Keystone 3) e abri-lo com Cyberduck.
> <br><br>Clique <a href="https://trac.cyberduck.io/browser/shelves/02.2020/profiles/default/Openstack%20Swift%20(Keystone%203).cyberduckprofile?rev=48724&order=name" download>aqui em "Guardar o alvo do link em baixo"</a> para descarregar o perfil.
>

## Saiba mais

[Documentação de Cyberduck](https://trac.cyberduck.io/wiki/help/en){.external}

[Primeiros passos com a API Swift](/pages/storage_and_backup/object_storage/pcs_getting_started_with_the_swift_api)

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique em [esta ligação](https://www.ovhcloud.com/pt/professional-services/) para obter um orçamento e solicitar uma análise personalizada do seu projecto aos nossos especialistas da equipa de Serviços Profissionais.

Fale com a nossa comunidade de utilizadores <https://community.ovh.com/en/>.
