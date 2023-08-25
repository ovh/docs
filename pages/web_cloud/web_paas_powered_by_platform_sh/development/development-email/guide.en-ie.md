---
title: Sending E-mail
updated: 2021-03-31
---


## Objective 

This document describes the way for sending emails from your application.

## SMTP Ports configuration
TCP port 25 is blocked for security reasons; use TCP port 465 or 587 instead.

## Choosing an email service
WebPaaS doesn't provide an integrated service for sending emails.
You must choose a third-party provider such as Tipimail, Mailjet, or Sendinblue.

For compliance and sovereignty reason, OVHcloud would recommend using Tipimail solution.

## Tipimail registration
Tipimail provides a free tier of 10000 emails/month.
You can register at [https://www.tipimail.com/](https://www.tipimail.com/)

There are two possibilities, either using the Tipimail API, or the SMTP configuration.
For the SMTP, you must connect to the TCP port 587.

You'll find examples on the Tipimail Documentation website:     
- PHP: [https://docs.tipimail.com/en/integrate/smtp/programming-languages/php/](https://docs.tipimail.com/en/integrate/smtp/programming-languages/php/)

- NodeJS: [https://docs.tipimail.com/en/integrate/smtp/programming-languages/nodejs/](https://docs.tipimail.com/en/integrate/smtp/programming-languages/nodejs/)

- Python: [https://docs.tipimail.com/en/integrate/smtp/programming-languages/python/](https://docs.tipimail.com/en/integrate/smtp/programming-languages/python/)
- Ruby: [https://docs.tipimail.com/en/integrate/smtp/programming-languages/ruby/](https://docs.tipimail.com/en/integrate/smtp/programming-languages/ruby/)
