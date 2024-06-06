import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

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

// function Greeting() {
//   return <h2>hello world</h2>;
// }

// function Greeting() {
//   return (
//     <div>
//       <h2>john doe</h2>
//       <p>this is my message</p>
//     </div>
//   );
// }

// function Greeting() {
//   return <div>
//     <Person/>
//     <Message/>
//   </div>;
// }

// const Person = () => <h2>john doe</h2>;
// const Message = () => {
//   return <p>this is my message</p>;
// };


// function Greeting() {
//   return React.createElement('h2', {}, 'hello world');
// }

// const BookList = () =>{
//   return <section>
//     <Book/>
//   </section>
// }

// const BookList = () => {
//   return <section>
//     <Book/>
//     <Book/>
//     <Book/>
//     <Book/>
//   </section>
// }

const BookList = () => {
  return (
    <section class='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () =>{
  return (
    <article class='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
}; 

const Image = () => (
  <img
    // src="https://images-na.ssl-images-amazon.com/images/I/81SIQfF-aGL._AC_UL600_SR600,400_.jpg"
    src="./images/erupt.jpg"  alt="Eruption: Following Jurassic Park"
  />
);
// const Title = () => <h2>Book Title</h2>
const Title = () => <h2>Eruption: Following Jurassic Park, Michael Crichton Started Another Masterpiece―James Patterson Just Finished It </h2>
const Author = () => {
  const inlineHeadingStyles = { color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }
  // return <h3 style={{color:'#617d98',fontSize:'0.75rem', marginTop:'0.5rem'}}>
  //   by Michael Crichton & James Patterson</h3>;
  
return (
    <h3 style={inlineHeadingStyles}>
      by Michael Crichton & James Patterson</h3>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(<Greeting />);
root.render(<BookList />);