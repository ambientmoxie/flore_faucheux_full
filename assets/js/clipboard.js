async function copyTargetText(e) {
  try {
    await navigator.clipboard.writeText(e.target.getAttribute("data-mail"));
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}

document.getElementById("clipboard-mail").addEventListener("click", e => {
  e.preventDefault();
  copyTargetText(e);
  const copyAlert = document.getElementById("copy-alert");
  copyAlert.innerText = `"${e.target.getAttribute("data-mail")}" copied to clipboard`;
});