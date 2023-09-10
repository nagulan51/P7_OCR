import '../../assets/Styles/sass/components/_details.scss';

const Details = (props) => {
    const { decription, list, name } = props;
    return (
        <details className='details'>
            <summary>
                <h3>{name}</h3>
                <span>
                    <div className='open'>
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                        </svg>
                    </div>
                    <div className='close'>
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7" />
                        </svg>
                    </div>
                </span>
            </summary>
            {decription ? <div className='decription'>
                <p>{decription}</p>
            </div> : null}
            {list ? <div className='list'>
                {list.map((value) => {
                    return <p key={value}>
                        {value}
                        <br />
                    </p>
                })}
            </div> : null}

        </details>
    );
};

export default Details;