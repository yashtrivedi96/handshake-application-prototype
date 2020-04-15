import React from 'react';
import SearchBar from './SearchBar';
import CompanyMenu from './CompanyMenu';

const CompanyHeader = () => {
    return (
        <div>
            <SearchBar />
            <CompanyMenu />
        </div>
    );
}

export default CompanyHeader;