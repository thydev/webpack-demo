import { cube } from './math.js';
// import './styles/style.css';

function component() {
  var element = document.createElement('pre');

  element.innerHTML = ['Hello webpack!', '5 cube is equal to ' + cube(5)].join(
    '\n\n'
  );
  return element;
}

// Store the element to re-render on print.js changes
let element = component();
document.body.appendChild(element);

if (module.hot) {
  // module.hot.accept('./print.js', function() {
  //   console.log('Accepting the updated printMe module!');
  //   document.body.removeChild(element);
  //   element = component();
  //   document.body.appendChild(element);
  // });
}
