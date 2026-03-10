# OVHcloud Documentation

This repository contains all the public documentation available about OVHcloud products, in 7 languages. A good way to find answers to some "how to" questions about OVHcloud products.

A web version also exists [here](https://help.ovhcloud.com/csm). This website and this repository are synced.

This project is under active development, and new guides are added or updated on a daily basis.

## Contributing

We will be happy to take a look at your contributions. You can contribute to this project by updating some existing guides, completing them or creating new ones.

A good way to easily get started with contributions is [to fork the ovh/docs repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo), write your changes on your fork then [create a pull request (PR)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) from your fork to the ovh/docs repo.

Your PR must be done on the `develop` branch.

Our guides editing team will then review your contribution and choose to edit, validate or reject it.

**If you are an OVHcloud employee, do not use a fork**. Instead, please contact the OVHcloud Guides Team so to be granted /write access to this repository.

Please take into consideration the following guidelines :

### Content

* Verify and test every action you describe: do not write about anything you cannot test by yourself.
* Please provide us with a description regarding your contribution.
* All OVHcloud guides are built with the same layout and structure, please use them as a template to write your own contributions.

#### New guide

When creating a new guide, you must also do the following:

* Create a `meta.yaml` file in your new guide's folder. This file must contain the 2 following fields:
    * `id:`: generate a UUID4 unique identifier using either <https://www.uuidgenerator.net/version4> or the `uuidgen` command from a terminal.
    * `full_slug:`: this will generate the slug component of the future guide's URL. Please rely on the already existing and related guides so to prefix your ``full_slug` accordingly. Also only include important keywords and try keeping it short.
* Update the [index](https://github.com/ovh/docs/blob/develop/pages/index.md) so that your new guide is listed in its right category. If that category doesn't exist yet, you can create it but you will also have to generate its translations in the 7 `index-translations.<language>.md` files.

### Screenshots

* Prefer to use the English version of the OVHcloud Control Panel or any other interface when taking screenshots.
* The extension of your screenshots must be in .png format
* Please use the OrangeSunrise colour to highlight any information in screenshots (#ff9803 - RGBA: 255, 152, 3, 1)

## Licensing

When contributing you agree with the licensing terms, provided in the [LICENSE](LICENSE) file.
