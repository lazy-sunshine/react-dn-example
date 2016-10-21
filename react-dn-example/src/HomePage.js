import React from 'react';
import articles from './data/data.js'
import ArticleList from './ArticleList';
class HomePage extends React.Component{

    constructor(props){
        super(props);
        this.filterUpVotes=this.filterUpVotes.bind(this);
        this.starredArticle=this.starredArticle.bind(this);
        this.filterStar=this.filterStar.bind(this);
        this.upVoting=this.upVoting.bind(this);
        this.state={
            articles:articles,
            totalArticle:articles
        }
    }

    filterUpVotes(){
             var articles = this.state.totalArticle.slice(0).map(product => Object.assign({}, product));
            var a=articles.sort((a,b)=>(b.upvote-a.upvote));
             this.setState({
                 articles:a
             })
    }

    starredArticle(id){
        var articles = this.state.articles.slice(0).map(product => Object.assign({}, product));
           var articleToStar=articles.find(article=>article.id===id);
           articleToStar.isAStar=true;
           console.log('Thank you for the star');
             this.setState({
                 articles:articles,
             })
    }

    filterStar(){
         var articles = this.state.articles.slice(0).map(product => Object.assign({}, product));
               var filter=articles.filter((a)=>a.isAStar);
             this.setState({
                 articles:filter
             }) 

    }

    upVoting(id){
         var articles = this.state.articles;
        var articleToVote=articles.find(article => article.id===id);
          var indexToDelete=articles.indexOf(articleToVote);
           articleToVote.upvote +=1;
        articles.splice(indexToDelete, 1, articleToVote)
        this.setState({
                 articles
             }) 
             this.filterUpVotes();
     }

   
    render(){
        return(
        <div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">{this.props.title}</a>
                </div>
                <ul className="nav navbar-nav">
                    <li><a href="#" onClick={this.filterUpVotes}>{this.props.menubar[0]}</a></li>
                    <li><a href="#" onClick={this.filterStar}>{this.props.menubar[1]}</a></li> 
                </ul>
                </div>
            </nav>

            <ArticleList list={this.state.articles} upVoting={this.upVoting}
            starArticle={this.starredArticle}/>
        </div>
        );
    }
}

export default HomePage;