document.addEventListener('DOMContentLoaded', () => {
  const selectWrapper = document.querySelector('.custom-select-wrapper');
  const select = selectWrapper.querySelector('.custom-select');
  const options = select.querySelectorAll('.custom-option');
  const trigger = select.querySelector('.custom-select__trigger span');

  select.addEventListener('click', event => {
    select.classList.toggle('open');
    event.stopPropagation();
  });

  options.forEach(option => {
    option.addEventListener('click', event => {
      const value = option.getAttribute('data-value');
      const label = option.innerHTML;

      options.forEach(opt => {
        opt.classList.remove('selected');
      });
      option.classList.add('selected');
      trigger.innerHTML = label;
      select.classList.remove('open');

      event.stopPropagation();
    });
  });

  window.addEventListener('click', e => {
    if (!select.contains(e.target)) {
      select.classList.remove('open');
    }
  });
});
