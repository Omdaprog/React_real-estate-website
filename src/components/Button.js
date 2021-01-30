import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
    background: ${({ primary }) => (primary ? '#0001a' : 'CDB53F')};
`;