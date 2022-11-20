# `@astro-community/astro-embed-twitter`

This package contains a component for embedding tweets in Astro projects.

## Install

```bash
npm i @astro-community/astro-embed-twitter
```

### Authentication

The `<Tweet />` component uses the Twitter API v2 to download tweet data and generate static HTML. This requires a “bearer token” for the Twitter API. You can sign up in [Twitter’s Developer Portal](https://developer.twitter.com/) to get one of these.

Once you have your bearer token, add it to your local or build environment as a variable named `SECRET_TWITTER_TOKEN`.

#### Local development

If you’re building or developing your site locally, create a `.env` file in the root of your Astro project containing your token:

```
SECRET_TWITTER_TOKEN=bearer-token-for-the-twitter-api
```

> **Caution**
> Don’t commit this `.env` file! Your bearer token is top secret.

#### Cloud deployments/CI

Different deployment platforms let you set environment variables in different ways. For example, here are the [Netlify](https://docs.netlify.com/configure-builds/environment-variables/), [Vercel](https://vercel.com/docs/concepts/projects/environment-variables), and [GitHub Actions](https://docs.github.com/en/github-ae@latest/actions/learn-github-actions/environment-variables) environment variable docs.

Whatever your platform, make sure you set your bearer token as the value of a `SECRET_TWITTER_TOKEN` environment variable.

## Usage

### `<Tweet id={tweetIdOrUrl} />`

The **Tweet** component generates a static Twitter card for a single Tweet.

```astro
---
import { Tweet } from '@astro-community/astro-embed-twitter';
---

<Tweet id="1511750228428435457" />
```

It also supports passing a full URL instead of just the ID.

```astro
---
import { Tweet } from '@astro-community/astro-embed-twitter';
---

<Tweet id="https://twitter.com/astrodotbuild/status/1511750228428435457" />
```

### Styling

By default the card has minimal styling, which should adapt to your site’s font settings etc.

You can customise it by targeting any of the `.tweet-` classes, for example:

```css
.tweet-card {
  background: floralwhite;
  font-family: sans-serif;
  border: 0;
}

.tweet-card a {
  color: purple;
  font-weight: bold;
}

.tweet-author-name {
  font-family: cursive;
  font-size: 1.5em;
}
```
