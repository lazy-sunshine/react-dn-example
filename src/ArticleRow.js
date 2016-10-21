import React from 'react';
import UpVote from './UpVote';
import Starred from './Starred';

class ArticleRow extends React.Component{
    render(){
        return(
         <div className="list-group-item list-group-item-action" id="row">
            <UpVote upvote={this.props.upvote} id={this.props.id}  upVoting={this.props.upVoting}/>
            <h3 className="list-group-item-heading">{this.props.desc}</h3>
            <Starred id={this.props.id} starArticle={this.props.starArticle}/>
            <p  id="author-desc" className="list-group-item-text">
                <span>{this.props.comment}</span>comments
            <span>{this.props.time}</span>hours ago from<span> {this.props.image}</span>
            </p>
        </div>
        )
    }
}

export default ArticleRow;