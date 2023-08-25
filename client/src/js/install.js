const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
//original code below:
//window.addEventListener('beforeinstallprompt', (event) => {});

window.addEventListener("beforeinstallprompt", (event) => {
  window.deferredPrompt = event;
  butInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall`
//element
//original code below:
//butInstall.addEventListener('click', async () => {});

butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }

  promptEvent.prompt();

  butInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
//original code below:
//window.addEventListener("appinstalled", (event) => {});
window.addEventListener("appinstalled", (event) => {
  window.deferredPrompt = null;
});
