// LanguageSelector.jsx
import { useLanguage } from "./LanguageContext";

const LanguageSelector = () => {
    const { language, changeLanguage } = useLanguage();

    const handleLanguageChange = (e) => {
        changeLanguage(event.target.value);
    }
    
    return (
        <div>
        <h2>Select Language:</h2>
        <select value={language} onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            {/* Add more languages as needed */}
        </select>
        </div>
    );
    }

export default LanguageSelector;