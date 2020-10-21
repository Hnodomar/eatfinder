import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
    componentDidUpdate() {
        const addresses = document.getElementsByClassName('Business-address');
        for (let item of addresses) {
            const lines = item.getElementsByClassName('addy');
            let query = ``;
            for (let anotheritem of lines) {
                query += `${anotheritem.textContent} `;
            }
            item.addEventListener("click", () => {
                window.open(`https://maps.google.com/?q=${query}`);
            });
        }
    }
    render() {
        return (
            <div className="BusinessList">
                {this.props.businesses.map(business => {
                    return <Business business={business} key={business.id} />;
                })}
            </div>
        );
    }
}

export default BusinessList;