import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  Sun,
  Moon,
  Lightbulb,
  LightbulbOff,
  Coffee,
  Bed,
  Flame,
  Snowflake,
  Cpu,
  Gamepad,
  ComputerIcon,
  Computer,
  Laptop,
  LaptopMinimal,
  Laptop2,
  Star,
} from "lucide-react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Cpu /> : <Gamepad />}
    </div>
  );
};

export default ThemeSwitcher;
