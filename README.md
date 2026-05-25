# Onset VoIP Plugin Documentation

This repo contains the editable web documentation source for the Onset VoIP Unreal Engine plugin. The documentation was converted from the original PDF documentation for plugin version 1.8.4 into a Docusaurus 3 site.

The long-term documentation source of truth is now the `.mdx` files in `docs/`.

## Install dependencies

```bash
npm install
```

## Run local preview

```bash
npm run start
```

## Build production output

```bash
npm run build
```

The production build is written to `build/`.

## Update docs

Edit the relevant `.mdx` files under `docs/`. Images used by the docs live in `static/img/` and are referenced from MDX with `/img/...` paths.

When updating content, keep the converted docs faithful to the source documentation unless a future documentation policy explicitly allows rewriting.
