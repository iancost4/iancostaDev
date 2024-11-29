import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  event,
  href,
  hasCta = false,
}: {
  title: string
  description: string
  event: string
  href: string
  hasCta?: boolean
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      {hasCta ? <Card.Cta>Website</Card.Cta> : null}
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'My Professional Path: Past and Present',
  description:
    'Explore my career journey, from past experiences to my current role, and see how each step has contributed to my professional growth.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="My Professional Path: Past and Present"
      intro="Explore my career journey, from past experiences to my current role, and see how each step has contributed to my professional growth"
    >
      <div className="space-y-20">
        <SpeakingSection title="Zenklub">
          <Appearance
            href="https://zenklub.com.br/"
            title="Software Developer - Brazil"
            description="As a backend developer at Zenklub, my experience was marked by the deployment of new microservices using technologies such as Node.js, Jest, AWS (ECS, EC2, Lambda), RabbitMq, Kubernetes, serverless and continuous integration with GitLab CI. I was responsible for contributing to the implementation of these solutions, ensuring the scalability and reliability of the system. Working in an agile, collaborative environment focused on code quality."
            event="Sep 2021 - Present"
            hasCta={true}
          />
        </SpeakingSection>
        <SpeakingSection title="Sanar">
          <Appearance
            href="https://sanar.com.br/"
            title="Software Developer - Brazil"
            description="As a backend developer at Sanar, I had the opportunity to acquire a vast amount of knowledge while working on several of the company's products. My journey included the development of the backend of an application for questions, as well as the creation of a notification microservice for sending emails and WhatsApp in e-commerce. I was responsible for the implementation and maintenance of these microservices, using technologies such as Node.js, PHP, AWS (S3, SQS, ECS, EC2, API Gateway, etc.), GraphQL, Jest and continuous integration with GitLab CI. During my time at Sanar, I was able to contribute to the improvement of the platform, ensuring efficient and scalable solutions."
            event="Jan 2020 - Sep 2021"
            hasCta={true}
          />
        </SpeakingSection>
        <SpeakingSection title="eCglobal Solutions">
          <Appearance
              href="https://ecglobal.com/"
              title="Software Developer - Brazil"
              description=""
              event="May 2019 - Dec 2019"
              hasCta={true}
          />
        </SpeakingSection>
        <SpeakingSection title="SalvadorCard">
          <Appearance
              href="https://www.salvadorcard.com.br/"
              title="Software Developer - Brazil"
              description=""
              event="Mar 2017 - Feb 2018"
              hasCta={true}
          />
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
