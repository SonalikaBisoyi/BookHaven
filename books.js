
const categories = [
    {
      name: "Fiction",
      books: [
        {
          title: "Dracula",
          author:"Bram Stoker",
          rating:"4.8",
          price: "16",
          image: "./images/Dracula.jpg",
          details: "In Dracula, Bram Stoker created one of the great masterpieces of the horror genre, brilliantly evoking a nightmare world of vampires and vampire hunters and also illuminating the dark corners of Victorian sexuality and desire.",
        },
        {
          title: " the Alchemist ",
          author:"Paulo Coelho",
          rating:"4.0",
          price: "14",
          image: "./images/fiction2.jpeg",
          details: "Turning the envelope over, his hand trembling, Harry saw a purple wax seal bearing a coat of arms; a lion, an eagle, a badger and a snake surrounding a large letter 'H'..",
        },
        {
          title: "Yellowface",
          author:"R.F. Kuang",
          rating:"3.8",
          price: "17",
          image: "./images/fiction3.jpeg",
          details: "Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors - and then the attacks start. Students are found as though turned to stone... Dobby's sinister predictions seem to be coming true..",
        },
        {
          title: "The Kite Runner",
          author:" Khaled Hosseini",
          rating:"2.8",
          price: "21",
          image: "./images/fiction4.jpeg",
          details: "The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!.",
        },
        {
          title: "The Book Thief",
          author:"Markus Zusak",
          rating:"4.5",
          price: "11",
          image: "./images/fiction5.jpeg",
          details: "This Baker Street dozen by Sir Arthur Conan Doyle is all the evidence readers will need to understand why Sherlock Holmes is an enduring legend in detective fiction..",
        },
      ],
    },
    {
      name: "Classics",
      books: [
        {
          title: "Pride and Prejudice",
          author:"Jane Austen",
          rating:"3.8",
          price: "21",
          image: "./images/JaneEyre.webp",
          details: "Pride and Prejudice is an 1813 novel written by Jane Austen. The novel follows the character development of Elizabeth Bennet, the dynamic protagonist of the book who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness.",
        },
        {
          title: "Jane Eyre",
          author:"Charlotte Brontë",
          rating:"3.9",
          price: "22",
          image: "./images/Pride_and_prejudice.webp",
          details: "One of the most widely-read and enjoyed of all Victorian novels, and one of the greatest tales of a woman's struggle for dignity and love in a hard time.",
        },
        {
          title: "The Bell Jar",
          author:"Sylvia Plath",
          rating:"4.6",
          price: "23",
          image: "./images/classic3.jpg",
          details: "This Baker Street dozen by Sir Arthur Conan Doyle is all the evidence readers will need to understand why Sherlock Holmes is an enduring legend in detective fiction..",
        },
        {
          title: "Messalina",
          author:"Alfred Jarry",
          rating:"4.5",
          price: "23",
          image: "./images/classic4.jpg",
          details: "This Baker Street dozen by Sir Arthur Conan Doyle is all the evidence readers will need to understand why Sherlock Holmes is an enduring legend in detective fiction..",
        },
        {
          title: "Psyche and Eros",
          author:"Lucius Apuleius",
          rating:"4.8",
          price: "23",
          image: "./images/classic5.jpg",
          details: "This Baker Street dozen by Sir Arthur Conan Doyle is all the evidence readers will need to understand why Sherlock Holmes is an enduring legend in detective fiction..",
        },
       
       
      ],
    },
    {
      name: "Fantasy",
      books: [
        {
          title: "Daughter of the Pirate King",
          author:"Trica Levenseller",
          rating:"4.9",
          price: "30",
          image: "./images/DaughterOfhePrirateKing.webp",
          details: "Seventeen-year-old Alosa, daughter of the feared Pirate King, is on a mission. She must retrieve an ancient hidden map, the key to a legendary treasure trove. The catch? Alosa needs to conceal her considerable combat skills and allow herself to be captured by her enemies, giving her the perfect opportunity to search their ship.",
        },
        {
          title: "Night Elves of Ardani",
          author:"Ninak Westra",
          rating:"4.5",
          price: "31",
          image: "./images/NightElvesOfArdani.webp",
          details: "When she/'s taken prisoner by the enemies of her people, her elven captor is the only person standing between her and death at the hands of his bloodthirsty kin. ",
        },
        {
          title: "The Name of the Wind",
          author:"Patrick Rothfuss",
          rating:"4.8",
          price: "37",
          image: "./images/TheNameOfTheWind.webp",
          details: "So begins the tale of Kvothe - currently known as Kote, the unassuming innkeepter - from his childhood in a troupe of traveling players, through his years spent as a near-feral orphan in a crime-riddled city, to his daringly brazen yet successful bid to enter a difficult and dangerous school of magic. In these pages you will come to know Kvothe the notorious magician, the accomplished thief, the masterful musician, the dragon-slayer, the legend-hunter, the lover, the thief and the infamous assassin.",
        },
        {
          title: "Wings of Fire",
          author:"Stephanie Mirro",
          rating:"4.8",
          price: "32",
          image: "./images/WingsOfFire.webp",
          details: "Time to track down the real killer and clear my name.Because if I don/'t solve this murder fast, then I might just be facing a lifetime in a grim reaper's prison. Or worse, a lifetime of servitude to a vampire",
        },
       
      ],
    },
    {
      name: "Comedy",
      books: [
        {
          title: "Me Talk Pretty One Day",
          author:"David Sedaris",
          rating:"4.8",
          price: "12",
          image: "./images/comedy1.jpg",
          details: "Laugh out loud with David Sedaris hilarious collection of essays inspired by his move from New York to Paris. From a sadistic French teacher to his brother\'s incessant hip-hop slang, nothing is off-limits in this witty and sharp commentary on modern annoyances, including ludicrous restaurant meals and cashiers with six-inch fingernails.",
        },
        {
          title: "Good Omens",
          author:"Terry Pratchett and Neil Gaiman",
          rating:"4.5",
          price: "16",
          image: "./images/comedy2.jpeg",
          details: "Laugh out loud with David Sedaris hilarious collection of essays inspired by his move from New York to Paris. From a sadistic French teacher to his brother\'s incessant hip-hop slang, nothing is off-limits in this witty and sharp commentary on modern annoyances, including ludicrous restaurant meals and cashiers with six-inch fingernails.",
        },
        {
          title: "Carry On , Jeeves",
          author:"P.G. Wodehouse",
          rating:"4.8",
          price: "24",
          image: "./images/comedy3.jpeg",
          details: "Laugh out loud with David Sedaris hilarious collection of essays inspired by his move from New York to Paris. From a sadistic French teacher to his brother\'s incessant hip-hop slang, nothing is off-limits in this witty and sharp commentary on modern annoyances, including ludicrous restaurant meals and cashiers with six-inch fingernails.",
        },
        {
          title: "BossyPants",
          author:"Tina Fey",
          rating:"2.8",
          price: "14",
          image: "./images/comedy4.jpeg",
          details: "Laugh out loud with David Sedaris hilarious collection of essays inspired by his move from New York to Paris. From a sadistic French teacher to his brother\'s incessant hip-hop slang, nothing is off-limits in this witty and sharp commentary on modern annoyances, including ludicrous restaurant meals and cashiers with six-inch fingernails.",
        },
       
      ],
    },
    {
      name: "SelfHelp",
      books: [
        {
          title: "Atomic Habits",
          author:"James Clear",
          rating:"4.8",
          price: "15",
          image: "./images/self1.jpeg",
          details: "Over the past few years, Brianna Wiest has gained renown for her deeply moving, philosophical writing. This new compilation of her published work features pieces on why you should pursue purpose over passion, embrace negative thinking, see the wisdom in daily routine, and become aware of the cognitive biases that are creating the way you see your life.",
        },
        {
          title: "Ikigai",
          author:"Hector Gracia",
          rating:"4.8",
          price: "35",
          image: "./images/Ikigai.webp",
          details: "Brought to you by Penguin.The international bestseller.We all have an ikigai.It's the Japanese word for a reason to live or a reason to jump out of bed in the morning. ",
        },
        {
          title: "The Mountain Is You",
          author:"Brainna West",
          rating:"4.3",
          price: "25",
          image: "./images/TheMountainIsYou.webp",
          details: "For centuries, the mountain has been used as a metaphor for the big challenges we face, especially ones that seem impossible to overcome. To scale our mountains, we actually have to do the deep internal work of excavating trauma, building resilience, and adjusting how we show up for the climb. In the end, it is not the mountain we master, but ourselves..",
        },
        {
          title: "THINK STRAIGHT",
          author:"Darius Foroux",
          rating:"4.1",
          price: "19",
          image: "./images/ThinkStraight.jpg",
          details: "I know something about you without knowing you. I bet you spend A LOT of time in your head. You know, thinking, worrying, stressing, freaking out -- call it whatever you want. I call it a preoccupied mind. And with what?",
        },
        {
          title: "You Can Win",
          author:"Shiv Khera",
          rating:"4.8",
          price: "25",
          image: "./images/YouCanWin.webp",
          details: "A practical, common-sense guide that will lead you from ancient wisdom to modern-day thinking, You Can Win will help you to establish new goals, develop a renewed sense of purpose, and generate fresh and exciting ideas about yourself and your future..",
        },
       
      ],
    },
    {
      name: "Action-and-Adventure",
      books: [
        {
          title: "Ethan Jones",
          author:"Bram Stoker",
          rating:"4.8",
          price: "16",
          image: "./images/EthanJones.webp",
          details: "But once a year, the skies burn red. Upon this day, the Fire Kingdom\'s priests perform their ritual: each newborn\'s palm is lacerated, opened with a sacred sword, for Firia\'s next ruler will be seen to shed no blood.",
        },
        {
          title: "Nuclear Revenge",
          author:"J.T. Skye",
          rating:"4.3",
          price: "16",
          image: "./images/Nuclear_Revenge.webp",
          details: "In a South American jungle, perched precariously above a raging river, the secret detonator for a WW2 Nazi nuclear weapon lies undisturbed inside a long lost airplane.Its discovery ignites a race to grab the bomb and cover up another terrible secret: a written accord giving Europe to Hitler. A treaty that would tear apart the NATO Alliance.",
        },
        
        {
          title: "Sword's Choice",
          author:"I.M RedWright",
          rating:"4.8",
          price: "18",
          image: "./images/Sword'sChoice.webp",
          details: "After a botched retrieval operation, Javin Pierce is sent in to complete the mission where others failed. But, before even getting started, Javin and his less-than-trusted partner, Claudia, must deal with a devious terrorist plot. Their search leads them to a flash drive containing scandals that could topple world governments and plunge Europe into absolute chaos if they do not retrieve it in time. ",
        },
        {
          title: "The Nice Guy and the Devil",
          author:"Tom Trott",
          rating:"3.8",
          price: "26",
          image: "./images/TheNiceGuyAndTheDevil.webp",
          details: "Nice, France — Retired CIA agent, Cain, is living a quiet life, trying to stay out of trouble.But he can’t turn off his old instincts like a lightswitch.When an unsuspecting American woman becomes the target of criminals, he can not sit back and do nothing.",
        },
        
        
      ],
    },
    {
      name: "GraphicNovel",
      books: [
        {
          title: "Avengers",
          author:"Stan Lee ",
          rating:"4.5",
          price: "7",
          image: "./images/avengers.webp",
          details: "Marvel is bringing you the biggest and boldest stories yet! FCBD AVENGERS #1 features a story by industry superstars Jason Aaron and Stefano Caselli that sets the stage of the main Avengers series just in time for Marvel's highly anticipated movie Avengers: Endgame, while an all-new thrilling 10-page tale from Gerry Duggan and Mike Deodato creates one of the most unique, dynamic, and deadly versions of the Avengers ever- the Savage Avengers!",
        },
        {
          title: "Captain America",
          author:"Joe Simon and Jack Kirby",
          rating:"4.8",
          price: "7",
          image: "./images/ca.webp",
          details: "With a story from Jason Aaron and art by Sara Pichelli, Marvel's FCBD title debuting this May features stories that set the stage for an epic new direction for the Avengers in the Marvel Universe. Plus, a Captain America story from Ta-Nehisi Coates and Leinil Francis Yu leading into their upcoming Captain America series!",
        },
        
        {
          title: "Spiderman",
          author:"Matt and Ross Duffer",
          rating:"4.8",
          price: "7",
          image: "./images/spiderman.webp",
          details: "Two exciting tales connected to the coming major storylines in Venom, Amazing Spider-Man and Black Cat from top creators Donny Cates, Ryan Stegman, Jed MacKay, Patrick Gleason and more! ",
        },
        
        {
          title: "Stranger Things",
          author:"Michael Stein",
          rating:"4.6",
          price: "7",
          image: "./images/st.webp",
          details: "Celebrating the weird and wonderful, we present stories both strange and alien! In Stranger Things, Eleven, Will and Jonathan go to a Drive-In Theater for a Double Creature Feature, but the local festivities and scary costumes bring back haunting memories. In Resident Alien, Dr. Harry and nurse Asta help an elderly patient in the sleepy, small town of Patience investigate a ghostly presence in her house! ",
        },
        
        
      ],
    },
    {
      name: "Detective-and-Mystery",
      books: [
        {
          title: "3 and a Half Murders",
          author:"Salil Desai",
          rating:"4.8",
          price: "8",
          image: "./images/3andhalf.webp",
          details: "What appears at first to be a commonplace crime by a debt-ridden, cuckolded husband, who has killed his unfaithful wife and then hung himself, soon begins to unfold as a baffling mystery. As clues point to a seven-year-old unsolved murder in Bangalore and other leads emerge closer home, Saralkar and Motkar find themselves investigating shady secrets, bitter grudges, fishy land deals, carnal desires, the dead woman Anushka Doshi/'s sinister obsession with past life regression and her husband/'s links to a suspicious, small-time god-man, Rangdev Baba.And then, suddenly, the murderer resurfaces and yet another life is in grave danger . . . Can Saralkar and Motkar get to the bottom of an unimaginably shocking motive and stop the malevolent killer from committing the fourth murder . . .? ",
        },
        {
          title: "The Perfect Murder ",
          author:"Peter James",
          rating:"4.1",
          price: "8",
          image: "./images/ruskin.webp",
          details: "Is the perfect murder ever possible? Find out, in this collection of stories where plenty of mysterious and strange crimes occur. Featuring some of the best writers of this genre, from Arthur Conan Doyle and Wilkie Collins to Edgar Allen Poe and Ruskin Bond, these stories will keep the reader hooked as they try to guess the motives, alibis and identity of the murderer. Baffling and exciting, this book is for those who enjoy pitting brains against some of the most accomplished writers of mystery stories..",
        },
        {
          title: "TERROR TOWER ",
          author:"R.L. Stine",
          rating:"4.3",
          price: "8",
          image: "./images/tt.webp",
          details: "One vanishes chasing a forger. Then two officers disappear searching for a wanted jewel thief in Hythe. Finally, a fourth officer vanishes in Hythe, after being sent to the nearby village of Stonehurst.Criminologist Trevor Lowe investigates a lead: someone has telephoned to arrange a meeting at the crossroads between the two villages. Lowe keeps the rendezvous but finds the man has been silenced — shot dead in a ditch . . .This twisty, edge-of-the-seat thriller will see the strong arm of London\'s police force picked off one by one in a whodunit that unravels with all the pace and intrigue of Line of Duty.",
        },
        {
          title: "THE WATCHER",
          author:"Joan Hiatt Harlow",
          rating:"4.8",
          price: "8",
          image: "./images/watcher.webp",
          details: "Colonel Charles Raynham lives a comfortable life. But one day the man in black arrives, and everything changes.When a brick is thrown through his window with a note warning him there is a price to pay, Raynham contacts his journalist friend Dick Farrell.Farrell has an eye for a story, but he didn\'t expect to witness a murder…When local police are unable to uncover the truth, Trevor Lowe must act decisively before someone else falls victim.But is he being watched too?.",
        },
       
      ],
    },
    {
      name: "Romance",
      books: [
        {
          title: " It Ends With Us",
          author:"Colleen Hoover",
          rating:"3.8",
          price: "90",
          image: "./images/ItEndsWithUs.webp",
          details: "“A brave and heartbreaking novel that digs its claws into you and doesn’t let go, long after you’ve finished it” Anna Todd, bestselling author.This is the Double black Bed.",
        },
        {
          title: "Jane Eyre",
          author:"Charlotte Bronte",
          rating:"4.1",
          price: "92",
          image: "./images/JaneEyre.webp",
          details: "One of the most widely-read and enjoyed of all Victorian novels, and one of the greatest tales of a woman's struggle for dignity and love in a hard time.",
        },
        {
          title: "Pride and Prejudice ",
          author:"Grahame-Smith",
          rating:"4.3",
          price: "96",
          image: "./images/Pride_and_prejudice.webp",
          details: "Pride and Prejudice is an 1813 novel written by Jane Austen. The novel follows the character development of Elizabeth Bennet, the dynamic protagonist of the book who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness.",
        },
        {
          title: "The Broken Duke's Bride",
          author:"Joanne Wadsworth",
          rating:"4.9",
          price: "91",
          image: "./images/TheBrokenDuke'sBride.webp",
          details: "Despite Alexander's resistance, his walls start breaking when he spends more time with Caroline. But the one secret he desperately avoids revealing to his wife looms over them. And the revelation is about to tear them apart…",
        },
        {
          title: "The Heart Principle",
          author:"Helen Hoang",
          rating:"4.8",
          price: "90",
          image: "./images/TheHeartPrinciple.webp",
          details: "'You might be surprised by just how emotionally raw this one is. But if you're prepared for the journey, it's a great one.' Taylor Jenkins Reid on Goodreads'I am a fan of Hoang writing and this was a great novel ... A very affecting novel I found satisfying in every way.\' Roxane Gay on Goodreads",
        },
        
      ],
    },
    {
      name: "Biographies-and-Autobiographies",
      books: [
        {
          title: "Marie Curie ",
          author:"Eve Curie",
          rating:"4.8",
          price: "10",
          image: "./images/auto1.jpeg",
          details: "One of the most famous women of the twentieth century, Marie Curie was a trailblazer in the truest sense. Known for her discovery of two radioactive elements, radium and polonium, Marie Curie was the first woman to win a Nobel Prize. She remains the only woman to win two Nobel Prizes in different sciences..",
        },
        {
          title: "Bruce Lee",
          author:"Mathew Polly",
          rating:"3.8",
          price: "10",
          image: "./images/auto2.jpeg",
          details: "Bruce Lee, son of Cantonese opera star Lee Hoi-Chuen, was one of the biggest names in Hollywood of his time. He is credited with introducing the East to the silver screens of the West. His greatest passion in life was Kung Fu—an ancient Chinese martial art unknown in the West until 1965, the year he made his first television appearance. ",
        },
        {
          title: "Pele : Autobiography",
          author:"Pele",
          rating:"4.8",
          price: "10",
          image: "./images/auto3.jpeg",
          details: "The world's greatest footballer now gives us the full story of his incredible life and career. Told with his characteristic grace and modesty, but covering all aspects of his playing days and his subsequent careers as politician, international sporting ambassador and cultural icon, PELE: THE AUTOBIOGRAPHY is an essential volume for all sports fans, and anyone who admires true rarity of spirit."        },
        {
          title: "Wings of Fire",
          author:" A.P.J.Abdul Kalam and Arun Tiwari",
          rating:"4.8",
          price: "10",
          image: "./images/WingsOfFire.webp",
          details: "“We are all born with a divine fire in us. Our efforts should be to give wings to this fire”. President Kalam’s inspiring autobiography has touched the hearts of people all over the world. The book talks about the his humble beginnings in a small village in Tamil Nadu and his ascent to one of the most powerful positions in the country. ",
        },
        
      ],
    },
    {
      name: "Cookbooks",
      books: [
        {
          title: "A Taste of India",
          author:"Sanjeev Kapoor",
          rating:"4.8",
          price: "10",
          image: "./images/ATasteOfIndia.webp",
          details: "A Taste of India: The Complete Indian Cookbook Includes:All the basic information you will need to get started with Indian CookingBasic Techniques of the Indian Kitchen with detailed directions",
        },
        {
          title: "Cooking the Books",
          author:"Subah Jain",
          rating:"4.8",
          price: "16",
          image: "./images/CookingTheBooks.webp",
          details: "With Miss May working overtime, you can be sure they’ll track down the bad guy. Unfortunately, that might only be the beginning of their problems…You’ll love this cozy because everyone loves mysteries with comedy, great food, and intrigue.",
        },
        {
          title: "SATTVIK COOKING",
          author:"Subah Jain",
          rating:"4.2",
          price: "19",
          image: "./images/SatvikCooking.webp",
          details: "The unique selection of recipes will not only satisfy the palates of all age groups, but will also be hugely beneficial for fitness enthusiasts. ",
        },
        {
          title: "Satvic Food Book ",
          author:"Subah Saraf",
          rating:"3.8",
          price: "11",
          image: "./images/TheFoodBook.webp",
          details: "This book is a food guide containing timeless knowledge of healing the body with plant-based food, without any medicine. The food principles in this book are based on the ancient wisdom of our scriptures, while the cuisine is designed to best fit our busy modern lifestyle.",
        },
        
      ],
    },
    
  ];
  
  function createBookCard(book) {
    let card = document.createElement("div");
    card.classList.add("card");
  
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
  
    let image = new Image();
    image.src = book.image;
    image.alt = book.title;
    image.addEventListener("error", function () {
      card.classList.add("image-error");
    });
  
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
  
    let container = document.createElement("div");
    container.classList.add("container");
  
    let title = document.createElement("h5");
    title.classList.add("product-name");
    title.innerText = book.title.toUpperCase();
    container.appendChild(title);
  
    let price = document.createElement("h6");
    price.innerText = "$" + book.price;
    container.appendChild(price);
  
    card.appendChild(container);
  
    return card;
  }
  
  function renderBooks() {
    const booksContainer = document.getElementById("books");
    booksContainer.innerHTML = "";
  
    for (let category of categories) {
      // Create category container
      let categoryContainer = document.createElement("div");
      categoryContainer.classList.add("category-container");
      categoryContainer.dataset.category = category.name;
      booksContainer.appendChild(categoryContainer);
  
      // Create category heading
      let categoryHeading = document.createElement("h2");
      categoryHeading.textContent = category.name;
      categoryContainer.appendChild(categoryHeading);
  
      // Create book grid container
      let bookGrid = document.createElement("div");
      bookGrid.classList.add("book-grid");
      categoryContainer.appendChild(bookGrid);
  
      // Create cards for books in the category
      for (let book of category.books) {
        let card = createBookCard(book);
        bookGrid.appendChild(card);
      }
    }
  }
  
  
  function filterBooks(value) {
    let buttons = document.querySelectorAll(".category-button");
    buttons.forEach((button) => {
      if (value.toLowerCase() === button.innerText.toLowerCase()) {
        button.classList.toggle("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
      let category = element.closest(".category-container").dataset.category;
      if (value === "all" || category === value) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    });
  
    let categoryContainers = document.querySelectorAll(".category-container");
    categoryContainers.forEach((container) => {
      let category = container.dataset.category;
      if (category === value || value === "all") {
        container.classList.add("active");
        container.style.display = "block";
      } else {
        container.classList.remove("active");
        container.style.display = "none";
      }
    });
  }
  
  
  document.addEventListener("click", function (event) {
    const clickedElement = event.target;
    if (clickedElement.tagName === "IMG") {
       const card = clickedElement.closest(".card");
       const categoryContainer = card.closest(".category-container");
      // const category = categoryContainer.dataset.category;
      const bookIndex = Array.from(categoryContainer.querySelectorAll(".card")).indexOf(card);
      const book = categories.find((category) => category.name === categoryContainer.dataset.category).books[bookIndex];
      displayBookDetails(book);
    }
  });
  
  function displayBookDetails(book) {
    let detailsDiv = document.getElementById("bookDetails");
    detailsDiv.innerHTML = "";
  
    let title = document.createElement("h3");
    title.textContent = book.title;
    detailsDiv.appendChild(title);
    let author = document.createElement("p");
    author.textContent = "AUTHOR : "+ book.author;
    detailsDiv.appendChild(author);
  
    let rating = document.createElement("p");
    rating.textContent = "Rating : " + book.rating;
    detailsDiv.appendChild(rating);
  
    let price = document.createElement("p");
    price.textContent = "Price : $" + book.price;
    detailsDiv.appendChild(price);
  
    let details = document.createElement("p");
    details.textContent = book.details;
    detailsDiv.appendChild(details);
  
    let popup = document.getElementById("bookDetailsPopup");
    popup.style.display = "flex";
  }
  
  // Add event listener to close the popup
  document.getElementById("closePopup").addEventListener("click", function () {
    closeBookDetails();
  });
  
  function closeBookDetails() {
    let popup = document.getElementById("bookDetailsPopup");
    popup.style.display = "none";
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    renderBooks();
    filterBooks("all");
  });
  
    