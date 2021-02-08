---
title: 'How to create an SMS recipient list'
slug: list_of_sms_recipients
excerpt: 'Find out how to create a list of SMS recipients.'
legacy_guide_number: g2402
section: 'Managing your solution'
---

**Last updated 23rd June 2020**

## Objective

All OVHcloud SMS accounts can use one or more recipient lists. This guide will describe the method for creating a recipient list.

## Requirements
- an active OVHcloud SMS account
- a spreadsheet or text editor tool

## Instructions

### Step 1: Create your recipient list.

#### Method via spreadsheet

You can create a recipient list via a spreadsheet, or use a list that already exists. This list must be in .csv format, and have the layout below in a spreadsheet:

![recipients](images/img_4831.jpg){.thumbnail}

If you open a .csv file with a notepad program, it should look similar to this:

![recipients](images/sms-recipientlist-1.png){.thumbnail}

The following points are vital for your recipient list to be processed properly on the OVHcloud Control Panel:

- All of your contacts must be on the same sheet in your spreadsheet file, in a number column.
- Special characters, like accents, must be deleted because they will not be accepted when you import the .csv file to the OVHcloud Control Panel.
- Phone numbers must be entered in international format (e.g. for a UK phone number: +44712345678).
- Save your spreadsheet file in .csv format (separator: semi-colon).

To ensure that the spreadsheet does not perform any automated calculations on your numbers, configure the format of your number cell in the Custom field, and manually enter the following: >0]+0;Standard.

![recipients](images/sms-recipientlist-2.png){.thumbnail}


#### Method via text editor

An alternative method involves simply creating a .txt file via a text editor or notepad program.

- Enter “number” into the first line.
- Enter your phone numbers in international format (+44712345678), with one number per line.

You should end up with the result below:

![recipients](images/sms-recipientlist-1.png){.thumbnail}


### Step 2: Log in to the interface.

Log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie), then select `Telecom`{.action}. Next, select `SMS`{.action} in the left-hand menu.

Then click on the SMS account concerned.

![recipients](images/sms-recipientlist-3.png){.thumbnail}


### Step 3: Import your recipient lists.

Select the `Contacts`{.action} tab.

![recipients](images/sms-recipientlist-4.png){.thumbnail}

You can create up to 9 contact lists.

To do this, simply click `Actions`{.action}, then `Add`{.action}.

![recipients](images/sms-recipientlist-5.png){.thumbnail}

Name your recipient list file, and import your local file on to the OVHcloud Control Panel.

![recipients](images/sms-recipientlist-6.png){.thumbnail}

## Go further

Join our community of users on <https://community.ovh.com/en/>.
