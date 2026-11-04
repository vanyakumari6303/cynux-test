// C3 · Office map: "Copy address" button.
const map = document.querySelector('.cm__map');

if (map) {
  // Copy the postal address to the clipboard, with a short confirmation.
  const copyBtn = map.querySelector('.cm__copy');
  const label = copyBtn.querySelector('span');
  const original = label.textContent;
  let timer;
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(copyBtn.dataset.address);
      label.textContent = 'Address copied';
    } catch {
      label.textContent = 'Couldn’t copy — please select the address';
    }
    clearTimeout(timer);
    timer = setTimeout(() => { label.textContent = original; }, 2000);
  });
}
