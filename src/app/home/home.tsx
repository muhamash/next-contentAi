'use client'

import Nav from "./nav";
import React from "react"
import {motion} from 'framer-motion'
import Login from "../login/page";

const HomePage = () => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                style={{
                    width: '100%',
                    height: '100vh',
                }}
            >
                <Nav />
            </motion.div>
        </div>
    );
};

export default HomePage;