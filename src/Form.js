
import React, { Component } from 'react';
import request  from 'superagent';
export default class Form extends Component {
  state = {
    acc1:'mecookiemonster',
    acc2:'realdonaldtrump',
    tweet:'',
    link:''
  }

  formHandler = (e) => {
    e.preventDefault();
    
    const url = `https://immense-ocean-71778.herokuapp.com/mashup?acc1=${this.state.acc1}&acc2=${this.state.acc2}`;
    
    request.post(url, (err, res) => {
      if(err) console.log(err);
      else {
        const tweetArray = res.text.slice(1, -1).split(' ');
        const link = tweetArray[tweetArray.length-1].startsWith('http') && tweetArray.splice(-1);
        const tweet = tweetArray.join(' ');
        this.setState({tweet, link})  
      }

    });
  }

  render() {
    return (
      <form onSubmit={this.formHandler}>
        <label>Account 1
          <input value={this.state.acc1} onChange = {e => this.setState({ acc1: e.target.value })}/>
        </label>
        <label>Account 2
          <input value={this.state.acc2} onChange={e => this.setState({ acc2: e.target.value })}/>
        </label>
        <button type="submit" >Mash this button!</button>
        <p>{this.state.tweet}</p>
        {
            this.state.link && <a href={this.state.link}>{this.state.link}</a>
        }
      </form>

    );
  }
}


