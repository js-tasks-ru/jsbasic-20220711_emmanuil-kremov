/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  elem = null;
  rows = [];
  
  constructor(rows) {
    this.rows = rows;
    this.tamplate();
  }

  createTbodyElement() {
    let tbody = document.createElement('tbody');

    for(let elem of this.rows){
      let tr = document.createElement('tr');

      let values = Object.values(elem);
      values.forEach(elem => {
        let td = document.createElement('td');
        td.innerHTML = elem;
        tr.append(td);
      });
      
      tr.insertAdjacentHTML('beforeend', '<td><button>X</button></td>');
      tbody.append(tr);
    }

    return tbody.innerHTML;
  }

  tamplate(){
    this.elem = document.createElement('table');
    this.elem.innerHTML =  `
      <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
        </tr>
      </thead>
      ${this.createTbodyElement()}
    `;

    this.elem.querySelectorAll('button').forEach(item => item.addEventListener('click', this.delRow));  
  }

  delRow(event) {
    event.target.closest('tr').remove();
  }
}
