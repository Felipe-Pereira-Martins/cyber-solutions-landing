function Menu(icon) {
  const list = document.getElementById('menuList');

  // alterna visibilidade no mobile
  const isHidden = list.classList.contains('hidden');
  if (isHidden) {
    list.classList.remove('hidden');
    list.classList.add('block');
    icon.setAttribute('name', 'close');
  } else {
    list.classList.add('hidden');
    list.classList.remove('block');
    icon.setAttribute('name', 'menu');
  }
}
