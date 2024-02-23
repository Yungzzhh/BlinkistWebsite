import { ReactElement } from "react";
import RL from '@/public/main-feature/Read or listen.svg'
import FN from '@/public/main-feature/Find your next read.svg'
import Short from '@/public/main-feature/Shortcasts.svg'
import './index.scss'

interface FeaturePartProps {
    icon: ReactElement;
    title: string;
    text: string;
    subtitle?: string;
}

const featureList: FeaturePartProps[] = [
    {
        icon: <RL />,
        title: "Read or listen",
        text: "Get the key ideas from nonfiction bestsellers in minutes, not hours."
    }, {
        icon: <FN />,
        title: 'Find your next read',
        text: 'Get book lists curated by experts and personalized recommendations.'
    }, {
        icon: <Short />,
        title: 'Shortcasts',
        subtitle: 'NEW',
        text: 'We’ve teamed up with podcast creators to bring you key insights from podcasts.'
    },
]
const FeatureList: React.FC = () => {
    return (
        <div className="feature-list">
            {featureList.map(feature => FeaturePart({ ...feature }))}
        </div>
    )
}



const FeaturePart: React.FC<FeaturePartProps> = ({ icon, title, text, subtitle }) => {
    return (
        <div className="feature-part">
            <div className="part-icon">{icon}</div>
            <div className="part-content">
                <h3 >
                    <div className="content-title">{title}{ subtitle? <sup>{subtitle}</sup>: ""}</div>
                </h3>
                <div>{text}</div>
            </div>
        </div>
    )
}
export default FeatureList