import TrialButton from '@/components/Common/TrialButton'
import './page.scss'

const Explanation = () => {
    return (
        <>
            <section className="section-container explanation">
                <div className='section-inner'>
                    <div className='trial-duration-explanation__headline'>A small investment, an incredible growth opportunity</div>
                    <div className='trial-duration-explanation__subheader'>
                        Get access to powerful ideas from
                        <mark className="trial-duration-explanation__books-and-podcasts">
                            more than 6,500 nonfiction books and podcasts.
                        </mark>
                    </div>
                    <div className='timeline'>

                    </div>
                    <div className='card'>
                        <div className="trial-message__description">
                            Enjoy unlimited access for 7 days. Love it and keep investing in yourself for only
                            <b><span className="currency-symbol currency-symbol--sgd"> $</span>10.00</b> a month, or <b>simply cancel before March 1 and you won’t ever be charged.</b>
                        </div>
                        <div className='trial-start'>
                            <TrialButton />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Explanation