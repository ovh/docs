
# How to create a guide

___

## Storage

All guides are stored in this [repository](#)

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
|   ├── home.en-gb.md (title: OVH - Documentation)
|   └── home.fr-fr.md (title: OVH - Guides)
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

##### home

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
title: OVH Documentation
excerpt: How can we help you ?
---
```

##### universe

Page that lists all visible products the universe owns.
No content in this file except metadata.

###### available metadata

| name    | description                      | extra                  |
|---------|----------------------------------|------------------------|
| title   | title of the product             | mandatory              |
| excerpt | short desc of the universe       |                        |
| slug    | part of the url                  | (default: folder name) |
| order   | order of the universe in home    |                        |
| hidden  | not visible in home if True      | (default: False)       |

##### product

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
| excerpt | short desc of the doc            |                        |
| slug    | part of the url                  | (default: folder name) |
| section | product's section of the doc     | (default: Misc)        |
| order   | order of the doc in section      |                        |
| hidden  | not visible in section if True   | (default: False)       |

###### images

If you want to add some pictures in your guide, create a folder images within your guide folder and place your pics there.

```bash
...
├── my-super-guide
|   ├── images
|   |   ├── 01.png
|   |   └── 02.png
|   └── guide.en-gb.md
...
```

You can now reference your pics relatively to your guide. See below an example for the file `my-super-guide/guide.en-gb.md`

```markdown
... ![image 02 alt](images/02.jpg) ...
```

**Note:**
Each guide must be placed in a folder with a representative name

#### languages

Allowed `ISO 639-1` language code (*[wikipedia](https://en.wikipedia.org/wiki/ISO_639-1)*)

- `cs`: Czech
- `de`: German
- `en`: English
- `es`: Spanish
- `fi`: Finnish
- `fr`: French
- `it`: Italian
- `lt`: Lithuanian
- `nl`: Dutch
- `pl`: Polish
- `pt`: Portuguese

#### zones

Allowed `ISO 3166-1` country code (*[wikipedia](https://en.wikipedia.org/wiki/ISO_3166-1)*)

- `au`: Australia
- `ca`: Canada
- `cz`: Czech Republic
- `de`: Germany
- `es`: Spain
- `fi`: Finland
- `fr`: France
- `ie`: Ireland
- `it`: Italy
- `gb`: United Kingdom
- `lt`: Lithuania
- `nl`: Netherlands
- `pl`: Poland
- `pt`: Portugal
- `us`: United States

__Note__
Exhaustiv list of authorized language suffixes: `cs-cz`, `de-de`, `en-au`, `en-ca`, `en-ie`, `en-gb`, `en-us`, `es-es`, `es-us`, `fi-fi`, `fr-ca`, `fr-fr`, `it-it`, `lt-lt`, `nl-nl`, `pl-pl`, `pt-pt`.

___

## Format

All ressources are written in `markdown`. [See examples](http://commonmark.org/help/).

In order to write specific content, we extend the base syntax to fit our needs. [See examples](markdown-custom.md).
