import React from 'react';
import {
  Card,  
  CardImg, 
  CardTitle, 
  CardText, 
  CardDeck,
  CardBody,
  Row,
  Col,
  Button
} from 'reactstrap';
import '../styles/_cardlist.scss';
import iconBookmark from '../assets/img/bookmark.png';

const CardList = (props) => {
  const addBookmarks = (item) => {
    props.onBookmark(item);
  }

  const listItem = props.items.map((article, index) => {
    if(article.title) {
      const url = article.url ? article.url.url : "/";
      const img_url = "https://obs.line-scdn.net/" + article.thumbnail.hash;
      return (
        <Col key={index} className="pb-5 custom-card">
            <a href={url} target="_blank" rel="noreferrer">
              <Card>
                <div className="card-image-h">
                  <CardImg top width="100%" height="100%" src={img_url} alt="Card image cap" />
                </div>
                <CardBody>
                  <CardTitle tag="h5">{article.title}</CardTitle>
                  <CardText>{article.publisher}</CardText>
                </CardBody>
                <Button className="btn-bookmark" onClick={() => addBookmarks(article)}>
                      <img src={iconBookmark} width="20" alt="bookmarks" />
                </Button>
              </Card>
            </a>
        </Col>
      );
    }
    return <div key={index}></div>
  })

  return (
    <CardDeck>
      <Row xs="3" className="full-width">
        {listItem}
      </Row>
    </CardDeck>
  );
};

export default CardList;
