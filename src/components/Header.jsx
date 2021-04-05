import React, { useState, useEffect } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarText,
    Container,
    Button
} from 'reactstrap';
import { useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import { Link } from 'react-router-dom';
import '../styles/_header.scss';
import iconBookmark from '../assets/img/bookmark-white.png';

const Header = (props) => {
    const [categories, setCategories] = useState([]);
    const [id, setId] = useState("");

    const data = useSelector(state => state.news.data.categoryList);

    useEffect(() => {
        if (data) {
            setCategories(data);
        }
    }, [data]);

    useEffect(() => {
        if(!isEmpty(categories)) {
            if(!id) {
                setId(categories[0].id);
                props.onClickCategories(categories[0].id);
            }
        }
    }, [categories, props, id]);

    const onClickCategory = (id) => {
        setId(id);
        props.onClickCategories(id);
    }

    const item = categories.map(category => {
        const active = category.id === id ? true : false;
        return (
            <NavItem key={category.id}>
                <Button className="btn-custom" onClick={() => onClickCategory(category.id)} active={active}>{category.name}</Button>
            </NavItem>
        );
    });

    return (
        <div>
            <Navbar color="light" light expand="md">
                <Container>
                    <NavbarBrand href="/">
                        <h2>NEWS</h2>
                    </NavbarBrand>
                    <NavbarText>
                        <Button className="btn-bookmark-h">
                            <Link to="/bookmarks">
                                <img src={iconBookmark} width="20" alt="bookmarks" />
                            </Link>
                        </Button>
                    </NavbarText>
                </Container>
            </Navbar>
            <Navbar className="sticky-top horizontal-scroll" color="light" light expand="md">
                <Container>
                    <Nav className="mr-auto" navbar>
                        {item}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;