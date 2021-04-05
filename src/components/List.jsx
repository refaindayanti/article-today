import React from 'react';
import { 
  ListGroup, 
  ListGroupItem, 
  ListGroupItemHeading, 
  ListGroupItemText, 
  Row, 
  Col,
  Alert,
  Button
} from 'reactstrap';
import '../styles/_list.scss';
import iconBookmark from '../assets/img/bookmark-black.png';

const List = (props) => {

  const addBookmarks = (item) => {
    props.onBookmark(item);
  }

  const listItem = props.items.map((article, index) => {
    if(article.source !== "AD") {
      if(article.title) {
        const url = article.url ? article.url.url : "/";
        const img_url = "https://obs.line-scdn.net/" + article.thumbnail.hash;
        return (
          <ListGroupItem key={index} className="custom-list">
            <a href={url} target="_blank" rel="noreferrer">
              <Row>
                <Col xs="1" className="pr-0">
                  <div className="list-image-h">
                    <img src={img_url} width="100%" height="100%" className="rounded float-left" alt="news"/>
                  </div>
                </Col>
                <Col xs="11">
                  <ListGroupItemHeading>{article.title}</ListGroupItemHeading>
                  <ListGroupItemText>{article.publisher}</ListGroupItemText>
                </Col>
              </Row>
            </a>
            <Button className="btn-bookmark" onClick={() => addBookmarks(article)}>
              <img src={iconBookmark} width="20" alt="bookmarks" />
            </Button>
          </ListGroupItem>
        );
      }
    } else {
      return (
        <Alert key={index} color="light">
          {article.source}
        </Alert>
      );
    }
    return <div key={index}></div>
  });

  return (
    <ListGroup>
      {listItem}
    </ListGroup>
  );
}

export default List;