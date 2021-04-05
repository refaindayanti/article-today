import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import { useSelector } from 'react-redux';
import { find, isEmpty } from 'lodash';
import Header from '../components/Header';
import Slider from '../components/Slider';
import CardList from '../components/CardList';
import List from '../components/List';

const Home = () => {
    const [news, setNews] = useState([]);
    const [idCategory, setIdCategory] = useState("");
    // const [bookmark, setBookmark] = useState([]);

    const data = useSelector(state => state.news.data.categories);
    useEffect(() => {
        if(data) {
            if(idCategory) {
                const category = find(data, (d) => {return d.id === idCategory});
                setNews(category.templates);
            }
        }
    }, [data, idCategory]);

    const onClickCategory = (id) => {
        setIdCategory(id);
    };

    const addBookmark = async (item) => {
        const localdata = await localStorage.getItem('bookmarks');
        var bookmarks = [];

        if(!isEmpty(JSON.parse(localdata))) {
            bookmarks = localdata;
            console.log("book if ", JSON.parse(localdata));
        }

        bookmarks.push(item);
        localStorage.setItem('bookmarks ', JSON.stringify(bookmarks));
    }

    const list = news.map((n, index) => {
        const ad = find(n.sections[0].articles, (a) => { return a.source === "AD" });
        if(!ad) {
            if(index % 3 === 0) {
                return (
                    <div key={n.id} className="mb-5">
                        <h5 className="mb-3">{n.title}</h5>
                        {!isEmpty(n.sections[0].articles) ?
                            <Slider key={n.id} items={n.sections[0].articles} onBookmark={addBookmark} />
                        : 
                            <p>Tidak ada berita.</p> 
                        }
                    </div>
                );
            } else if(index % 3 === 1) {
                return (
                    <div key={n.id} className="mb-5">
                        <h5 className="mb-3">{n.title}</h5>
                        {!isEmpty(n.sections[0].articles) ?
                            <List key={n.id} items={n.sections[0].articles} onBookmark={addBookmark} />
                        :
                            <p>Tidak ada berita.</p> 
                        }
                    </div>
                )
            } else if(index % 3 === 2) {
                return (
                    <div key={n.id} className="mb-5">
                        <h5 className="mb-3">{n.title}</h5>
                        {!isEmpty(n.sections[0].articles) ?
                            <CardList key={n.id} items={n.sections[0].articles} onBookmark={addBookmark} />
                        :
                            <p>Tidak ada berita.</p> 
                        }
                    </div>
                )
            }
        } else {
            return (
                <div key={n.id} className="mb-5">
                    <List key={n.id} items={n.sections[0].articles}/>
                </div>
            );
        }
        return <div></div>;
    });
    
    return (
        <div>
            <Header onClickCategories={onClickCategory} onBookmark={addBookmark} />
            <Container className="pt-5">
                {/* <Slider />
                <CardList />
                <List /> */}
                {list}
            </Container>
        </div>
    );
};
export default Home;