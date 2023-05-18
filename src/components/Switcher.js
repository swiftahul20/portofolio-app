import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../hooks/useDarkSide";
import { useScrollPosition } from "../hooks/useScrollPosition";
  
export default function Switcher() {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );
    const scrollPosition = useScrollPosition()

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
  
    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };
  
    return (
        <>
            <DarkModeSwitch
                className={classNames(scrollPosition > 0 ? '' : '')}
                checked={darkSide}
                onChange={toggleDarkMode}
                size={23}
                sunColor="white"
            />
        </>
    );
}