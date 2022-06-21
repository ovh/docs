---
title: Utilização da dupla autenticação (2FA) na sua infraestrutura Hosted Private Cloud
slug: utilizacao-2FA
excerpt: Saiba como implementar a dupla autenticação para proteger a sua infraestrutura
section: Funcionalidades da OVHcloud
order: 05
---

**Última atualização: 10/06/2022**

## Objetivo

A implementação de uma dupla autenticação permite proteger o acesso ao seu Hosted Private Cloud, reduzindo os riscos ligados a um roubo de palavra-passe, por exemplo.

**Saiba como implementar a dupla autenticação para proteger a sua infraestrutura Hosted Private Cloud.**
 
## Requisitos

- Dispor de uma infraestrutura [Hosted Private Cloud](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/) com a opção de [segurança avançada](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/safety-compliance/sddc/) (incluída nas ofertas PCI-DSS e HDS).
- Dispor de um smartphone e de uma aplicação de autenticação (exemplos: Google Authenticator, Authy, OTP Auth...).

## Instruções

### Ativação da dupla autenticação

De forma a implementar a dupla autenticação na sua infraestrutura, é necessário ligar-se à interface certificada do seu Hosted Private Cloud.

Para isso, tem duas possibilidades:
	
- Através da gateway do seu Hosted Private Cloud (https://pcc-xxx-xxx-xxx-xxx.ovh.com): 

![Gateway Hosted Private Cloud](images/gatewayPCC.jpg){.thumbnail}

- Diretamente através do URL https://pcc-xxx-xxx-xxx-xxx.ovh.com/secure/ (atenção para não esquecer a “/” final do endereço).

Uma vez ligado à interface de gestão, clique em `Change Password`{.action}.

![Change Password](images/selectChangePassword.png){.thumbnail}

Na interface, deverá:
	
* Selecionar a opção `Password and 2FA Shared Secret`{.action}
* Indicar uma nova palavra-passe 
* Ler o QRcode com a aplicação smartphone de autenticação à sua escolha
* Confirmar o código recebido

![Ler o QRcode](images/scanQRcode.png){.thumbnail}

Será criada uma tarefa e um token ser-lhe-á enviado.

Aceda à secção `Operation validation`{.action}, identifique a operação recebida por SMS e confirme utilizando o token recebido nessa mesma SMS.

> [!primary]
>
> Para uma palavra-passe esquecida, é necessário lançar primeiro o procedimento de “Password lost”, durante o qual lhe será proposta a implementação de uma dupla autenticação.
>

### Ligação

Aceda ao seu cliente *web* através da ligação habitual. Terá então acesso à seguinte página:

![Ligação 2FA](images/2FAtoken.png){.thumbnail}

Indique o token gerado pela aplicação de autenticação instalada no seu smartphone antes de introduzir a sua palavra-passe.


> [!warning]
>
> A dupla autenticação ficará ativa aquando da modificação da palavra-passe de um dos utilizadores. Isto significa que, se um único utilizador alterar a sua palavra-passe, todos os outros utilizadores poderá usufruir da dupla autenticação ativada. 
>
> Assim, deverão renovar a sua palavra-passe e implementar a dupla autenticação nos seus utilizadores para que esses utilizadores não percam o seu acesso.
>
> Para os clientes com uma infraestrutura em versão 6.0, o acesso ao cliente vSphere (disponível apenas em Windows) já não será possível. O acesso será feito exclusivamente através do cliente vSphere web.
>

### Criação de um novo utilizador

Ao criar um novo utilizador, deverá optar por atribuir ou não um cargo de *token validator*.

Em ambos os casos, é necessário alterar a palavra-passe através da interface certificada seguindo o procedimento anterior para implementar a 2FA.

A única diferença será a autonomia ou não do utilizador para a validação do token.

### Autorização da aplicação

É possível utilizar várias aplicações de terceiros que requerem a ligação ao vCenter.

Essas aplicações devem ser previamente autorizadas através da política de acesso ao vCenter, que é configurável na [Área de Cliente](https://docs.ovh.com/fr/private-cloud/manager-ovh-private-cloud/#securite).

As aplicações poderão aceder às nossas infraestruturas, mas não irão necessariamente gerir a dupla autenticação.

Nesse caso, será necessário criar uma *whitelist* específica ao *bypass* da dupla autenticação.

Esta *whitelist* será um complemento da lista principal que rege os acessos ao vCenter.

Para adicionar os endereços IP públicos das suas aplicações a esta *whitelist*, deverá utilizar as seguintes chamadas API: 

- Verificar os endereços IP autorizados a não utilizar a dupla autenticação:

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/twoFAWhitelist
>

- Adicionar um endereço IP ao *bypass* da dupla autenticação.

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/twoFAWhitelist
>

- Mostrar as informações de um endereço IP autorizado (requer um ID recuperado com a primeira chamada).

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/twoFAWhitelist/{id}
>

- Eliminar um endereço IP da lista de autorização.

> [!api]
>
> @api {DELETE} /dedicatedCloud/{serviceName}/twoFAWhitelist/{id}
>

- Modificar as informações de um endereço IP autorizado.

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/twoFAWhitelist/{id}/changeProperties
>

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com>.
