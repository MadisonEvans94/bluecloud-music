import "./App.css";
import ContactForm from "./Components/Form/ContactForm";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Card from "./Components/Card/Card";
import Hero from "./Components/Hero/Hero";
import Modal from "./Components/Modal/Modal";
import Popover from "./Components/Popover/Popover";

//TODO: set up a sample db.json
//[ ] create db.json and test it
//[ ] add the card info and hero info to the db.json

let cardTitle = "new album";
let cardDescription =
	"this is a description for the card. Eventually we will be fetching this information from a server";

let heroTitle = "hero";
let heroSubtitle = "this is the subtitle for the hero";
let heroBackgroundImage =
	"https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

function App() {
	return (
		<>
			{/*
       <Navigation /> 
       // TODO need to implement Routing before the nav works
        */}

			{/* /**
			 * Component that displays a hero section with title and subtitle
			 * @function
			 * @param {string} title - Title of the hero
			 * @param {string} subtitle - Subtitle of the hero
			 * @param {string} backgroundImage - URL of the background image
			 * @returns {JSX.Element}
			 */}
			<Hero
				title={heroTitle}
				subtitle={heroSubtitle}
				backgroundImage={heroBackgroundImage}
			/>
			<Header>Header Title</Header>
			{/*
			 * Component that displays a modal with header, body, and footer
			 * @function
			 * @param {string} header - Header of the modal
			 * @param {string} body - Body of the modal
			 * @returns {JSX.Element}
			 */}
			<Modal header={"modal header"} body={"modal body"} />
			<Popover
				content={
					"this is an album cover. And a working implementation of the Popover Component"
				}>
				<Card id={1} />
				<Card id={2} />
			</Popover>

			<ContactForm />
			<Footer />
		</>
	);
}

export default App;
