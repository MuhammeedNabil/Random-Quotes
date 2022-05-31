var listOfQuotes = [
  {
    author: "― Oscar Wilde",
    quote: "“Be yourself; everyone else is already taken.”",
  },
  {
    author: "― Mark Twain",
    quote:
      "“If you tell the truth, you don't have to remember anything.”",
  },
  { author: "― Elbert Hubbard", 
    quote: "“A friend is someone who knows all about you and still loves you.”" },
  {
    author: "Wayne Gretzy",
    quote: "“You miss 100% of the shots you don't take.”",
  },
  {
    author: "― Mark Twain",
    quote:
      "“Good friends, good books, and a sleepy conscience: this is the ideal life.”",
  },
  {
    author: "― Oscar Wilde, Lady Windermere's Fan",
    quote: "“We are all in the gutter, but some of us are looking at the stars.”",
  },
];

function getquote() {
  var box = ``;
  var x =  Math.floor(Math.random() *(listOfQuotes.length))
    box = `
           <p>${listOfQuotes[x].quote}</p> 
           <p>${listOfQuotes[x].author}</p>`;

  quote.innerHTML = box;
}
