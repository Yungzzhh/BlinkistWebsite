import TrialButton from '@/components/Common/TrialButton';
import './page.scss'
import RotatingList from '@/components/Common/RotatingList';

const UseCases:React.FC = () => {
    const rotatingList = [
        {
            text: 'Feed your brain while',
            active: true,
        },{
            text: 'Driving',
            active: false,
        },{
            text: 'Commuting',
            active: false,
        },{
            text: 'Doing housework',
            active: false,
        },{
            text: 'Walking',
            active: false,
        },{
            text: 'Relaxing',
            active: false,
        },
    ]
    return (
        <>
            <section className="section-container">
                <div className='use-cases section-inner'>
                    <picture className='usecase-picture'>
                        <source media='(max-width: 992px)' srcSet='/use-cases/clip-phone.png'/>
                        <img src='/use-cases/phone.png' loading="lazy" className='use-cases-img'/>
                    </picture>
                    <div className='use-cases__more-info'>
                        <RotatingList list={rotatingList}/>
                        <TrialButton />
                    </div>
                </div>
            </section>
        </>
    )
}

export default UseCases

