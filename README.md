# Blaze Faction Art Portal

A small HTML/CSS/JavaScript app for your Entra joiner–mover–leaver lab. Microsoft sign-in uses MSAL Browser 4.30.0 with authorization code flow and PKCE. No app client secret, database, or backend is required for this demonstration.

## 1. Run it on your Windows computer

Install Node.js LTS if needed. Extract this ZIP, open the extracted `blaze-art-portal` folder in VS Code, and open Terminal > New Terminal.

```powershell
npm ci
Copy-Item .env.example .env.local
```

Keep the terminal here. Configure Entra in the next section, edit `.env.local`, then run:

```powershell
npm run dev
```

Open **http://localhost:5173/**. Keep the terminal running. Do not open index.html directly or use VS Code Live Server: Vite bundles the authentication library and reads the configuration. Stop with Ctrl+C. Restart after editing `.env.local`.

## 2. Register the application in your Blaze Faction tenant

1. Open https://entra.microsoft.com and verify the Blaze Faction tenant is selected.
2. Go to Entra ID > App registrations > New registration.
3. Name: **Blaze Faction Art Portal**.
4. Supported account types: **Accounts in this organizational directory only** (single tenant).
5. Redirect URI: select **Single-page application (SPA)** and enter **http://localhost:5173/**. Register.
6. On Overview, copy **Application (client) ID** and **Directory (tenant) ID** into `.env.local`, replacing the placeholders:

```ini
VITE_ENTRA_TENANT_ID=your-tenant-guid
VITE_ENTRA_CLIENT_ID=your-app-client-guid
```

These two IDs are identifiers, not passwords. Do not add a client secret to a browser app. Do not enable implicit grant checkboxes; MSAL uses authorization code flow with PKCE.

7. In API permissions, this app needs sign-in scopes `openid` and `profile`, not Microsoft Graph User.Read. If the registration added User.Read by default, remove it for this sign-in-only app. Grant tenant admin consent for the configured sign-in permissions if your tenant requires it. No directory read/write permissions are needed.

## 3. Configure access in Enterprise applications

The app registration describes the application. Its matching Enterprise application controls access in your tenant.

1. Open Entra ID > Enterprise applications > All applications > **Blaze Faction Art Portal**.
2. Under Properties, set **Assignment required? = Yes**, keep user sign-in enabled, and save.
3. Under Users and groups, assign an ordinary Art test user (William before his transfer, for example).
4. Start with direct user assignments for a small demonstration. If you use the dynamic Art security group, group-based app assignment requires P1/P2 and dynamic membership has its own licensing requirements. Confirm coverage for the users involved; one administrator's P1 license does not cover every user benefiting from licensed features.
5. An Art department attribute alone does not grant app access. Either explicitly assign users, or assign the Art group so that its membership drives access.
6. Use ordinary user accounts for access-denial evidence. Global Administrators can bypass the assignment requirement.

## 4. Capture the JML evidence

Use a NEW InPrivate/Incognito session for each before/after test. Close all private windows between tests. A previously cached sign-in is not evidence that Entra evaluated a new assignment. Allow group changes time to propagate.

| Scenario | Action | Expected fresh sign-in result |
| --- | --- | --- |
| Baseline William in Art | Assign William or the Art group | Microsoft sign-in succeeds and dashboard shows William |
| Maya joins Art | Create Maya; assign access directly or wait for assigned Art group membership | Dashboard shows Maya |
| William moves to Engineering | Change department/title; remove direct app assignment OR wait for removal from assigned dynamic Art group | Entra denies new app sign-in |
| Henry leaves | Disable account first; revoke sessions as part of offboarding; remove access; delete later if your lab calls for it | Entra blocks new sign-in |
| Negative control | Use an enabled ordinary account with no app assignment | Entra denies new app sign-in |

If a user is assigned both directly and through a group, removing just one path does not remove all access. Record the app's Properties, Users and groups, relevant group memberships, success/denial screen, and matching Entra sign-in log entry. Redact personal identifiers and correlation IDs in published screenshots as appropriate.

## 5. Scope of this lab

This demonstrates **Entra authentication and assignment-based control of new sign-ins**. All project briefs are fictional sample content bundled in the browser. Hiding a dashboard is not server-side authorization, and static files remain publicly readable wherever hosted. Do not put confidential artwork or HR data in this app.

Removing assignment or disabling an account does not necessarily erase an already open dashboard or invalidate every cached token immediately. Test new sign-ins, and document this limitation. Protecting actual private files would require a backend/API that validates access tokens and enforces authorization on each request.

## Troubleshooting

- Setup needed: check both GUIDs in `.env.local`, then restart Vite.
- Redirect mismatch (AADSTS50011): register exactly http://localhost:5173/ under SPA. Do not switch to 127.0.0.1 or a different port.
- User not assigned (AADSTS50105): inspect direct and group app assignments. Expected for the negative test.
- Admin approval required: review and grant the appropriate tenant consent using an administrator.
- Account from wrong tenant: verify Directory ID, supported account types, and the selected test account.
- Disabled account: expected for the leaver test.
- Dashboard still appears after access removal: close all private windows and initiate a new sign-in; cached sessions are outside this first version's continuous access enforcement.

## Optional hosting later

Run `npm run build`; Vite writes `dist/`. Azure Static Web Apps Free can host the static build. Set the two VITE values in the build environment and add the exact HTTPS origin plus trailing slash as another SPA redirect URI in Entra. This app uses its own MSAL integration, not the host's built-in authentication feature. Never ship `.env.local`, node_modules, or a client secret as static content.

## Files to study

- index.html: semantic page structure.
- src/style.css: responsive layout, cards, and CSS landscape.
- src/main.js: MSAL initialization, redirect handling, sign-in/out, and brief dialogs.
- .env.example: configuration template.
- package-lock.json: repeatable dependency installation.

## Microsoft references

- SPA registration: https://learn.microsoft.com/en-us/entra/identity-platform/scenario-spa-app-configuration
- MSAL initialization: https://learn.microsoft.com/en-us/entra/msal/javascript/browser/initialization
- Restrict users: https://learn.microsoft.com/en-us/entra/identity-platform/howto-restrict-your-app-to-a-set-of-users
- Assign users/groups: https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/assign-user-or-group-access-portal
