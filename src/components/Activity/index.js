import React, { Component, Fragment } from 'react';
import './Activity.css';

class Activity extends Component {
    constructor(props) {
        super(props);

        this.state = {
            followed: false,
        }

        this.onFollowClick = this.onFollowClick.bind(this);
    }
    render() {
        const data = this.props.data;
        return (
            <Fragment>
                <div className='activity'>
                    <img className='activity-profile-image' src={data.user_profile_image}>
                    </img>
                    <div className='activity-profile-detail'>
                        <div className='activity-header'>
                            <h2 className='activity-title'>
                                <a className='activity-username'>{data.user_nickname}</a>
                                <span> started following </span>
                                <a className='activity-username'>{data.target_nickname}</a>
                            </h2>
                            <span className='activity-time'>{data.followed_time} hours ago</span>
                        </div>
                        <div className='activity-contents-box'>
                            <img className='activity-target-profile-image' src={data.target_profile_image}>
                            </img>
                            <div className='activity-target-profile-detail'>
                                <div className='activity-target-profile-detail-up'>
                                    <a className='activity-target-username'>{data.target_name}</a>
                                    <a className='activity-target-nickname'>{data.target_nickname}</a>
                                </div>
                                <p className='activity-user-comments'>{data.target_comments}</p>
                                <div className='activity-target-info'>
                                    <a className='activity-target-repositories'>{data.target_repo_count} repositories</a>
                                    <a className='activity-target-followers'>{data.target_followers} followers</a>
                                </div>
                            </div>
                            <button className='activity-follow-button'
                                onClick={this.onFollowClick}>{this.state.followed ? 'unfollow' : 'follow'}</button>
                        </div>
                    </div>
                    <hr></hr>
                </div>
                <hr className='activity-hr' />
            </Fragment>
        );
    }
    onFollowClick() {
        this.setState({ followed: !this.state.followed });
    }
}
export default Activity;