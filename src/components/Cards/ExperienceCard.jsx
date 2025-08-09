import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';



const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

 

const Span = styled.span`
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;

const Card = styled.div`
    width: 800px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    background-color: ${({ theme }) => theme.cardBackground};
    border: 0.1px solid ${({ theme }) => theme.border};
    transition: all 0.3s ease-in-out;
    &:hover {
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
        transform: translateY(-5px);
        background-color: ${({ theme }) => theme.cardHover};
    }
    @media only screen and (max-width: 768px) {
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    &:hover ${Document} {
        display: flex;
    }

    &:hover ${Span} {
        overflow: visible;
        -webkit-line-clamp: unset;
    }
`;

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
`;

const Image = styled.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px) {
        height: 40px;
    }
`;

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Role = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    @media only screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

const Company = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`;
const Duration = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const Employeetype = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    @media only screen and (max-width: 768px) {
        font-size: 10px;
    }
`;

const Section = styled.div`
    margin-top: 10px;
`;

const SectionTitle = styled.div`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.primary};
`;

const SectionItem = styled.div`
    margin-bottom: 5px;
    color: ${({ theme }) => theme.text_primary};
    line-height: 1.5;
`;

const StyledList = styled.ul`
    padding-left: 20px;
    list-style-type: disc;
    margin-bottom: 10px;

    li {
        margin-bottom: 5px;
        color: ${({ theme }) => theme.text_secondary};
    }
`;

const ExperienceCard = ({ experience }) => {
    const theme = useContext(ThemeContext);

    return (
        <Card theme={theme}>
            <Top>
                <Image src={experience.img} />
                <Body>
                    <Role theme={theme}>{experience.role}</Role>
                    <Company theme={theme}>{experience.company}</Company>
                    <Employeetype theme={theme}>{experience.emptype}</Employeetype>
                    <Duration theme={theme}>{experience.duration}</Duration>
                </Body>
            </Top>
            <Description theme={theme}>
                {experience?.desc && (
                    <Section>
                        <SectionTitle theme={theme}>Description</SectionTitle>
                        {experience.desc.map((item, index) => (
                            <SectionItem key={index} theme={theme}>{item}</SectionItem>
                        ))}
                    </Section>
                )}

                {experience?.keyProjects && (
                    <Section>
                        <SectionTitle theme={theme}>Key Projects</SectionTitle>
                        {experience.keyProjects.map((project, index) => (
                            <div key={index}>
                                <b>{project.name}</b>
                                <StyledList theme={theme}>
                                    {project.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </StyledList>
                            </div>
                        ))}
                    </Section>
                )}

                {experience?.skills?.technical && (
                    <Section>
                        <SectionTitle theme={theme}>Technical Skills</SectionTitle>
                        <SectionItem theme={theme}>{experience.skills.technical.join(', ')}</SectionItem>
                    </Section>
                )}

                {experience?.skills?.soft && (
                    <Section>
                        <SectionTitle theme={theme}>Soft Skills</SectionTitle>
                        <SectionItem theme={theme}>{experience.skills.soft.join(', ')}</SectionItem>
                    </Section>
                )}

                {experience?.achievements && (
                    <Section>
                        <SectionTitle theme={theme}>Achievements</SectionTitle>
                        <StyledList theme={theme}>
                            {experience.achievements.map((achievement, index) => (
                                <li key={index}>{achievement}</li>
                            ))}
                        </StyledList>
                    </Section>
                )}
            </Description>
            {experience.doc && (
                <a href={experience.doc} target="new">
                    <Document src={experience.doc} />
                </a>
            )}
        </Card>
    );
};

export default ExperienceCard;
