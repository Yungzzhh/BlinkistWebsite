'use client'
import { useEffect, useMemo, useRef, useState } from 'react'
import './page.scss'
import Arrow from '@/app/assets/arrow.svg'
export const CategoryExplorer = () => {
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
        }
    ]

    const [currentCateGory, setCurrentCateGory] = useState('Career & Success')
    const currentCataGoryTarget = useMemo(() => {
        return catalogSummaryList.find(catalog => catalog.summaryName === currentCateGory)
    }, [currentCateGory])

    const scrollRef: any = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = (scrollDistance: number) => {
        const newScrollPosition = scrollPosition + scrollDistance;
        scrollRef.current.scrollTo({ left: newScrollPosition, behavior: 'smooth' });
        setScrollPosition(newScrollPosition);
    };

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
            <div className='scroll-category-wall'>
                <div className='container'>
                    <div className='wall-title'>Most popular in {currentCateGory}</div>
                    <div className='wall-total'>Read or listen to {currentCataGoryTarget?.total} titles in this category</div>
                </div>
                <div className='wall-scroll-list'>
                    <div className='left-arrow' onClick={() => handleScroll(-300)}><Arrow /></div>
                    <div className='scroll-container'>
                        <div className='scroll-container__inner' ref={scrollRef} >
                            {currentCataGoryTarget!.books.map((book, index) => (
                                <div className='scroll-item' key={index}>
                                    <div>bookImage</div>
                                    <div>{book.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='right-arrow' onClick={() => handleScroll(300)}><Arrow /></div>
                </div>
            </div>
        </div>
    )
}