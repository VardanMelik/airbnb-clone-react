import React from 'react';
import './SearchPage.css';
import Button from '@material-ui/core/Button';
import SearchResult from './SearchResult';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>
                    62 stays - 26 august to 30 august - 2 guest
                </p>
                <h1>Stays nearby</h1>

                <Button
                    variant="outlined">
                    Cancellation flexibility
                </Button>

                <Button
                    variant="outlined">
                    Type of place
                </Button>

                <Button
                    variant="outlined">
                    Price
                </Button>

                <Button
                    variant="outlined">
                    Rooms and beds
                </Button>

                <Button
                    variant="outlined">
                    More filters
                </Button>
            </div>
            <SearchResult
                img='https://a0.muscache.com/im/pictures/miso/Hosting-38120117/original/d152941b-2e88-4e24-9c50-62f8a31ba21a.jpeg'
                location='Dome house in Yenokavan'
                title='Unique with a transparent roof'
                description='4 guests · 1 bedroom · 1 bed · 0 baths'
                star={4.75}
                price='$45 / night'
                total='$117 total'
            />
            <SearchResult
                img='https://a0.muscache.com/im/pictures/miso/Hosting-38120117/original/d152941b-2e88-4e24-9c50-62f8a31ba21a.jpeg'
                location='Dome house in Yenokavan'
                title='Unique with a transparent roof'
                description='4 guests · 1 bedroom · 1 bed · 0 baths'
                star={4.75}
                price='$45 / night'
                total='$117 total'
            />
            <SearchResult
                img='https://a0.muscache.com/im/pictures/miso/Hosting-38120117/original/d152941b-2e88-4e24-9c50-62f8a31ba21a.jpeg'
                location='Dome house in Yenokavan'
                title='Unique with a transparent roof'
                description='4 guests · 1 bedroom · 1 bed · 0 baths'
                star={4.75}
                price='$45 / night'
                total='$117 total'
            />
        </div>
    )
}

export default SearchPage
