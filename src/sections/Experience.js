import React from "react"
import styled from "styled-components"
import Section from "../components/Section"
import HistoricalListItem from "../components/HistoricalListItem"

const MostRecent = styled.div`
  border-bottom: 0.1em solid #ddd;
  padding-bottom: 1em;

  @media print {
    break-after: auto;
    border-bottom: none;
    padding-bottom: 0;
  }
`

const Rest = styled.div`
  padding-top: 30px;
`

export default function Experience() {
  return (
    <Section title="Work Experience" description="Where I've worked">
      <MostRecent>
        <HistoricalListItem
          title="Engineering Manager"
          location="Preqin, London"
          dates="April 2023 - Present"
        >
          <p>
            Hired to build and manage 4 cross funcional product focused pods for
            the Service Providers Business Unit. Setting interview strategy and
            team processes. Participating in discovery and ensuring engineering
            has full context, and overseeing the delivery of features.
            Additionally, I took it upon myself to improve cross business unit
            collaboration and communication introducing Guilds, Demos and
            Hangouts for all engineers to share and sync.
          </p>
        </HistoricalListItem>
        <HistoricalListItem
          title="Software Engineer & Advisor (Contracting)"
          location="Remote & London"
          dates="December 2023 - March 2023"
        >
          <p>
            Advising startups on setting the right foundations for web sites and
            applications with a focus on frontend architecture, backend for
            frontends and automated testing. Auditing their code and putting
            forward proposals for improving. Frontend engineering to put the
            right foundations in place and re-work existing features to be
            performant.
          </p>
        </HistoricalListItem>
        <HistoricalListItem
          additionalRole
          title="Engineering Manager"
          dates="April 2021 - November 2023"
        />
        <HistoricalListItem
          title="Senior Frontend Engineer / Technical Lead"
          location="OakNorth, London"
          dates="September 2019 - April 2021"
        >
          <p>
            As the first Frontend Engineer to join this SaaS FinTech startup I
            set the architecture vision, ways of working and grew the team.
            Highlights include:
          </p>
          <ul>
            <li>
              grew frontend engineering to 12 engineers distributed across
              multiple squads and managed the frontend guild coordinating the
              implementation and delivery of shared architectural initiatives
            </li>
            <li>
              manged up to 4 cross functional product squads
              (React/Typescript/Python) ensuring they were balanced to undertake
              the assigned discovery, delivery and support work
            </li>
            <li>
              line managed 12+ engineers distributed across different teams
              ensuring their wellbeing, job satisfaction and growth
            </li>
            <li>
              designed the frontend architecture and built initial working
              prototypes, setting up appropriate tooling and processes ensuring
              high code confidence for continuous deployment via adequate
              testing, feature flags, alerting and monitoring
            </li>
            <li>
              did the initial reskin of the whole application for a consistent
              look and feel and ensured the different workflows were sharing the
              same components
            </li>
          </ul>
        </HistoricalListItem>
        <br />
        <br />
        <br />
        <br />
        <HistoricalListItem
          title="Senior Software Developer"
          location="NET-A-PORTER, London"
          dates="May 2017 - September 2019"
        >
          <p>
            Team lead and javascript/node full stack engineer. Highlights
            include:
          </p>
          <ul>
            <li>
              led the development of the greenfield project Porter Digital (team
              of 6 engineers) using NextJS
            </li>
            <li>
              ran a cross team steering group to improve coding/testing
              standards and code sharing, this resulted in improved productivity
              for the content department (4 teams)
            </li>
            <li>ran a code club to help upskill engineers with focus on TDD</li>
          </ul>
        </HistoricalListItem>
        <HistoricalListItem
          title="Lead Web Developer"
          location="Student.com, London"
          dates="December 2014 - January 2017"
        >
          <p>
            I was the second developer to join this incredibly fast paced
            startup and witnessed it grow from a small room of people to over
            150 employees. I was a key contributor to the stack and evolution of
            the product. As we grew I earnt the role of Lead Developer of the
            web team (up to 13 developers) focused on the student experience.
            Content and mobile first full stack fun, ensuring test driven
            reusable code in both PHP (Symfony2) and Javascript
            (ES6/Redux/React) technologies, as well as accessible HTML, living
            style guides (Sass/Sussy) and performance optimisation.
          </p>
        </HistoricalListItem>
      </MostRecent>
      <Rest>
        <HistoricalListItem
          title="Software Engineer II"
          location="Indra Software Labs, A Coruña (Spain)"
          dates="June 2011 - October 2014"
        >
          <p>
            Responsible for various stages of the software life cycle of
            corporate desktop application and web portal development. Worked on
            the desktop application for Gas Natural operations management and
            then became a core member of the Vodafone Spain online store
            project, helping to lead the front-end development. Full stack
            development with Java, Spring MVC, Oracle SQL, JSP, HTML, CSS and
            Javascript.
          </p>
        </HistoricalListItem>
        <HistoricalListItem
          title="Web Developer"
          location="Cambur, A Coruña (Spain)"
          dates="July 2010 - November 2011"
        >
          <p>
            Hired as project lead of a newly formed web development company with
            a queue of clientele expecting websites. I was responsible for
            establishing an organised method of work for the team, setting up a
            library of reusable code, and developing an in-house content and
            commerce management system. Full stack LAMP development with PHP,
            MySQL, HTML, CSS and Javascript.
          </p>
        </HistoricalListItem>
        <HistoricalListItem
          title="Web Developer"
          location="Wide Area Communications, London"
          dates="February 2008 - February 2010"
        >
          <p>
            Providing content, community and commerce solutions. Hired as part
            of a team designing and developing a one stop generic and secure
            basket/checkout and subscription module, for the existing wide area
            management system, meeting the requirements of several clients
            wanting e-commerce solutions
          </p>
        </HistoricalListItem>
        <HistoricalListItem
          title="Web Developer"
          location="MoneySavingExpert.com, London"
          dates="June 2006 - February 2008"
        >
          <p>
            Part of a four man team responsible for the development, maintenance
            and optimisation of the moneysavingexpert.com website, forums and
            tools, ensuring the best user experience possible for the circa 4.5
            million unique monthly visitors
          </p>
        </HistoricalListItem>
      </Rest>
    </Section>
  )
}
