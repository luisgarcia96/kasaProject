import styles from "../styles/pages/Home.module.scss";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import mockedData from "../mocks/kasaBddMock.json";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const [cardList, setCardList] = useState([]);
    const navigate = useNavigate();


    const handleClickedCard = (card) => {
        const { id } = card;
        navigate(`/housing/${id}`);
    };

    //Set cardList from MockedAPI
    useEffect(() => {
        setCardList(mockedData);
    }, []);

    return (
        <main className={styles.home}>
            <div className={styles.titleContainer}>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className={styles.mainContainer}>
                {cardList.map((card, index) => (
                    <Card
                        key={`card-${index}`}
                        title={card.title}
                        onClick={() => handleClickedCard(card)}
                    />
                ))}
            </div>
        </main>
    );
};

export default Home;
