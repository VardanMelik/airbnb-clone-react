import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';

function Home() {
    return (
        <div className="home">
            <Banner/>

            <div className="home__section">
                <Card 
                    src='https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg'
                    title="Entire homes"
                    description='Description Entire homes'
                    price='$18/night'
                />
                <Card
                    src='https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg'
                    title='Cabins and cottages'
                    description='Description Cabins and cottages'
                    price='$19/night'
                />
                <Card
                    src='https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg'
                    title='Unique stays'
                    description='Description Unique stays'
                    price='$64/night'
                />
                <Card
                    src='https://a0.muscache.com/im/pictures/fbe849a4-841a-41b3-b770-419402a6316f.jpg'
                    title='Pets welcome'
                    description='Description Pets welcome'
                    price='$26/night'
                />
            </div>

            <div className="home__section">
                <Card
                    src='https://a0.muscache.com/im/pictures/2a16f833-464c-446c-8d74-33eb8c643975.jpg'
                    title='Host your home'
                    description='Description Host your home'
                    price='$23/night'
                />
                <Card
                    src='https://a0.muscache.com/im/pictures/426a8116-0b94-4407-ae87-924126c81d78.jpg'
                    title='Host an Online Experience'
                    description='Description Host an Online Experience'
                    price='$23/night'
                />
                <Card
                    src='https://a0.muscache.com/im/pictures/a84e92bd-68e6-4ce2-9fdf-b2ce1a377f53.jpg'
                    title='Host an Experience'
                    description='Description Host an Experience'
                    price='$24/night'
                />
            </div>

        </div>
    )
}

export default Home
