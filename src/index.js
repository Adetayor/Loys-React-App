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
//   return <h2>hello world</h2>;
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

// const BookList = () => {
//     return <section> 
//    </section>
//  }

// const Book =>{
//   return <article>
//
//     </article>
//    }

// const Image = () => <h2>Image placeholder</h2>
// const Title = () => <h2>Book</h2>
// const Author = () => {
// return <h3>Author</h3>;
// }

// // parameters
// const someFunc = (param1, param2) => {
//   console.log(param1, param2);
// };
// // arguments
// someFunc('job', 'developer');

// const BookList = () => {
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

//  const Book = () => {
//   return (
//    <article>
//      <Image/>
//      <Title/>
//      <Author/>
//    </article>
//   );
//  };

// const Image = () => <h2>Image placeholder</h2>
// const Title = () => <h2>Book</h2> or
// const Title = () => <h2>Title of the Book</h2>
// const Author = () => {
// return <h3>Author</h3>;
// }    or

// const Image = () => (
//   <img
//      src="https://images-na.ssl-images-amazon.com/images/I/81SIQfF-aGL._AC_UL600_SR600,400_.jpg"
//      alt="Eruption: Following Jurassic Park"
//    />
//  );
// const Title = () => <h2>Eruption: Following Jurassic Park, Michael Crichton Started Another Masterpiece―James Patterson Just Finished It </h2>;
// const Author = () => {
//   return <h3>Michael Crichton & James Patterson</h3>;
// };    or


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
// };         or

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

// Props
// const author = 'Michael Crichton & James Patterson';
// const title = 'Eruption: Following Jurassic Park, Michael Crichton Started Another Masterpiece―James Patterson Just Finished It';
// const img= './images/erupt.jpg';

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

// const Book = () => {
//   return (
//     <article className='book'>
//       <Image />
//       <Title />
//       <Author />
//     </article>
//   );
// }; 

// const Book = (props) => {
//   const { img, title, author } = props;
//   return (
//     <article className="book">  
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h3>{author}</h3>
//     </article>
//   );
// }; 
 

// const Book = (props) => {
//   console.log(props);
//   const { img, title, author, children } = props;
//   return (
//     <article className="book">  
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h3>{author}</h3>
//       {children}
//     </article>
//   );
// }; 

// const Book = (props) => {
//   console.log(props);
//   return (
//     <article className="book">
//       {/* <img src={img} alt={title}/>
//       <h2>{title}</h2>
//       <h3>{author}</h3>
//       <p>{props.job}</p>
//       <p>{props.title}</p>
//       <p>{props.number}</p>  */}
       
//       <img src={props.img} alt={props.title}/>
//       <h2>{props.title}</h2>
//       <h3>{props.author}</h3>
//     </article>
//   );
// }; 

//Dynamic Props Setup
// const firstBook = {
//   author: 'Michael Crichton & James Patterson',
//   title: 'Eruption: Following Jurassic Park, Michael Crichton Started Another Masterpiece―James Patterson Just Finished It',
//   img: './images/erupt.jpg',
// };
// const secondBook = {
//   author: " Pete Hegseth",
//   title: "The War on Warriors: Behind the Betrayal of the Men Who Keep Us Free",
//   img: "https://m.media-amazon.com/images/I/7187im2CwUL._SY342_.jpg",
// };

// const BookList = () => {
//   return (
//     <section className="booklist">
//       <Book
//         author={firstBook.author}
//         title={firstBook.title}
//         img={firstBook.img}
//       ></Book>
//       <Book
//         author={secondBook.author}
//         title={secondBook.title}
//         img={secondBook.img}
//       />
//     </section>
//   );
// };


// const BookList = () => {
//   return (
//     <section className="booklist">
//       {/* <Book job="developer" />
//       <Book title="random title" number={22} */}
//       <Book
//         author={firstBook.author}
//         title={firstBook.title}
//         img={firstBook.img}
//       >
//         <p>
//           Lorem, Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//           Itaque repudiandae inventore eos qui animi sed iusto alias eius ea
//           sapiente.
//         </p>
//         <button>click me</button>
//       </Book>
//       <Book
//         author={secondBook.author}
//         title={secondBook.title}
//         img={secondBook.img}
//       />
//     </section>
//   );
// };
// const Book = ({img, title, author, children}) => {
//   return (
//     <article className="book">  
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h3>{author}</h3>
//       {children}
//     </article>
//   );
// }; or

// const Book = (props) => {
//   const { img, title, author } = props;
//   console.log(props);
//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//     </article>
//   );
// };

//Simple List
// const books = [
//   { author: 'Michael Crichton & James Patterson',
//     title: 'Eruption: Following Jurassic Park, Michael Crichton Started Another Masterpiece―James Patterson Just Finished It',
//     img: './images/erupt.jpg',
// },
// {
//   author: " Pete Hegseth",
//   title: "The War on Warriors: Behind the Betrayal of the Men Who Keep Us Free",
//   img: "https://m.media-amazon.com/images/I/7187im2CwUL._SY342_.jpg",
// }
// ];


// const names = ['john', 'peter', 'susan'];
// const newNames = names.map((name) => {
//   return <h1>{name}</h1>;
// });
// console.log(newNames);
// const BookList = () => {
//   return (
//   <section className='booklist'>
//     {/* {newNames} */}
//     {names.map((name) => {
//     return <h1>{name}</h1>;
//   })}
//   </section>
//   );
// };
//       const Book = (props) => {
//         const { img, title, author } = props;
//         console.log(props);
//         return (
//           <article className="book">
//             <img src={img} alt={title} />
//             <h2>{title}</h2>
//             <h4>{author}</h4>
//           </article>
//     );
// };

//Proper List
// const books = [
//   { author: 'Michael Crichton & James Patterson',
//     title: 'Eruption: Following Jurassic Park, Michael Crichton Started Another Masterpiece―James Patterson Just Finished It',
//     img: './images/erupt.jpg',
// },
// {
//   author: " Pete Hegseth",
//   title: "The War on Warriors: Behind the Betrayal of the Men Who Keep Us Free",
//   img: "https://m.media-amazon.com/images/I/7187im2CwUL._SY342_.jpg",
// }
// ];

// const BookList = () => {
//   return (
//     <section className='booklist'>
//       {books.map(()=>{
//         return <div>
//           {/* <h2>item</h2> */}
//           <h2>{books.title}</h2>
//           <h2>{books.author}</h2>
//           </div>
//       })}
//     </section>
//   )
// }; or
// const BookList = () => {
//   return (
//     <section className='booklist'>
//       {books.map((book)=>{
//         const { img, title, author } = book;
//         return <Book img={img} title={title} author={author}/>;
//       })}
//     </section>
//   )
// };
//  const Book = (props) => {
//       const { img, title, author } = props;
//       console.log(props);
//         return (
//           <article className="book">
//             <img src={img} alt={title} />
//             <h2>{title}</h2>
//             <h4>{author}</h4>
//           </article>
//     );
// };

//Key Props
// const books = [
//   {
//     author: "Michael Crichton & James Patterson",
//     title:
//       "Eruption: Following Jurassic Park, Michael Crichton Started Another Masterpiece―James Patterson Just Finished It",
//     img: "./images/erupt.jpg",
//     id: 1,
//   },
//   {
//     author: " Pete Hegseth",
//     title:
//       "The War on Warriors: Behind the Betrayal of the Men Who Keep Us Free",
//     img: "https://m.media-amazon.com/images/I/7187im2CwUL._SY342_.jpg",
//     id: 2,
//   },
// ];
// const BookList = () => {
//   return (
//     <section className='booklist'>
//       {books.map((book)=>{
//         const { img, title, author, id } = book;
//         return <Book img={img} title={title} author={author}
//         key={id}/>;
//       })}
//     </section>
//   )
// };
// const Book = (props) => {
//       const { img, title, author } = props;
//       console.log(props);
//         return (
//           <article className="book">
//             <img src={img} alt={title} />
//             <h2>{title}</h2>
//             <h4>{author}</h4>
//           </article>
//     );
// };

//Object as Props
const books = [
  {
    author: "Michael Crichton & James Patterson",
    title:
      "Eruption: Following Jurassic Park, Michael Crichton Started Another Masterpiece―James Patterson Just Finished It",
    img: "./images/erupt.jpg",
    id: 1,
  },
  {
    author: " Pete Hegseth",
    title:
      "The War on Warriors: Behind the Betrayal of the Men Who Keep Us Free",
    img: "https://m.media-amazon.com/images/I/7187im2CwUL._SY342_.jpg",
    id: 2,
  },
];
// const BookList = () => {
//   return (
//     <section className='booklist'>
//       {books.map((book)=>{
//         const { img, title, author, id } = book;
//         return <Book book={book} key={id} />;
//       })}
//     </section>
//   )
// }; or
// const BookList = () => {
//   return (
//     <section className='booklist'>
//       {books.map((book)=>{
//         return <Book book={book} key={book.id} />;
//       })}
//     </section>
//   )
// };
// const Book = (props) => {
//       const { img, title, author } = props.book;
//       console.log(props);
//         return (
//           <article className="book">
//             <img src={img} alt={title} />
//             <h2>{title}</h2>
//             <h4>{author}</h4>
//           </article>
//     );
// };  
// or
// const Book = ({ book: { img, title, author } }) => {
//         return (
//           <article className="book">
//             <img src={img} alt={title} />
//             <h2>{title}</h2>
//             <h4>{author}</h4>
//           </article>
//     );
// };

//Using Spread Operator to return Props as Object
const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};
const Book = (props) => {
  const { img, title, author } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};  

const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(<Greeting />);
root.render(<BookList />);