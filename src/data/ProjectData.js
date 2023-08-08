import randomquote from "../assets/Images/RandomQuote.png"
import markdown from "../assets/Images/MarkdownPrev.png"
import drummac from "../assets/Images/DrumMachine.png"
import toDo from "../assets/Images/ToDo.png"
import shoplist from "../assets/Images/ShoppingList.png"

export const Project = [
    {
        id: 1,
        name: "Random Quote Generator",
        description: "Random Quote Generator is build in ReactJS. It displays random quotes and colors.",
        tags: ["react", "typescript"],
        img: randomquote,
        demo: "https://random-quote-gen-dogu.netlify.app/",
        github: "https://github.com/Drynwhyll/RandomQuoteGenerator-FCC"

    },
    {
        id: 2,
        name: "Markdown Previewer",
        description: "It displays the preview of the markdown file.",
        tags: ["react", "typescript"],
        img: markdown,
        demo: "https://markdown-previewer-dogu.netlify.app/",
        github: "https://github.com/Drynwhyll/MarkdownPreviewer-FCC"
    }, 
    {
        id: 3,
        name: "Drum Machine",
        description: "Make a music with drum.",
        tags: ["react", "typescript"],
        img: drummac,
        demo: "https://drum-machine-dogu.netlify.app/",
        github: "https://github.com/Drynwhyll/DrumMachine-FCC"
    },
    {
        id: 4,
        name: "ToDo App",
        description: "Simple ToDo app with add, check, edit and delete functions. Also entegrated with local storage.",
        tags: ["css", "react", "react-router-dom"],
        img: toDo,
        demo: "https://dogu-todoapp.netlify.app/",
        github: "https://github.com/Drynwhyll/ToDoApp"
    },
    {
        id: 5,
        name: "Shopping List App",
        description: "It built with JavaScript and Firebase. Add, delete and update functions sending and fetching data to Firebase.",
        tags: ["html", "css", "javascript", "firebase"],
        img: shoplist,
        demo: "https://dogu-shopping-list.netlify.app/",
        github: "https://github.com/Drynwhyll/Shopping-List-App"
    },
] 