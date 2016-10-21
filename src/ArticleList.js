import React from 'react';
import ArticleRow from './ArticleRow';

class ArticleList extends React.Component{

    render(){
            var article=this.props.list.map((item)=>{
               return(
                <ArticleRow key={item.id} {...item}
                starArticle={this.props.starArticle} upVoting={this.props.upVoting}
                />);
        });
        return(
            <div className="list-group">
                {article}
            </div>
        );
    }
}
export default ArticleList;