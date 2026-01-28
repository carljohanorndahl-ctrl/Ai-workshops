import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'ghost' | 'secondary';
    children: React.ReactNode;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
    const baseStyles = "relative inline-flex items-center justify-center px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-midnight focus:ring-[#BFE3A1] disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
        primary: "bg-[#BFE3A1] hover:bg-[#A9D98B] text-slate-900 shadow-[0_0_20px_rgba(191,227,161,0.4)] border border-transparent hover:shadow-[0_0_30px_rgba(169,217,139,0.5)]",
        secondary: "bg-white/10 text-white hover:bg-white/20 border border-white/10 backdrop-blur-sm",
        ghost: "bg-transparent text-slate-500 hover:text-slate-900 hover:bg-[#EAF5DF] border border-transparent",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;