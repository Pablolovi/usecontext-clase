// Greeting.jsx
import { useLanguage } from "./LanguageContext";

const Greeting = () => {
    const { language } = useLanguage();

    const greetings = {
        en: "Hello",
        es: "Hola",
        fr: "Bonjour",
        // Add more languages as needed
    };

    return <h2>{greetings[language]}</h2>;
}

export default Greeting;