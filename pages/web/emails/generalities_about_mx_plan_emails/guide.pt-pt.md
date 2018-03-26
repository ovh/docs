---
title: 'Partilhado: Generalidades e-mail partilhado OVH'
excerpt: Generalidades e-mail partilhado OVH
slug: partilhado_generalidades_e-mail_partilhado_ovh
legacy_guide_number: g1474
---


## Windows

- [Windows 8](https://www.ovh.pt/g1281.configuracao-windows-8)

- [Windows Phone](https://www.ovh.pt/g1346.mail_partilhado_guia_de_configuracao_windows_phone)

- [Windows Mail](https://www.ovh.pt/g1300.e-mails_partilhados_guia_de_configuracao_para_o_windows_mail)




## Apple
[Mail de Mac](https://www.ovh.pt/g1287.e-mails_partilhados_guia_de_configuracao_no_mail_do_mac)


- [Mavericks & Yosemite](https://www.ovh.pt/g1599.mail_partilhado_guia_de_configuracao_do_mail_de_mac_-_mavericks_e_yosemite)

- [El Capitan](https://www.ovh.pt/g1965.email_partilhado_guia_de_configuracao_de_mail_para_mac_-_el_capitan)

- [Thunderbird sur Mac](https://www.ovh.pt/g1911.email_partilhado_guia_de_configuracao_para_thunderbird)

- [iPad iOS 7](https://www.ovh.pt/g1348.configuracao-ipad)

- [iPhone iOS 3](https://www.ovh.pt/g1296.configuracao-iphone)

- [iPhone iOS 9.1](https://www.ovh.pt/g2004.mail_partilhado_guia_configuracao_iphone_ios_91) (Guia em vídeo)




## Outlook

- [Outlook 2007](https://www.ovh.pt/g1298.e-mails_partilhados_guia_de_configuracao_para_o_outlook_2007)

- [Outlook 2010](https://www.ovh.pt/g1299.configuracao-outlook-2010)

- [Outlook 2013](https://www.ovh.pt/g1286.configuracao-outlook-2013) (Guia em vídeo)

- [Outlook 2011 para Mac](https://www.ovh.pt/g1345.mail_partilhado_guia_de_configuracao_do_outlook_2011_no_mac)




## Outros

- [Thunderbird Windows](https://www.ovh.pt/g1297.e-mails_partilhados_guia_de_configuracao_para_o_thunderbird)

- [Tablet Android 4.1.2](https://www.ovh.pt/g1283.e-mails_partilhados_guia_de_configuracao_num_tablet_android_412)

- [Smartphone Android 4.4](https://www.ovh.pt/g1347.mail_partilhado_guia_de_configuracao_de_um_smarpthone_com_android_44)

- [Smartphone Android 5.1](https://www.ovh.pt/g1912.e-mail_partilhado_guia_de_configuracao_de_um_smarpthone_com_android_51)

- [Smartphone BlackBerry](https://www.ovh.pt/g1381.e-mail_partilhado_guia_de_configuracao_blacklberry)

- [Gmail](https://www.ovh.pt/g1408.e-mail_partilhado_guia_de_configuracao_de_um_e-mail_partilhado_ovh_na_interface_gmail)




## Acesso
É possível enviar e receber os seus e-mails através da interface Webmail disponível no seguinte endereço:

[http://mail.ovh.net/](http://mail.ovh.net/)

Têm à sua disposição um guia que o ajudará a utilizar o webmail:

[](https://www.ovh.pt/g1302.webmail_guia_de_utilizacao_do_roundcube)

![](images/img_2007.jpg){.thumbnail}


## Configuração IMAP (Recomendada)
Veja as informações a reter para a configuração de uma conta de e-mail IMAP.

Configuração IMAP com segurança SSL ativada ou desativada :

Endereço de Email: O seu endereço de e-mail partilhado na íntegra
Password: A password que definiu no [manager](https://www.ovh.com/managerv3/).
Nome do utilizador: O seu endereço de e-mail partilhado na íntegra
Servidor de receção:: SSL0.OVH.NET
Porta do servidor de receção:993 ou 143
Servidor de envio:SSL0.OVH.NET
Porta do servidor de envio:465 ou 587

As portas 143 e 587 correspondem à segurança SSL desativada.

As portas 993 e 465 correspondem à segurança SSL ativada.



- Deve, obrigatoriamente, ativar a autenticação para o servidor SMTP.




|Portas|SSLativado|SSLdesativado|
|Receção|993|143|
|Envio|465|587|




## Configuração POP
Veja as informações a reter para a configuração de uma conta de e-mail POP no Outlook 2007.

Configuração POP com segurança SSL ativada ou desativada :

Endereço de Email: O seu endereço de e-mail partilhado na íntegra
Password: A password que definiu no [manager](https://www.ovh.com/managerv3/).
Nome do utilizador: O seu endereço de e-mail partilhado na íntegra
Servidor de receção:: SSL0.OVH.NET
Porta do servidor de receção:995 ou 110
Servidor de envio:SSL0.OVH.NET
Porta do servidor de envio:465 ou 587

As portas 110 e 587 correspondem à segurança SSL desativada.

As portas 995 e 465 correspondem à segurança SSL ativada.



- Deve, obrigatoriamente, ativar a autenticação para o servidor SMTP.


|Portas|SSLativado|SSLdesativado|
|Receção|995|110|
|Envio|465|587|




## Nota relativa à autenticação
É necessário que o servidor tenha selecionada a autenticação a fim de poderem ser enviados sem erros os seus emails.

Em caso contrário poderá observar o seguinte erro:


```
"553 sorry, that domain isn't allowed to be relayed thru this MTA (#5.7.1)"
```



- Verifique que no seu software de e-mails a autenticação SMTP para as mensagens enviadas está ativa.

Para esse efeito, siga os guias mais acima nesta página.

