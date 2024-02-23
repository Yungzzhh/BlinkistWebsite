'use client'
import { useEffect, useState } from 'react';
import './index.scss'
import Logo from "@/app/assets/logo.svg";

export const HeaderSticky = () => {
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 700) {
                // 当滚动超过700px时，显示动画
                setShowAnimation(true);
            } else {
                setShowAnimation(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            {showAnimation && (<div className='header-sticky'>
                <div className='header__inner'>
                    <div className='header__container'>
                        <div className='sticky-header__left'><Logo /></div>
                        <div className='sticky-header__right'>Start free trial</div>
                    </div>
                </div>
            </div>)}
        </>
    )
}