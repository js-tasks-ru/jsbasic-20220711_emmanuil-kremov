const FIRST_COLUMN = 1;
const SECOND_COLUMN = 2;
const THIRD_COLUMN = 3;

function highlight(table) {
  const actions = {
    [THIRD_COLUMN]: (root, td) => {
      if (td.dataset.available === 'true') {
        root.classList.toggle('available', true);
      } else if (td.dataset.available === 'false') {
        root.classList.toggle('unavailable', true);
      } else if (!td.hasAttribute('data-available')) {
        root.hidden = true;
      }
    },
    [SECOND_COLUMN]: (root, td) => {
      if (td.textContent === 'm') {
        root.classList.toggle('male', true);
      } else if (td.textContent === 'f') {
        root.classList.toggle('female', true);
      }
    },
    [FIRST_COLUMN]: (root, td) => {
      const age = parseInt(td.textContent, 10);

      if (age < 18) {
        root.style.textDecoration = 'line-through';
      }
    },
  };

  for (const tr of table.rows) {
    Array.from(tr.cells).forEach((td, index) => {
      const fn = actions[index];

      if (typeof fn === 'function') {
        fn(tr, td);
      }
    });
  }
}



  // Мой код, тесты не проходят: 

  // for(let td of table.querySelectorAll('td')) {

  //   if(td.hasAttribute('data-available') && td.getAttribute('data-available') == 'true') {
  //     td.classList.add('available');
  //   } else if(td.hasAttribute('data-available') && td.getAttribute('data-available') == 'false') {
  //     td.classList.add('unavailable');
  //   } else {
  //     td.hidden = true;
  //   }

  //   if(td.textContent == 'm') {
  //     td.classList.add('male');
  //   } else if(td.textContent == 'f') {
  //     td.classList.add('female');
  //   }

  //   if(parseInt(td.textContent) < 18) {
  //     td.style.textDecoration = 'line-through';
  //   }

  // }
