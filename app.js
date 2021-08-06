const btns = document.querySelectorAll('button');
const valid =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

btns.forEach((btn) =>
  btn.addEventListener('click', (e) => {
    const input = e.target.previousElementSibling.firstElementChild;
    if (valid.test(input.value)) {
      input.style.border = '0.2rem solid green';
      input.nextElementSibling.style.display = 'none';
    } else {
      input.nextElementSibling.style.display = 'block';
      input.style.border = '0.2rem solid var(--error)';
    }
    setTimeout(() => {
      input.style.border = '0.2rem solid var(--DesaturatedBlue)';
      input.nextElementSibling.style.display = 'none';
    }, 5000);
  })
);
