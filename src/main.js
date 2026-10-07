import { PublicClientApplication } from '@azure/msal-browser';
import './style.css';
const $ = (id) => document.getElementById(id);
const tenantId = import.meta.env.VITE_ENTRA_TENANT_ID?.trim();
const clientId = import.meta.env.VITE_ENTRA_CLIENT_ID?.trim();
const guid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const redirectUri = window.location.origin + '/';
let msal;
function message(text) { $('status').textContent = text; }
function showAccount(account) {
  $('welcome').hidden = Boolean(account);
  $('dashboard').hidden = !account;
  if (account) {
    $('greeting').textContent = `Welcome, ${account.name || 'artist'}.`;
    $('identity').textContent = account.username;
  }
}
function report(error) {
  message(`Microsoft sign-in could not be completed. ${error.errorCode || 'sign_in_error'}: ${error.errorMessage || error.message || 'Please retry.'}`);
}
$('signin').disabled = true;
if (!guid.test(tenantId || '') || !guid.test(clientId || '')) {
  message('Setup needed: add your tenant ID and application client ID to .env.local, then restart the development server. See README.md.');
} else {
  try {
    msal = new PublicClientApplication({auth: {clientId, authority: `https://login.microsoftonline.com/${tenantId}`, redirectUri, postLogoutRedirectUri: redirectUri}, cache: {cacheLocation: 'sessionStorage'}});
    await msal.initialize();
    const result = await msal.handleRedirectPromise();
    const account = result?.account || msal.getActiveAccount() || msal.getAllAccounts()[0];
    if (account) msal.setActiveAccount(account);
    showAccount(account);
    $('signin').disabled = false;
  } catch (error) { report(error); }
}
$('signin').addEventListener('click', async () => {
  $('signin').disabled = true;
  try { await msal.loginRedirect({scopes: ['openid', 'profile'], prompt: 'select_account'}); }
  catch (error) { report(error); $('signin').disabled = false; }
});
$('signout').addEventListener('click', async () => {
  try { await msal.logoutRedirect({account: msal.getActiveAccount()}); }
  catch (error) { report(error); }
});
const briefs = [
  ['The Ember Archive', 'Create three environment thumbnails for a library surrounding a dormant volcano. Explore basalt architecture, amber light, and shelves carved into the rock. Deliver a mood board and one polished concept.'],
  ['Keeper of the Grove', 'Develop a guardian character with a readable silhouette, travel-worn clothing, and botanical details. Deliver front and side sketches plus a palette study.'],
  ['The Glass Frontier', 'Sketch a desert settlement among crystalline dunes. Explore reflected light and practical shade structures. Deliver a skyline study and a street-level composition.']
];
document.querySelectorAll('.brief').forEach(button => button.addEventListener('click', () => {
  const [title, text] = briefs[Number(button.dataset.project)];
  $('brief-title').textContent = title; $('brief-text').textContent = text; $('brief-dialog').showModal();
}));
$('close-dialog').addEventListener('click', () => $('brief-dialog').close());
