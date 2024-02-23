import TrialButton from '@/components/Common/TrialButton';
import './page.scss'
import Star from '@/app/assets/appReview/star.svg';
import Notice from '@/app/assets/notice.svg'
import Leaf from '@/app/assets/growing/leaf.svg'
import Crown from '@/app/assets/growing/crown.svg'

const AppReview = () => {
    const memberSayList = [
        {
            name: 'Sven O',
            text: <>It's <strong>highly addictive</strong> to get core insights on personally relevant topics without repetition or triviality. Added to that the apps ability to suggest kindred interests opens up a foundation of knowledge.</>
        }, {
            name: 'Thi Viet Quynh N.',
            text: 'Great app. Good selection of book summaries you can read or listen to while commuting. Instead of scrolling through your social media news feed, this is a much better way to spend your spare time in my opinion.'
        }, {
            name: 'Jonathan A.',
            text: <><strong>Life changing.</strong> The concept of being able to grasp a book`s main point in such a short time truly opens multiple opportunities to grow every area of your life at a faster rate.</>
        }, {
            name: 'Renee D.',
            text: <>Great app. Addicting. <strong>Perfect for wait times, morning coffee, evening before bed.</strong> Extremely well written, thorough, easy to use.</>
        },
    ]

    const growList = [
        {
            icon: <Crown />,
            title: '30 Million',
            text: 'Downloads on all platforms'
        },
        {
            icon: (new Array(5).fill(0).map(item => (<Star />))),
            title: '4.7 Stars',
            text: 'Average ratings on iOS and Google Play'
        }, {
            icon: <Leaf />,
            title: '91%',
            text: 'Of Blinkist members create a better reading habit*'
        },
    ]
    return (
        <>
            <div className="app-reviews">
                <div className="app-reviews__container">
                    <h1>What our members say</h1>
                    <div className="grid">
                        {memberSayList.map(member => (
                            <div className='app-reviews__card' key={member.name}>
                                <div>
                                    <div className='card-name'>{member.name} {new Array(5).fill(0).map(item => (<Star />))}</div>
                                    <div className='card-text'>{member.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='app-reviews__button'><TrialButton /></div>
                    <div className='growing'>
                        <h1>Start growing with Blinkist now<Notice className='notice'></Notice></h1>
                    </div>
                    <div className='growing-card'>
                        {growList.map(grow => (
                            <div className='growing-card__item'>
                                <div className='item-icon'>{grow.icon}</div>
                                <div className='item-title'>{grow.title}</div>
                                <div>{grow.text}</div>
                            </div>
                        ))}
                    </div>
                    <div className='growing-tip'>
                        <div className='growing-tip__text'>*Based on survey data from Blinkist customers</div>
                    </div>
                    <div className='growing-trial__button'>
                        <TrialButton></TrialButton>
                    </div>
                </div>
            </div>
        </>
    )
}

const start = () => {
    return (
        <>
            <Star />
        </>
    )
}
export default AppReview