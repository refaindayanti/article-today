import React, { useEffect, useState } from 'react';
import { 
    Container,
    Navbar,
    NavbarBrand
} from 'reactstrap';
import List from '../components/List';

const Bookmarks = () => {
    const [bookmarks, setBookmarks] = useState([]);

    const localdata = JSON.parse(localStorage.getItem('bookmarks'));
    useEffect(() => {
        if(localdata) {
            setBookmarks(localdata);
        }
    }, [localdata]);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <Container>
                    <NavbarBrand href="/">
                        <h2>NEWS</h2>
                    </NavbarBrand>
                </Container>
            </Navbar>
            <Container>
                <List items={bookmarks} />
            </Container>
        </div>
    );
};

export default Bookmarks;