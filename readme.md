# Kasra Theme

The goal is to provide an easy to use tool for consistently managing the look and feel of kasra.co applications and sites. We would like to allow maximum flexibility to designers and programmers when they are developing in their respective spheres, while maintaining a minimal and sensible interface defining their interactions.

**Project scope**

- Specifications: style guide / usage guide, branding rules.
- Styles for "look and feel" aspect of site styling. Should not contain high level layout.
- Widget pallette. Widgets that are both complex and generic can be factored out into reusable React components by dev.
- Usage demo. Show programmers how to integrate the styling module into common production and development build scenarios.

## Documentation

Guides and specifications will be linked from here, as they become available.

For a hint on how to build npm-installed sass styles, and for confirmation that this crazy scheme will actually work, see `webpack.config.js` and `styles/index.scss`. We are npm-installing and building [flexbox-grid-sass](http://flexboxgrid.vivid-websolutions.nl/) into this project's pages as a proof of concept.

## Workflow

`npm run dev` to start a live-reloading development server. The theme specification will be built and served at [http://localhost:8080/webpack-dev-server/]().

### Adding a New Section

The specification spans multiple pages. Adding a new one involves creating a new HTML file and new Sass stylesheet, linking them together, and then linking the new page from the index page.

1. Sass: Create a new stylesheet in `styles/`.
  - `@import` it from `styles/indes.scss`, before the 3rd party includes.
1. If you are building something that requires some JS, then `require` it from `src/index.js`.
1. HTML: Create a new standalone HTML page. See `views/typography` for an example.
  - `<link>` the page to the root stylesheet at `styles/index.scss`.
  - Add a root-relative nav link from `views/index.html` to your new HTML file.
1. Restart the dev server (`npm run dev` after killing the old one) and navigate to your page from [http://localhost:8080/webpack-dev-server/]().


### Distribution

1. Run `webpack` to produce a full static site in `dist/`.
1. Copy the directory to any host that can serve a static site.

Dan has plans to automate this; there is an S3-upload plugin for Webpack.

### Publishing

When we are ready to publish, the workflow will be `npm publish`. This should make a `kasra-theme` module available on NPMJS.

To simulate publishing locally, run `npm link` in the root of this project, and run `npm link kasra-theme` in the root of the project that would install this module.

## License

Logos and theme are trademarked and copyrighted to Kasra / MenaPost. You are welcome to use the technical assets as inspiration for your own front end build; if you do so, then we welcome your questions and suggestions.
