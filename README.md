# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/cfd90dee-cd2c-4b45-88d4-d49edde643fa

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/cfd90dee-cd2c-4b45-88d4-d49edde643fa) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

### Port conflict notice
If you visit the dev server (default `http://localhost:5173`) and see a different web service (for example, a database admin UI such as EDB/Postgres), another process is listening on the web port.

Options:
- Stop the conflicting service (for example, stop the EDB Postgres admin service or Docker container).
	- On Windows:
		- Check what's listening: `netstat -aon | findstr :8080`
		- Get the process name: `tasklist /FI "PID eq <PID>"`
		- Kill the process: `taskkill /PID <PID> /F`
	- If it's a Docker container: `docker ps` and `docker stop <container_id>`
- Or change the Vite dev port to 5173 (default) or other port if you prefer.
	- Start the dev server on a different port temporarily via CLI: `npm run dev -- --port 5173`
	- Or permanently change the port in `vite.config.ts` or `package.json` script - this project defaults to port 5173 now.

If you've changed ports, open `http://localhost:<port>` in your browser to access the app.

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/cfd90dee-cd2c-4b45-88d4-d49edde643fa) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
