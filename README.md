# SuperEffective

[Homepage](https://classic.pokepc.net)

[![Check Code Quality](https://github.com/itsjavi/supereffective.gg/actions/workflows/quality.yml/badge.svg)](https://github.com/itsjavi/supereffective.gg/actions/workflows/quality.yml)
[![wakatime](https://wakatime.com/badge/user/f2eacdee-569c-4e49-b11f-81a764fb575e/project/838d78e4-9190-4513-9c76-0e7672feab70.svg)](https://wakatime.com/badge/user/f2eacdee-569c-4e49-b11f-81a764fb575e/project/838d78e4-9190-4513-9c76-0e7672feab70)

Source code for supereffective.gg 's website.

Data can be found in https://github.com/itsjavi/supereffective.gg/tree/main/src/lib/data-client

## Prerequisites

You will need Docker (for the local DB and mail server), Node v20 LTS and pnpm v8.

## Quick Start

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Run the website in development mode: run any of: `pnpm dev`.
4. Open http://localhost:3001 or run `pnpm open` to open the website in your browser.
5. You can register with any email. Emails will be logged in the console and also stored under `./local/mails`.

Or all in one command: `pnpm build && pnpm dev && pnpm open`

For other scripts, please check the `package.json` files.

## Software Stack

We use the following technologies, services and tools:

- We use Node v20 LTS
- pnpm v8 for package management
- Turborepo (turbo) to accelerate running scripts
- NextJS 14 + React 18 for the website
- CSS Modules for styling without styling libraries
- React Context for state management (to be replaced by Redux Toolkit or Zustand)
- MDX + [FrontMater CMS](https://frontmatter.codes/) as the local/static CMS
- Next Auth, Prisma and Neon.tech PostgreSQL for authentication and dex data storage
- Vercel (Pro tier) for hosting and deployments
- GitHub for hosting static JSON dataset
- CloudFlare for caching and DNS
- Docker, PostgreSQL and Maildev for local development environment
- Other tools: ESLint, Prettier, Husky, etc.

## Project Structure

This project is a NextJS application with the following directory structure:

- `blogs`: the MDX content of the website pages
- `public`: static assets (for the UI and also for the CMS pages)
- `scripts`: Maintenance or development scripts
- `src`:
  - `app`: Next.js App Router
  - `components`: general reusable components
  - `config`: general app config (e.g. from env vars, json files or ts code)
  - `features/{name}/`: business logic in bounded contexts, following some DDD principles
    - `components`: components specific to this domain
    - `hooks`: hooks specific to this domain
    - `state`: domain state: contexts, objects and types
    - `views`: domain views: views composed with many other components
    - `lib`: services and utilities specific to this domain
  - `hooks`: generic hooks
  - `lib`: generic libraries and services, or services that are not specific to a domain
    - `data-client`: helpers to fetch the static data from the dataset CDN, and types
    - `mailer`: mail client abstraction supporting `local-fs` and `resend.com`
    - `mdx`: helpers to extract and load MDX content from a directory
    - `patreon`: Patreon API client abstraction
    - `utils`: general purpose utilities
  - `styles`: global css styles

## Contributing

Contributions are welcome! Please read the [contributing guidelines](./CONTRIBUTING.md) before submitting a PR.

- [Dataset](https://github.com/itsjavi/supereffective.gg/tree/main/src/lib/data-client)
- [Issue Reports and Tracking](https://github.com/itsjavi/supereffective.gg/issues)
- [Feedback and Project Roadmap](https://supeffective.canny.io)

For other questions and topics, please use our [Discord server](https://discord.gg/3fRXQFtrkN)

### Submitting changes to the dataset

The data used in this project can be found as
[minified JSON files](https://github.com/itsjavi/supereffective.gg/tree/main/src/lib/data-client) in the
`src/lib/data-client` folder of the project. Feel free to report data issues, suggest improvements and changes, or
submit a pull request with the changes or fixes.

In order to edit a minified JSON file, you will have to beautify it first, edit your changes, and then minify it again.

For that you can use these commands:

- `pnpm run json:minify <filename>` to minify the JSON files
- `pnpm run json:unminify <filename>` to convert the JSON files to a more readable format

Example:

```bash
pnpm run json:unminify src/lib/data-client/pokemon/legacy-pokemon.min.json
pnpm run json:minify src/lib/data-client/pokemon/legacy-pokemon.json
```

Before submitting a pull request, make sure that the `.min.json` files are updated and minified.

## License

The original content (graphics and text created by us), and the design of this website is licensed under
[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Before using any material, please read the
license and make sure you follow the terms and conditions, or contact us in case of doubt.

The source code of this website is licensed under the [MIT License](./LICENSE), except all the original graphics and
articles that you may find in this repository (which are CC like as above mentioned).
