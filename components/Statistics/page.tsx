import RotatingList from '@/components/Common/RotatingList'
import './page.scss'

interface RotatingListItem {
    text: string;
    active: boolean;
}

const Statistics: React.FC = () => {
    const rotatingList: RotatingListItem[] = [
        {
            text: 'Be more knowledgeable',
            active: true,
        },{
            text: 'Be more successful',
            active: false,
        },{
            text: 'Be healthier',
            active: false,
        },{
            text: 'Be a better parent',
            active: false,
        },{
            text: 'Be happier',
            active: false,
        },{
            text: 'Be your best self!',
            active: false,
        }
    ]

    const figuresData = [
        {
            percentage: 95,
            text: (<>of Blinkist members <b>read</b> significantly more than before*</>)
        },{
            percentage: 91,
            text: (<>of Blinkist members <b>create better habits*</b></>)
        },{
            percentage: 85,
            text: (<>have made <b> positive changes in their lives</b> thanks to Blinkist*</>)
        },
    ]

    return (
        <section className="statistics">
            <div className="statistics-container">
                <div className='rotating-container'>
                    <RotatingList list={rotatingList}/>
                </div>
                <div>
                    <div className="figures__data">
                        {figuresData.map(figures => 
                        (
                            <div className='figures__row'>
                                <div className='figures__percentage'>{figures.percentage}%</div>
                                <div className='figures__text'>{figures.text}</div>
                            </div>
                        ))}
                    
                    </div>
                    <div className='figures__more-info'>
                            * Based on internal study using survey data <br/>from general Blinkist customers 
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Statistics