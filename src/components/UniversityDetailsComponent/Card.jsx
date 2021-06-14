import React from 'react';
import './styles.css';

const Card = (props) => {
     const { name, country } = props;
    return (
    <div className="card">
        <h4>{name}</h4>
        <div className="details">
           <div>Country: <span>{country}</span></div> 
            <div>State: <span>{props['state-province'] || 'NA'}</span></div> 
            <div>Alpha Two Code: <span>{props['alpha_two_code']}</span></div> 
            <div>Web Pages: <span>{props['web_pages'].map(link => <a key={link} rel="noreferrer" href={ link} target="_blank"> {link}</a>)}</span></div> 
            <div>Domains: <span>{props['domains'].map(link => <span key={link}>{link}</span>)}</span></div> 
        </div>
    </div>
)
}
export default Card;
