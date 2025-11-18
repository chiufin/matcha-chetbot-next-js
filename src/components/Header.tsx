import Link from "next/link";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="px-6 py-4">
        <div className="flex items-center gap-6">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-xl font-semibold cursor-pointer"
            >
              <span className="text-2xl">🍵</span>
              <span className="text-foreground">Matcha Knowledge</span>
            </motion.div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
