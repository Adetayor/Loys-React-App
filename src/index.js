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

const author = 'Michael Crichton & James Patterson';
const title = 'Eruption: Following Jurassic Park, Michael Crichton Started Another Masterpiece―James Patterson Just Finished It';
const img= './images/erupt.jpg';

// parameters
const someFunc = (param1, param2) => {
  console.log(param1, param2);
};
// arguments
someFunc('job', 'developer');

// const BookList = () => {
//   return (
//     <section className='booklist'>
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//     </section>
//   );
// };

const BookList = () => {
  return (
    <section className='booklist'>
      {/* <Book job="developer" />
      <Book title="random title" number={22} */}
      <Book author={author} title={title} img={img} />
      <Book author={author} title={title} img={img} />
    </section>
  );
};

// const Book = () => {
//   return (
//     <article className='book'>
//       <Image />
//       <Title />
//       <Author />
//     </article>
//   );
// }; 

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      {/* <img src={img} alt={title}/>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>  */}
      

      <img src={props.img} alt={props.title}/>
      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
    </article>
  );
}; 

// const author = 'Michael Crichton & James Patterson';
// const Book = () => {
//   const title = 'Eruption: Following Jurassic Park, Michael Crichton Started Another Masterpiece―James Patterson Just Finished It';
//   return (
//     <article className="book">
//       <img 
//       src="./images/erupt.jpg" 
//       alt="Eruption: Following Jurassic Park" 
//       />
//       <h2>
//         {/* 'Eruption: Following Jurassic Park, Michael Crichton Started Another Masterpiece―James Patterson Just Finished It' */}
//         {title}
//       </h2>
//       <h3>
//         {/* by Michael Crichton & James Patterson */}
//         {author}
//         {/* {author.toUpperCase()} */}
//       </h3>
//       {/* {<p>{let x = 6}</p>}
//       <p>{6 + 6}</p> */}
//     </article>
//   );
// }; 

// const Image = () => (
//   <img
//     // src="https://images-na.ssl-images-amazon.com/images/I/81SIQfF-aGL._AC_UL600_SR600,400_.jpg"
//     // src="./images/erupt.jpg"  alt="Eruption: Following Jurassic Park"
//   />
// );
// // const Title = () => <h2>Book Title</h2>
// const Title = () => 
// {/* <h2>Eruption: Following Jurassic Park, Michael Crichton Started Another Masterpiece―James Patterson Just Finished It </h2> */
// };
// const Author = () => {
//   const inlineHeadingStyles = { 
//     color: '#617d98', 
//     fontSize: '0.75rem', 
//     marginTop: '0.5rem', 
//   };
//   // return <h3 style={{color:'#617d98',fontSize:'0.75rem', marginTop:'0.5rem'}}>
//   //   by Michael Crichton & James Patterson</h3>;
  
// return 
// // (<h3 style={inlineHeadingStyles}>
// //       by Michael Crichton & James Patterson</h3>
// //   );
// };
const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(<Greeting />);
root.render(<BookList />);