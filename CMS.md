# Decap CMS Guide

## Accessing the Admin

- Navigate to `/admin` and log in with GitHub.
- For local development, `local_backend: true` allows writing files without OAuth.

## Creating a Post

1. In the **Posts** collection, click **New Post**.
2. Fill in the title, tags, author, and body.
3. Upload images to `/uploads/`.
4. Save as **Draft** to open a pull request.

## Previewing

- Use the built‑in preview pane for a basic view.
- Click **Preview on Site** to open Next.js preview mode at `/blog/<slug>?preview=1`.

## Publishing

- Drafts create GitHub branches and PRs.
- Merge the PR to publish the post to the main site.

## Authors

- Manage authors in the **Authors** collection.
- Reference authors in posts via the relation field.

## Shortcodes

- `:::callout type="info" title="Heads up"` … `:::`
- `:::quote author="Satoshi"` … `:::`
