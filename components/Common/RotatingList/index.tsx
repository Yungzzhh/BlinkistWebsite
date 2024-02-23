'use client'
import { useEffect, useState } from 'react';
import './index.scss'

interface RotatingListProps {
    list: RotatingItem[]
}
interface RotatingItem {
    text: string;
    active: boolean;
}

const RotatingList: React.FC<RotatingListProps> = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex + 1) % props.list.length);
          }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {props.list.map((rotatingItem: RotatingItem, index: number) => (
                <h2 className={`rotatingItem ${activeIndex === index ? 'active' : ''}`} key={rotatingItem.text}>
                    {rotatingItem.text}
                </h2>
            ))}
        </>
    )
}

export default RotatingList;