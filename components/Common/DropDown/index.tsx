import { ReactElement, useEffect, useRef, useState } from "react";
import PD from '@/app/assets/PD.svg';

import Product from '@/app/assets/Product.svg';
import MI from '@/app/assets/MI.svg';
import CS from '@/app/assets/CS.svg';
import Phil from '@/app/assets/Phil.svg';
import BM from '@/app/assets/BM.svg';
import RS from '@/app/assets/RS.svg';
import Cre from '@/app/assets/Cre.svg';
import Edu from '@/app/assets/Edu.svg';
import Arrow from '@/app/assets/arrow.svg';
import Psyc from '@/app/assets/Psyc.svg';
import MH from '@/app/assets/MH.svg';
import Career from '@/app/assets/Career.svg';
import ML from '@/app/assets/ML.svg';
import Prod from '@/app/assets/Prod.svg';
import Entre from '@/app/assets/Entre.svg';
import MS from '@/app/assets/MS.svg';
import HN from '@/app/assets/HN.svg';
import CC from '@/app/assets/CC.svg';
import SR from '@/app/assets/SR.svg';
import Pare from '@/app/assets/Pare.svg';
import Science from '@/app/assets/Science.svg';
import TT from '@/app/assets/TT.svg';
import NTE from '@/app/assets/NTE.svg';
import Economics from '@/app/assets/Economics.svg';
import Politics from '@/app/assets/Politics.svg';
import Money from '@/app/assets/Money.svg';
import SC from '@/app/assets/SC.svg';
import History from '@/app/assets/History.svg';

import './index.scss';

interface ModalData {
    name: string;
    children: ExpandModalData[]
}

interface ExpandModalData {
    name: string;
    icon: ReactElement;
}

const DropDown: React.FC = () => {
    const [showDropContent, switchDropContent] = useState(false)
    const [activeItem, setActiveItem] = useState<ModalData>()

    const [currentExpandList, setExpandList] = useState<ExpandModalData[]>([]);
    const getHoverItem = (item: ModalData) => {
        const activeItem = ModalDataList.find(data => data.name === item.name)!
        setActiveItem(activeItem)
        setExpandList(activeItem.children)
    }

    const modelRef: any = useRef(null);
    const dropRef: any = useRef(null);

    const handleSwitchDropContent = () => {
        switchDropContent(!showDropContent)
    }

    const handleOutsideClick = (e: MouseEvent) => {
        if (modelRef.current && !modelRef.current.contains(e.target) && !dropRef.current.contains(e.target)) {
            switchDropContent(false);
            setExpandList([])
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const ModalDataList: ModalData[] = [
        {
            name: 'Inspiration & Personal Growth',
            children: [
                {
                    name: 'Personal Development',
                    icon: <PD />
                }, {
                    name: 'Productivity',
                    icon: <Product />
                }, {
                    name: 'Motivation & Inspiration',
                    icon: <MI />
                }, {
                    name: 'Communication Skills',
                    icon: <CS />
                }, {
                    name: 'Biography & Memoir',
                    icon: <BM />
                }, {
                    name: 'Religion & Spirituality',
                    icon: <RS />
                }, {
                    name: 'Philosophy',
                    icon: <Phil />
                }, {
                    name: 'Creativity',
                    icon: <Cre />
                }, {
                    name: 'Education',
                    icon: <Edu />
                }
            ]
        }, {
            name: 'Health & Meditation',
            children: [
                {
                    name: 'Psychology',
                    icon: (<Psyc />)
                }, {
                    name: 'Mindfulness & Happiness',
                    icon: (<MH />)
                }, {
                    name: 'Health & Nutrition',
                    icon: (<HN />)
                },
            ]
        }, {
            name: 'Career & Business',
            children: [
                {
                    name: 'Career & Success',
                    icon: (<Career />)
                }, {
                    name: 'Management & Leadership',
                    icon: (<ML />)
                }, {
                    name: 'Productivity',
                    icon: (<Prod />)
                }, {
                    name: 'Entrepreneurship',
                    icon: (<Entre />)
                }, {
                    name: 'Marketing & Sales',
                    icon: (<MS />)
                }, {
                    name: 'Corporate Culture',
                    icon: (<CC />)
                }, {
                    name: 'Education',
                    icon: (<Edu />)
                },
            ]
        },
        {
            name: 'Relationship & Family',
            children: [
                {
                    name: 'Psychology',
                    icon: (<Psyc />)
                }, {
                    name: 'Communication Skills',
                    icon: (<CS />)
                }, {
                    name: 'Sex & Relationships',
                    icon: (<SR />)
                }, {
                    name: 'Parenting',
                    icon: (<Pare />)
                },
            ]
        }, {
            name: 'Science & Technology',
            children: [
                {
                    name: 'Science',
                    icon: (<Science />)
                }, {
                    name: 'Technology & the Future',
                    icon: (<TT />)
                }, {
                    name: 'Nature & the Environment',
                    icon: (<NTE />)
                }
            ]
        }, {
            name: 'Culture & Humanity',
            children: [
                {
                    name: 'Society & Culture',
                    icon: (<SC />)
                }, {
                    name: 'Biography & Memoir',
                    icon: (<BM />)
                }, {
                    name: 'History',
                    icon: (<History />)
                }, {
                    name: 'Philosophy',
                    icon: (<Phil />)
                }, {
                    name: 'Religion & Spirituality',
                    icon: (<NTE />)
                }, {
                    name: 'Politics',
                    icon: (<Politics />)
                },
            ]
        }, {
            name: 'Money & Economics',
            children: [
                {
                    name: 'Money & Investments',
                    icon: (<Money />)
                }, {
                    name: 'Politics',
                    icon: (<Politics />)
                }, {
                    name: 'Economics',
                    icon: (<Economics />)
                },
            ]
        }
    ]


    return (
        <div style={{position: 'relative'}}>
            <div
                className={`container-right__dropdown ${showDropContent ? 'dropdown__active' : ''} `}
                onClick={() => handleSwitchDropContent()}
                ref={dropRef}
            >
                <div>Categories</div>
                <Arrow className='dropdown-arrow' />
                {showDropContent && (<div style={{position: 'absolute', width: '100px', height: '10px', zIndex: '100', top: '205px',left: '200px', background: 'blue'}}></div>)}
            </div>
            {
                showDropContent && (
                    <div className="modal">
                        <div className="modal-inner" ref={modelRef}>
                            <div>
                                {ModalDataList.length && ModalDataList.map((data) => (
                                    <div key={data.name} className={`modal-data ${activeItem?.name === data.name ? 'active-item' : ''}`} onMouseEnter={() => getHoverItem(data)} >
                                        {data.name}
                                        <Arrow className='arrow' />
                                    </div>
                                ))}
                            </div>
                            {currentExpandList.length !== 0 && (
                                <div className="modal-expand">
                                    {currentExpandList.map(item => (
                                        <a key={item.name} className="modal-expand__item" href="./" target="_blank">
                                            <div className="item__icon">{item.icon}</div>
                                            <div>{item.name}</div>
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>

                    </div>
                )
            }
        </div>
    )
}



export default DropDown;