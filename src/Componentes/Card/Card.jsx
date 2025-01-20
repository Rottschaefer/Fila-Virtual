import { Content, StyledCard, Title } from "./StyledCard";

export const Card = ({ title, content }) => (
    <StyledCard>
        <Title>{title}</Title>
        <Content>{content}</Content>
    </StyledCard>
);
