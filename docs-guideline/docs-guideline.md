
# How to create a guide

___

## Storage

All guides are stored in this repository's [pages](https://github.com/ovh/docs/tree/develop/pages) folder.

### Repository structure

A `guide` belongs to a `product` that belongs to an `universe`. Keep this in mind :).

```bash
.
├── pages
|   ├── web
|   |   ├── domains
|   |   |   ├── glue-registry
|   |   |   |   ├── guide.en-gb.md (title: Glue Registry)
|   |   |   |   └── guide.fr-fr.md (title: Activer le Glue Registry sur son domaine)
|   |   |   ├── product.en-gb.md (title: Domains and DNS)
|   |   |   └── product.fr-fr.md (title: Domaines et DNS)
|   |   ├── universe.en-gb.md (title: Web)
|   |   └── universe.fr-fr.md (title: Web)
|   ├── home.en-gb.md (title: OVHcloud - Documentation)
|   └── home.fr-fr.md (title: OVHcloud - Guides)
└── README.md
```

### Naming

Each file must be named following the rules below.

`<content-type>`.`<language>`-`<zone>`.md

| Name             | Description                                                                        |
|------------------|------------------------------------------------------------------------------------|
| **content-type** | [`home`](#home), [`universe`](#universe), [`product`](#product), [`guide`](#guide) |
| **language**     | see the [list](#languages)                                                         |
| **zone**         | see the [list](#zones)                                                             |

_example_: `home.en-gb.md`, `universe.fr-fr.md`, ...

#### content-types

##### index

The [index.md file](https://github.com/ovh/docs/blob/develop/pages/index.md) introduced in December 2022 is the single source of truth for guides organisation on the public documentation website: <https://help.ovhcloud.com/csm>.

There can be up to 3 categories levels in addition to the KB base level. The indentation is made in 4 spaces increments, and reflects the nesting structure of the guides and categories.

The labels and titles are all in english. Translations of the L1 and L2 categories are listed in the `index-translations.<language>.yaml` files.

The index is structured as such:

```bash
## Contents
+ Knowledge base
    + [L1 category](full-slug)
        + [L2 category](full-slug)
            + [English title of the guide](repository-guide-path)
```

##### home (deprecated)

Home page for a specific `zone` and `language` pair.
No content in this file except metadata.

###### available metadata

| name    | description                      | extra                  |
|---------|----------------------------------|------------------------|
| title   | title of the site                | mandatory              |
| excerpt | short desc of the site           |                        |

Add metadata as yaml frontmatter

```md
---
title: OVHcloud Documentation
excerpt: How can we help you ?
---
```

##### universe (deprecated)

Page that lists all visible products the universe owns.
No content in this file except metadata.

###### available metadata

| name    | description                      | extra                  |
|---------|----------------------------------|------------------------|
| title   | title of the product             | mandatory              |
| excerpt | short desc of the universe       |                        |
| slug    | part of the url                  | (default: folder name) |
| order   | order of the universe in home    | deprecated             |
| hidden  | not visible in home if True      | (default: False)       |

##### product (deprecated)

Page that lists all visible guides the product owns.
No content in this file except metadata.

###### available metadata

| name    | description                      | extra                  |
|---------|----------------------------------|------------------------|
| title   | title of the product             | mandatory              |
| excerpt | short desc of the product        |                        |
| slug    | part of the url                  | (default: folder name) |
| order   | order of the product in universe |                        |
| hidden  | not visible in universe if True  | (default: False)       |

##### guide

Page containing documentation about the subject of your choice.

###### metadata

| name    | description                      | extra                  |
|---------|----------------------------------|------------------------|
| title   | title of the doc                 | mandatory              |
| excerpt | short description of the doc     | mandatory              |
| slug    | part of the url                  | deprecated             |
| section | product's section of the doc     | deprecated             |
| order   | order of the doc in section      | deprecated             |
| hidden  | not visible in section if True   | (default: False)       |

###### meta.yaml

File containing mandatory unique identifiers for each guide.

| name     | description                      | extra                  |
|----------|----------------------------------|------------------------|
| id       | V4 UUID                          | mandatory              |
| full_slug| part of the url                  | mandatory              |

###### images

If you want to add some pictures in your guide, create a folder images within your guide folder and place your images there.

```bash
...
├── my-super-guide
|   ├── images
|   |   ├── 01.png
|   |   └── 02.png
|   └── guide.en-gb.md
...
```

You can now reference your images relatively to your guide. See below an example for the file `my-super-guide/guide.en-gb.md`

```markdown
... ![image 02 alt](images/02.jpg) ...
```

**Note:**
Each guide must be placed in a folder with a representative name

#### languages

Allowed `ISO 639-1` language code (*[wikipedia](https://en.wikipedia.org/wiki/ISO_639-1)*)

- `de`: German
- `en`: English
- `es`: Spanish
- `fr`: French
- `it`: Italian
- `pl`: Polish
- `pt`: Portuguese

#### zones

Allowed `ISO 3166-1` country code (*[wikipedia](https://en.wikipedia.org/wiki/ISO_3166-1)*)

- `asia`: Asia
- `au`: Australia
- `ca`: Canada
- `de`: Germany
- `es`: Spain
- `fr`: France
- `ie`: Ireland
- `it`: Italy
- `gb`: United Kingdom
- `pl`: Poland
- `pt`: Portugal
- `sg`: Singapore
- `us`: World English / World Spanish

__Note__
Exhaustive list of authorized language suffixes: `de-de`,`en-asia`, `en-au`, `en-ca`, `en-ie`, `en-gb`, `en-us` (World English), `es-es`, `es-us` (América Latina), `fr-ca`, `fr-fr`, `it-it`, `pl-pl`, `pt-pt`.

___

## Format

All resources are written in `markdown`. [See examples](http://commonmark.org/help/).

In order to write specific content, we extend the base syntax to fit our needs. [See examples](markdown-custom.md).
