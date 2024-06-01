import React from 'react';
import ReactDOM from 'react-dom/client';

// function Greeting() {
//   return <h2>My First Component</h2>;
// }

// function Greeting() {
//   return (
//     <div>
//       <h2>My First Component</h2>;
//     </div>
//   );
// }

// function Greeting() {
//   return (
//     <div>
//       <div>
//         <h3>hello people</h3>
//         <ul>
//           <li>
//             <a href="#">hello world</a>
//           </li>
//         </ul>
//       </div>
//       <h2>welcome onboard</h2>
//     </div>
//   );
// }

// function Greeting() {
//   return (
//     <section>
//       <div>
//         <h3>hello people</h3>
//         <ul>
//           <li>
//             <a href="#">hello world</a>
//           </li>
//         </ul>
//       </div>
//       <h2>welcome onboard</h2>
//     </section>
//   );
// }

// function Greeting() {
//   return (
//     <React.Fragment>
//       <div>
//         <h3>hello people</h3>
//         <ul>
//           <li>
//             <a href="#">hello world</a>
//           </li>
//         </ul>
//       </div>
//       <h2>welcome onboard</h2>
//     </React.Fragment> shorthand <> & </>
//   );
// }

// function Greeting() {
//   return (
//     <>
//       <div className='someValue'>
//         <h3>hello people</h3>
//         <ul>
//           <li>
//             <a href="#">hello world</a>
//           </li>
//         </ul>
//       </div>
//       <h2>welcome onboard</h2>
//       <input type='text' name='' id='' />
//     </>
//   );
// }

// function Greeting() {
//   return (<h2>hello world</h2>);
// }

function Greeting() {
  return <h2>hello world</h2>;
}

// function Greeting() {
//   return React.createElement('h2', {}, 'hello world');
// }

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting />);