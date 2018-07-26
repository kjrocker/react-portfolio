# Kevin Rocker Dot Com

Welcome to the source code that drives [my webpage](http://www.kevinrocker.com).

In addition to being a portfolio and general landing page, this site also serves as a technical demo.

## Interesting Items

It can be hard to find the gems in an repo, especially when it's a full website instead of a tightly focused library.

Here are some places to start:

- [Localization API](src/i18next/withText.tsx)
  - I wasn't happy with the existing react-i18next API. My goal here was to create something that followed the "mapXToProps" + HOC pattern that I've gotten used to, while still exposing as much of the i18next API as I could for fallback.
  - The result exposes the translation function directly, so the text prop that's passed down follows all the interpolation logic, pluralization, or post-processing that i18next uses.
- [Theme Intellisense](src/theme/index.ts)
  - This isn't my doing, but its an advanced trick with `styled-components` to get full Typescript intellisense for the theme object.
  - Unfortunate side effect is that I can't import from `styled-components` directly anymore, but it's definitely worth it.
- [Resume Flexibility](src/pages/Resume/JobRenderers/util.tsx)
  - Playing with the renderer pattern. The way my jobs are rendered is completely generic. Anything implementing the interface here, and wrapped in the exported HOC, will render one of my past jobs.
  - If I ever want to swap my columns for a collapsible accordion, I know exactly what I need to implement, and I can drop it into [one place](src/pages/Resume/JobList.tsx).
- Redux
  - There isn't any! Since this is a more-or-less a static site, all the complicated state (theming, localization) live in React contexts.
  - The new React 16.3 Context API has massively raised the bar for what level of application state actually needs Redux these days.

## Upcoming Features

Stay tuned for the following!

- Localization
  - The groundwork is there, just need to settle on the actual text before I pipe it through Google Translate.
  - Hey, I speak fluent English and have forgotten my four years of Japanese, what kind of localization accuracy were you expecting? ;)
- Theming
  - This is going to be fun. The current theme HOC and Provider don't pass down callbacks to modify the theme. Which is my current plan.
  - So just like the localization API, this is going to be me extending a package for my own purposes. But it will be awesome.
