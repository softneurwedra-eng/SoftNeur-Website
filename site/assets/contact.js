const form = document.querySelector('#contact-form');
if (form) {
  const service = new URLSearchParams(location.search).get('service');
  if ([...form.elements.service.options].some(o => o.value === service)) form.elements.service.value = service;
  let prepared = '';
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const label = form.elements.service.selectedOptions[0].textContent;
    prepared = `Bonjour SoftNeur,\n\nNom : ${data.get('name')}\nE-mail : ${data.get('email')}\nOrganisation : ${data.get('company') || 'Non précisée'}\nService : ${label}\n\n${data.get('message')}`;
    document.querySelector('#form-status').textContent = 'Votre brouillon est prêt. Envoyez-le depuis votre messagerie. Si elle ne s’ouvre pas, copiez le message et adressez-le à softneur.wedra@gmail.com.';
    document.querySelector('#copy-message').hidden = false;
    location.href = `mailto:softneur.wedra@gmail.com?subject=${encodeURIComponent('Demande SoftNeur — '+label)}&body=${encodeURIComponent(prepared)}`;
  });
  document.querySelector('#copy-message').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(prepared); document.querySelector('#form-status').textContent = 'Message copié. Collez-le dans un e-mail destiné à softneur.wedra@gmail.com.'; }
    catch { document.querySelector('#form-status').textContent = 'La copie automatique est indisponible. Sélectionnez ce texte pour le copier :\n'+prepared; }
  });
}
