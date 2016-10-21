import React from 'react';

class UpVote extends React.Component{
     constructor(props){
    super(props);
    localStorage.setItem("counter", this.props.upvote);
    this.upDateVotes = this.upDateVotes.bind(this);
  }
    upDateVotes(){
    this.props.upVoting(this.props.id);
}

    render(){
         return(
             <button id="upvote" onClick={this.upDateVotes}>
             <svg className="upvote-up-arrow" height="7" id="svg-up-arrow" version="1.1" viewBox="0 0 11 7" width="11">
                    <path d="m.202 5.715c-.367.417-.217.755.329.755h9.438c.549 0 .702-.33.338-.742l-4.41-4.985c-.363-.41-.947-.412-1.322.013l-4.373 4.96"></path>
             </svg>
             <span className="story-upvote-button-number unvoted-number">{this.props.upvote}</span>
       </button>
        );
    }
}

export default UpVote;