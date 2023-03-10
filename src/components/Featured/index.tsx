import Link from "@docusaurus/Link";
import { Grid } from "@mui/material";
import {Card, CardContent, CardActionArea} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

type DocItem = {
    title: string,
    description: string,
    link: string
}

const DocItemList: DocItem[] = [
    {
        title: "Design Patterns",
        description: "Low-level design - how to create classes and stuff",
        link: "/notes/docs/design-patterns"
    },
    {
        title: "Data Structures and Algorithms",
        description: "Arrays, Trees, Graphs, Backtracking, DP, Greedy",
        link: "/notes/docs/dsa"
    },
    {
        title: "React State Management",
        description: "React hooks and stuff, very nice to know",
        link: "/notes/docs/react"
    },
    {
        title: "Docker and Kubernetes",
        description: "Good stuff of DevOps",
        link: "/notes/docs/docker-kubernetes"
    },
    {
        title: "Psychology of Money",
        description: "How do you behave with money?",
        link: "/notes/docs/condensed-books/psychology-of-money"
    },
    {
        title: "Designing Data Intensive Applications",
        description: "Epic notes from DDIA book",
        link: "/notes/docs/condensed-books/designing-data-intensive-applications"
    },
];

const CustomCard = ({title, description, link} : {title: string; description: string, link: string}) => (
    <Card sx={{
        height: '100%',
        cursor: 'default',
        backgroundColor: 'var(--ifm-color-primary-darker)',
        color: 'var(--ifm-color-font-light)',
        '&: hover': {
            color: 'var(--ifm-color-primary-lightest)',
            boxShadow: '0 0 10px var(--ifm-color-primary-lightest)',
        }
    }}
    onClick={() => window.open(link)}
    >
        
        <CardContent>
            <h3>{title}</h3>
            <p>{description}</p>
        </CardContent>
    </Card>
);



export default function Featured(): JSX.Element {
    return (
        <div style={{
            height: '100%',
            paddingBlock: '100px',
            background: 'linear-gradient(var(--docusaurus-highlighted-code-line-bg), var(--ifm-color-primary-darkest))',
        }}>
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            justifyContent: 'center',
            height: '100%',
            paddingBottom: '100px'
        }}>
            <h1 style={{
                fontSize: '7vw',
                marginBlock: '100px'
            }}>
            featured
            </h1>
            <Grid container spacing={3}>
                {DocItemList.map((props, idx) => (
                    <Grid item xs={12} md={6} key={idx}>
                        <CustomCard title={props.title} description={props.description} link={props.link} />
                    </Grid>
                ))}
            </Grid>
        </Container>
        </div>
    );
}

