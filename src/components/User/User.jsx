import PropTypes from 'prop-types';
import { Address } from '../Address/Address';
import { Paragraf, Span } from './User.styled';

export const User = ({ user: { name, email, address: { street, city } } }) => {
    const isEnds = email.endsWith(".biz")
    return (
        <>
            <Paragraf>Name: <Span isYellow={isEnds}>{name}</Span></Paragraf>
            <Paragraf>Email: <Span>{email}</Span></Paragraf>
            <Address street={street} city={city} />
        </>
    )
}

User.propTypes = {
    user: PropTypes.shape ({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
    }).isRequired,
}