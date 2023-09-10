import { useEffect } from 'react';
import "../../assets/Styles/sass/pages/_demo.scss";
import Tag from '../../components/Tag';
import Thumb from '../../components/thumb';
import { fetchAll } from "../../methods/"
import Details from '../../components/detail';
import Carousel from '../../components/carousel';

const Demo = () => {

    useEffect(() => {
        fetchAll();
    }, [])
    return (
        <div className='demo'>
            <div className="container">
                <span>.TAG</span>
                <Tag tag='tag-name' />
            </div>
            <div className="container">
                <span>.Thumb</span>
                <Thumb
                    id='c67ab8a7'
                    title='Appartement cosy'
                    image='https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg'
                />
            </div>

            <div className="container" style={{ margin: "50px", height: "auto" }}>
                <Details
                    name='ÉQUIPEMENT'
                    list={[
                        "Équipements de base",
                        "Micro-Ondes",
                        "Douche italienne",
                        "Frigo",
                        "WIFI"
                    ]}
                />
                <Details
                    name='ÉQUIPEMENT'
                    decription='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
                />
            </div>
            <Carousel
                images={[
                    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg",
                    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-2.jpg",
                    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-3.jpg",
                    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-4.jpg",
                    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-5.jpg",
                    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-6.jpg"
                ]}
            />


        </div>
    );
};

export default Demo;