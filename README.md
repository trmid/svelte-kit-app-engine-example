# Svelte Kit - Google Cloud

An example SvelteKit project deployed to Google Cloud. Live example: https://svelte-kit-example.uw.r.appspot.com/

## Installing

Install the project with:
```bash
npm install
```

## Developing

Once you've cloned the project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Deploy

To deploy the app on Google Cloud, run:
```bash
gcloud app deploy --project <CLOUD_PROJECT_ID> build/app.yaml
```
