'use client'
import { useEffect, useMemo, useRef, useState } from 'react'
import './page.scss'
import Arrow from '@/app/assets/arrow.svg'

export const CategoryExplorer = () => {

    const books = [
        {
            name: 'Win at Work and Succeed at Life',
        }, {
            name: 'Win at Work and Succeed at Life',
        }, {
            name: 'Win at Work and Succeed at Life',
        }, {
            name: 'Win at Work and Succeed at Life',
        }, {
            name: 'Win at Work and Succeed at Life',
        }, {
            name: 'Win at Work and Succeed at Life',
        }, {
            name: 'Win at Work and Succeed at Life',
        }, {
            name: 'Win at Work and Succeed at Life',
        }, {
            name: 'Win at Work and Succeed at Life',
        }
    ]
    const catalogSummaryList = [
        {
            summaryName: 'Career & Success',
            total: '662',
            books: [
                {
                    name: 'Win at Work and Succeed at Life',
                }, {
                    name: 'Win at Work and Succeed at Life',
                }, {
                    name: 'Win at Work and Succeed at Life',
                }, {
                    name: 'Win at Work and Succeed at Life',
                }, {
                    name: 'Win at Work and Succeed at Life',
                }, {
                    name: 'Win at Work and Succeed at Life',
                }, {
                    name: 'Win at Work and Succeed at Life',
                }, {
                    name: 'Win at Work and Succeed at Life',
                }, {
                    name: 'Win at Work and Succeed at Life',
                }
            ]
        }, {
            summaryName: 'Mindfulness & Happiness',
            total: '552',
            books: [
                {
                    name: 'Explore answers to some of life\'s most difficult questions',
                }, {
                    name: 'Explore answers to some of life\'s most difficult questions',
                }, {
                    name: 'Explore answers to some of life\'s most difficult questions',
                }, {
                    name: 'Explore answers to some of life\'s most difficult questions',
                }, {
                    name: 'Explore answers to some of life\'s most difficult questions',
                }, {
                    name: 'Explore answers to some of life\'s most difficult questions',
                }, {
                    name: 'Explore answers to some of life\'s most difficult questions',
                }, {
                    name: 'Explore answers to some of life\'s most difficult questions',
                }, {
                    name: 'Explore answers to some of life\'s most difficult questions',
                }, {
                    name: 'Explore answers to some of life\'s most difficult questions',
                }, {
                    name: 'Explore answers to some of life\'s most difficult questions',
                }
            ]
        },
        {
            summaryName: 'Personal Development',
            total: 397,
            books: books
        },
        { summaryName: 'Productivity', total: 388.8777314535585, books: [] },
        {
            summaryName: 'Motivation & Inspiration',
            total: 816,
            books: books
        },
        {
            summaryName: 'Communication Skills',
            total: 103,
            books: books
        },
        {
            summaryName: 'Biography & Memoir',
            total: 65,
            books: books
        },
        {
            summaryName: 'Religion & Spirituality',
            total: 430,
            books: books
        },
        { summaryName: 'Philosophy', total: 805, books: books },
        { summaryName: 'Creativity', total: 34, books: books },
        { summaryName: 'Education', total: 881, books: books }
    
    ]

    const [currentCateGory, setCurrentCateGory] = useState('Career & Success')
    const currentCataGoryTarget = useMemo(() => {
        return catalogSummaryList.find(catalog => catalog.summaryName === currentCateGory)!
    }, [currentCateGory])

    return (
        <div className="catagory-explorer">
            <h2 className="header">What are you interested in?</h2>
            <div className="subheader">With over 6,500 nonfiction books, we have the <mark className="line-decoration">most comprehensive</mark> library of its kind.</div>
            <div className='selector-container'>
                {catalogSummaryList.map(catalog => (
                    <div
                        key={catalog.summaryName}
                        className='selector-item'
                        onClick={() => setCurrentCateGory(catalog.summaryName)}
                    >{catalog.summaryName}</div>
                ))}
            </div>
            <ScrollContainerWithTitle target={currentCataGoryTarget} />
            <ScrollContainerWithTitle target={currentCataGoryTarget} />
            <ScrollContainerWithTitle target={currentCataGoryTarget} />
        </div>
    )
}

interface ScrollContainerProps {
    target: {
        summaryName: string;
        total: string | number;
        books: {
            name: string;
        }[];
    }
}

const ScrollContainerWithTitle: React.FC<ScrollContainerProps> = ({ target }) => {
    const scrollRef: any = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = (scrollDistance: number) => {
        const newScrollPosition = scrollPosition + scrollDistance;
        scrollRef.current.scrollTo({ left: newScrollPosition, behavior: 'smooth' });
        setScrollPosition(newScrollPosition);
    };

    const [leftArrowDisabled, setLeftArrowDisabled] = useState(true);
    const [rightArrowDisabled, setRightArrowDisabled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollLeft = scrollRef.current.scrollLeft;
            const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

            if (scrollLeft === 0) {
                setLeftArrowDisabled(true); // 当滚动到最左侧时，禁用左侧箭头
            } else {
                setLeftArrowDisabled(false); // 恢复左侧箭头的正常效果
            }
            if (scrollLeft > maxScroll * 0.6) {
                setRightArrowDisabled(true); // 当滚动超过一定距离时，禁用右侧箭头
            } else {
                setRightArrowDisabled(false); // 恢复右侧箭头的正常效果
            }
        };

        scrollRef.current.addEventListener('scroll', handleScroll);

        return () => {
            scrollRef.current.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const turnToGray = (condition: boolean) => {
        return condition ? {
            cursor: 'not-allow',
            fill: 'rgb(186, 200, 206)'
        } : {}
    }
    return (
        <div className='scroll-category-wall'>
            <div className='container'>
                <div className='wall-title'>Most popular in {target.summaryName}</div>
                <div className='wall-total'>Read or listen to {target.total} titles in this category</div>
            </div>
            <div className='wall-scroll-list'>
                <div className='left-arrow' onClick={() => handleScroll(-300)} style={turnToGray(leftArrowDisabled)}><Arrow /></div>
                <div className='scroll-container'>
                    <div className='scroll-container__inner' ref={scrollRef} >
                        {target!.books.map((book, index) => (
                            <div className='scroll-item' key={index}>
                                <div>bookImage</div>
                                <div>{book.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='right-arrow' onClick={() => handleScroll(300)} style={turnToGray(rightArrowDisabled)}><Arrow /></div>
            </div>
        </div>

    )
}