import "./App.css";
import ContactForm from "./Components/Form/ContactForm";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Card from "./Components/Card/Card";
import Hero from "./Components/Hero/Hero";
import Modal from "./Components/Modal/Modal";
/**
 * //[x] Header component: A component that displays the header of the app, usually containing the logo and navigation links.

//[ ] Navigation component: A component that displays the navigation menu, allowing users to navigate between different pages or sections of the app.

//[x] Footer component: A component that displays the footer of the app, usually containing copyright information, links to the company's social media profiles, and other relevant information.

//[x] Hero component: A component that displays a large banner image or video, with text or other elements overlaid on top, usually used to promote the app's main features or values.

//[x] Card component: A component that displays a compact representation of an item or content, usually used to display a list of items in a grid or other layout.

//[x] Form component: A component that displays a form for users to input data, typically used for user registration, login, or data submission.

//[x] Modal component: A component that displays a pop-up dialog, typically used to display additional information or to prompt the user for input.

//[ ] Popover component: A component that displays a small pop-up with additional information, typically used to display additional information when the user hovers over an item.

//[ ] Loader component: A component that displays an animation indicating that data is being loaded or processed, typically used to indicate that the app is working on a background task.
 */
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
			<Card
				image={
					"https://marketplace.canva.com/EAFJ9TROiw8/1/0/1600w/canva-renaissance-bust-vaporwave-aesthetic-album-cover-SVO6_i94IGk.jpg"
				}
				title={cardTitle}
				description={cardDescription}
			/>
			<ContactForm />
			<Footer />
		</>
	);
}

export default App;
