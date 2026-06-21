(function() {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }

  document.querySelectorAll('[data-product]').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = document.querySelector('#quote-form input[name="product"]');
      if (input) input.value = btn.dataset.product;
      document.querySelector('#rfq')?.scrollIntoView({behavior:'smooth'});
    });
  });

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const form = document.getElementById('quote-form');
  const contact = window.HDD_SITE_CONTACT || {phone:'8618686745560',email:'smithsusanxhxuz4440@gmail.com'};

  function buildMessage() {
    const data = new FormData(form);
    const lines = [
      'Hello, I want to ask about HDD parts.',
      'Product: ' + (data.get('product') || ''),
      'Rig model / tonnage: ' + (data.get('rig') || ''),
      'Thread / size: ' + (data.get('size') || ''),
      'Quantity: ' + (data.get('qty') || ''),
      'Message: ' + (data.get('message') || '')
    ];
    return lines.join('\n');
  }

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      window.open('https://wa.me/' + contact.phone + '?text=' + encodeURIComponent(buildMessage()), '_blank', 'noopener');
    });
  }

  const emailBtn = document.getElementById('email-rfq');
  if (emailBtn) {
    emailBtn.addEventListener('click', function() {
      const subject = encodeURIComponent('RFQ - HDD Parts');
      const body = encodeURIComponent(buildMessage());
      window.location.href = 'mailto:' + contact.email + '?subject=' + subject + '&body=' + body;
    });
  }
})();
