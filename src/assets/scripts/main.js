/**
 * Import dependencies from node_modules
 * see commented examples below
 */

 import * as bootstrap from 'bootstrap';

/**
 * Write any other JavaScript below
 */


+( function() {
  // const university = "UOC";
  // console.log(`Hello, ${university}!`);
  document.getElementById('seatsoccupied')?.innerText =
        document.querySelectorAll('.seat__check[disabled]').length;
  Array.from(document.getElementsByClassName('seat__check')).map(
    (el) => el.addEventListener('change', () => {
      const checkeds = document.querySelectorAll('.seat__check:checked').length;
      document.getElementById('seatsnumber').innerText = checkeds;
      if (checkeds > 0) {
        document.getElementById('buytickets').removeAttribute('disabled');
      } else {
        document.getElementById('buytickets').setAttribute('disabled', 'disabled');
      }
    })
  );
} )();
