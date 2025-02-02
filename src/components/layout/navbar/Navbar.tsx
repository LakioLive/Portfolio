import Navigation from "@/components/ui/navigation/Navigation";
import NavigationMenu from "@/components/ui/navigationMenu/NavigationMenu";

const navigationNameData = [
    "home",
    "about",
    "skills",
    "projects",
    "contact me",
];

export default function Navbar() {
    return (
        <header className="fixed top-0 left-1/2 w-max mt-4 text-white bg-dark-gray/50 rounded-full border border-light-gray backdrop-blur-md transform -translate-x-1/2 z-50">
            <div className="flex">
                <Navigation navigationNameData={navigationNameData} />
                <NavigationMenu navigationNameData={navigationNameData} />
            </div>
        </header>
    );
}
